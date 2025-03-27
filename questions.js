// 题库.js
const questions = [
    //单选题
    {
      question: "原酒品评采用____法，即不公开酒名，酒样由专人倒入编号的酒杯中，由品酒人员集体评议，最后统一意见，打分，写出评语，定等级。",
      options: ["暗酒明评", "明酒暗评", "暗酒暗评", "明酒明评"],
      type: "single",
      answer: "暗酒明评"
  },
  {
      question: "大曲酒发酵工艺中不打黄水坑、不滴窖的属于____法工艺。",
      options: ["原窖法", "跑窖法", "老五甑法", "六分法"],
      type: "single",
      answer: "老五甑法"
  },
  {
      question: "茅台酒是大曲酱香型白酒的典型代表，其发酵是在____窖池中进行。",
      options: ["泥底石窖", "地缸", "砂石窖", "砖窖"],
      type: "single",
      answer: "泥底石窖"
  },
  {
      question: "茅台酒是大曲酱香型白酒的典型代表，其传统生产工艺具有____特点。",
      options: ["三高二长", "三高三长", "二高三长", "二高二长"],
      type: "single",
      answer: "三高三长"
  },
  {
      question: "清蒸清烧工艺是指____。",
      options: ["清蒸粮、清蒸酒", "混蒸粮混蒸酒", "粮酒一起蒸", "蒸两次"],
      type: "single",
      answer: "清蒸粮、清蒸酒"
  },
  {
      question: "品酒时再现性是取同一酒样分别插入相近两个轮次的酒杯中，密码编号，进行品评。要求准确打分，写出评语和香型。在同一酒样中，其香型、评语和分数应____。",
      options: ["不同", "相同", "相近", "相近"],
      type: "single",
      answer: "相同"
  },
  {
      question: "清香型酒生产工艺发酵是在____进行的。",
      options: ["泥池老窖", "砖窖", "砂石窖", "地缸"],
      type: "single",
      answer: "地缸"
  },
  {
      question: "第一届全国评酒会评出国家名酒____。",
      options: ["8种", "4种", "6种"],
      type: "single",
      answer: "4种"
  },
  {
      question: "乳酸的呈味情况是____。",
      options: ["嗅有酸气，进口有刺激性，且有涩感", "酸味低，有鲜味", "酸味中带有涩、苦味", "微酸、味涩，适量可增加酒的浓郁感"],
      type: "single",
      answer: "微酸、味涩，适量可增加酒的浓郁感"
  },
  {
      question: "乙酸乙酯的呈香情况是____。",
      options: ["梨香、香蕉香", "呈乙醚状香气，有水果香，浓时有喷漆溶剂味", "近似乙酸乙酯香气，有较稀薄的水果香", "水果香(菠萝香)"],
      type: "single",
      answer: "呈乙醚状香气，有水果香，浓时有喷漆溶剂味"
  },
  {
      question: "第三届全国评酒会评出国家优质酒____。",
      options: ["9种", "18种", "27种"],
      type: "single",
      answer: "18种"
  },
  {
      question: "董酒的成分特征“三高一低”中，一低指的是____。",
      options: ["总酸", "高级醇", "丁酸乙酯", "乳酸乙酯"],
      type: "single",
      answer: "乳酸乙酯"
  },
  {
      question: "乳酸乙酯为总酯含量最高的白酒是：____。",
      options: ["清香型", "米香型", "特型"],
      type: "single",
      answer: "米香型"
  },
  {
      question: "豉香型白酒以大米为原料、以小曲酒饼粉为糖化发酵剂，采用____发酵。",
      options: ["固态", "液态", "半固态"],
      type: "single",
      answer: "液态"
  },
  {
      question: "凤型酒的生产周期是____。",
      options: ["六个月", "九个月", "一年", "二年"],
      type: "single",
      answer: "一年"
  },
  {
      question: "双乙酰又名：____。",
      options: ["2.3一丁二酮", "2.3一丁二醇", "3—羟基丁酮", "丙三醇"],
      type: "single",
      answer: "2.3一丁二酮"
  },
  {
      question: "白酒对周边气味有极强的吸附力，若酒库卫生管理不善，容器上布满灰尘，____会被吸入酒内。",
      options: ["青草味", "锈味", "泥臭味", "尘土味"],
      type: "single",
      answer: "尘土味"
  },
  {
      question: "清香型白酒工艺的特点是：____。",
      options: ["高温堆积", "混蒸混烧", "清蒸清烧"],
      type: "single",
      answer: "清蒸清烧"
  },
  {
      question: "汾酒陶瓷缸使用前，必须用清水洗净，然后用0.4%的____洗一次，然后使用。",
      options: ["蒸馏水", "盐水", "漂白粉水", "花椒水"],
      type: "single",
      answer: "花椒水"
  },
  {
      question: "下列哪项是描述浓香型白酒特有的标准评语____。",
      options: ["空杯留香持久", "窖香浓郁", "清爽甘洌", "幽雅细腻"],
      type: "single",
      answer: "窖香浓郁"
  },
  {
      question: "乙缩醛是白酒风味中的____。",
      options: ["骨架成份", "协调成份", "微量成份"],
      type: "single",
      answer: "协调成份"
  },
  {
      question: "气相色谱作为分析方法的最大特点是____。",
      options: ["进行定性分析", "进行定量分析", "分离混合物", "分离混合物并同时进行分析"],
      type: "single",
      answer: "分离混合物并同时进行分析"
  },
  {
      question: "____在白酒中呈甜味，因其具有黏稠性，在白酒中起缓冲作用，使香味成分间能连成一体，并使酒增加绵甜、回味有醇厚感。",
      options: ["多元醇", "杂醇油", "乳酸乙酯", "乙酸乙酯"],
      type: "single",
      answer: "多元醇"
  },
  {
      question: "色谱是一种____方法。",
      options: ["物理分析", "化学分析", "物理化学分析"],
      type: "single",
      answer: "物理化学分析"
  },
  {
      question: "β—苯乙醇在哪种香型白酒中最高：____。",
      options: ["米香型", "药香型", "豉香型"],
      type: "single",
      answer: "豉香型"
  },
  {
      question: "一般品评的次数应当是____。",
      options: ["二次", "三次", "四次", "五次"],
      type: "single",
      answer: "三次"
  },
  {
      question: "针对半成品酒的缺点和不足，先选定几种调味酒，分别记住其主要特点，各以____的量滴加。",
      options: ["千分之一", "万分之一", "十万分之一", "百分之一"],
      type: "single",
      answer: "万分之一"
  },
  {
      question: "舌周舌的两侧边缘对____最为灵敏，对陈味较敏感。",
      options: ["酸味", "苦味", "甜味", "鲜味"],
      type: "single",
      answer: "酸味"
  },
  {
      question: "品评前一个酒样后，影响后一个酒样的心理作用，叫做____。",
      options: ["顺效应", "后效应", "顺序效应"],
      type: "single",
      answer: "后效应"
  },
  {
      question: "醇类化合物的含量应与酯含量有一个恰当的比例。一般醇类化合物与酯的比例在浓香型白酒组分中为____左右。",
      options: ["1:5", "1:4", "1:7", "2:1"],
      type: "single",
      answer: "1:5"
  },
  {
      question: "大样调味结束后，由于酒体还可能发生一些物理、化学的平衡反应，可能会使酒体在风味上与调好的酒有些差异。一般需存放____左右，然后经检查合格后即可。",
      options: ["一星期", "一个月", "半年", "一年"],
      type: "single",
      answer: "一星期"
  },
  {
      question: "当白酒温度低于____时，允许出现白色絮状沉淀物或失光，高于此温度时应逐渐恢复正常。",
      options: ["0℃", "5℃", "10℃", "15℃"],
      type: "single",
      answer: "10℃"
  },
  {
      question: "____是调动某些特色酒中最具特点的一些复杂成分，来最大限度地消除在勾调时由复杂成分所带来的负面影响，同时强化和突出正面效应。",
      options: ["制样", "勾调", "储存", "调味"],
      type: "single",
      answer: "调味"
  },
  {
      question: "____白酒中富含奇数碳的脂肪酸乙酯，其含量是各类香型白酒相应组分之冠。",
      options: ["芝麻香型", "米香型", "清香型", "特型"],
      type: "single",
      answer: "特型"
  },
  {
      question: "____过多是饮酒“上头”的原因之一，酒中含量过多亦是出现浑浊的现象。",
      options: ["高级醛", "高级酸", "高级酮", "高级醇"],
      type: "single",
      answer: "高级醇"
  },
  {
      question: "____在白酒中含量甚微，其总量也不超过组分总量的2%，所以在酒体中的呈味作用不是很明显。",
      options: ["缩醛类", "羰基类化合物", "酯类化合物", "芳香族化合物"],
      type: "single",
      answer: "芳香族化合物"
  },
  {
      question: "酒中的苦味物质是酒精发酵时____代谢的产物。",
      options: ["酵母菌", "霉菌", "细菌", "放线菌"],
      type: "single",
      answer: "酵母菌"
  },
  {
      question: "糖类与蛋白质、氮、氨基酸在加热过程中，发生美拉德反应生成____类，呈焦苦味。",
      options: ["吡嗪", "酯", "酮", "有机酸"],
      type: "single",
      answer: "吡嗪"
  },
  {
      question: "黄水中____含量尤其丰富。它们是构成白酒的呈香呈味物质。",
      options: ["酯类", "酮类", "有机酸", "醇类"],
      type: "single",
      answer: "有机酸"
  },
  {
      question: "己酸乙酯的味阈值是____mg/ml。",
      options: ["0.76", "0.076", "0.67", "0.067"],
      type: "single",
      answer: "0.076"
  },
  {
      question: "在有较明显焦香、糊香气味的香型白酒中，____类化合物的种类及绝对含量相应较高。",
      options: ["醇", "酮", "醛", "吡嗪"],
      type: "single",
      answer: "吡嗪"
  },
  {
      question: "____是酒香的重要物质，不少名优酒都含有，一般含量0.002-0.03g/100ml。",
      options: ["乳酸乙酯", "有机酸", "己酸乙酯", "糠醛"],
      type: "single",
      answer: "糠醛"
  },
  {
      question: "合理的乙醛、____和四大酸的含量及量比，可以大大提高白酒中各种香味成分的相溶性，掩盖了白酒中某些成分过分突出自己的弊端，这就是掩蔽作用。",
      options: ["丁醛", "乙缩醛", "己酸乙酯", "糠醛"],
      type: "single",
      answer: "乙缩醛"
  },
  {
      question: "____酸乙酯含量过高，使酒容易出现泥臭味，是造成尾子不干净的主要原因。",
      options: ["乳", "丁", "乙", "丙"],
      type: "single",
      answer: "丁"
  },
  {
      question: "在储存过程中，基础酒中的____和乙醇会发生缩醛化反应，增加酒中缩醛的含量，可使酒的口味变得芳香而柔和。",
      options: ["乙醛", "甲醛", "乙缩醛", "己醛"],
      type: "single",
      answer: "乙醛"
  },
  {
      question: "若____酸乙酯/己酸乙酯比值过大，容易造成香味失调，形成青草味，酒体闷涩，影响己酸乙酯放香。",
      options: ["乳", "丁", "乙", "丙"],
      type: "single",
      answer: "乳"
  },
  {
      question: "多元醇在白酒中呈甜味，其中丙三醇和____在白酒中起缓冲作用，使酒增加绵甜、回味和醇厚感。",
      options: ["2.3-丁二醇", "甲醇", "己醇", "丁二醇"],
      type: "single",
      answer: "2.3-丁二醇"
  },
  {
      question: "在蒸馏过程中，有机酸聚积于____中，若想提高酒中酸量，则应降低摘酒酒度____。",
      options: ["酒头", "酒身", "酒尾"],
      type: "single",
      answer: "酒尾"
  },
  {
      question: "窖泥功能菌主要是____，它是窖内生香的重要微生物。",
      options: ["酵母菌", "细菌", "梭状芽孢杆菌", "霉菌"],
      type: "single",
      answer: "梭状芽孢杆菌"
  },
  {
      question: "进行乳酸发酵的主要是____。",
      options: ["酵母菌", "霉菌", "细菌", "放线菌"],
      type: "single",
      answer: "细菌"
  },
  {
      question: "在发酵过程中____菌没的有生成有机酸的能力。",
      options: ["酵母菌", "霉菌", "细菌", "放线菌"],
      type: "single",
      answer: "放线菌"
  },
  {
      question: "浓香型白酒中微量香味成分约占总量的____左右。",
      options: ["2%", "3%", "4%", "8%"],
      type: "single",
      answer: "2%"
  },
  {
      question: "由于酒分子与水分子发生氢键____作用，小分子变为大分子，使酒的口感更柔和、绵软。在贮存过程中由于低沸点的醛类、硫化物的挥发，使酒体变得纯净爽口。",
      options: ["缩合", "缔合", "加成", "还原"],
      type: "single",
      answer: "缔合"
  },
  {
      question: "浓香型新酒气味突出，具有明显的糙辣等不愉快感，但储存5-6个月后，其风味逐渐转变，储存____至左右，已较为理想。",
      options: ["9个月", "二年", "一年", "10个月"],
      type: "single",
      answer: "一年"
  },
  {
      question: "浓香型白酒色谱骨架成分不包括____。",
      options: ["乳酸乙酯", "丁酸乙酯", "己酸乙酯", "丙酸乙酯"],
      type: "single",
      answer: "丙酸乙酯"
  },
  {
      question: "浓香型白酒中复杂成分的总量占白酒香味成分总含量的____。",
      options: ["2%", "3%", "4%", "5%"],
      type: "single",
      answer: "5%"
  },
  {
      question: "____可使白酒在储存老熟过程中不断增加。它赋予白酒柔和感。",
      options: ["醇类", "酯类", "缩醛类", "羰基类化合物"],
      type: "single",
      answer: "缩醛类"
  },
  {
      question: "在白酒的香气特征中，绝大部分是以突出____为主的。由于其在酒体中的绝对浓度与其它组分相比高出许多，而且它的阈值较低，其呈味作用也是相当重要的。",
      options: ["酯类香气", "醇类香气", "醛类香气", "酸类香气"],
      type: "single",
      answer: "酯类香气"
  },
  {
      question: "____的特性是水能渗透而乙醇不能渗透，对乙醇含量30%以上的酒有良好的防漏作用。",
      options: ["陶坛容器", "血料容器", "不锈钢罐", "水泥池容器"],
      type: "single",
      answer: "血料容器"
  },
  {
      question: "铁制容器绝对不能用来贮酒或盛酒，白酒接触铁后，会带____，并使酒变色铁锈。",
      options: ["腥味", "臭味", "苦味", "酸味"],
      type: "single",
      answer: "腥味"
  },
  {
      question: "一般都上午9－11时和下午____时人的感觉器官最灵敏，因此原酒的品评尽量安排在这个时间段。",
      options: ["2-5", "3-5", "3-4", "2-6"],
      type: "single",
      answer: "3-5"
  },
  {
      question: "在白酒中，除乙醇和水以外，____的含量是微量组分中含量最高的一类。",
      options: ["酯类", "醇类", "酸类", "醛类"],
      type: "single",
      answer: "酯类"
  },
  {
      question: "在白酒中，酯类化合物多以____形成存在。",
      options: ["丁酯", "丙酯", "乙酯", "己酯"],
      type: "single",
      answer: "乙酯"
  },
  {
      question: "选择质量窖的粮糟酒尾、每甑摘取30-40kg，酒度控制在20度左右，贮存____以上，可用做调味酒。酒尾中含有大量的高沸点香味物质，酸酯含量也高，特别是亚油酸乙酯、油酸乙酯和棕榈酸乙酯含量特别高。",
      options: ["1年", "半年", "2年", "3年"],
      type: "single",
      answer: "1年"
  },
  {
      question: "____则在初馏酒及后馏酒部分低，中馏酒部分高。",
      options: ["乙醛", "缩醛", "脂肪酸", "甲醇"],
      type: "single",
      answer: "甲醇"
  },
  {
      question: "脂肪可被脂肪酶分解为脂肪酸及____。",
      options: ["甘油", "仲丁醇", "酪酸", "脂肪颗粒"],
      type: "single",
      answer: "甘油"
  },
  {
      question: "酒精发酵过程中，酵母菌将葡萄糖转变为丙酮酸，放出二氧化碳而生成____，又被迅速还原而成酒精。",
      options: ["乙醛", "缩醛", "多元醇", "乙醇"],
      type: "single",
      answer: "乙醛"
  },
  {
      question: "淀粉糖化的第一阶段是淀粉的液化。所谓液化就是淀粉分子被а-淀粉酶分解为小片段____，淀粉的网状结构被破坏。",
      options: ["果糖", "糊精", "糖", "葡萄糖"],
      type: "single",
      answer: "糊精"
  },
  {
      question: "传统的浓香型、清香型、酱香型等大曲酒多以____为贮存容器。",
      options: ["不锈钢", "木桶", "陶缸", "猪血桑皮纸糊的容器"],
      type: "single",
      answer: "陶缸"
  },
  {
      question: "白酒生产是开放式的，酿造过程将不可避免地感染大量乳酸菌，并进入窖内发酵，赋予白酒独特的风味，其发酵属于____。",
      options: ["同型乳酸发酵", "酪酸发酵", "混合型（异）乳酸发酵", "乙醇发酵"],
      type: "single",
      answer: "混合型（异）乳酸发酵"
  },
  {
      question: "____就是利用蒸汽的冷却和部分凝聚作用，将蒸汽分成浓度较低的液体部分回流和浓度较高的蒸汽部分。",
      options: ["馏分", "分凝", "冷凝", "蒸馏"],
      type: "single",
      answer: "分凝"
  },
  {
      question: "芳香族化合物是一种碳环化合物，是苯及其衍生物的总称包括稠环烃及其衍生物。酒中芳香族化合物主要来源于____。",
      options: ["蛋白质", "果胶", "葡萄糖", "木质素"],
      type: "single",
      answer: "蛋白质"
  },
  {
      question: "甲醇的前体物质为____，它是半乳糖醛酸的缩合物。",
      options: ["蛋白质", "果胶", "葡萄糖", "木质素"],
      type: "single",
      answer: "果胶"
  },
  {
      question: "为了减少高度原酒对尝评员感觉器官的刺激，减少疲劳，同时又能鉴评出高度酒精下掩盖着的酒体不足，在原酒品评前需用纯水将原酒降度到____%vol后鉴评。",
      options: ["50—60", "30—40", "40—45", "45—55"],
      type: "single",
      answer: "50—60"
  },
  {
      question: "稻壳辅料及原料皮壳中均含有多缩戊糖，在微生物的作用下，生成____。",
      options: ["乙醛", "丙烯醛", "缩醛", "糠醛"],
      type: "single",
      answer: "糠醛"
  },
  {
      question: "汾酒上霉是制曲的第一阶段，让曲坯表面生长白色斑点，称为上霉，俗称“生衣”。此斑点主要为____，有利于保持曲坯的水分。",
      options: ["黄曲霉", "毛霉", "拟内孢霉", "根霉"],
      type: "single",
      answer: "拟内孢霉"
  },
  {
      question: "“沸点量水”工艺使用的量水温度为____。",
      options: ["75℃", "85℃", "90℃", "95℃以上"],
      type: "single",
      answer: "95℃以上"
  },
  {
      question: "____是己酸菌的生长因子，缺了它们就会严重影响其产酸能力。",
      options: ["苯甲醛", "乙醇", "生物素", "苯甲醇"],
      type: "single",
      answer: "生物素"
  },
  {
      question: "山西汾酒为代表的清香型大曲酒____的生产用曲是",
      options: ["以小麦、豌豆为原料的低温曲", "以小麦、大豆为原料的中温曲", "以大麦、豌豆为原料的低温曲", "以大麦、豌豆为原料的中温曲"],
      type: "single",
      answer: "以大麦、豌豆为原料的低温曲"
  },
  {
      question: "四川的“包包曲”属于____。",
      options: ["低温曲", "中温曲", "中温偏高温曲", "高温曲"],
      type: "single",
      answer: "中温偏高温曲"
  },
  {
      question: "清香地缸酒工艺是采用清蒸续楂，清香瓷砖窖池发酵采用混蒸混烧，浓香窖池酒采用____。",
      options: ["混蒸混烧", "清蒸续楂", "清蒸清楂"],
      type: "single",
      answer: "混蒸混烧"
  },
  {
      question: "中国白酒中丁酸乙酯含量最高的是____。",
      options: ["茅台酒", "汾酒", "董酒", "西凤酒"],
      type: "single",
      answer: "董酒"
  },
  {
      question: "白酒在存储过程中还发生缓慢的化学变化，主要是酒中含有酸，醇，酯，醛等发生氧化还原，____等作用，直到建立新的平衡。",
      options: ["酯化与水解等作用", "化合", "分解", "缔合"],
      type: "single",
      answer: "酯化与水解等作用"
  },
  {
      question: "尝酒时，酒进入口腔中味消失慢，当前杯酒样的味还没有完全消失时，又尝下一杯酒样，就会产生后效应；尝酒尝的多了，嗅觉味觉变得迟钝，准确性逐渐降低，甚至变的无知觉，这种现象叫做____。",
      options: ["顺序效应", "顺效应", "后效应"],
      type: "single",
      answer: "顺效应"
  },
  {
      question: "觉察阈值：引起感觉所需要的感官刺激的最小值。即测定中评价人员能够判断出待测样品与空白样品存在特征差别的最低浓度，____对其感官特征加以识别。",
      options: ["需要", "必须", "同时", "不需要"],
      type: "single",
      answer: "不需要"
  },
  {
      question: "制曲过程是各种生化反应发生过程，原料中淀粉、蛋白质分解为____。",
      options: ["还原糖", "氨基酸", "还原糖、氨基酸"],
      type: "single",
      answer: "还原糖、氨基酸"
  },
  {
      question: "直链淀粉平均含有____个葡萄糖单元。",
      options: ["200~980", "500~1600", "2000~10000"],
      type: "single",
      answer: "200~980"
  },
  {
      question: "影响风味物质感官强度的因素有：____、____。",
      options: ["温度、浓度", "温度、阈值", "阈值、浓度", "温度、挥发度"],
      type: "single",
      answer: "温度、浓度"
  },
  {
      question: "识别阈值：引起感觉并能加以识别的感官刺激的最小值。即测定中评价人员能够判断并描述出待测样品存在特征的____浓度。",
      options: ["最低", "最高", "中间值", "平均"],
      type: "single",
      answer: "最低"
  },
  {
      question: "呈味物质只有在____后才能刺激味蕾。",
      options: ["溶解", "分解", "吸收", "挥发"],
      type: "single",
      answer: "溶解"
  },
  {
      question: "玉米的胚芽中含有大量的____。",
      options: ["脂肪", "淀粉", "蛋白质", "糖分"],
      type: "single",
      answer: "脂肪"
  },
  {
      question: "一般来说，白酒中的乳酸含量较多，米香型白酒中乳酸占总酸量的____。",
      options: ["55%~68%", "65%~78%", "75%~88%", "85%~98%"],
      type: "single",
      answer: "75%~88%"
  },
  {
      question: "使用中温大曲生产的传统固态法白酒的典型代表是____大曲酒。",
      options: ["浓香", "清香", "酱香", "米香"],
      type: "single",
      answer: "浓香"
  },
  {
      question: "谷壳进行清蒸处理，应采用大火蒸____以上。",
      options: ["5min", "10min", "20min", "30min"],
      type: "single",
      answer: "30min"
  },
  {
      question: "在一定的比例浓度下，____含量的高低，标志着浓香型白酒品质的好坏。",
      options: ["己酸乙酯", "丁酸已酯", "乳酸乙酯", "乙酸乙酯"],
      type: "single",
      answer: "己酸乙酯"
  },
  {
      question: "酯的分子通式可写为____。",
      options: ["R-OH", "R-COOH", "R-COOR'", "R-CO-R'"],
      type: "single",
      answer: "R-COOR'"
  },
  {
      question: "醇的分子通式可写为____。",
      options: ["R-OH", "R-COOH", "R-COOR'", "R-CO-R'"],
      type: "single",
      answer: "R-OH"
  },
  {
      question: "白酒标准中固形物应小于____，一般不会呈咸味，但若超过1.0____g/L，而其中钠盐又占多数就可能呈咸味。",
      options: ["0.4g/L", "0.5g/L", "0.6g/L", "0.8g/L"],
      type: "single",
      answer: "0.4g/L"
  },
  {
      question: "酸的分子通式可写为____。",
      options: ["R-OH", "R-COOH", "R-COOR'", "R-CO-R'"],
      type: "single",
      answer: "R-COOH"
  },
  {
      question: "酯香调味酒贮存期必须在____以上，才能投入调味使用。",
      options: ["1个月", "3个月", "半年", "1年"],
      type: "single",
      answer: "1年"
  },
  {
      question: "白酒的涩味物质主要来自于____化合物。",
      options: ["醛类", "醇类", "酯类", "酚类"],
      type: "single",
      answer: "酚类"
  },
  {
      question: "白酒中微量香味物质含量极微，仅占总量的____左右。",
      options: ["1-25%", "3-4%", "4-5%", "5-6%"],
      type: "single",
      answer: "1-2%"
  },
  {
      question: "白酒中的辣味可能主要来自____。",
      options: ["醇类", "酸类", "醛类", "酯类"],
      type: "single",
      answer: "醛类"
  },
  {
      question: "在甜味物质中加入酸味物质是____。",
      options: ["相乘作用", "相杀作用", "变调作用", "对比作用"],
      type: "single",
      answer: "相杀作用"
  },
  {
      question: "白酒中杂醇油是____后经发酵而生成的。",
      options: ["原料中蛋白酶解成氨基酸", "淀粉酶解成还原糖", "木质素酶解成阿魏酸", "纤维素酶解成还原糖"],
      type: "single",
      answer: "原料中蛋白酶解成氨基酸"
  },
  {
      question: "食品及酒中的涩味，多是由酸、____、苦味三者不均衡，失去了合理比例所造成的。",
      options: ["甜味", "咸味", "辣味"],
      type: "single",
      answer: "甜味"
  },
  {
      question: "在白酒的香气特征中，绝大部分是以突出____香气为主的。",
      options: ["酯类", "酸类", "醇类", "醛类"],
      type: "single",
      answer: "酯类"
  },
  {
      question: "以木薯为原料生产的酒精，有害物质主要是____。",
      options: ["甲醇", "杂醇油", "氢氰酸", "重金属"],
      type: "single",
      answer: "氢氰酸"
  },
  {
      question: "____是生物细胞合成的具有高度催化活性物质的特殊蛋白质，是一种生物催化剂。",
      options: ["淀粉", "纤维素", "酶"],
      type: "single",
      answer: "酶"
  },
  {
      question: "新型白酒所用的酒精必须达到____标准水平的酒精。",
      options: ["食用级", "工业级", "医用级"],
      type: "single",
      answer: "食用级"
  },
  {
      question: "气相色谱仪有较高的灵敏度，是检测食品____成分的重要仪器。",
      options: ["口感", "风格", "香味"],
      type: "single",
      answer: "香味"
  },
  {
      question: "新型白酒勾兑时，使用的香料严格按照《食品添加剂使用卫生标准》使用，其代号为____。",
      options: ["GB10781.1", "GB10345.2", "GB2757", "GB2760"],
      type: "single",
      answer: "GB2760"
  },
  {
      question: "国家标准分为____。",
      options: ["强制性国家标准和地方性国家标准", "强制性国家标准和企业性国家标准", "企业性国家标准和地方性国家标准", "强制性国家标准和推荐性国家标准"],
      type: "single",
      answer: "强制性国家标准和推荐性国家标准"
  },
  {
      question: "苦的典型物质是____。",
      options: ["奎宁", "异戊醇", "异丁醇", "酪醇"],
      type: "single",
      answer: "奎宁"
  },
  {
      question: "气相色谱仪经常检测白酒中的____成份。",
      options: ["氨基酸组成份", "无机金属离子", "不挥发组成份", "挥发性香气成份"],
      type: "single",
      answer: "挥发性香气成份"
  },
  {
      question: "基酒贮存期____是造成酯下降的主要原因。",
      options: ["酯挥发", "酯氧化", "酯水解", "酯合成"],
      type: "single",
      answer: "酯水解"
  },
  {
      question: "基础酒在贮存过程中呈现酸____、酯水解降低的现象。",
      options: ["减少", "增高", "不变", "水解"],
      type: "single",
      answer: "增高"
  },
  {
      question: "白酒中的香味物质种类很多，随着科学技术的进步和对白酒香味成分的不断深入剖析，据粗略统计，到目前为止，清香型白酒中已检出____余种成分。",
      options: ["500", "700", "1000", "1200"],
      type: "single",
      answer: "700"
  },
  {
      question: "白酒中酯类化合物主要是____的产物。",
      options: ["生化产物", "物理产物", "原料转化产物"],
      type: "single",
      answer: "生化产物"
  },
  {
      question: "呈味物质之间的相互作用对食品风味产生不同的影响。这种影响存在以下现象____。",
      options: ["对比现象、相乘现象、消杀现象", "对比现象、相乘现象、变调现象", "对比现象、相乘现象、消杀现象、变调现象"],
      type: "single",
      answer: "对比现象、相乘现象、消杀现象、变调现象"
  },
  {
      question: "基酒贮存期对于四大酯而言，____、____的水解降低趋势较明显，平均每年降低3%左右。",
      options: ["乙酸乙酯、己酸乙酯", "乙酸乙酯、乳酸乙酯", "丁酸乙酯、己酸乙酯", "己酸乙酯、乳酸乙酯"],
      type: "single",
      answer: "己酸乙酯、乳酸乙酯"
  },
  {
      question: "甜的典型物质是____。",
      options: ["白砂糖", "面糖", "红糖", "木糖醇"],
      type: "single",
      answer: "白砂糖"
  },
  {
      question: "白酒中的酸可分为挥发酸和不挥发酸，挥发酸有甲、乙、丙、丁、戊、己酸等，其分子含量越大口味____，分子量____，刺激性____。",
      options: ["越软、越大、越强", "越强、越大、越软", "越软、越小、越强"],
      type: "single",
      answer: "越软、越小、越强"
  },
  {
      question: "在老熟过程中，确实发生了一些____反应，使酒的风味有了明显的改善，但不能把老熟只看成是单纯的化学变化，同时还有物理变化。",
      options: ["氧化", "氧化还原", "化学", "物理"],
      type: "single",
      answer: "氧化还原"
  },
  {
      question: "异常发酵产的白酒，会产生催泪性刺激物质，它们是____所引起的。",
      options: ["甲醇", "氰化物", "丙烯醛", "丙烯醛及丙烯醇"],
      type: "single",
      answer: "丙烯醛及丙烯醇"
  },
  {
      question: "在相同pH值条件下，酸味的强度顺序为：____。",
      options: ["醋酸＞甲酸＞乳酸", "乳酸＞甲酸＞醋酸", "甲酸＞醋酸＞乳酸"],
      type: "single",
      answer: "醋酸＞甲酸＞乳酸"
  },
  {
      question: "丁酸的分子式是____。",
      options: ["CH3COOH", "CH3C00C2H5", "CH3(CH2)2COOH"],
      type: "single",
      answer: "CH3(CH2)2COOH"
  },
  {
      question: "固态法发酵的小曲酒到____后才确立为小曲清香型。",
      options: ["1979年", "1984年", "1992年"],
      type: "single",
      answer: "1992年"
  },
  {
      question: "酱香型酒的标准评语中有一条是特有的，那就是____。",
      options: ["回味悠长", "空杯留香持久", "醇厚净爽"],
      type: "single",
      answer: "空杯留香持久"
  },
  {
      question: "米香型酒香气的标准用语是____。",
      options: ["清香纯正", "醇香秀雅", "蜜香清雅", "幽雅舒适"],
      type: "single",
      answer: "蜜香清雅"
  },
  {
      question: "白酒的香型确立起始于____全国评酒会。",
      options: ["第2届", "第5届", "第3届"],
      type: "single",
      answer: "第3届"
  },
  {
      question: "固、液结合法生产的白酒是在____全国评酒会上开始被评为国家优质酒。",
      options: ["第4届", "第2届", "第3届"],
      type: "single",
      answer: "第3届"
  },
  {
      question: "麸曲法白酒是在____开始被评为国家优质酒的。",
      options: ["第3届全国评酒会", "第4届全国评酒会", "第2届全国评酒会"],
      type: "single",
      answer: "第2届全国评酒会"
  },
  {
      question: "有机酸中，其口味特征为酸味较重，入口带甜，是____。",
      options: ["己酸", "乙酸", "乳酸", "丁酸"],
      type: "single",
      answer: "乳酸"
  },
  {
      question: "第4届全国评酒会前经考核择优录取了国家评酒委员____。",
      options: ["17名", "44名", "30名"],
      type: "single",
      answer: "30名"
  },
  {
      question: "浓香型酒中最容易出现的泥臭味主要来自于：____。",
      options: ["窖泥和操作不当", "原料关系"],
      type: "single",
      answer: "窖泥和操作不当"
  },
  {
      question: "下列白酒中不属于浓香型的是____。",
      options: ["洋河大曲", "西凤酒", "剑南春", "五粮液"],
      type: "single",
      answer: "西凤酒"
  },
  {
      question: "己酸乙酯为总酯含量最高的白酒是____。",
      options: ["米香型", "清香型", "浓香型", "酱香型"],
      type: "single",
      answer: "浓香型"
  },
  {
      question: "己酸乙酯是浓香型的主体香，却是____的杂味。",
      options: ["浓香型", "酱香型", "米香型", "清香型"],
      type: "single",
      answer: "清香型"
  },
  {
      question: "白酒典型风格取决于____及量比关系。",
      options: ["原料配比", "香味成份"],
      type: "single",
      answer: "香味成份"
  },
  {
      question: "甘油是酵母进行发酵过程的产物，pH及温度越高时，生成甘油____。",
      options: ["越少", "不变", "不确定", "越多"],
      type: "single",
      answer: "越多"
  },
  {
      question: "酚类是____跟苯环相连的芳香族环烃的羟基衍生物。",
      options: ["羟基", "羧基", "醛基", "二硫基"],
      type: "single",
      answer: "羟基"
  },
  {
      question: "乙醛主要是由酒精发酵的中间产____经脱羧而生成；另外乙醇被氧化时也可产生乙醛。",
      options: ["丙酮酸", "丙醇", "丙烯醛", "丙酸"],
      type: "single",
      answer: "丙酮酸"
  },
  {
      question: "缩醛是由____和醛缩合而成的。",
      options: ["酸", "醛", "醇", "酯"],
      type: "single",
      answer: "醇"
  },
  {
      question: "____主要是由于己酸菌在厌氧条件下经发酵作用而产生的。",
      options: ["乙醇", "乙醛", "己酸", "己酸乙酯"],
      type: "single",
      answer: "己酸"
  },
  {
      question: "乳酸主要是乳酸菌在厌氧条件下将糖代谢中间产物____还原而产生。",
      options: ["丙醇", "丙酸", "丙酮酸", "丙烯醛"],
      type: "single",
      answer: "丙酮酸"
  },
  {
      question: "醋酸菌将____氧化为乙酸。",
      options: ["乙醛", "乙醇", "乙酸乙酯", "己酸乙酯"],
      type: "single",
      answer: "乙醇"
  },
  {
      question: "杂醇油是指含____个以上的碳原子的高级醇类的总称。",
      options: ["1", "2", "3", "4"],
      type: "single",
      answer: "2"
  },
  {
      question: "呈香呈味物质由____检出的最低浓度称为阈值。",
      options: ["嗅觉", "味觉", "感官", "色泽"],
      type: "single",
      answer: "感官"
  },
  {
      question: "评酒的主要依据是____。",
      options: ["产品质量标准", "微量香味成分"],
      type: "single",
      answer: "产品质量标准"
  },
  {
      question: "在含量相同条件下，决定香味强度的是____。",
      options: ["温度", "阈值"],
      type: "single",
      answer: "阈值"
  },
  {
      question: "苦味感的味觉神经分布在____部位。",
      options: ["舌尖", "舌面", "舌边", "舌根"],
      type: "single",
      answer: "舌根"
  },
  {
      question: "对甜味敏感的部位是____。",
      options: ["舌尖", "舌面", "舌边", "舌根"],
      type: "single",
      answer: "舌尖"
  },
  {
      question: "LCX品酒法中酒的编号是____。",
      options: ["8位数", "9位数", "10位数", "11位数"],
      type: "single",
      answer: "11位数"
  },
  {
      question: "淀粉酶产生菌在曲药中主要是霉菌和____。",
      options: ["球菌", "细菌", "放线菌", "酵母菌"],
      type: "single",
      answer: "细菌"
  },
  {
      question: "蛋白水解酶产生菌为细菌和____。",
      options: ["球菌", "细菌", "放线菌", "酵母菌"],
      type: "single",
      answer: "放线菌"
  },
  {
      question: "常用的品酒方法是____",
      options: ["一杯法", "两杯法", "三杯法", "五杯法"],
      type: "single",
      answer: "五杯法"
  },
  {
      question: "美拉德反应最佳pH条件为____。",
      options: ["5.0-8.0", "2.0-4.0", "7.0-9.0"],
      type: "single",
      answer: "5.0-8.0"
  },
  {
      question: "GB2757蒸馏酒及配制酒卫生标准中规定以谷类为原料的酒甲醇≤____g/100mL。",
      options: ["0.05", "0.08", "0.07", "0.06"],
      type: "single",
      answer: "0.06"
  },
  {
      question: "浓香型曲酒的主体香味成分是____。",
      options: ["丁酸乙酯", "乙酸乙酯", "己酸乙酯", "乳酸乙酯"],
      type: "single",
      answer: "己酸乙酯"
  },
  {
      question: "“轮轮双轮底”的底糟用____对提高质量是很有效的。",
      options: ["低温曲", "中温曲", "高温曲"],
      type: "single",
      answer: "高温曲"
  },
  {
      question: "产酯较优的环境条件酸度为____，酒精含量10%左右。",
      options: ["1.0", "2.0", "3.0", "4.0"],
      type: "single",
      answer: "4.0"
  },
  {
      question: "酒在口中停留的时间也应保持一致，一般____秒左右为宜。",
      options: ["10", "20", "30", "40"],
      type: "single",
      answer: "10"
  },
  {
      question: "清香型白酒曲药使用多采用____大曲。",
      options: ["高温", "低温", "中温"],
      type: "single",
      answer: "低温"
  },
  {
      question: "白酒的辛辣气味的来源是____。",
      options: ["杂醇油", "丙烯醛", "乳酸乙酯", "乙醛"],
      type: "single",
      answer: "乙醛"
  },
  {
      question: "采用中和滴定指示剂测定法测定白酒中的总酯量，测定结果以____计表示为g/L保留两位小数。",
      options: ["乙酸乙酯", "己酸乙酯", "丁酸已酯", "乳酸乙酯"],
      type: "single",
      answer: "乙酸乙酯"
  },
  {
      question: "最适宜的品酒温度____。",
      options: ["15-20℃", "20-25℃", "25-30℃", "30-35℃"],
      type: "single",
      answer: "20-25℃"
  },
  {
      question: "采用中和滴定测定法测定白酒的总酸量,测定结果以____表示为g/L保留两位小数。",
      options: ["乙酸", "己酸", "丁酸", "乳酸"],
      type: "single",
      answer: "乙酸"
  },
  {
      question: "白酒中组分含量最多的是乙醇和水，占总量的____左右。",
      options: ["98%", "93%", "99%", "97%"],
      type: "single",
      answer: "98%"
  },
  {
      question: "浓香型白酒的窖香香气主要来源于____。",
      options: ["混蒸混烧", "续糟配料", "泥窖发酵", "固态发酵"],
      type: "single",
      answer: "泥窖发酵"
  },
  {
      question: "缩醛类中以的____含量最多。白酒在储存老熟过程中不断增加。它赋予白酒清香柔和感。",
      options: ["丙醛", "乙缩醛", "乙醛", "糠醛"],
      type: "single",
      answer: "乙缩醛"
  },
  {
      question: "白酒中酸含量不当，不能导致：____。",
      options: ["抑制放香性", "味道粗糙", "略显苦味", "甜味"],
      type: "single",
      answer: "甜味"
  },
  {
      question: "新型白酒调味时加入微量酒尾，其主要作用是____。",
      options: ["增加酸度", "调整后味"],
      type: "single",
      answer: "调整后味"
  },
  {
      question: "含高级醇高的酒，常常带来使人难以忍受的苦涩怪味，即所谓“____”。",
      options: ["生青味", "杂醇油味", "泥臭味", "酒尾味"],
      type: "single",
      answer: "杂醇油味"
  },
  {
      question: "同一物质在一种食品中是香气，而在另一种食品中则为臭气，这称之为香味的____现象。",
      options: ["复合", "变迁", "解析"],
      type: "single",
      answer: "变迁"
  },
  {
      question: "仪器分析工作要求测定结果的误差____。",
      options: ["愈小愈好", "等于0", "略大于允许误差", "在允许误差范围内"],
      type: "single",
      answer: "在允许误差范围内"
  },
  {
      question: "在蒸馏过程中己酸乙酯和乙酸乙酯馏出量与酒精浓度成____。",
      options: ["反比", "正比", "不确定", "根据情况而定"],
      type: "single",
      answer: "正比"
  },
  {
      question: "____如4-乙基愈创木酚、香草醛等是酱香白酒的重要物质，虽然含量甚微，主要起助香作用，同时增加酒味的绵长感。",
      options: ["杂环类化合物", "芳香族化合物", "萜烯类化合物", "吡嗪类化合物"],
      type: "single",
      answer: "芳香族化合物"
  },
  {
      question: "____指具有某种独特香味，能明显起到决定成品酒风格特征的酒。主要是组合体系中较好的酒和贮存时间长的老酒。",
      options: ["大宗酒", "带酒", "搭酒", "基酒"],
      type: "single",
      answer: "带酒"
  },
  {
      question: "以曲心温度在____中范围内控制微生物生长制得的大曲为中温大曲。",
      options: ["40℃~50℃", "50℃~60℃", "20℃~40℃", "60℃以上"],
      type: "single",
      answer: "50℃~60℃"
  },
  {
      question: "LCX品评表中必涂的项目数量是____。",
      options: ["72项", "20项", "24项", "76项"],
      type: "single",
      answer: "20项"
  },
  {
      question: "醋酉翁又称为____。",
      options: ["2,3-丁二醇", "2,3-丁二酮", "3-羟基丁酮", "3-甲基丁醇"],
      type: "single",
      answer: "3-羟基丁酮"
  },
  {
      question: "白酒中的辣味可能主要来自____。",
      options: ["醇类", "醛类", "酸类", "酯类"],
      type: "single",
      answer: "醛类"
  },
  {
      question: "β-苯乙醇有发闷____香气。",
      options: ["水果", "爆米花", "菠萝", "玫瑰"],
      type: "single",
      answer: "玫瑰"
  },
  {
      question: "窖泥功能菌主要是____，它是窖内生香的重要微生物。",
      options: ["乳酸菌", "乙酸菌", "梭状芽孢杆菌", "地衣芽孢杆菌"],
      type: "single",
      answer: "梭状芽孢杆菌"
  },
  {
      question: "产酯较佳的酒精含量为____左右。",
      options: ["5%", "10%", "15%", "20%"],
      type: "single",
      answer: "10%"
  },
  {
      question: "因另一呈味物质的存在使味感____的作用称之为相乘作用。",
      options: ["显著增强", "显著减弱", "消失", "改变"],
      type: "single",
      answer: "显著增强"
  },
  {
      question: "甲醇经氧化生成甲醛后，再与品红亚硫酸反应生成____，与标准系列比较定量。",
      options: ["红色化合物", "粉红色化合物", "蓝紫色化合物", "紫色化合物"],
      type: "single",
      answer: "蓝紫色化合物"
  },
  {
      question: "对白酒中锰的测定，是试样经消化后在____下二价锰被过碘酸钾氧化成七价锰呈紫红色，与标准比较定量。",
      options: ["弱碱性条件", "中性条件", "碱性条件", "酸性条件"],
      type: "single",
      answer: "酸性条件"
  },
  {
      question: "高粱壳中微量的单宁经蒸煮、发酵后，可转变为____等芳香物质。",
      options: ["甲醇", "丁香酸", "苯甲醛", "糠醛"],
      type: "single",
      answer: "丁香酸"
  },
  {
      question: "对白酒中铅含量的测定，一般使用____法测定白酒中铅的含量。",
      options: ["EDTA滴定法", "双硫腙光度", "酸碱滴定法", "邻菲罗啉分光光度法"],
      type: "single",
      answer: "双硫腙光度"
  },
  {
      question: "基础酒在贮存过程中呈现____的现象。",
      options: ["酸增酯增", "酸减酯减", "酸减酯增", "酸增酯减"],
      type: "single",
      answer: "酸增酯减"
  },
  {
      question: "兼香型白酒风格特征的核心是____。",
      options: ["酱浓谐调", "绵甜爽净", "回味悠长"],
      type: "single",
      answer: "酱浓谐调"
  },
  {
      question: "在名优白酒中，总酸含量最高的酒是____。",
      options: ["茅台", "泸州特曲老窖", "董酒", "桂林三花酒"],
      type: "single",
      answer: "董酒"
  },
  {
      question: "通过分析数据表明，在有较明显焦香、糊香气味的香型白酒中，____类化合物的种类及绝对含量相应较高。",
      options: ["含硫", "吡嗪", "帖烯", "醛酮"],
      type: "single",
      answer: "吡嗪"
  },
  {
      question: "____的风格特点是以低级酯和高级醇为主要香气的一种白酒。",
      options: ["凤香型白酒", "浓香型白酒", "酱香型白酒", "清香型白酒"],
      type: "single",
      answer: "凤香型白酒"
  },
  {
      question: "高级醇的生成与酵母的____代谢密切相关。",
      options: ["糖", "脂肪", "氨基酸"],
      type: "single",
      answer: "氨基酸"
  },
  {
      question: "药香的董酒总酸含量较高，尤其____较为突出。",
      options: ["乙酸", "丙酸", "丁酸", "己酸"],
      type: "single",
      answer: "丁酸"
  },
  {
      question: "原料中的____，在微生物的酶或热能的作用下，能分解成果胶酸和甲醇。",
      options: ["多糖", "果胶质", "脂肪"],
      type: "single",
      answer: "果胶质"
  },
  {
      question: "原料的入库水份应在____以下，以免发热霉变，使成品酒带霉、苦味及其他邪杂味。",
      options: ["14%", "15%", "16%"],
      type: "single",
      answer: "14%"
  },
  //判断题
  {
    question: "酒精与水混合，其体积缩小，不释放热量。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "老白干酒陈酒有陈香，类似于枣香、蜜甜香，主体香突出、融和，口感细腻，圆润，协调，醇和，余味悠长。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "尝评员不能暴饮暴食，更不能酗酒，经常保持视觉、嗅觉和味觉的灵敏状态。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "糖变为酒的反应，主要是靠酵母菌细胞中的酒化酶系的作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "为了加速基酒的储存老熟，避免由于管理不善影响基酒质量，在基酒储存过程中应加强库房管理，定期对储存基酒质量的变好情况进行鉴评，加强储存组合，提高基酒的质量。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型、清香型和酱香型酒新酒气味突出具有明显的燥辣等不愉快感，贮存一年左右风味较之有改善。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒精发酵的主体是细菌。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "高梁皮壳中单宁含量较多,有收敛性，能将蛋白质凝固。但微量单宁存在时，其发酵产物能赋予白酒特有的香气。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "传统的甑桶操作中，酒中四大酯在馏分中的分布规律是酒头＞酒身＞酒尾。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "在各种香型的白酒中，凤香型白酒的固形物含量是最低的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酒头中杂质含量多，杂味重，但其中含有大量的芳香物质，它可提高原酒的前香和喷头。酒头调味酒贮存1年以上就可用做原酒的调味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒精发酵过程中，由于原料中蛋白质分解或微生物菌体蛋白水解，而生成氨基酸，氨基酸进一步水解放出氨，脱羧基，生成相应的醇。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "好酒和差酒勾兑会使酒变好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "麸曲适合于高档白酒的酿制。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "食用酒精的等级越高，其中含有的有害物质越少。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "差酒与差酒勾兑，有时可能也会变成好酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "高级醇是一类高沸点物质，是白酒和其他饮料酒的重要香味来源。高级醇是指除乙醇以外的，具有3个碳以上的一价醇类。这些醇类包括正丙醇、仲丁醇、戊醇、异戊醇、异丁醇等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "品评一般可分为明评和暗评。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒的品评方法有一杯品评法，两杯品评法，三杯品评法，顺位品评法。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒的化学成分主要是酒精和水，占总量的98%以上，其余成分主要包括有机酸类，酯类，醇类、醛酮类，芳香族化合物，含氮化合物，多元醇及硫化物等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒在贮存过程中由于主要酯类的水解作用，导致酯减少，酸增加。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒香味成分的量比关系是影响白酒质量及风格的关键。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "将49.83ml的水与53.94ml的无水乙醇混合时，因为分子间的缔合作用，其总体积不是103.77ml而是100ml。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "品评酒的顺序应是一看、二闻、三尝、四记。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "为了增加清香型白酒的香味，也允许酒中存在一定含量的己酸乙酯。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "老白干酒的香味成分是以己酸乙酯为主体香气。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "清香型白酒的主体香气成分以乙酸乙酯，己酸乙酯为主和复合香气。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "舌尖和边缘对咸味较为敏感，靠腮两边对苦敏感，舌根部位对酸味最敏感。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "浓香型酒体风格特征是：芳香、醇厚、圆润。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中酸的主要功能是消除苦味、调节后味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "很多能产生嗅觉的物质易挥发、易热解、但不与其它物质发生作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "所有味感物质作用浓度都很低。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "阈值越高，说明该物质越易挥发。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒的陈酿不是形成白酒风味的主要途径。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "蔗糖中加入少量的食盐甜度增加，这种想象叫对比现象。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "大曲的糖化力越高越好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒的风味物质千差万别，主要是发酵工艺条件的不同造成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "辣味不属于味觉，是刺激鼻腔和口腔粘膜的一种痛觉。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "嗅觉的形成一般认为是呈味物质作用于舌面上的味蕾而产生的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "味觉感是指挥发性物质刺激鼻粘膜，再传到大脑的中枢神经而产生的综合感觉。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "人能感觉到香气，主要是由于鼻腔上部嗅觉上皮的嗅觉细胞起作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒精与水缔合度最大时的酒度为55—57%。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "蛋白糖的使用，对酒精含量、酸、酯、甲醇等理化指标均有影响。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "新酒的风味与老熟酒的风味是相同的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "初评时认为异味大而不合格的酒，经贮存后可能会变成香醇的好酒；好的新酒，经贮存后酒味也会变得寡淡。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "胶体本身是一导体，当白酒酒体异常稳定的情况下，应有一稳定的电导率，因而测定酒体电导率，可知酒体的胶溶状态及稳定性。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "饮入甲醇30mL即可致人失明。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "如果酒中某种香气成分在它的阈值以下进行浓度变化，不管它的浓度如何改变，不会引起人们在感官品评时的明显反应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "通过串蒸使酒精去杂增香，是生产新型白酒的主要方法之一。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "某种香气成分的阈值较小，而在酒中的含量又较高时，则这种香气的气味强度就高，它对酒的香味影响作用大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "先培菌糖化、后发酵法是生产米香型白酒的典型生产工艺。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "原料中的脂肪，在微生物的酶或热能的作用下，能分解成果胶酸和甲醇。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒中各种香味成分的强弱程度，称为该香味成分的香味强度。其大小用该香味成分的含量与阈值之比来表示，称为香味单位。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "糠醛是原料皮壳和稻壳中的多聚戊糖在蒸煮过程中受热分解或在发酵过程中由微生物发酵形成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在尝酒时，应以嗅觉为主，视觉和味觉为辅地进行认识和判断。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的糠杂味仅是因为生产中用糠量过大，清蒸辅料不彻底造成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "蒸粮的目的是使粮粒进一步吸收水分，受热膨胀，达到粮食糊化，淀粉碎裂率高的目的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "兼香型白酒的制曲原料是大麦。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "各种白酒的香气主体成分，大多数是酯类物质，酯类在白酒中的含量较高，但各种酯的阈值不大一样，因此出现各种不同风格的各种香型白酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒的陈香味可以通过勾调出来。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "尝评完一轮后，保持足够的休息时间，一般要休息15-30min左右，让味觉充分休息和恢复。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的各种香味成分主要来源于粮食、曲药、辅料、发酵、蒸馏和贮存，形成了如糟香、窖香、陈味、浓香等不同的香气和口味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "老酒的标记峰为二乙氧基甲烷峰，新酒在5年内无此峰。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中发甜味团为CHOH—CHOH，助甜味团为CHOH。纯乙醇就有甜味的感觉，随着羟基（OH）数增加，其甜味也增加，其顺序为乙醇<乙二醇<丙三醇<戊五醇<已六醇。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中呈涩味的物质主要有：乙酸及其酯类、单宁、糠醛、杂醇油，也都容易使酒中出现涩味和苦味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "浓香型白酒中，它的特征性化合物是己酸乙酯。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "具有咸味的全部是食盐。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "基础酒在储存过程中，主要的化学变化是氧化、还原、酯化、螯合等作用，使酒中醇、酸、酯、醛类等成分达到新的平衡，同时有的成分消失或增减，有的成分新产生。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "原料是大曲微生物的主要来源。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "醇类化合物随着碳链的增加，气味逐渐由麻醉样气味向果实气味和脂肪气味过渡，沸点也逐渐增高，气味也逐渐持久。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的多元醇类，以甘露醇（即己六醇）的甜味最浓。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "果胶是半乳糖醛酸甲酯的缩合物，在微生物（如黑曲霉）的果胶酯酶或热的作用下，能分解成果胶酸和甲醇。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "微生物在厌氧条件下发酵可生成多元醇，多元醇在白酒中呈甜味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "泥窖建造的时间越长，酿造的浓香型原酒质量就越好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "在同一香型不同酒中，若“色谱骨架成分”完全相同，则“复杂成分”也完全相同。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "目前发现白酒中含有300多种微量成分，它们只占白酒总质量的3%—5%。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "化验分析方法要统一，标准溶液须严格校正，尽量克服分析误差。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "大曲质量好，可多用曲；大曲质量差，可少用曲。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "微生物分离的常用方法统称为稀释分离法。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "好酒与好酒之间组合有可能变差，这主要是各自相对协调的微量成分经过组合后破坏了微量成分原来的平衡关系。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型白酒中，含量较高的酯类组分是己酸乙酯、乳酸乙酯、乙酸乙酯、丁酸乙酯。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在浓香型白酒中，若乳酸乙酯含量超过一定范围时，酒体会呈现出香气不突出。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "边糖化边发酵是主发酵期的基本特征。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型白酒中，窖香的主要成分己酸乙酯和乙酸乙酯。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒感官不合格的产品不必进行理化检验，直接判为不合格品。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在同一酒度、同样的浓度下，阈值小的香味成分，其香味强度大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在酒体中，酯类化合物与其他组分相比较绝对含量较低，而且酯类化合物大都属较易挥发和气味较淡的化合物。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒中的微量成分在勾贮过程中，不会产生分解或缔合反应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "每一种单体香味成分，虽然各自的阈值不同，但所呈现的香味是一样的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "呈香单位是呈香浓度与阈值双方变动的结果。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "阈值是检查食品中众多香味单位成分的呈香、呈味的最高浓度，阈值越高的成分其呈香呈味的作用越大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "制曲时关闭门窗是为了卫生、安全。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "硬度过高的水一定要经软化后才能作降度用水。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "根据勾调好的大综酒的风格特征确定添加搭酒类型后，通过添加、尝评确立其最大用量，原则上搭酒应尽量多用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒存放过程中所有的酯都增加。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒随着存放时间的延长，酒中的酸增加越多，酸的增加来源于酯的水解和酒的损失。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "高级醇主要来源于氨基酸发酵，故控制原料中蛋白质含量可以控制高级醇的生成。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "甲醇的生成主要来自果胶的分解。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "乙醇微甜，遇到乙醛时则呈燥辣味，新酒中的燥辣味与此有关。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒中的酸味物质均属有机酸，酸味适中可使酒体浓厚、丰满。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒在老熟过程中采用陶坛与大容器（金属）连续分质贮存的方法为好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "乳酸在转酰基酶作用下生成乳酰辅酶A，再在酯酶催化下与乙醇合成乳酸乙酯。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "乙酸乙酯的生物合成首先是丙酮酸氧化脱羧为乙酰辅酶A，或丙酮酸脱羧为乙醛。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酸味强度的顺序是醋酸›甲酸›乳酸›草酸›无机酸。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "由于黄水中含有许多醇、醛、酸、酯等香味成分，尤其含有丰富的有机酸，可赋予酒体浓厚感。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中重要的羰基化合物和缩醛类物质主要是乙醛和乙缩醛。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "香味成分在水中与在30%酒精溶液中所测定的阈值是相同的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "典型的浓香型白酒的风格应是：无色（或微黄）透明，无悬浮物，无沉淀，窖香浓郁，具有以己酸乙酯为主体、纯正协调的复合香气。入口绵甜爽净，香味协调回味悠长。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在贮存过程中由于低沸点的醛类、硫化物的挥发，使酒体变得纯净爽口；众多微量芳香组分相互结合，达到平衡而使酒体更协调。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "羰基类化合物是构成白酒口味的重要呈味物质，主要赋予口味以刺激感和辣感，同时可以促香、提香。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型白酒一般分为多粮型和单粮型，因为生产中所用原料品种比例与控制的工艺技术要要素不同，但是其风格特征没有差异。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酱香型白酒生产工艺特点：三高指的是高温制曲、高温堆积、高温馏酒、三低指的是出酒率低、发酵温度低、糖化力低、三多一少指的是轮次多，用曲多，耗粮多，用糠少。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "醇类化合物的沸点比其他组分的沸点低，易挥发，可以在挥发过程中“拖带”其他组分的分子一起挥发，起到“助香”作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "凤型酒的丙酸羟胺特征性成分来自发酵容器。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒中适当的苦味也是不允许的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "浓香型白酒品质及生产工艺关键点：三老指的是老窖、老糟、老酒，三低指的是低温入窖，低温发酵、低温馏酒，一长二多一少指的是单排发酵期最长，工艺类型多，配糟多，优质品率最少。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "全国评酒会第一届不分香型，第二、三届开始分香型评酒。第四届、第五届全国评酒开始采用国家质量标准。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "有异杂味和不协调的白酒，不是好白酒，这是基本条件。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "清香型白酒酿造的关键点：二清指的是清蒸两排清、七诀指的是水必得其甘、曲必得其时、粮必得其实、器必得其洁、缸必得其湿、火必得其缓，一低指的是润糁温度低。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "中国酒业协会《白酒年份酒》团体标准白酒年份酒定义：以传统白酒工艺酿造，经贮存一年及以上基酒勾调而成，标注年份为所用主体基酒最长酒龄，不直接或间接添加食用酒精及非自身发酵产生的呈色呈香呈味物质，具有本品固有 风格特征的白酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒在老熟过程中的变化，大体分物理变化和化学变化两个方面。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒中的涩味，多是由酸味、甜味、苦味三者不均衡，失去了合理比例所造成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的味可分为：醇（醇厚、醇和、绵柔等）、甜、净、协调、味杂、涩、苦、辛等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酯类是白酒中香味的重要组份，在白酒中，除乙醇和水之外，酯的含量占第三位，现在白酒中检出的酯类有45种以上。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "任何白酒都要做到醇、甜、净、爽、协调。这五个方面缺一不可。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒中的挥发酸，分子越小酸味越小。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒在老熟过程中的物理变化包括酯化和水解。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "要形成一个产品独特的风味特征，必须具备四个方面的关键因素：即①粮食②发酵设备③发酵剂④独特的生产工艺。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "豉香型白酒的β-苯乙醇含量比米香型的酒高。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "品评技巧主要表现在快速、准确上，首先看色然后闻香，再尝味，最后记录，在品味时，先从香气淡的开始，按闻香好坏排队，由淡而浓反复几次。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中助香成分起着烘托、缓冲、平衡三大作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中甲硫基丙醇是由蛋氨酸经生化反应而生成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酱香型白酒由酱香、醇甜、窖底香三种典型体组成。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "如果先评甲酒、后评乙酒，会发生偏爱先评或后评酒的这种心理作用，称之为顺序效应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "小曲所含的微生物主要是霉菌和酵母菌。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中杂环类化合物种类多含量高是因制曲时温度高，各种生化反应发生的结果，所以酱香型、浓酱结合兼香型，均使用高温大曲。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓、清、酱、米是4大基本香型。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "董酒采用大、小曲两种工艺并用和特殊的串香工艺。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒品评是利用人的感觉器官，按照各类白酒的质量标准来鉴别白酒质量优劣的一门检测技术。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "愈创木酚等酚类化合物只有酱香型白酒中有，所以它是酱香型白酒主要香气成分。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "“窖香”、“糟香”、陈香“等，都可用食用香料调配出来。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒香型形成的关键物质基础是发酵设备。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "大小曲混用工艺，又称为混合曲法。主要是利用大曲糖化力好，出酒率高，小曲生香好，增加酒的香味等工艺特点生产小曲酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "窖泥中的甲烷菌和己酸菌数量是判断老窖成熟的标志。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酱香型酒生产中，用曲量大，因其成品曲的香气是酱香的主要来源之一。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "由于感官疲劳，评酒的准确性逐渐降低就会产生后效应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "一般说入窖粮糟中1%的淀粉浓度就意味着入窖后品温就会升高2%左右。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "豉香型酒的“豉香”主要来源于所用的原料和发酵设备。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "人的舌尖部对苦味最敏感。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "浓香型生产工艺中，一般采用“低温入窖”，可控制发酵过程的前缓、中挺、后缓落。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "调味酒的用量一般控制在1‰以内，就会使酒质在某一点上或某一方面有明显的提高或者改善，以弥补酒的不足。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "丁酸乙酯是浓香型白酒的香气成分之一，其较高时呈水果香味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "基础酒的好坏是大批成品酒是否达到酒体设计方案规定的质量标准的关键。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的各种有机酸，在发酵过程中虽是糖的不完全氧化物，糖是形成有机酸的唯一原始物质。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "中国白酒的风味研究认识：骨架风味物质的复杂构成；健康研究认识：多活性物质的复杂构成。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "色谱骨架中复杂成分主要是指白酒中含量大于2-3mg／lOOml的所有成分。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酿酒原料在蒸煮过程中，原料开始吸水膨胀，蒸煮结束后，原料被不断软化，大部分淀粉失去原有状态。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "原料淀粉具有不同的形状和大小。形状有圆形（如甘薯淀粉颗粒）、椭圆形（玉米淀粉颗粒）和多角形（高粱淀粉颗粒）3种。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒精发酵的主体是酵母菌。从酵母菌中可以分离出20～30种酶，都能直接参与酒精的发酵。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "在利用淀粉质原料生产酒精时，必须把淀粉转化成可发酵性糖，才能被酵母利用来进行酒精发酵。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酵母菌体内与酒精发酵关系密切的酶主要有两类：一类为水解酶，如蔗糖酶、麦芽糖酶、肝糖酶；另一类为酒化酶，主要包括己糖磷酸化酶、氧化还原酶、烯醇化酶、脱羧酶及磷酸酶等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "采用活性炭处理基酒可以有效提高基酒中低级脂肪酸乙酯的含量。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "中国白酒是以2%微量成分为分散相分散到98%以水和乙醇为分散介质的分散体系",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "衡量香味成份在酒中呈香强弱的尺度，是含量与阈值两方面决定的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型优质酒可以用泥底条石窖来生产。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒中有糠杂味可能是生产中用糠量过大，清蒸辅料不够所造成的",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "淀粉是由葡萄糖基组成的高分子物质。它广泛地存在于植物种子（如高粱、大米、玉米、小麦等）、块根（如红薯、木薯等）、块茎（如马铃薯）里。淀粉是由直链淀粉、支链淀粉与少量的矿物质和脂肪酸等混合形成的颗粒状淀粉颗粒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "我国固态发酵蒸馏酒的香气成分和其他国家的蒸馏酒相比具有以下特征：依据常规分析我国白酒中总酸、总酯、总醛含量低，高级醇偏高。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酒类含有芳香气味成分，其气味成分是酿造过程中由微生物发酵产生的代谢产物，如各种酶类等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒中的各种微量成分的种类以及它们之间不同的量比关系决定了白酒具有不同的风格与香型。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "如果先评甲酒、后评乙酒，会发生偏爱先评或后评酒的这种心理作用，称之为顺序效应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酒体设计主要包括尝评、组合、调味三个部分，它们是一个不可分割的有机整体。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在浓香型白酒中，它的香气主要是由酯类物质所决定，酯类的绝对含量占各成分含量之首，其中己酸乙酯的含量又占各微量成分之冠。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "所有风味物质与温度有关，都是随温度的升高“阈值” 降低。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酒精和乙酸同时出现时，即一开始有酒精，不会马上就有乙酸出现。但当糖分发酵一半时，乙酸的含量最高；在发酵后期，酒精较多时，乙酸含量较少。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "随着酿酒技术发展白酒各香型之间相互借鉴，融合适应消费需求已成为发展方向。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在酿酒发酵中，由醇醛缩合酶催化乙醛与三分子乙醇缩合而生成乙缩醛。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒香味成分的量比关系是影响白酒质量及风格的关键。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "人的品酒能力，从生理角度上讲因其味觉随年龄的增长而增长，因此年长者比年轻者更为准确。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "高粱中若单宁含量过多，能抑制酵母发酵，并在大汽蒸馏时会被带入酒中，使酒带苦涩味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "由于中国白酒采用传统工艺生产，所形成的香味物质繁多，所以鉴定酒质优劣的唯一方法就是感官尝评。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "在10%糖中加入0.15%食盐，可使甜味增大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒饮时酸味突出，主要是乙酸量大，产生的原因主要是生产卫生差，或配料淀粉浓度高，蛋白质过多下窖温度高，曲子、酵母杂菌过多，发酵期过长，糊化不彻底所致。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "芝麻香型风味特征：闻香有以乙酸乙酯为主要酯类的淡雅香气，香气中带有似“炒芝麻”的气味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "芝麻香型酒的感官评语是：清澈（微黄）透明，芝麻香突出，幽雅醇厚，甘爽谐调，尾净具有芝麻香特有风格。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "己酸已酯过大时（大于100mg/L）,浓香露头使芝麻香浮香明显，口味较绵甜，也压制焦糊味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "一些带苦味、涩味、酸味等杂味的酒一定都是坏酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "在生产过程中加强工艺管理，对每个环节都要严格按操作规程的标准来操作，对生产出典型的芝麻香白酒起极其重要的作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "人们把某种呈香呈味物质，能够刺激人的嗅觉或/和味觉，使人感觉到它的存在的最低含量叫做“阈值”。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中酸过量会抑制酒的“放香性”，但不会改变白酒的味道。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "芝麻香型酒的微量成分丰富而复杂，影响酒质的因素也是非常的复杂。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "由于白酒贮存过程中，总酯含量呈降低趋势，因此不存在酯化反应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "乳酸乙酯在芝麻香型白酒中主要作用是呈香。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酸类化合物本身对酒的香气直接贡献不大，但具有调节酒体口味和维持酯的香气的作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "清香型白酒的香味组分仍然是以酯类化合物占绝对优势，酯类物质中以乙酸乙酯为主导等。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的双乙酰及2,3-戊二酮是酵母正常的新陈代谢产物。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "高级醇来源于氨基酸发酵，故白酒发酵原料要有一定蛋白质。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中高级醇含量越高，风味越好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "酯类的含量、种类以及与其它风味物质的比例关系，对白酒的香型、风味特征关系不大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒香味成分的量比关系是影响白酒质量及风格的重要因素之一。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "4-甲基吡嗪在酱香型酒中含量最高。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "鉴别白酒质量优劣感观尝评是有效方法之一。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "糠醛在酱香型酒中含量最高。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中协调成分是指酸类及醇类物质。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "几种香味物质相混合后，和它们原先各自单体的呈香将会起变化。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "一些呈味物质，溶于不同溶媒中，其呈味也相同。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "品酒时经长时间刺激，使嗅觉和味觉变得迟钝的现象称之为后效应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "品酒时产生偏爱先品评酒样的心理作用的现象称之为顺效应。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "国家优质白酒奖是从全国第3届评酒会开始设立的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "顺序效应是指品评前一个酒样后，影响后一个酒样的心理作用。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "麸曲法生产的白酒，其产品质量始终不及大曲酒的好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "从1979年开始，国家评酒委员考试除实践品酒能力外还须进行文字理论考试。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "低度白酒率先获得国家优质酒称号的是双沟特液。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "全国第一届评酒会，国家命名了八大名白酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "食用酒精含杂质越少等级越高。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "乳酸乙酯是白酒中香味成分之一。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酿酒班组生产出来的基础酒受窖池、发酵时间、酿酒季节、工艺、操作人员不同等因素的影响，所产酒质也各有特点。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "组合中适量的酸味可以掩盖涩味，酸味还可以助味长。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒品评技术队伍是从1979年全国第三届评酒会后开始形成的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "低度白酒都是由高度白酒加水降度，经勾调而生产的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒的香型是1963年第三届全国评酒会开始确定的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "全国评酒会促进了科学总结传统生产工艺。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "老白干酒的香味成份是以乙酸乙酯为主体香气。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "阈值大的物质呈香呈味也大。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "最适合白酒老熟的容器是陶坛。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒因贮存质量提高是酯类增加的结果。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "人的舌尖部对苦味最敏感。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "品尝白酒时，进口量越多越准确。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "美拉德反应产物均易溶于水及乙醇，均属于亲水性物质",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "衡量香味成分在酒中呈香强弱的尺度，是由含量与阈值两方面决定的。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "基础酒的验收以理化分析分类为主，感官定级为辅。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "美拉德反应的前驱物质是还原糖和氨基酸",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "发酵期净升温不是越高越好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "强化“双轮底”对窖底母糟强化的措施之一是多投粮。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "每次品评时应将口中酒完全吞下。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "经常饮酒和吸烟及吃刺激性强的食物会加快味觉的钝化。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "品评在任何环境都可以进行。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "品评时，每次的进口量可以不保持一致。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "味觉感应是咸感最快，苦感最慢。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "有嗅盲者可以参加评酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "白酒风格检验可只依靠理化分析。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "评酒方法，是以眼观其色，鼻闻其香，口尝其味，并综合色、香、味三方面的情况确定其风格。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "甜、酸、苦、辣、咸被称为基本味觉。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "味觉的灵敏度随年龄的增长而增长。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "“调味”酒的复杂度大于一般酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型白酒主要采用低温大曲作糖化发酵剂。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "高温制曲特点是制曲培养期间曲坯的曲心最高温度达60℃以上。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "液态法白酒(配制酒)的香味、风味和整体质量水平远不如普通固态法白酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "小曲中的微生物主要来自种曲。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "同一种酒，贮存时间越长，复杂度越小。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "醇类化合物是浓香型白酒中重要呈味物质。它的总含量高于有机酸含量。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "一般总酸含量低，会造成酒体口味淡薄。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中的酸类物质都是无机酸，它是白酒中重要的风味物质。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "调节适当的苦味，能增加食品的滋味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "次酒经过长期贮存，酒质会变好。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "普通水泥池可以用来贮酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "挥发性酸中，分子量越小，刺激性越强。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "白酒中缺乏酸类（如液体白酒），酒体会显得单薄、欠柔和、呆滞。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "采用铝罐储存酒效果好于不锈钢罐储存。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "凡是经过储存后的白酒，其味向好的方面改进，储存时间长，醇厚，绵甜味好，但香味渐淡。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "苦味对感觉是不愉快的，但少量的苦味，能增加陈味和增长厚味。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "对比作用是指一个味感显出比另一个的刺激强。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "绝大部分微生物的代谢产物中都没有有机酸。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "呈味物质，溶于不同溶媒中，其呈味不会发生改变。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "基酒的管理只需做好库房物质管理即可。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "调味酒是指采用特殊工艺生产或仅陈酿老熟后，具有典型风格和鲜明个性特征的基酒，在酒体设计时主要用于丰富和完善酒体的香和味的精华酒。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "酸类化合物在酒中既是重要的呈味物，又是酯类化合物的前体物质，在香味成分转换占有重要地位。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "羰基化合物，尤其是低碳链的醛、酮化合物具有较强的刺激性口味。在味觉上，它使酒体赋于较强的刺激感，也就是人们常说的“酒劲大”的原因。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "呈味物质在不同温度下，其强度不同，口感不一样。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "原酒在入库储存前需对其进行定级、分类，以形成不同等级、风格类型基酒，为入库储存打下基础。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "在白酒中含量较多的是一些小于6个碳的醇。它们一般较难挥发。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "含硫的化合物香气阈值极低，它们的气味非常典型，一般表现为恶臭和令人不愉快的气味，气味持久难消。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "油酸、癸酸、亚油酸属于较易挥发的有机酸。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
{
    question: "好酒和好酒进行勾兑，有时质量会变差。",
    options: ["对", "错"],
    type: "boolean",
    answer: "对"
},
{
    question: "浓香型白酒采用半敞开式、多菌种发酵的固态法生产模式。",
    options: ["对", "错"],
    type: "boolean",
    answer: "错"
},
//多选题
{
  question: "多元醇在白酒中呈甜味，主要有____、____、____。",
  options: ["丙三醇", "正丙醇", "2,3-丁二醇", "甘露醇"],
  type: "multiple",
  answer: ["丙三醇", "2,3-丁二醇", "甘露醇"]
},
{
  question: "白酒中的香味物质，如____、____等含量虽少，但阈值极低，有极强的香味，在白酒呈香上起到重要作用。",
  options: ["帖烯类化合物", "芳香族化合物", "呋喃化合物", "吡嗪类化合物"],
  type: "multiple",
  answer: ["芳香族化合物", "呋喃化合物"]
},
{
  question: "品酒师要做到四懂是：____、____、____、____。",
  options: ["懂工艺", "懂市场", "懂分析", "懂储存", "懂勾调"],
  type: "multiple",
  answer: ["懂工艺", "懂分析", "懂储存", "懂勾调"]
},
{
  question: "酱香型白酒生产具有四高两长的特点，其四高应为制曲温度高、高温堆积、高温发酵、高温流酒；两长应为____、____。",
  options: ["窖龄时间长", "发酵周期长", "堆积时间长", "酒的储存时间长"],
  type: "multiple",
  answer: ["发酵周期长", "酒的储存时间长"]
},
{
  question: "影响风味物质感官强度的因素有____和____。",
  options: ["阈值", "温度", "浓度", "湿度"],
  type: "multiple",
  answer: ["温度", "浓度"]
},
{
  question: "食品风味化学是一门研究食品风味组成的化学本质____、____、____的科学。",
  options: ["分析方法", "生成途径", "物理性质", "变化途径"],
  type: "multiple",
  answer: ["分析方法", "生成途径", "变化途径"]
},
{
  question: "白酒品评的方法分类有：____、____、____三类。",
  options: ["三杯法", "明评法", "暗评法", "差异品评法"],
  type: "multiple",
  answer: ["明评法", "暗评法", "差异品评法"]
},
{
  question: "多元醇是白酒____的重要成分。",
  options: ["甜味", "喷香", "醇厚感", "陈味"],
  type: "multiple",
  answer: ["甜味", "醇厚感"]
},
{
  question: "曲药是____的载体。",
  options: ["有益微生物", "有效生物酶", "香味物质", "香味前驱物质", "营养成分"],
  type: "multiple",
  answer: ["有益微生物", "有效生物酶", "香味物质", "香味前驱物质", "营养成分"]
},
{
  question: "品酒师应具备的基本功是：________。",
  options: ["检出力", "识别力", "判断力", "记忆力", "表现力"],
  type: "multiple",
  answer: ["检出力", "识别力", "记忆力", "表现力"]
},
{
  question: "浓香型白酒中含量高的酸类主要有：____、____、____、____四大类酸，共占总酸含量的95%以上。",
  options: ["乙酸", "乳酸", "丁酸", "己酸"],
  type: "multiple",
  answer: ["乙酸", "乳酸", "丁酸", "己酸"]
},
{
  question: "各种香味物质在单体香气和复合香气存在的情况下，因受____、____、____、易位等因素的影响，其呈香呈味特征不同。",
  options: ["浓度", "温度", "阈值", "溶剂"],
  type: "multiple",
  answer: ["浓度", "温度", "溶剂"]
},
{
  question: "白酒中酒精度的试验方法有____。",
  options: ["比重瓶法", "色谱法", "酒精计法", "近红外法"],
  type: "multiple",
  answer: ["比重瓶法", "色谱法", "酒精计法", "近红外法"]
},
{
  question: "评酒员应具备的尝评基本功能力，主要包括以下几个方面的内容____。",
  options: ["区分各种香型的准确性", "同轮重复性", "异轮再现性", "质量差异"],
  type: "multiple",
  answer: ["区分各种香型的准确性", "同轮重复性", "异轮再现性", "质量差异"]
},
{
  question: "白酒中适量的酸____。",
  options: ["能增长酒的后味", "可使酒出现回甜感", "有助于酒的放香"],
  type: "multiple",
  answer: ["能增长酒的后味", "可使酒出现回甜感"]
},
{
  question: "酱香型白酒以茅台酒为代表，其他知名大曲酱香酒还有____。",
  options: ["郎酒", "酒鬼酒", "武陵酒", "白云边酒"],
  type: "multiple",
  answer: ["郎酒", "武陵酒"]
},
{
  question: "在芝麻香型白酒中，酸味物质含量过大酒味____，易带酸涩感；过低____,欠丰满。",
  options: ["糙辣", "酒体淡", "绵柔"],
  type: "multiple",
  answer: ["糙辣", "酒体淡"]
},
{
  question: "LCX—品评法新增加的项目有____。",
  options: ["风味", "风格", "酒体", "个性"],
  type: "multiple",
  answer: ["酒体", "个性"]
},
{
  question: "根据GB/T20824—2007芝麻香型白酒标准规定，按产品的酒精度分为____。",
  options: ["41%voL—68%voL", "40%voL—60%voL", "18%voL—40%voL", "35%voL—54%voL"],
  type: "multiple",
  answer: ["41%voL—68%voL", "18%voL—40%voL"]
},
{
  question: "品评方法的训练包括____。",
  options: ["1杯品评法", "2杯品评法", "3杯品评法", "顺位品评法"],
  type: "multiple",
  answer: ["1杯品评法", "2杯品评法", "3杯品评法", "顺位品评法"]
},
{
  question: "白酒中酸含量不当，可能导致：____。",
  options: ["抑制放香性", "味道粗糙", "略显苦味", "甜味", "抑制酒精苦味"],
  type: "multiple",
  answer: ["抑制放香性", "味道粗糙", "略显苦味"]
},
{
  question: "咸的典型物质是____。",
  options: ["食盐", "CaCl2", "NaCl", "CaCO3", "Na2CO3"],
  type: "multiple",
  answer: ["食盐", "NaCl"]
},
{
  question: "双轮调味酒是万能调味酒，论述正确的是____。",
  options: ["从老窖和发酵良好的窖池摘取", "只要是双轮酒就行", "糟情不好的不能压双轮", "不需陈酿就可使用", "陈酿2年以上使用"],
  type: "multiple",
  answer: ["从老窖和发酵良好的窖池摘取", "糟情不好的不能压双轮", "陈酿2年以上使用"]
},
{
  question: "对酒头调味酒论述正确的是____。",
  options: ["从发酵状态良好的窖池选取", "酒头浑浊不能做调味酒", "可以有糟臭、霉烂邪杂味", "浑浊是混入了部分酒尾"],
  type: "multiple",
  answer: ["从发酵状态良好的窖池选取", "浑浊是混入了部分酒尾"]
},
{
  question: "以正丙醇为特征成分的香型是____。",
  options: ["芝麻香型", "老白干香型", "浓酱兼香型", "清香型"],
  type: "multiple",
  answer: ["芝麻香型", "浓酱兼香型"]
},
{
  question: "白云边酒生产采取____分开制曲，结合使用的方式进行，形成了白云边酒特有的制曲工艺体系。",
  options: ["中温曲", "高温曲", "低温曲"],
  type: "multiple",
  answer: ["中温曲", "高温曲"]
},
{
  question: "白酒在贮存过程中主要存在着物理和化学两种变化，其中物理变化主要是____。",
  options: ["挥发", "水解", "氢键缔合"],
  type: "multiple",
  answer: ["挥发", "氢键缔合"]
},
{
  question: "原料中的果胶质，在微生物的果胶酶或热能的作用下，能分解成____。",
  options: ["果胶酸", "甲醇", "氨基酸"],
  type: "multiple",
  answer: ["果胶酸", "甲醇"]
},
{
  question: "兼香型白酒的生产原料是____。",
  options: ["大麦", "小麦", "高粱"],
  type: "multiple",
  answer: ["小麦", "高粱"]
},
{
  question: "白酒的微量成分占白酒的l%左右，总的一般可分为____。",
  options: ["色谱骨架成分", "协调成分", "复杂成分"],
  type: "multiple",
  answer: ["色谱骨架成分", "协调成分", "复杂成分"]
},
{
  question: "经考试被聘为国家评酒委员由第三届____名发展到第五届的____名。",
  options: ["17", "44", "30", "50"],
  type: "multiple",
  answer: ["17", "44"]
},
{
  question: "国家名酒由第一届全国评酒会评出的____个发展到第五届全国评酒会的____个。",
  options: ["8", "4", "13", "17"],
  type: "multiple",
  answer: ["4", "17"]
},
{
  question: "第二届全国评酒会评出的国家优质酒中，采用麸曲法生产的有____。",
  options: ["桂林三花酒", "凌川白酒", "哈尔滨高粱糠白酒", "合肥薯干白酒", "沧州薯干白酒"],
  type: "multiple",
  answer: ["凌川白酒", "哈尔滨高粱糠白酒", "合肥薯干白酒", "沧州薯干白酒"]
},
{
  question: "芝麻香型白酒中重要的风味物质有____。",
  options: ["3-甲硫基丙醇", "乙酸乙酯", "丁酸", "己酸乙酯"],
  type: "multiple",
  answer: ["3-甲硫基丙醇", "乙酸乙酯", "己酸乙酯"]
},
{
  question: "第三届全国评酒会评出的18种国家优质酒，其中原料用代用品酿造的酒是____。",
  options: ["哈尔滨高粱糠白酒", "坊子白酒", "迎春酒", "白云边"],
  type: "multiple",
  answer: ["哈尔滨高粱糠白酒", "坊子白酒"]
},
{
  question: "食品通过口腔进入消化道，这个感受过程，统称味觉。具体分析有____。",
  options: ["心理味觉", "物理味觉", "化学味觉"],
  type: "multiple",
  answer: ["心理味觉", "物理味觉", "化学味觉"]
},
{
  question: "食品的风味，广义的说包括了味、嗅、触、视、听等感官反应引起的____、____和____感觉的综合效应。",
  options: ["物理化学", "食品化学", "化学", "物理", "心理"],
  type: "multiple",
  answer: ["化学", "物理", "心理"]
},
{
  question: "酒中的苦味，有人认为形成的物质主要是过量的高级醇，过量的琥珀酸，少量的单宁，较多的酚类和糠醛所引起的。另外____等物质都呈现苦味。",
  options: ["异丁醇", "正丙醇", "酪醇", "生物碱"],
  type: "multiple",
  answer: ["异丁醇", "正丙醇", "酪醇", "生物碱"]
},
{
  question: "白酒中的酸可分为挥发酸和不挥发酸，下列那种酸属挥发酸____。",
  options: ["乳酸", "乙酸", "酒石酸", "己酸"],
  type: "multiple",
  answer: ["乙酸", "己酸"]
},
{
  question: "CH3CHOHCOOH是____的分子式，CH3COOC2H5是____的分子式。",
  options: ["丁酸", "乳酸", "丁酸乙酯", "戊醇", "乙酸乙酯"],
  type: "multiple",
  answer: ["乳酸", "乙酸乙酯"]
},
{
  question: "阈值完全决定于每一个人____和____的敏锐度，人与人间的差距很大。",
  options: ["臭气", "嗜好", "嗅觉", "鼻子", "口腔", "味觉"],
  type: "multiple",
  answer: ["嗅觉", "味觉"]
},
{
  question: "具有发香团的芳香物质在分子中都有特定的原子团，亦称香基。它们是：____等。",
  options: ["醛基", "醇基", "酚基", "苯基"],
  type: "multiple",
  answer: ["醛基", "醇基", "酚基", "苯基"]
},
{
  question: "常用于白酒味觉测试的是____。",
  options: ["酸", "甜", "苦", "鲜", "咸", "全居味"],
  type: "multiple",
  answer: ["酸", "甜", "苦", "鲜", "咸"]
},
{
  question: "常用于白酒嗅觉测试的乙酯香气是____。",
  options: ["乙酸乙酯", "乳酸乙酯", "丁酸乙酯", "己酸乙酯"],
  type: "multiple",
  answer: ["乙酸乙酯", "丁酸乙酯", "己酸乙酯"]
},
{
  question: "新型白酒的感观质量鉴别主要在以下几方面：____等。",
  options: ["酒体净否", "香精优劣", "香味谐调", "甜味适宜"],
  type: "multiple",
  answer: ["酒体净否", "香精优劣", "香味谐调", "甜味适宜"]
},
{
  question: "在品酒时，酒样的温度最好保持在____或____。",
  options: ["10-15℃", "15-18℃", "20℃", "25℃", "35℃"],
  type: "multiple",
  answer: ["20℃", "25℃"]
},
{
  question: "描述浓香型白酒的品评术语有____。",
  options: ["无色透明", "留香持久", "窖香浓郁", "醇甜爽净", "清爽甘冽", "回味悠长"],
  type: "multiple",
  answer: ["无色透明", "窖香浓郁", "醇甜爽净", "回味悠长"]
},
{
  question: "品评师提高品评能力要在____基本功上下功夫。",
  options: ["检出力", "对比力", "识别力", "记忆力", "表现力"],
  type: "multiple",
  answer: ["检出力", "识别力", "记忆力", "表现力"]
},
{
  question: "白酒中酸的功能，除具有减轻酒苦外，它还有以下作用____。",
  options: ["增长酒的后味", "消除糙辣感", "增加酒的醇和度", "可适当减轻中、低度酒的水味"],
  type: "multiple",
  answer: ["增长酒的后味", "消除糙辣感", "增加酒的醇和度", "可适当减轻中、低度酒的水味"]
},
{
  question: "优级酒一般为____酒，这部分酒香味成分较协调丰满。",
  options: ["尾段", "前段", "酒头", "中段"],
  type: "multiple",
  answer: ["前段", "中段"]
},
{
  question: "调味的原酒和陈酿酒有着明显的差异，一般是采用独特工艺生产的具有各种特点的精华酒，在香气和口味上都是____等。",
  options: ["特浓", "特怪", "特甜", "特香"],
  type: "multiple",
  answer: ["特浓", "特怪", "特甜", "特香"]
},
{
  question: "普通酒又称为大宗酒，即为____的酒，一般不再细分，集体收入大罐中。",
  options: ["酒头", "中段", "后段", "前段"],
  type: "multiple",
  answer: ["中段", "后段"]
},
{
  question: "在勾兑调味中，根据基础酒质情况，常常有添加少量的丙三醇、2，3一丁二醇，也可用____等来改善酒质和增加自然感。",
  options: ["异丁醇", "异戊醇", "己醇", "正丁醇"],
  type: "multiple",
  answer: ["异丁醇", "异戊醇", "己醇", "正丁醇"]
},
{
  question: "以下属于杂醇油的是____。",
  options: ["丁醇", "丙醇", "异醇", "异戊醇"],
  type: "multiple",
  answer: ["丁醇", "丙醇", "异醇", "异戊醇"]
},
{
  question: "白酒中检出的硫化物主要有____等。",
  options: ["硫醇", "硫化氢", "硫酸", "二乙基硫"],
  type: "multiple",
  answer: ["硫醇", "硫化氢", "二乙基硫"]
},
{
  question: "挥发酸有____等。",
  options: ["乳酸", "乙酸", "辛酸", "丁酸"],
  type: "multiple",
  answer: ["乙酸", "辛酸", "丁酸"]
},
{
  question: "强化窖内产酯技术的配套措施包括____。",
  options: ["严格养窖措施。", "尽可能增加窖帽高度。", "回糟选用黄浆水坑之母糟。", "严格各工序操作。"],
  type: "multiple",
  answer: ["严格养窖措施。", "尽可能增加窖帽高度。", "回糟选用黄浆水坑之母糟。", "严格各工序操作。"]
},
{
  question: "通常讲的高级醇主要为____，其次是仲丁醇和正戊醇。",
  options: ["异戊醇", "正丙醇", "正丁醇", "异丁醇"],
  type: "multiple",
  answer: ["异戊醇", "正丙醇", "正丁醇", "异丁醇"]
},
{
  question: "不挥发酸有____等。",
  options: ["琥珀酸", "甲酸", "酒石酸", "葡萄糖酸"],
  type: "multiple",
  answer: ["琥珀酸", "酒石酸", "葡萄糖酸"]
},
{
  question: "浓香型白酒中主要酯类为____，之和可占白酒的总酯量的85%以上。",
  options: ["乳酸乙酯", "乙酸乙酯", "甲酸乙酯", "己酸乙酯"],
  type: "multiple",
  answer: ["乳酸乙酯", "乙酸乙酯", "己酸乙酯"]
},
{
  question: "下列关于白酒口味描述不正常的有____。",
  options: ["入口冲", "尾净味长", "后味杂", "香醇甜净", "后苦"],
  type: "multiple",
  answer: ["入口冲", "后味杂", "后苦"]
},
{
  question: "浓香型优级酒的感官要求要求色泽上____。",
  options: ["无色", "允许微黄", "清亮透明", "无悬浮物", "无沉淀"],
  type: "multiple",
  answer: ["无色", "允许微黄", "清亮透明", "无悬浮物", "无沉淀"]
},
{
  question: "下列关于白酒风格描述正常的有____。",
  options: ["风格差", "风格突出", "风格较好", "错格", "偏格"],
  type: "multiple",
  answer: ["风格突出", "风格较好"]
},
{
  question: "翻沙措施存在的缺陷有：____。",
  options: ["窖池利用率低", "母糟活力损失较大", "酒糟显腻", "酒醅生酸", "每窖不能连续使用此法"],
  type: "multiple",
  answer: ["窖池利用率低", "母糟活力损失较大", "每窖不能连续使用此法"]
},
{
  question: "强化轮轮双轮底对窖底母糟强化的措施____。",
  options: ["投大量粮食", "回优质黄浆水", "回酒", "添加适量的曲药"],
  type: "multiple",
  answer: ["回优质黄浆水", "回酒", "添加适量的曲药"]
},
{
  question: "浓香型白酒口味要求____。",
  options: ["绵甜爽净", "香味协调", "清香醇正", "幽雅细腻", "余味悠长"],
  type: "multiple",
  answer: ["绵甜爽净", "香味协调", "余味悠长"]
},
{
  question: "属于味觉的范围有____。",
  options: ["甜味", "辣味", "酸味", "咸味"],
  type: "multiple",
  answer: ["甜味", "酸味", "咸味"]
},
{
  question: "下列关于浓香型白酒香味描述不正常的有____。",
  options: ["异香", "窖香带陈味", "窖香欠纯正", "泥臭味", "窖香浓郁"],
  type: "multiple",
  answer: ["异香", "窖香欠纯正", "泥臭味"]
},
{
  question: "谷壳是酿制大曲酒的主要辅料，是良好的____和____。",
  options: ["疏松剂", "被膜剂", "填充剂", "包埋剂"],
  type: "multiple",
  answer: ["疏松剂", "填充剂"]
},
{
  question: "品酒师应具备的基本功是____。",
  options: ["检出力", "识别力", "记忆力", "表现力"],
  type: "multiple",
  answer: ["检出力", "识别力", "记忆力", "表现力"]
},
{
  question: "下列关于白酒色泽描述不正常的有____。",
  options: ["无色透明", "稍黄", "微混", "有沉淀", "有悬浮物"],
  type: "multiple",
  answer: ["微混", "有沉淀", "有悬浮物"]
},
{
  question: "在同一酒度、同样的浓度下，阈值小的香味成分，其香味强度____；阈值大的香味成分，其香味强度____。",
  options: ["大", "小", "不变"],
  type: "multiple",
  answer: ["大", "小"]
},
{
  question: "调味酒分为____等。",
  options: ["窖香调味酒", "酯香调味酒", "双轮底调味酒", "酒头调味酒"],
  type: "multiple",
  answer: ["窖香调味酒", "酯香调味酒", "双轮底调味酒", "酒头调味酒"]
},
{
  question: "第二届全国评酒会评出的国家优质酒中二个小曲酒是____。",
  options: ["凌川白酒", "龙滨酒", "金川湘山酒", "桂林三花酒"],
  type: "multiple",
  answer: ["金川湘山酒", "桂林三花酒"]
},
{
  question: "老白干香型白酒是以____为主体复合香。",
  options: ["己酸乙酯", "乙酸乙酯", "丁酸乙酯", "乳酸乙酯"],
  type: "multiple",
  answer: ["乙酸乙酯", "乳酸乙酯"]
},
{
  question: "酒中的羰基化合物的呈味作用主要是赋于口味以____。",
  options: ["酸感", "刺激性", "甜感", "辣感"],
  type: "multiple",
  answer: ["刺激性", "辣感"]
},
{
  question: "在白酒中，除乳酸外，如____都属较易挥发的有机酸。",
  options: ["乙酸", "已酸", "丁酸", "油酸"],
  type: "multiple",
  answer: ["乙酸", "已酸", "丁酸"]
},
{
  question: "第一届全国评酒会评出的4个国家名酒是____。",
  options: ["汾酒", "五粮液", "洋河大曲", "茅台酒", "西凤酒", "泸州特曲"],
  type: "multiple",
  answer: ["汾酒", "茅台酒", "西凤酒", "泸州特曲"]
},
{
  question: "浓香型白酒的江淮派，制曲原料为____。",
  options: ["大米", "大麦", "小麦", "豌豆"],
  type: "multiple",
  answer: ["大麦", "小麦", "豌豆"]
},
{
  question: "以小曲作为糖化发酵剂生产的白酒为____",
  options: ["桂林三花酒", "黄鹤楼", "玉冰烧", "白云边"],
  type: "multiple",
  answer: ["桂林三花酒", "玉冰烧"]
},
{
  question: "大曲酱香型白酒由____三种香味酒勾调而成。",
  options: ["醇甜", "曲香", "酱香", "窖底香", "糟香"],
  type: "multiple",
  answer: ["醇甜", "酱香", "窖底香"]
},
{
  question: "五粮液酒是属于____型白酒。",
  options: ["单粮", "川派", "多粮", "南派"],
  type: "multiple",
  answer: ["川派", "多粮"]
},
{
  question: "品评酒的操作过程的规范，其中包括____。",
  options: ["进口量一致", "科学呼吸气", "分布舌面均匀", "酒在口中停留时间一致"],
  type: "multiple",
  answer: ["进口量一致", "科学呼吸气", "分布舌面均匀", "酒在口中停留时间一致"]
},
{
  question: "属于味觉的范围有____。",
  options: ["甜味", "辣味", "酸味", "咸味"],
  type: "multiple",
  answer: ["甜味", "酸味", "咸味"]
},
{
  question: "调味的原理____。",
  options: ["添加作用", "化学反应", "平衡作用", "分子重排"],
  type: "multiple",
  answer: ["添加作用", "化学反应", "平衡作用", "分子重排"]
},
{
  question: "选酒是以每坛酒的理化指标和口感信息为依据，为了便于选择，把酒体特征分为____四种类型，在选择时按这四个方面进行。",
  options: ["香", "醇", "爽", "风格"],
  type: "multiple",
  answer: ["香", "醇", "爽", "风格"]
},
{
  question: "为了使勾调工作顺利进行，在这一过程中应注意各待选基酒的____的搭配等问题。",
  options: ["理化色谱数据", "贮存日期", "生产成本", "质量档次"],
  type: "multiple",
  answer: ["理化色谱数据", "贮存日期", "生产成本", "质量档次"]
},
{
  question: "勾调的意义和作用包括了____。",
  options: ["保持产品质量的稳定", "提高产品质量", "优化库存结构，提高储存质量", "为调味打下基础"],
  type: "multiple",
  answer: ["保持产品质量的稳定", "提高产品质量", "优化库存结构，提高储存质量", "为调味打下基础"]
},
{
  question: "调味包括了____。",
  options: ["小样调味", "分别添加，对比尝评", "一次添加，确定方案", "大样调味"],
  type: "multiple",
  answer: ["小样调味", "分别添加，对比尝评", "一次添加，确定方案", "大样调味"]
},
{
  question: "把所选的基酒分为三种酒进行勾调：三种酒包括____。",
  options: ["带酒", "大宗酒", "搭酒", "原酒"],
  type: "multiple",
  answer: ["带酒", "大宗酒", "搭酒"]
},
{
  question: "浓香型白酒分为两大流派，____。",
  options: ["川派", "江淮派", "北方派", "南方派"],
  type: "multiple",
  answer: ["川派", "江淮派"]
},
{
  question: "酱香型白酒生产模式中，其主要特点是____",
  options: ["用曲量大", "高温堆积", "混蒸混烧", "长期贮存"],
  type: "multiple",
  answer: ["用曲量大", "高温堆积", "长期贮存"]
},
{
  question: "多元醇在白酒中呈甜味，其中____在白酒中起缓冲作用，使酒增加绵甜、回味和醇厚感。",
  options: ["丙三醇", "正丙醇", "正丁醇", "2.3-丁二醇"],
  type: "multiple",
  answer: ["丙三醇", "2.3-丁二醇"]
},
{
  question: "产品设计方案的内容包括____方面。",
  options: ["产品的结构形式", "检测手段", "主要理化参数", "生产条件"],
  type: "multiple",
  answer: ["产品的结构形式", "主要理化参数", "生产条件"]
},
{
  question: "在进行产品设计前要做好调查工作，调查工作的内容包括____方面。",
  options: ["市场调查", "产品调查", "技术调查", "设计构想"],
  type: "multiple",
  answer: ["市场调查", "技术调查", "设计构想"]
},
{
  question: "中国白酒的生产____是关键环节。",
  options: ["原料是前提", "大曲是基础", "配料是关键", "工艺技术是关键"],
  type: "multiple",
  answer: ["原料是前提", "大曲是基础", "工艺技术是关键"]
},
{
  question: "乙醛在白酒中的作用包括____。",
  options: ["水合作用", "携带作用", "阈值的降低作用", "掩蔽作用"],
  type: "multiple",
  answer: ["水合作用", "携带作用", "阈值的降低作用", "掩蔽作用"]
},
{
  question: "水泥池用来贮酒，最好是经过加工的，目前已采用的方法有：____。",
  options: ["陶瓷板贴面", "桑皮纸猪血贴面", "环氧树脂或过氯乙烯涂料", "水泥贴面"],
  type: "multiple",
  answer: ["陶瓷板贴面", "桑皮纸猪血贴面", "环氧树脂或过氯乙烯涂料"]
},
{
  question: "白酒的储存容器种类较多，主要的包括____。",
  options: ["陶坛容器", "血料容器", "不锈钢罐", "水泥池容器"],
  type: "multiple",
  answer: ["陶坛容器", "血料容器", "不锈钢罐", "水泥池容器"]
},
{
  question: "下面属于调味酒的有____。",
  options: ["酯香调味酒", "曲香调味酒", "陈酿调味酒", "老酒调味酒"],
  type: "multiple",
  answer: ["酯香调味酒", "曲香调味酒", "陈酿调味酒", "老酒调味酒"]
},
{
  question: "有机酸类化合物与酒质的关系包括了____。",
  options: ["消除酒的苦味", "减少或消除杂味", "可出现甜味和回甜味", "喷香的作用"],
  type: "multiple",
  answer: ["消除酒的苦味", "减少或消除杂味", "可出现甜味和回甜味"]
},
{
  question: "储存是白酒传统工艺的一项重要内容，经过一定时期的储存，酒体____。",
  options: ["刺激感不愉快的味减少", "柔和绵甜增加", "香味烘托出来", "陈厚感增强"],
  type: "multiple",
  answer: ["刺激感不愉快的味减少", "柔和绵甜增加", "香味烘托出来", "陈厚感增强"]
},
{
  question: "典型的浓香型白酒的风格应是：无色____或微黄____透明，无悬浮物，无沉淀，窖香浓郁，具有以己酸乙酯为主体、纯正协调的复合香气。入口____。",
  options: ["绵甜爽净", "香味协调", "回味悠长", "尾净爽口"],
  type: "multiple",
  answer: ["绵甜爽净", "香味协调", "回味悠长"]
},
{
  question: "与其他酒种相比，酿造五粮液的工艺条件中入窖____相对最高，控制不好就导致不产酒、入窖____相对最高、入窖____相对最低、入窖糟醅粘性最大，增加了劳动强度、发酵周期长。",
  options: ["酸度", "淀粉浓度", "水分", "温度"],
  type: "multiple",
  answer: ["酸度", "淀粉浓度", "水分"]
},
{
  question: "原酒在贮存过程中发生了氧化、酯化合还原等一系列的化学变化，各种醛部分氧化为酸，酸再与醇在一定条件下进行酯化反应生成酯，使酒中的醇、____等达到新的平衡。",
  options: ["醛", "酯", "酸", "酚"],
  type: "multiple",
  answer: ["醛", "酯", "酸"]
},
{
  question: "五粮液的感官评语是____、各味谐调、恰到好处、尤以酒味全面而著称。",
  options: ["香气悠久", "味醇厚", "入口甘美", "落喉净爽"],
  type: "multiple",
  answer: ["香气悠久", "味醇厚", "入口甘美", "落喉净爽"]
},
{
  question: "桂林三花酒是米香型酒的典型代表。经第三届国家评酒会评议，它的主体香气成分为____。",
  options: ["乳酸乙酯", "乙酸乙酯", "己酸乙酯", "β-苯乙醇"],
  type: "multiple",
  answer: ["乳酸乙酯", "乙酸乙酯", "β-苯乙醇"]
},
{
  question: "五粮液生产过程中，一直遵循优中选优，花中选花，按照六精酿工序进行细致的分级，以下属于六精酿工序的是____",
  options: ["分层入窖", "分层起糟", "分层蒸馏", "量质摘酒", "按级并坛", "分级储存"],
  type: "multiple",
  answer: ["分层入窖", "分层起糟", "分层蒸馏", "量质摘酒", "按级并坛", "分级储存"]
},
{
  question: "乙醇酒精体积浓度是指在20℃时酒精水溶液中所含乙醇的____与在同温度下该溶液之____百分比。",
  options: ["质量", "体积", "总质量", "总体积"],
  type: "multiple",
  answer: ["体积", "总体积"]
},
{
  question: "决定白酒典型风格的是白酒____及其____。",
  options: ["香味含量", "香味成分", "量比关系", "阈值"],
  type: "multiple",
  answer: ["香味成分", "量比关系"]
},
{
  question: "谷壳含有多缩戊糖和果胶质等，在酿酒过程中生成____和____等有害物质。",
  options: ["甲醛", "乙醛", "糠醛", "甲醇"],
  type: "multiple",
  answer: ["糠醛", "甲醇"]
},
{
  question: "氰化物在酸性溶液中蒸出后被吸收于碱性溶液中，在pH7.0溶液中，用氯胺T将氰化物转变为____，再与异烟酸-吡唑酮作用，生成____色染料，与标准系列比较定量。",
  options: ["氯胺氰", "氯化氰", "紫色", "蓝色"],
  type: "multiple",
  answer: ["氯化氰", "蓝色"]
},
{
  question: "白酒香味成分分为____、____、____等三部分。",
  options: ["色谱骨架成分", "协调成分", "微量成分", "复杂成分"],
  type: "multiple",
  answer: ["色谱骨架成分", "协调成分", "复杂成分"]
},
{
  question: "谷壳是酿制大曲酒的主要辅料，是良好的____和____。",
  options: ["缓冲剂", "疏松剂", "填充剂", "糖化发酵剂"],
  type: "multiple",
  answer: ["疏松剂", "填充剂"]
},
{
  question: "酒尾中含有大量的高沸点香味物质，酸酯含量也高，特别是____、____、____含量特别高。",
  options: ["亚油酸乙酯", "油酸乙酯", "亚麻酸乙酯", "棕榈酸乙酯"],
  type: "multiple",
  answer: ["亚油酸乙酯", "油酸乙酯", "棕榈酸乙酯"]
},
{
  question: "新产品设计方案的来源与筛选，主要来自____、____、____三类人群。",
  options: ["消费者", "企业职工", "主流媒体", "专业科研人员"],
  type: "multiple",
  answer: ["消费者", "企业职工", "专业科研人员"]
},
{
  question: "白酒中含量较高的羰基化合物主要是一些低碳链的____、____类化合物。",
  options: ["醛", "杂环类", "醇", "酮"],
  type: "multiple",
  answer: ["醛", "酮"]
},
{
  question: "味觉具体分析有____、____、____。",
  options: ["心理味觉", "生物味觉", "物理味觉", "化学味觉"],
  type: "multiple",
  answer: ["心理味觉", "物理味觉", "化学味觉"]
},
{
  question: "酒中的涩味，多是由____、____、____味三者不均衡，失去了合理的比例关系所造成的。",
  options: ["辣", "酸", "甜", "苦"],
  type: "multiple",
  answer: ["酸", "甜", "苦"]
},
{
  question: "白酒储存容器类型主要有：____。",
  options: ["陶坛容器", "血料容器", "不锈钢罐", "水泥池容器", "橡木桶容器"],
  type: "multiple",
  answer: ["陶坛容器", "血料容器", "不锈钢罐", "水泥池容器"]
},
{
  question: "浓香型白酒采用____、____发酵的____法生产模式。",
  options: ["敞开式", "多菌种", "纯菌种", "固态"],
  type: "multiple",
  answer: ["敞开式", "多菌种", "固态"]
},
{
  question: "关于白酒起源之前也有三说：____。",
  options: ["西汉说", "东汉说", "唐朝说", "元代说"],
  type: "multiple",
  answer: ["东汉说", "唐朝说", "元代说"]
},
{
  question: "在一定数值范围内，α-联酮类物质在酒中含量越多，酒质越好，是构成名优白酒进口____、____、____的重要成分。",
  options: ["陈香", "喷香", "醇甜", "后味绵长"],
  type: "multiple",
  answer: ["喷香", "醇甜", "后味绵长"]
},
{
  question: "关于人工酿酒起源的说法有磁山文化，仰韶文化，贾湖文化，分别距今：____。",
  options: ["一万零三百年", "九千年", "六千年", "五千年"],
  type: "multiple",
  answer: ["一万零三百年", "九千年", "六千年"]
},
{
  question: "中国白酒169计划研究的六个方面分别是：中国白酒____活性物质，中国白酒____物质特征，白酒贮存，主要香味物质生成机理，呈香、呈味物质生成专家阈值，年份酒研究。",
  options: ["风味", "香气", "香味", "健康"],
  type: "multiple",
  answer: ["风味", "健康"]
},
{
  question: "品酒师应克服的不正确心理有____。",
  options: ["偏爱心理", "猜测心理", "不公正心理", "老习惯心理"],
  type: "multiple",
  answer: ["偏爱心理", "猜测心理", "不公正心理", "老习惯心理"]
},
{
  question: "五粮液作为浓香型白酒的典型代表，除了固态续糟、泥窖发酵、混蒸混烧、缓慢发酵这些中国白酒的固态发酵共性生产工艺外，五粮液还有自己独特的秘诀——1366工艺，分别是____。",
  options: ["一极", "三优", "六首创", "六精酿"],
  type: "multiple",
  answer: ["一极", "三优", "六首创", "六精酿"]
},
{
  question: "勾调的前提有____。",
  options: ["蒸馏", "分槽蒸馏", "分类入库", "按质摘酒"],
  type: "multiple",
  answer: ["蒸馏", "分槽蒸馏", "分类入库", "按质摘酒"]
},
{
  question: "带苦、涩、酸、麻味的酒不一定是坏酒，若使用得当，则可以作为调味酒。以下说法正确的是：____。",
  options: ["后味带苦的酒可以增加组合酒的陈味。", "后味带涩的酒可以增加基础酒的香味。", "后味带酸的酒可以增加基础酒的醇甜味。", "带麻味的酒可以提高组合酒的浓香味。"],
  type: "multiple",
  answer: ["后味带苦的酒可以增加组合酒的陈味。", "后味带涩的酒可以增加基础酒的香味。", "后味带酸的酒可以增加基础酒的醇甜味。", "带麻味的酒可以提高组合酒的浓香味。"]
},
{
  question: "构思创意是新的酒体设计的开始，新的酒体设计的构思创意主要来自____方面。",
  options: ["用户", "本企业职工", "品酒师", "专业科研人员"],
  type: "multiple",
  answer: ["用户", "本企业职工", "专业科研人员"]
},
{
  question: "白酒的发展同样也离不开创新，现我国主要香型白酒主要转变方向有____。",
  options: ["由传统香型酒向不同香型酒之间的转变", "传统白酒向新型白酒及营养复制白酒转化", "风味的变化", "高度向低度转变"],
  type: "multiple",
  answer: ["由传统香型酒向不同香型酒之间的转变", "传统白酒向新型白酒及营养复制白酒转化", "风味的变化"]
},
{
  question: "勾调原则有____。",
  options: ["注重各种槽醅之间的搭配", "注重老酒和一般酒的搭配", "老窖酒与新窖酒的搭配", "注意不同季节所产酒的搭配"],
  type: "multiple",
  answer: ["注重各种槽醅之间的搭配", "注重老酒和一般酒的搭配", "老窖酒与新窖酒的搭配", "注意不同季节所产酒的搭配"]
},
{
  question: "浓香型固态白酒生产的基本类型有____。",
  options: ["老五甑", "串香工艺", "跑窖法", "原窖法"],
  type: "multiple",
  answer: ["老五甑", "跑窖法", "原窖法"]
},
{
  question: "酿酒原料中含大量支链淀粉的有____。",
  options: ["粳高粱", "糯高粱", "大米", "糯米", "玉米", "小麦"],
  type: "multiple",
  answer: ["糯高粱", "糯米"]
},
{
  question: "浓香型白酒生产工艺中五粮液的生产工艺独树一帜，首创了包括____沸点量水、勾兑双绝六种工艺，已被业内企业广为借鉴使用。",
  options: ["五粮配方", "包包曲", "跑窖循环", "双轮底"],
  type: "multiple",
  answer: ["五粮配方", "包包曲", "跑窖循环", "双轮底"]
},
{
  question: "白酒贮存过程中，乙醇和水分子的缔合，是通过____成大分子，而它们之间发生的缔合作用，对____的变化是十分重要的,但是氢键缔合平衡不是白酒品质改善的主要因素。",
  options: ["氢键缔合", "感官刺激", "螯合反应", "表面张力"],
  type: "multiple",
  answer: ["氢键缔合", "感官刺激"]
},
{
  question: "羰基与____烃基相连的化合物称为醛，与____烃基相连称为酮。",
  options: ["一个", "两个", "三个", "四个"],
  type: "multiple",
  answer: ["一个", "两个"]
},
{
  question: "四特酒大曲原料采用____而制成。",
  options: ["大麦", "麸皮", "豌豆", "酒糟"],
  type: "multiple",
  answer: ["麸皮", "酒糟"]
},
{
  question: "品酒环境：品酒室光线充足、柔和、适宜，温度为____，湿度约为____，____，恒温恒湿，无香气及邪杂气味。",
  options: ["20℃—25℃", "60%", "18℃", "空气新鲜"],
  type: "multiple",
  answer: ["20℃—25℃", "60%", "空气新鲜"]
},
{
  question: "茅台酒生产工艺的特点是____。",
  options: ["高温制曲", "高温馏酒", "高温发酵", "高温储存"],
  type: "multiple",
  answer: ["高温制曲", "高温馏酒", "高温发酵"]
},
{
  question: "白酒储存过程中酒体会发生哪些变化____。",
  options: ["物理变化", "化学变化", "温度变化"],
  type: "multiple",
  answer: ["物理变化", "化学变化"]
},
{
  question: "酒尾中酒精度低，各组分比例失调，____含量较多。",
  options: ["高级醇", "乳酸", "高级脂肪酸及其乙酯", "低级乙酯"],
  type: "multiple",
  answer: ["高级醇", "乳酸", "高级脂肪酸及其乙酯"]
},
{
  question: "浓香型白酒的发酵容器-窖泥老化的表现特征之一，即出现白色结晶，此白色结晶一般为____。",
  options: ["乙酸钠", "乳酸亚铁", "乳酸钙", "磷酸钙", "乳酸锌", "乙酸铁"],
  type: "multiple",
  answer: ["乳酸亚铁", "乳酸钙"]
},
{
  question: "蒸馏时往往采用掐头去尾，因酒尾中各组分比例失调，使酒的口味____。",
  options: ["醇厚", "淡薄", "苦涩", "回甜", "糙辣", "剌喉"],
  type: "multiple",
  answer: ["淡薄", "苦涩", "剌喉"]
},
{
  question: "提高浓香型白酒的主要措施有____。",
  options: ["双轮底发酵工艺", "人工老窖技术", "控制低温，缓慢发酵措施", "其他措施"],
  type: "multiple",
  answer: ["双轮底发酵工艺", "人工老窖技术", "控制低温，缓慢发酵措施", "其他措施"]
},
{
  question: "中高档新型白酒的开发所使用的酒精最好是____。",
  options: ["三塔蒸馏", "糖蜜为原料", "玉米为原料", "六塔蒸馏"],
  type: "multiple",
  answer: ["玉米为原料", "六塔蒸馏"]
},
{
  question: "食用酒精的感观指标评定主要从____进行确定",
  options: ["外观", "气味", "色谱数据", "口味"],
  type: "multiple",
  answer: ["外观", "气味", "口味"]
},
{
  question: "要成为一名优秀的品酒员除必要的生理条件以外从品尝技术要求上还应具备以下的条件____。",
  options: ["味觉、嗅觉的敏感性", "品尝结果的准确性", "对白酒口味的嗜好性", "描述品尝结果的精确性"],
  type: "multiple",
  answer: ["味觉、嗅觉的敏感性", "品尝结果的准确性", "描述品尝结果的精确性"]
},
{
  question: "白酒中呈涩味的成分主要有____。",
  options: ["乙酸乙酯", "乙酸", "乳酸和乳酸乙酯", "单宁", "糠醛及杂醇油"],
  type: "multiple",
  answer: ["乳酸和乳酸乙酯", "单宁", "糠醛及杂醇油"]
},
{
  question: "全部以大米为原料是____。",
  options: ["特型", "米香型", "豉香型"],
  type: "multiple",
  answer: ["特型", "米香型", "豉香型"]
},
{
  question: "专家认为，白酒是一种胶体，其胶核有____。",
  options: ["棕榈酸乙酯", "油酸乙酯", "亚油酸乙酯", "杂醇油"],
  type: "multiple",
  answer: ["棕榈酸乙酯", "油酸乙酯", "亚油酸乙酯"]
},
{
  question: "制定原酒的感官质量标准主要考虑：____。",
  options: ["生产实际", "可操作性", "可以采用一下兄弟单位的标准"],
  type: "multiple",
  answer: ["生产实际", "可操作性"]
},
{
  question: "评酒员需具备的能力____。",
  options: ["较高品评能力与品评经验", "实事求是认真负责工作态度", "熟悉产品标准风格工艺特点", "健康的身体保持感觉器官灵敏", "坚持为社会服务的宗旨"],
  type: "multiple",
  answer: ["较高品评能力与品评经验", "实事求是认真负责工作态度", "熟悉产品标准风格工艺特点", "健康的身体保持感觉器官灵敏", "坚持为社会服务的宗旨"]
},
{
  question: "白酒品评的特点是____。",
  options: ["快速", "准确", "舒适", "方便", "适用"],
  type: "multiple",
  answer: ["快速", "准确", "方便", "适用"]
},
{
  question: "高温堆积是____白酒普遍使用的重要环节。",
  options: ["浓香型", "酱香型", "清香型", "浓酱结合型"],
  type: "multiple",
  answer: ["酱香型", "浓酱结合型"]
},
];

// Add points value to each question (defaulting to 1 point as per image examples)
questions.forEach(q => q.points = 1);

// Calculate total points dynamically
const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
const totalQuestions = questions.length;

const timeLimitSeconds = 10 * 60; 