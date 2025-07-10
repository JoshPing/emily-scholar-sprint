const quizData = [
  {
    question: "What is the main goal of NEOM, the planned city in Saudi Arabia?",
    options: [
      "A. A film production hub",
      "B. A new agricultural center",
      "C. A clean-energy smart city",
      "D. A desert wildlife reserve"
    ],
    answer: 2,
    explanation: {
      keywords: ["clean-energy city: 清洁能源城市", "smart city: 智慧城市"],
      reasoning: "NEOM's goal is to build a futuristic, sustainable city powered by renewable energy."
    }
  },
  {
    question: "Why did the Big Dig in Boston face so many problems?",
    options: [
      "A. It was cancelled before it started",
      "B. No one used the new highway",
      "C. It was finished ahead of schedule",
      "D. It suffered from design flaws and cost overruns"
    ],
    answer: 3,
    explanation: {
      keywords: ["design flaws: 设计缺陷", "cost overruns: 成本超支"],
      reasoning: "The Big Dig faced issues like leaks, substandard materials, and criminal charges."
    }
  },
  {
    question: "Which of the following megaprojects is the longest sea crossing in the world?",
    options: [
      "A. Channel Tunnel",
      "B. Three Gorges Dam",
      "C. Hong Kong-Zhuhai-Macau Bridge",
      "D. Sejong City Express"
    ],
    answer: 2,
    explanation: {
      keywords: ["sea crossing: 海上通道", "bridge-tunnel system: 桥隧系统"],
      reasoning: "The HZMB is the longest open-sea fixed link in the world, connecting Hong Kong, Zhuhai, and Macau."
    }
  },
  {
    question: "What is a major reason Canada has not built high-speed rail despite studies?",
    options: [
      "A. The population is too supportive",
      "B. Studies always show it is too cheap to fail",
      "C. Financial costs and logistical issues",
      "D. The weather is too cold"
    ],
    answer: 2,
    explanation: {
      keywords: ["financial commitments: 财务投入", "logistical issues: 物流/基础设施问题"],
      reasoning: "High-speed rail in Canada faces high costs and challenges such as freight train dominance on tracks."
    }
  },
  {
    question: "Why was Bertha, the tunnel-boring machine in Seattle, halted?",
    options: [
      "A. Earthquake damaged the site",
      "B. Bertha was stuck and damaged underground",
      "C. Workers went on strike",
      "D. There were legal issues with landowners"
    ],
    answer: 1,
    explanation: {
      keywords: ["tunnel-boring machine: 隧道掘进机", "damaged: 受损"],
      reasoning: "Bertha was too damaged to move and got stuck underground, delaying Seattle’s tunnel project."
    }
  },
  {
    question: "Which project became controversial due to forced relocations of local people?",
    options: [
      "A. Big Dig",
      "B. Sejong City",
      "C. NEOM",
      "D. Channel Tunnel"
    ],
    answer: 2,
    explanation: {
      keywords: ["forced relocation: 强制搬迁", "human rights: 人权"],
      reasoning: "NEOM faced criticism for relocating around 20,000 people and possible human rights violations."
    }
  },
  {
    question: "What makes the Channel Tunnel historically significant?",
    options: [
      "A. It’s the longest bridge in Asia",
      "B. It connects England and France underwater",
      "C. It connects Seoul and Busan",
      "D. It uses solar-powered rail"
    ],
    answer: 1,
    explanation: {
      keywords: ["underwater tunnel: 水下隧道", "fixed link: 固定连接"],
      reasoning: "The Channel Tunnel is an undersea rail tunnel connecting England and France beneath the English Channel."
    }
  },
  {
    question: "Why is the California High-Speed Rail controversial?",
    options: [
      "A. Too many tourists are using it",
      "B. It uses old technology",
      "C. Route decisions and high cost",
      "D. It connects only deserts"
    ],
    answer: 2,
    explanation: {
      keywords: ["controversial: 有争议的", "route decision: 路线决策"],
      reasoning: "Criticism includes high cost and starting construction in a less populated area instead of coastal cities."
    }
  },
  {
    question: "What was a key purpose of founding Sejong City in South Korea?",
    options: [
      "A. To replace Busan",
      "B. To reduce Seoul’s congestion",
      "C. To promote tourism",
      "D. To build a port city"
    ],
    answer: 1,
    explanation: {
      keywords: ["congestion: 拥堵", "planned capital: 规划首都"],
      reasoning: "Sejong was built to reduce congestion in Seoul and relocate some government functions to central Korea."
    }
  },
  {
    question: "What was a major reason the Khazar Islands project stalled?",
    options: [
      "A. The sea level rose too high",
      "B. The company’s CEO was arrested",
      "C. Environmental protests stopped it",
      "D. It was completed in 2019"
    ],
    answer: 1,
    explanation: {
      keywords: ["arrested: 被逮捕", "debt: 债务"],
      reasoning: "The project halted when its owner was arrested for unpaid debts after oil prices crashed."
    }
  }

,
  {
    question: "Which country built the Three Gorges Dam?",
    options: [
      "A. India",
      "B. United States",
      "C. China",
      "D. Russia"
    ],
    answer: 2,
    explanation: {
      keywords: ["Three Gorges Dam: 三峡大坝", "hydroelectric: 水电"],
      reasoning: "The Three Gorges Dam is the world's largest hydroelectric project, located in China."
    }
  },
  {
    question: "What problem did the Big Dig project try to solve?",
    options: [
      "A. Airplane noise",
      "B. Heavy traffic congestion",
      "C. Subway pollution",
      "D. Water shortage"
    ],
    answer: 1,
    explanation: {
      keywords: ["traffic congestion: 交通拥堵", "interstate: 州际高速"],
      reasoning: "The Big Dig aimed to reduce traffic on old Boston highways and create a more efficient tunnel system."
    }
  },
  {
    question: "What delayed the Channel Tunnel’s early construction?",
    options: [
      "A. Lack of workers",
      "B. Lack of funding",
      "C. National security concerns",
      "D. Environmental protests"
    ],
    answer: 2,
    explanation: {
      keywords: ["national security: 国家安全", "cross-channel tunnel: 海峡隧道"],
      reasoning: "British concerns about national security delayed the Channel Tunnel project for over a century."
    }
  },
  {
    question: "What makes Hambantota a focus of development?",
    options: [
      "A. It has a desert economy",
      "B. It was damaged by a tsunami",
      "C. It is the capital of Sri Lanka",
      "D. It has many factories"
    ],
    answer: 1,
    explanation: {
      keywords: ["tsunami: 海啸", "development project: 开发项目"],
      reasoning: "After being hit by a tsunami in 2004, Hambantota was chosen for new port and airport megaprojects."
    }
  },
  {
    question: "Why is the New Eurasia Land Bridge project uncertain?",
    options: [
      "A. The terrain is too mountainous",
      "B. It has no government support",
      "C. It was stopped due to war",
      "D. It caused mass protests"
    ],
    answer: 2,
    explanation: {
      keywords: ["invasion: 入侵", "infrastructure investment: 基础建设投资"],
      reasoning: "China halted parts of the New Eurasia Land Bridge due to the war in Ukraine and Russian involvement."
    }
  },
  {
    question: "Why is Sejong not yet the full capital of South Korea?",
    options: [
      "A. It has no trains",
      "B. Many ministries remain in Seoul",
      "C. It was abandoned",
      "D. It's used only by tourists"
    ],
    answer: 1,
    explanation: {
      keywords: ["ministry: 政府部门", "relocate: 搬迁"],
      reasoning: "Although many government offices moved to Sejong, the National Assembly and others remain in Seoul."
    }
  },
  {
    question: "What is a major criticism of the Hong Kong-Zhuhai-Macau Bridge?",
    options: [
      "A. It broke after one year",
      "B. It had too much traffic",
      "C. It was rarely used due to paperwork",
      "D. It had no lighting"
    ],
    answer: 2,
    explanation: {
      keywords: ["paperwork: 文书手续", "restrictive: 限制性的"],
      reasoning: "The bridge is underused because of complicated procedures and restrictions on private use."
    }
  },
  {
    question: "What does the California High-Speed Rail aim to reduce?",
    options: [
      "A. Education spending",
      "B. Air traffic and highway congestion",
      "C. The use of bicycles",
      "D. The amount of TV ads"
    ],
    answer: 1,
    explanation: {
      keywords: ["air traffic: 空中交通", "congestion: 拥堵"],
      reasoning: "Supporters believe the project will reduce air and highway congestion while boosting the economy."
    }
  },
  {
    question: "Why did the Khazar Islands project pause in 2015?",
    options: [
      "A. The land was flooded",
      "B. The oil price crashed",
      "C. Earthquakes hit Baku",
      "D. Investors built another city"
    ],
    answer: 1,
    explanation: {
      keywords: ["oil price crash: 油价崩盘", "investment halted: 投资暂停"],
      reasoning: "The project stalled after the 2015 oil price crash, and the developer faced financial and legal trouble."
    }
  },
  {
    question: "What does the Three Gorges Dam produce?",
    options: [
      "A. Trains",
      "B. Floods",
      "C. Hydroelectric power",
      "D. Earthquakes"
    ],
    answer: 2,
    explanation: {
      keywords: ["hydroelectric power: 水力发电", "dam: 水坝"],
      reasoning: "It produces electricity by using water from the Yangtze River to turn turbines inside the dam."
    }
  }
]
;