// 使用IIFE避免全局变量污染
(function() {
// --- DOM Elements ---
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const questionTypeBadgeEl = document.getElementById('question-type-badge');
const questionCounterEl = document.getElementById('question-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
// const timerEl = document.getElementById('timer'); // REMOVED
const answerGridEl = document.getElementById('answer-grid');
const answerCardHeaderEl = document.getElementById('answer-card-header');
const answerPaginationEl = document.getElementById('answer-pagination');
const scoreCardEl = document.getElementById('score-card');
const scoreDisplayEl = document.getElementById('score-display');
const incorrectQuestionsListEl = document.getElementById('incorrect-questions-list');
const restartBtn = document.getElementById('restart-btn');
const examContainerEl = document.querySelector('.exam-container');
// *** NEW: Settings Elements ***
const settingsCardEl = document.getElementById('settings-card');
const numBooleanInput = document.getElementById('num-boolean');
const numSingleInput = document.getElementById('num-single');
const numMultipleInput = document.getElementById('num-multiple');
const regenerateBtn = document.getElementById('regenerate-btn');
const settingsInputs = [numBooleanInput, numSingleInput, numMultipleInput];
// *** 练习模式元素 ***
const practiceModeToggle = document.getElementById('practice-mode-toggle');

// --- Configuration (Can be adjusted) ---
const ANSWER_BTN_EFFECTIVE_WIDTH = 48;
const ANSWER_BTN_DESIRED_ROWS = 4;
const BASE_SECONDS_PER_QUESTION = 30; // e.g., 1.5 minutes per question

// --- State Variables ---
let currentQuestionIndex = 0;
let userAnswers = [];
let shuffledOptionsMap = new Map();
let timeLeft = 0; // Will be calculated based on question count
let timerInterval;
let examSubmitted = false;
let examStarted = false; // *** NEW: Track if user has started answering ***
let examResults = null;
let answerCardCurrentPage = 1;
let sortedQuestions = [];
let questionsPerPage = 20;
let resizeTimeout;
let currentSubmitText = "交 卷"; // Store the base text for the submit button
let isPracticeMode = false; // 练习模式状态
let questionAnswerChecked = false; // 重置答案检查状态

// --- Helper Functions ---
// shuffleArray, formatTime (keep existing)
// sortQuestions: No longer needed initially, will sort generated list
// debounce, calculateQuestionsPerPage, handleResize (keep existing)
/**
 * Shuffles array in place using Fisher-Yates.
 */
function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
/**
 * Formats seconds into HH:MM:SS or MM:SS.
 */
function formatTime(totalSeconds) {
    // ... (implementation unchanged)
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const paddedSeconds = seconds.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    if (hours > 0) {
        const paddedHours = hours.toString().padStart(2, '0');
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    } else {
        return `${paddedMinutes}:${paddedSeconds}`;
    }
}
/** Simple debounce function */
function debounce(func, wait) { /*...(implementation unchanged)...*/
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
 }
/** Calculates how many question buttons fit per page based on width */
function calculateQuestionsPerPage() { /*...(implementation unchanged)...*/
    if (!answerGridEl || answerGridEl.clientWidth <= 0) {
        return questionsPerPage;
    }
    const containerWidth = answerGridEl.clientWidth;
    const numberOfColumns = Math.max(1, Math.floor(containerWidth / ANSWER_BTN_EFFECTIVE_WIDTH));
    const newQuestionsPerPage = Math.max(numberOfColumns, numberOfColumns * ANSWER_BTN_DESIRED_ROWS);
    return newQuestionsPerPage;
 }
/** Handles window resize events (debounced) */
const handleResize = debounce(() => { /*...(implementation unchanged)...*/
    const oldQuestionsPerPage = questionsPerPage;
    questionsPerPage = calculateQuestionsPerPage();
    if (oldQuestionsPerPage !== questionsPerPage && sortedQuestions.length > 0) { // Only if questions are loaded
        // console.log(`Resized: questionsPerPage changed from ${oldQuestionsPerPage} to ${questionsPerPage}`);
        answerCardCurrentPage = Math.floor(currentQuestionIndex / questionsPerPage) + 1;
        buildAnswerCard();
    }
 }, 250);


// --- *** NEW: Question Generation *** ---
/**
 * Generates the list of questions for the exam based on input counts.
 * Updates sortedQuestions, resets state, and refreshes UI.
 */
function generateExamQuestions() {
    //console.log("Generating questions based on settings...");
    if (examStarted) {
        //console.warn("Cannot regenerate questions after exam has started.");
        return; // Don't allow regeneration if exam is in progress
    }

    const counts = {
        boolean: parseInt(numBooleanInput.value) || 0,
        single: parseInt(numSingleInput.value) || 0,
        multiple: parseInt(numMultipleInput.value) || 0,
    };

    let selectedQuestions = [];

    // Filter and sample questions for each type
    for (const type in counts) {
        if (counts[type] > 0) {
            const availableOfType = questions.filter(q => q.type === type);
            const countToTake = Math.min(counts[type], availableOfType.length); // Take max available
            if (counts[type] > availableOfType.length) {
                //console.warn(`Requested ${counts[type]} ${type} questions, but only ${availableOfType.length} are available.`);
            }
            // Shuffle and pick the required number
            const sampled = shuffleArray([...availableOfType]).slice(0, countToTake);
            selectedQuestions = selectedQuestions.concat(sampled);
        }
    }

    // Sort the final list: boolean -> single -> multiple
    const typeOrder = { 'boolean': 1, 'single': 2, 'multiple': 3 };
    sortedQuestions = selectedQuestions.sort((a, b) => {
        return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
    });

    // --- Reset Exam State ---
    currentQuestionIndex = 0;
    userAnswers = new Array(sortedQuestions.length).fill(null);
    shuffledOptionsMap.clear();
    examSubmitted = false;
    examStarted = false; // Ensure examStarted is false before first interaction
    examResults = null;
    answerCardCurrentPage = 1;
    if (timerInterval) clearInterval(timerInterval); // Stop any previous timer

    // --- Calculate Dynamic Time Limit ---
    timeLeft = sortedQuestions.length * BASE_SECONDS_PER_QUESTION;
    //console.log(`Generated ${sortedQuestions.length} questions. Time limit: ${formatTime(timeLeft)}`);

    // --- Update UI ---
    if (sortedQuestions.length > 0) {
        questionsPerPage = calculateQuestionsPerPage(); // Recalculate based on potential container size changes
        buildAnswerCard();
        loadQuestion(0); // Load the first question
        submitBtn.disabled = false; // Ensure submit button is enabled
        updateSubmitButtonText(); // Update button text (will show time when started)
        setSettingsInputsDisabled(false); // Ensure inputs are enabled before start
        examContainerEl.classList.remove('submitted', 'review-mode'); // Reset modes

        // 重置练习模式显示
        if (isPracticeMode) {
            examContainerEl.classList.add('practice-mode');
        } else {
            examContainerEl.classList.remove('practice-mode');
        }

        // 确保答题卡和设置卡片显示，结果卡片隐藏
        const answerCardEl = document.getElementById('answer-card');
        answerCardEl.style.display = 'block';
        settingsCardEl.style.display = 'block';
        scoreCardEl.style.display = 'none';
        restartBtn.style.display = 'none';

    } else {
        // Handle case with 0 questions selected
        questionTextEl.textContent = "请在试题设置中选择题目数量并点击应用设置。";
        optionsContainerEl.innerHTML = '';
        questionCounterEl.textContent = "第 0 / 0 题";
        questionTypeBadgeEl.textContent = "-";
        answerGridEl.innerHTML = '';
        answerPaginationEl.innerHTML = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;
        submitBtn.textContent = '请先选题目';
         setSettingsInputsDisabled(false);
    }
}

// --- *** NEW: Helper to Update Submit Button Text *** ---
/** Updates the text content of the submit button, including the timer if running */
function updateSubmitButtonText(baseText = null) {
    if (examSubmitted) {
        submitBtn.textContent = '考试结束';
        return;
    }
    if (baseText) {
         currentSubmitText = baseText; // Update the base text if provided
    }

    let text = currentSubmitText;
    if (examStarted && timeLeft >= 0) {
        text += ` (${formatTime(timeLeft)})`;
    }
    submitBtn.textContent = text;
}


// --- Core Exam Functions ---

// buildAnswerCard, updateSingleAnswerButton, updateAnswerCardUI (keep existing logic using dynamic questionsPerPage)
/** Builds the current page of the answer grid and pagination controls */
function buildAnswerCard() { /*...(implementation unchanged, uses questionsPerPage)...*/
    answerGridEl.innerHTML = '';
    answerPaginationEl.innerHTML = '';
    const totalQuestions = sortedQuestions.length;
    if (totalQuestions === 0) {
        answerCardHeaderEl.textContent = '答题卡';
        return; // No card to build if no questions
    }
     const totalPages = Math.ceil(totalQuestions / questionsPerPage);
     answerCardCurrentPage = Math.max(1, Math.min(answerCardCurrentPage, totalPages));
     answerCardHeaderEl.textContent = `答题卡 (${totalQuestions} 题)`;
     const startIndex = (answerCardCurrentPage - 1) * questionsPerPage;
     const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
     for (let i = startIndex; i < endIndex; i++) { /* ... render buttons ... */
        const btn = document.createElement('button');
        btn.classList.add('answer-grid-btn');
        btn.textContent = i + 1;
        btn.dataset.index = i;
        updateSingleAnswerButton(btn, i);
        btn.onclick = () => { goToQuestion(i); };
        answerGridEl.appendChild(btn);
     }
     // Render Pagination Controls if totalPages > 1...
     if (totalPages > 1) {
         /* ... pagination logic unchanged ... */
        // Prev Button
        const prevPageBtn = document.createElement('button');
        prevPageBtn.classList.add('pagination-btn');
        prevPageBtn.textContent = '‹';
        prevPageBtn.disabled = answerCardCurrentPage === 1;
        prevPageBtn.onclick = () => {
            if (answerCardCurrentPage > 1) { answerCardCurrentPage--; buildAnswerCard(); } };
        answerPaginationEl.appendChild(prevPageBtn);
        // Page Number Buttons ...
        const maxPageButtons = 5; let startPage = Math.max(1, answerCardCurrentPage - Math.floor(maxPageButtons / 2)); let endPage = Math.min(totalPages, startPage + maxPageButtons - 1); startPage = Math.max(1, endPage - maxPageButtons + 1);
        if (startPage > 1) { const firstPageBtn = document.createElement('button'); firstPageBtn.classList.add('pagination-btn'); firstPageBtn.textContent = '1'; firstPageBtn.onclick = () => { answerCardCurrentPage = 1; buildAnswerCard(); }; answerPaginationEl.appendChild(firstPageBtn); if (startPage > 2) { const ellipsis = document.createElement('span'); ellipsis.textContent = '...'; ellipsis.style.padding = '0 5px'; answerPaginationEl.appendChild(ellipsis); } }
        for (let page = startPage; page <= endPage; page++) { const pageBtn = document.createElement('button'); pageBtn.classList.add('pagination-btn'); pageBtn.textContent = page; if (page === answerCardCurrentPage) { pageBtn.classList.add('active'); } else { pageBtn.onclick = () => { answerCardCurrentPage = page; buildAnswerCard(); }; } answerPaginationEl.appendChild(pageBtn); }
        if (endPage < totalPages) { if (endPage < totalPages - 1) { const ellipsis = document.createElement('span'); ellipsis.textContent = '...'; ellipsis.style.padding = '0 5px'; answerPaginationEl.appendChild(ellipsis); } const lastPageBtn = document.createElement('button'); lastPageBtn.classList.add('pagination-btn'); lastPageBtn.textContent = totalPages; lastPageBtn.onclick = () => { answerCardCurrentPage = totalPages; buildAnswerCard(); }; answerPaginationEl.appendChild(lastPageBtn); }
        // Next Button
        const nextPageBtn = document.createElement('button');
        nextPageBtn.classList.add('pagination-btn');
        nextPageBtn.textContent = '›';
        nextPageBtn.disabled = answerCardCurrentPage === totalPages;
        nextPageBtn.onclick = () => { if (answerCardCurrentPage < totalPages) { answerCardCurrentPage++; buildAnswerCard(); } };
        answerPaginationEl.appendChild(nextPageBtn);
     }
}
/**
 * 更新单个答题卡按钮的状态
 */
function updateSingleAnswerButton(buttonElement, index) {
    // 移除所有现有的类
    buttonElement.classList.remove('answered', 'current', 'feedback-correct', 'feedback-incorrect');

    // 添加当前题目标识
    if (index === currentQuestionIndex) {
        buttonElement.classList.add('current');
    }

    // 添加已答题标识
    if (userAnswers[index]) {
        buttonElement.classList.add('answered');
    }

    // 添加结果反馈（如果已提交考试）
    if (examSubmitted && examResults && examResults.feedback) {
        const result = examResults.feedback.find(item => item.index === index);
        if (result && result.correct) {
            buttonElement.classList.add('feedback-correct');
        } else if (result && !result.correct) {
            buttonElement.classList.add('feedback-incorrect');
        }
    }
}
/**
 * 更新整个答题卡的状态
 */
function updateAnswerCardUI() {
    const buttons = answerGridEl.querySelectorAll('.answer-grid-btn');
    buttons.forEach(btn => {
        const index = parseInt(btn.dataset.index);
        updateSingleAnswerButton(btn, index);
    });
}

/** Loads and displays a specific question - MODIFIED */
function loadQuestion(index) {
    if (!sortedQuestions || sortedQuestions.length === 0 || index < 0 || index >= sortedQuestions.length) {
        //console.warn(`Load question called with invalid index ${index} or no questions.`);
        return;
    }

    currentQuestionIndex = index;
    const isLastQuestion = index === sortedQuestions.length - 1;
    const question = sortedQuestions[index];

    // --- Question Info (Unchanged) ---
    questionTextEl.textContent = `${index + 1}. ${question.question} (${question.points}分)`;
    questionCounterEl.textContent = `第 ${index + 1} / ${sortedQuestions.length} 题`;
    questionTypeBadgeEl.textContent = getQuestionTypeName(question.type);
    questionTypeBadgeEl.className = `badge ${question.type}`;

    // --- Options (Unchanged logic, added empty check) ---
    optionsContainerEl.innerHTML = '';
    optionsContainerEl.style.animation = 'none'; // Reset animation
    void optionsContainerEl.offsetWidth; // Trigger reflow
    optionsContainerEl.style.animation = 'slideInUp 0.4s ease-out';
    let currentOptions = shuffledOptionsMap.get(index);
    if (!currentOptions) {
        currentOptions = shuffleArray([...question.options]);
        shuffledOptionsMap.set(index, currentOptions);
    }
    currentOptions.forEach((optionText, i) => { // 添加索引参数i
        const label = document.createElement('label');
        label.classList.add('option');
        const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
        const inputName = `question_${index}`;
        const input = document.createElement('input');
        input.type = inputType;
        input.name = inputName;
        input.value = optionText;
        const currentAnswer = userAnswers[index];

        // 添加字母前缀
        const optionLetter = String.fromCharCode(65 + i); // A=65, B=66, etc.
        const displayText = `${optionLetter}. ${optionText}`;

        if (question.type === 'multiple') {
            if (Array.isArray(currentAnswer) && currentAnswer.includes(optionText)) {
                input.checked = true;
                if (!examSubmitted) label.classList.add('selected');
            }
        }
        else {
            if (currentAnswer === optionText) {
                input.checked = true;
                if (!examSubmitted) label.classList.add('selected');
            }
        }
        if (!examSubmitted) {
            input.onchange = (e) => handleOptionSelect(e.target, index);
        } else {
            input.disabled = true;
        }
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + displayText)); // 使用带字母的显示文本
        optionsContainerEl.appendChild(label);
    });

    // --- Navigation Buttons (Modified for practice mode) ---
    prevBtn.disabled = index === 0;

    // 重置下一题按钮状态
    nextBtn.disabled = isLastQuestion && !isPracticeMode;
    questionAnswerChecked = false; // 重置答案检查状态

    // 设置下一题按钮文本
    if (isPracticeMode) {
        if (isLastQuestion) {
            nextBtn.textContent = '确认答案并完成';
        } else {
            nextBtn.textContent = '确认答案';
        }
        nextBtn.classList.remove('btn-success');
        nextBtn.classList.add('btn-primary');
    } else {
        nextBtn.textContent = '下一题 >';
        nextBtn.classList.remove('btn-success');
        nextBtn.classList.add('btn-primary');
    }

    // --- Submit Button Text --- MODIFIED
    let baseSubmitText = "交 卷"; // Default base text
    submitBtn.classList.remove('btn-primary'); // Ensure not blue by default
    submitBtn.classList.add('btn-danger'); // Default red

    if (isLastQuestion && !examSubmitted && !isPracticeMode) {
        nextBtn.textContent = '已是最后一题';
        baseSubmitText = "提 交 答 卷"; // Change base text for submit prompt
        submitBtn.classList.remove('btn-danger');
        submitBtn.classList.add('btn-primary'); // Make it blue
    }
    // Always update the button text including timer if running
    updateSubmitButtonText(baseSubmitText);

    // --- Review/Submit State (Unchanged logic) ---
    if (examSubmitted) {
         showFeedbackOnOptions();
         examContainerEl.classList.add('review-mode');
    } else {
        examContainerEl.classList.remove('review-mode');

        // 移除之前的练习模式答案反馈
        if (isPracticeMode) {
            clearPracticeFeedback();
        }
    }

    // --- Update Answer Card (Unchanged logic) ---
    const pageToGo = Math.floor(index / questionsPerPage) + 1;
    if (pageToGo !== answerCardCurrentPage) {
        answerCardCurrentPage = pageToGo;
        buildAnswerCard();
    } else {
        updateAnswerCardUI();
    }
}

// getQuestionTypeName (keep existing)
function getQuestionTypeName(type) { /*...(implementation unchanged)...*/
    switch (type) { case 'single': return '单选题'; case 'multiple': return '多选题'; case 'boolean': return '判断题'; default: return '未知'; }
}

// *** NEW: Helper to enable/disable settings inputs ***
function setSettingsInputsDisabled(disabled) {
    settingsInputs.forEach(input => input.disabled = disabled);
    regenerateBtn.disabled = disabled; // Also disable/enable the button
    if(disabled) {
        settingsCardEl.classList.add('disabled-settings'); // Optional: Add class for styling
    } else {
         settingsCardEl.classList.remove('disabled-settings');
    }
}


/** Handles the selection of an answer option - MODIFIED */
function handleOptionSelect(inputElement, questionIndex) {
    const optionValue = inputElement.value;
    const questionType = sortedQuestions[questionIndex].type;
    const optionLabel = inputElement.closest('.option');

    if (!examStarted && !examSubmitted) {
        examStarted = true;
        setSettingsInputsDisabled(true);
        startTimer();
    }

    // 选项选中状态视觉反馈
    if (inputElement.checked) {
        optionLabel.classList.add('selected');
    } else {
        optionLabel.classList.remove('selected');
    }

    // 如果是单选或判断题
    if (questionType === 'single' || questionType === 'boolean') {
        // 移除其他选项的选中状态
        const allOptions = optionsContainerEl.querySelectorAll('.option');
        allOptions.forEach(opt => {
            if (opt !== optionLabel) {
                opt.classList.remove('selected');
            }
        });

        // 更新答案
        userAnswers[questionIndex] = optionValue;
    }
    // 如果是多选题
    else if (questionType === 'multiple') {
        // 如果还没有选择，初始化为空数组
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = [];
        }

        // 确保userAnswers[questionIndex]是数组
        if (!Array.isArray(userAnswers[questionIndex])) {
            userAnswers[questionIndex] = [];
        }

        // 选中时添加到数组，取消选中时从数组中移除
        if (inputElement.checked) {
            if (!userAnswers[questionIndex].includes(optionValue)) {
                userAnswers[questionIndex].push(optionValue);
            }
        } else {
            userAnswers[questionIndex] = userAnswers[questionIndex].filter(val => val !== optionValue);
            // 如果数组为空，将值设为null
            if (userAnswers[questionIndex].length === 0) {
                userAnswers[questionIndex] = null;
            }
        }
    }

    // 更新答题卡显示
    updateAnswerCardUI();

    // 练习模式下不再直接显示反馈，而是等待用户点击"确认答案"按钮
}

/**
 * 在练习模式下显示选项的正确/错误反馈
 */
function showPracticeModeOptionFeedback(questionIndex) {
    const currentQuestion = sortedQuestions[questionIndex];
    const options = document.querySelectorAll('.option');
    const correctAnswers = Array.isArray(currentQuestion.answer)
        ? currentQuestion.answer
        : [currentQuestion.answer];

    options.forEach(option => {
        const input = option.querySelector('input');
        const value = input.value;
        const isCorrect = correctAnswers.includes(value);
        const isSelected = input.checked;

        // 移除所有现有的反馈类
        option.classList.remove('correct', 'incorrect');

        // 清除现有的反馈元素
        const existingFeedback = option.querySelector('.option-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // 创建反馈元素
        const feedback = document.createElement('span');
        feedback.classList.add('option-feedback');

        if (isCorrect) {
            option.classList.add('correct');
            feedback.textContent = '✓';
            feedback.classList.add('feedback-correct');
        } else if (isSelected) {
            option.classList.add('incorrect');
            feedback.textContent = '✗';
            feedback.classList.add('feedback-incorrect');
        }

        option.appendChild(feedback);
    });
}

// nextQuestion, prevQuestion, goToQuestion (keep existing - rely on loadQuestion's logic)
function nextQuestion() {
    if (isPracticeMode) {
        // 练习模式下按钮有两个功能：检查答案和进入下一题
        if (!questionAnswerChecked) {
            // 第一次点击：检查答案
            if (checkAnswerInPracticeMode()) {
                questionAnswerChecked = true;

                // 更新按钮文本
                const isLastQuestion = currentQuestionIndex === sortedQuestions.length - 1;
                if (isLastQuestion) {
                    nextBtn.textContent = '完成练习';
                } else {
                    nextBtn.textContent = '下一题 >';
                }
            }
        } else {
            // 第二次点击：跳转到下一题或完成
            questionAnswerChecked = false;

            const isLastQuestion = currentQuestionIndex === sortedQuestions.length - 1;
            if (isLastQuestion) {
                // 如果是最后一题，回到第一题
                loadQuestion(0);
            } else {
                // 否则进入下一题
                loadQuestion(currentQuestionIndex + 1);
            }
        }
    } else {
        // 考试模式正常行为
        if (currentQuestionIndex < sortedQuestions.length - 1) {
            loadQuestion(currentQuestionIndex + 1);
        }
    }
}

function prevQuestion() {
    // 练习模式下如果正在查看答案，先恢复确认答案状态
    if (isPracticeMode && questionAnswerChecked) {
        questionAnswerChecked = false;
        loadQuestion(currentQuestionIndex);
        return;
    }

    // 正常前一题逻辑
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function goToQuestion(index) {
    // 练习模式下如果正在查看答案，先恢复确认答案状态
    if (isPracticeMode && questionAnswerChecked) {
        questionAnswerChecked = false;
    }

    // 正常跳转逻辑
    if (index >= 0 && index < sortedQuestions.length) {
        loadQuestion(index);
    }
}


/**
 * 启动考试计时器
 */
function startTimer() {
    examStarted = true;
    if (timerInterval) clearInterval(timerInterval);

    // 练习模式下不启动定时器
    if (isPracticeMode) {
        updateSubmitButtonText('交 卷');
        return;
    }

    timerInterval = setInterval(() => {
        if (!examSubmitted) {
        timeLeft--;
            updateSubmitButtonText();
            if (timeLeft <= 0) {
            clearInterval(timerInterval);
                submitExam(true); // 自动交卷
            }
        }
    }, 1000);
}


// calculateScore, displayResults, showFeedbackOnOptions (keep existing - check no reliance on timerEl)
/** Calculates the score and provides feedback data. */
function calculateScore() { /*...(logic unchanged)...*/
    let score = 0; let correctCount = 0; const feedback = [];
    const totalPossiblePoints = sortedQuestions.reduce((sum, q) => sum + q.points, 0); // Ensure this is calculated correctly
    sortedQuestions.forEach((q, index) => { const userAnswer = userAnswers[index]; const correctAnswer = q.answer; let isCorrect = false; if (q.type === 'multiple') { const userSet = new Set(Array.isArray(userAnswer) ? userAnswer : []); const correctSet = new Set(correctAnswer); isCorrect = userSet.size === correctSet.size && [...userSet].every(item => correctSet.has(item)); } else { isCorrect = userAnswer === correctAnswer; } if (isCorrect) { score += q.points; correctCount++; feedback.push({ index, correct: true }); } else { feedback.push({ index, correct: false, correctAnswer: q.answer }); } });
    return { score, correctCount, totalPoints: totalPossiblePoints, feedback };
}
/** Shows the results after submission */
function displayResults(results) { /*...(logic unchanged)...*/
     // 结果卡片通过CSS规则.exam-container.submitted .score-card自动显示
     scoreDisplayEl.innerHTML = `考试得分: <strong style="color: var(--primary-color); font-size: 1.3em;">${results.score}</strong> / ${results.totalPoints} 分`;
     incorrectQuestionsListEl.innerHTML = ''; const incorrectFeedback = results.feedback.filter(item => !item.correct);
     if (incorrectFeedback.length > 0) { const listHeader = document.createElement('h5'); listHeader.textContent = '错误题目列表:'; incorrectQuestionsListEl.appendChild(listHeader); incorrectFeedback.forEach(item => { const div = document.createElement('div'); div.textContent = `第 ${item.index + 1} 题`; div.onclick = () => { goToQuestion(item.index); }; incorrectQuestionsListEl.appendChild(div); }); }
     else { incorrectQuestionsListEl.innerHTML = '<p style="color: var(--success-color); text-align: center; margin-top: 10px;">✔ 恭喜您，全部回答正确！</p>'; }
     restartBtn.style.display = 'block';
}
/** Provides visual feedback on the options for the CURRENT question */
 function showFeedbackOnOptions() { /*...(logic unchanged)...*/
      if (!examSubmitted || !examResults) return; const question = sortedQuestions[currentQuestionIndex]; const options = optionsContainerEl.querySelectorAll('.option'); const feedbackItem = examResults.feedback.find(item => item.index === currentQuestionIndex);
      options.forEach(optionLabel => { const input = optionLabel.querySelector('input'); const optionValue = input.value; let isCorrectOption = false; if (question.type === 'multiple') { isCorrectOption = question.answer.includes(optionValue); } else { isCorrectOption = question.answer === optionValue; } optionLabel.classList.remove('selected', 'correct', 'incorrect'); input.disabled = true; const userAnswer = userAnswers[currentQuestionIndex]; const wasSelected = question.type === 'multiple' ? Array.isArray(userAnswer) && userAnswer.includes(optionValue) : userAnswer === optionValue; if (isCorrectOption) { optionLabel.classList.add('correct'); } else if (wasSelected) { optionLabel.classList.add('incorrect', 'selected'); } });
 }


/** Handles the exam submission - MODIFIED */
// 在文件顶部添加变量
const submitModal = document.getElementById('submit-modal');
const submitMessage = document.getElementById('submit-message');
const confirmSubmitBtn = document.getElementById('confirm-submit');
const cancelSubmitBtn = document.getElementById('cancel-submit');
const closeModalBtn = document.querySelector('.close-modal');

// 修改submitExam函数
function submitExam(isAutoSubmit = false) {
    if (examSubmitted) return;

    if (timerInterval) clearInterval(timerInterval);

    if (!isAutoSubmit) {
        const unanswered = userAnswers.filter(a => a === null || (Array.isArray(a) && a.length === 0)).length;
        let msg = '确定要交卷吗？';
        if (unanswered > 0) msg = `您还有 ${unanswered} 题未作答，确定要交卷吗？`;
        else if (currentQuestionIndex !== sortedQuestions.length -1) msg = '您已完成所有题目，确定要交卷吗？';
        else msg = '您已完成所有可见题目，确定要交卷吗？';

        submitMessage.textContent = msg;
        submitModal.classList.add('show');
        return; // 等待用户确认
    }

    // 自动交卷或确认后的逻辑
    processExamSubmission();
}

// 添加弹窗事件处理
confirmSubmitBtn.addEventListener('click', () => {
    submitModal.classList.remove('show');
    processExamSubmission();
});

cancelSubmitBtn.addEventListener('click', () => {
    submitModal.classList.remove('show');
    if (timerInterval) startTimer(); // 恢复计时器
});

closeModalBtn.addEventListener('click', () => {
    submitModal.classList.remove('show');
    if (timerInterval) startTimer(); // 恢复计时器
});

// 提取交卷处理逻辑到单独函数
function processExamSubmission() {
    examSubmitted = true;
    //console.log("交卷处理中...");

    submitBtn.disabled = true;
    submitBtn.textContent = '评卷中...';
    examContainerEl.classList.add('submitted', 'review-mode');
    //console.log("添加submitted类，隐藏答题卡和设置卡片");

    setTimeout(() => {
        examResults = calculateScore();
        displayResults(examResults);
        buildAnswerCard();
        if (currentQuestionIndex >= 0 && currentQuestionIndex < sortedQuestions.length) {
            showFeedbackOnOptions();
        }

        updateSubmitButtonText();
        submitBtn.classList.remove('btn-primary', 'btn-danger', 'time-up-btn');
        submitBtn.classList.add('btn-secondary');
        submitBtn.disabled = true;

        setSettingsInputsDisabled(true);

        // 通过CSS的.exam-container.submitted选择器自动隐藏答题卡和设置卡片
    }, 100);
}

/** Resets the exam state and UI to start over - MODIFIED */
function restartExam() {
    //console.log("重新开始考试...");

    // --- Reset State ---
    examSubmitted = false;
    examStarted = false; // Reset started flag
    examResults = null;
    if (timerInterval) clearInterval(timerInterval); // Clear timer

    // --- Reset UI Elements ---
    // 移除submitted类后，答题卡和设置卡片会自动显示，结果卡片会自动隐藏（通过CSS控制）
    examContainerEl.classList.remove('submitted', 'review-mode');
    restartBtn.style.display = 'none';
    //console.log("恢复答题卡和设置卡片显示");

    // Make sure settings inputs are enabled
    setSettingsInputsDisabled(false);

    // --- Regenerate Questions based on CURRENT input values ---
    // This implicitly resets state variables like sortedQuestions, userAnswers, timeLeft, etc.
    // and updates the UI (loads question 0, builds card, sets initial submit button text)
    generateExamQuestions();

    // Note: Timer is NOT started here. It waits for the first handleOptionSelect call.
}

/**
 * 清除练习模式下的答案反馈
 */
function clearPracticeFeedback() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
        const feedback = option.querySelector('.option-feedback');
        if (feedback) {
            feedback.remove();
        }
    });

    // 清除答案结果提示
    const existingAlert = document.querySelector('.practice-feedback-alert');
    if (existingAlert) {
        // 如果存在resize监听器，移除它
        if (existingAlert.resizeListener) {
            window.removeEventListener('resize', existingAlert.resizeListener);
        }
        existingAlert.remove();
    }
}

/**
 * 在练习模式下检查答案并显示反馈
 */
function checkAnswerInPracticeMode() {
    const currentQuestion = sortedQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];

    // 如果用户没有选择任何答案
    if (!userAnswer) {
        alert('请先选择答案');
        return false;
    }

    // 显示选项反馈
    showPracticeModeOptionFeedback(currentQuestionIndex);

    // 禁用所有选项输入，防止用户在查看答案时更改选择
    const options = document.querySelectorAll('.option input');
    options.forEach(input => {
        input.disabled = true;
    });

    // 检查答案是否正确
    let isCorrect = false;
    if (currentQuestion.type === 'multiple') {
        // 多选题，检查数组是否匹配
        const correctAnswers = Array.isArray(currentQuestion.answer)
            ? currentQuestion.answer
            : [currentQuestion.answer];

        const userAnswers = Array.isArray(userAnswer)
            ? userAnswer
            : [userAnswer];

        if (correctAnswers.length === userAnswers.length) {
            isCorrect = correctAnswers.every(answer => userAnswers.includes(answer));
        }
    } else {
        // 单选题或判断题
        isCorrect = userAnswer === currentQuestion.answer;
    }

    // 创建反馈提示
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('practice-feedback-alert');
    alertDiv.style.marginTop = '15px';
    alertDiv.style.marginBottom = '15px';
    alertDiv.style.padding = '12px 15px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.fontWeight = 'bold';
    alertDiv.style.minHeight = '48px';
    alertDiv.style.boxSizing = 'border-box';
    alertDiv.style.width = '100%';
    alertDiv.style.display = 'flex';
    alertDiv.style.alignItems = 'center';

    // 根据答案是否正确设置样式和文本
    if (isCorrect) {
        alertDiv.style.backgroundColor = 'var(--correct-bg)';
        alertDiv.style.color = 'var(--success-color)';
        alertDiv.style.justifyContent = 'center';
        alertDiv.textContent = '✓ 回答正确';
    } else {
        alertDiv.style.backgroundColor = 'var(--incorrect-bg)';
        alertDiv.style.color = 'var(--danger-color)';

        // 显示正确答案
        let correctAnswerText = '';
        if (currentQuestion.type === 'multiple') {
            // 多选题，显示所有正确选项
            const correctAnswers = Array.isArray(currentQuestion.answer)
                ? currentQuestion.answer
                : [currentQuestion.answer];

            correctAnswerText = correctAnswers.join(', ');
        } else {
            // 单选题或判断题
            correctAnswerText = currentQuestion.answer;
        }

        // 对于错误答案，根据屏幕宽度决定布局方式
        const isMobile = window.innerWidth < 576;

        if (isMobile || correctAnswerText.length > 20) {
            // 在移动设备或答案过长时使用垂直布局
            alertDiv.style.justifyContent = 'flex-start';
            alertDiv.style.flexDirection = 'column';
            alertDiv.style.alignItems = 'flex-start';

            const wrongText = document.createElement('div');
            wrongText.textContent = '✗ 回答错误';
            wrongText.style.marginBottom = '5px';

            const correctText = document.createElement('div');
            correctText.textContent = `正确答案: ${correctAnswerText}`;
            correctText.style.fontSize = '0.95em';

            alertDiv.textContent = '';
            alertDiv.appendChild(wrongText);
            alertDiv.appendChild(correctText);
        } else {
            // 在桌面设备且答案较短时使用水平布局
            alertDiv.style.justifyContent = 'space-between';

            const wrongText = document.createElement('div');
            wrongText.textContent = '✗ 回答错误';

            const correctText = document.createElement('div');
            correctText.textContent = `正确答案: ${correctAnswerText}`;

            alertDiv.textContent = '';
            alertDiv.appendChild(wrongText);
            alertDiv.appendChild(correctText);
        }
    }

    // 添加到选项容器之后
    optionsContainerEl.after(alertDiv);

    // 添加窗口大小变化监听器，以便响应式调整
    const resizeListener = () => {
        const isMobile = window.innerWidth < 576;

        // 只在错误答案情况下需要调整
        if (!isCorrect && alertDiv.parentNode) {
            const correctAnswerText = currentQuestion.type === 'multiple'
                ? (Array.isArray(currentQuestion.answer) ? currentQuestion.answer.join(', ') : currentQuestion.answer)
                : currentQuestion.answer;

            // 清空当前内容重新设置
            alertDiv.innerHTML = '';

            if (isMobile || correctAnswerText.length > 20) {
                // 垂直布局
                alertDiv.style.justifyContent = 'flex-start';
                alertDiv.style.flexDirection = 'column';
                alertDiv.style.alignItems = 'flex-start';

                const wrongText = document.createElement('div');
                wrongText.textContent = '✗ 回答错误';
                wrongText.style.marginBottom = '5px';

                const correctText = document.createElement('div');
                correctText.textContent = `正确答案: ${correctAnswerText}`;
                correctText.style.fontSize = '0.95em';

                alertDiv.appendChild(wrongText);
                alertDiv.appendChild(correctText);
            } else {
                // 水平布局
                alertDiv.style.justifyContent = 'space-between';
                alertDiv.style.flexDirection = 'row';
                alertDiv.style.alignItems = 'center';

                const wrongText = document.createElement('div');
                wrongText.textContent = '✗ 回答错误';

                const correctText = document.createElement('div');
                correctText.textContent = `正确答案: ${correctAnswerText}`;

                alertDiv.appendChild(wrongText);
                alertDiv.appendChild(correctText);
            }
        }
    };

    // 添加调整大小的事件监听器
    window.addEventListener('resize', debounce(resizeListener, 250));

    // 记录resize监听器，用于在加载新题目时清除
    alertDiv.resizeListener = resizeListener;

    return true;
}

// --- Event Listeners ---
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', () => submitExam(false));
restartBtn.addEventListener('click', restartExam);
window.addEventListener('resize', handleResize);
// *** NEW: Regenerate Button Listener ***
regenerateBtn.addEventListener('click', generateExamQuestions);


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // *** DO NOT sort or load questions immediately ***
    // Instead, trigger initial generation based on default input values

    //console.log(`初始化考试系统 - 等待设置确认或首次答题.`);

    // Generate initial questions based on default input values (30/30/30)
    // This will calculate initial timeLeft, build the card, load question 0 etc.
    generateExamQuestions();

    // Initial UI setup (some parts are handled in generateExamQuestions)
     submitBtn.disabled = (sortedQuestions.length === 0); // Disable if 0 questions loaded initially

    window.addEventListener('beforeunload', () => {
        window.removeEventListener('resize', handleResize);
        if (timerInterval) clearInterval(timerInterval); // Clean up timer on page leave
    });

    // 练习模式切换
    practiceModeToggle.addEventListener('change', () => {
        isPracticeMode = practiceModeToggle.checked;
        questionAnswerChecked = false; // 重置答案检查状态

        if (isPracticeMode) {
            examContainerEl.classList.add('practice-mode');
            // 清除计时器
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            // 更新提交按钮文本（无倒计时）
            updateSubmitButtonText('交 卷');
        } else {
            examContainerEl.classList.remove('practice-mode');
            // 如果考试已经开始，重新启动计时器
            if (examStarted && !examSubmitted) {
                startTimer();
            }

            // 移除所有反馈
            clearPracticeFeedback();
        }

        // 重新加载当前题目，更新按钮状态
        loadQuestion(currentQuestionIndex);
    });
});

})();

