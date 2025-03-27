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


// --- Configuration (Can be adjusted) ---
const ANSWER_BTN_EFFECTIVE_WIDTH = 48;
const ANSWER_BTN_DESIRED_ROWS = 4;
const BASE_SECONDS_PER_QUESTION = 10; // e.g., 1.5 minutes per question

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
        console.log(`Resized: questionsPerPage changed from ${oldQuestionsPerPage} to ${questionsPerPage}`);
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
    console.log("Generating questions based on settings...");
    if (examStarted) {
        console.warn("Cannot regenerate questions after exam has started.");
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
                console.warn(`Requested ${counts[type]} ${type} questions, but only ${availableOfType.length} are available.`);
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
    console.log(`Generated ${sortedQuestions.length} questions. Time limit: ${formatTime(timeLeft)}`);

    // --- Update UI ---
    if (sortedQuestions.length > 0) {
        questionsPerPage = calculateQuestionsPerPage(); // Recalculate based on potential container size changes
        buildAnswerCard();
        loadQuestion(0); // Load the first question
        submitBtn.disabled = false; // Ensure submit button is enabled
        updateSubmitButtonText(); // Update button text (will show time when started)
        setSettingsInputsDisabled(false); // Ensure inputs are enabled before start
        examContainerEl.classList.remove('submitted', 'review-mode'); // Reset modes
        scoreCardEl.style.display = 'none';
        restartBtn.style.display = 'none';

    } else {
        // Handle case with 0 questions selected
        questionTextEl.textContent = "请在试题设置中选择题目数量并点击“应用设置”。";
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
/** Updates the style of a single answer card button */
function updateSingleAnswerButton(buttonElement, index) { /*...(logic unchanged)...*/
    if (!buttonElement) return;
    buttonElement.classList.remove('current', 'answered', 'feedback-correct', 'feedback-incorrect');
    if (index === currentQuestionIndex) { buttonElement.classList.add('current'); }
    const answer = userAnswers[index];
    const isAnswered = answer !== null && (!Array.isArray(answer) || answer.length > 0);
    if (isAnswered && !examSubmitted) { buttonElement.classList.add('answered'); }
    if (examSubmitted && examResults) { const feedbackItem = examResults.feedback.find(item => item.index === index); if (feedbackItem) { buttonElement.classList.add(feedbackItem.correct ? 'feedback-correct' : 'feedback-incorrect'); } }
}
/** Updates the visual state of all VISIBLE answer card buttons */
function updateAnswerCardUI() { /*...(logic unchanged)...*/
    const buttons = answerGridEl.querySelectorAll('.answer-grid-btn');
    buttons.forEach(btn => { const index = parseInt(btn.dataset.index); updateSingleAnswerButton(btn, index); });
}

/** Loads and displays a specific question - MODIFIED */
function loadQuestion(index) {
    if (!sortedQuestions || sortedQuestions.length === 0 || index < 0 || index >= sortedQuestions.length) {
        console.warn(`Load question called with invalid index ${index} or no questions.`);
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

    // --- Navigation Buttons (Unchanged logic) ---
    prevBtn.disabled = index === 0;
    nextBtn.disabled = isLastQuestion;
    nextBtn.textContent = '下一题 >'; // Default text

    // --- Submit Button Text --- MODIFIED
    let baseSubmitText = "交 卷"; // Default base text
    submitBtn.classList.remove('btn-primary'); // Ensure not blue by default
    submitBtn.classList.add('btn-danger'); // Default red

    if (isLastQuestion && !examSubmitted) {
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


/** Handles the selection of an answer option - MODIFIED to start timer */
function handleOptionSelect(inputElement, questionIndex) {
    if (examSubmitted) return;

    // *** START TIMER AND DISABLE SETTINGS ON FIRST INTERACTION ***
    if (!examStarted) {
        startTimer(); // This will set examStarted = true and disable inputs
    }

    // --- Existing answer saving logic --- (Unchanged)
    const question = sortedQuestions[questionIndex];
    const selectedValue = inputElement.value;
    const isChecked = inputElement.checked;
    const optionLabel = inputElement.closest('.option');
    if (question.type === 'multiple') { /* ... multiple choice logic ... */
        let currentSelections = userAnswers[questionIndex] || [];
        if (!Array.isArray(currentSelections)) currentSelections = [currentSelections];
        if (isChecked) { if (!currentSelections.includes(selectedValue)) { currentSelections.push(selectedValue); } optionLabel.classList.add('selected'); }
        else { currentSelections = currentSelections.filter(val => val !== selectedValue); optionLabel.classList.remove('selected'); }
        userAnswers[questionIndex] = currentSelections.length > 0 ? currentSelections : null;
    } else { /* ... single/boolean choice logic ... */
        const allOptions = optionsContainerEl.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        if (isChecked) { userAnswers[questionIndex] = selectedValue; optionLabel.classList.add('selected'); }
        else { userAnswers[questionIndex] = null; }
    }
    // Update answer card button (Unchanged)
    const buttonToUpdate = answerGridEl.querySelector(`.answer-grid-btn[data-index="${questionIndex}"]`);
    if (buttonToUpdate) { updateSingleAnswerButton(buttonToUpdate, questionIndex); }
}


// nextQuestion, prevQuestion, goToQuestion (keep existing - rely on loadQuestion's logic)
function nextQuestion() { /*...(implementation unchanged)...*/ if (currentQuestionIndex < sortedQuestions.length - 1) { loadQuestion(currentQuestionIndex + 1); } }
function prevQuestion() { /*...(implementation unchanged)...*/ if (currentQuestionIndex > 0) { loadQuestion(currentQuestionIndex - 1); } }
function goToQuestion(index) { /*...(implementation unchanged)...*/ if (index >= 0 && index < sortedQuestions.length) { loadQuestion(index); } }


/** Starts the countdown timer - MODIFIED */
function startTimer() {
    if (examStarted) return; // Prevent multiple starts

    console.log("Timer started.");
    examStarted = true;
    setSettingsInputsDisabled(true); // Disable settings inputs now

    if (timerInterval) clearInterval(timerInterval); // Clear any existing interval

    updateSubmitButtonText(); // Update button immediately with initial time

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            updateSubmitButtonText(); // Update button text with new time
        } else {
            clearInterval(timerInterval);
            console.log("时间到，自动交卷...");
            if (!examSubmitted) {
                 submitExam(true); // Auto-submit
            }
             // Update button text one last time for "Time's up" state before submit processing
             submitBtn.textContent = '时间到!';
             submitBtn.classList.add('time-up-btn'); // Optional class for styling time up
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
     scoreCardEl.style.display = 'block';
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
    console.log("交卷处理中...");
    
    submitBtn.disabled = true;
    submitBtn.textContent = '评卷中...';
    examContainerEl.classList.add('submitted', 'review-mode');
    
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
    }, 100);
}

/** Resets the exam state and UI to start over - MODIFIED */
function restartExam() {
    console.log("重新开始考试...");

    // --- Reset State ---
    examSubmitted = false;
    examStarted = false; // Reset started flag
    examResults = null;
    if (timerInterval) clearInterval(timerInterval); // Clear timer

    // --- Reset UI Elements ---
    scoreCardEl.style.display = 'none';
    restartBtn.style.display = 'none';
    examContainerEl.classList.remove('submitted', 'review-mode');

    // Make sure settings inputs are enabled
    setSettingsInputsDisabled(false);

    // --- Regenerate Questions based on CURRENT input values ---
    // This implicitly resets state variables like sortedQuestions, userAnswers, timeLeft, etc.
    // and updates the UI (loads question 0, builds card, sets initial submit button text)
    generateExamQuestions();

    // Note: Timer is NOT started here. It waits for the first handleOptionSelect call.
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

    console.log(`初始化考试系统 - 等待设置确认或首次答题.`);

    // Generate initial questions based on default input values (30/30/30)
    // This will calculate initial timeLeft, build the card, load question 0 etc.
    generateExamQuestions();

    // Initial UI setup (some parts are handled in generateExamQuestions)
     submitBtn.disabled = (sortedQuestions.length === 0); // Disable if 0 questions loaded initially

    window.addEventListener('beforeunload', () => {
        window.removeEventListener('resize', handleResize);
        if (timerInterval) clearInterval(timerInterval); // Clean up timer on page leave
    });
});

