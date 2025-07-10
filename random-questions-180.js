const quizData = [
  {
    "question": "Why was the Big Dig in Boston often criticized as a megaproject?",
    "options": [
      "It was completed ahead of schedule.",
      "It caused too much environmental damage.",
      "It faced cost overruns and safety issues.",
      "It was built in another country."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Big Dig",
        "cost",
        "safety"
      ],
      "reasoning": "The Big Dig had major cost overruns and safety concerns, including leaks and even a fatal accident."
    }
  },
  {
    "question": "Which ethical concern is raised by using AI in creative industries?",
    "options": [
      "AI improves human creativity too much.",
      "AI can make physical art without human tools.",
      "AI-generated work may replace human jobs.",
      "AI only works offline and can\u2019t connect."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "AI",
        "jobs",
        "creativity"
      ],
      "reasoning": "A common concern is that AI might take over creative jobs traditionally done by humans."
    }
  },
  {
    "question": "Why is the NEOM project in Saudi Arabia controversial?",
    "options": [
      "It has no government funding.",
      "It was canceled after a year.",
      "It caused forced relocations of local people.",
      "It is being built in Antarctica."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "NEOM",
        "human rights",
        "relocation"
      ],
      "reasoning": "Reports indicate NEOM involved forced relocations, raising serious human rights concerns."
    }
  },
  {
    "question": "What is a main benefit of high-speed rail development?",
    "options": [
      "It makes highways longer.",
      "It can reduce airplane use and carbon emissions.",
      "It requires more freight trains.",
      "It makes road tunnels obsolete."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "high-speed rail",
        "environment",
        "carbon"
      ],
      "reasoning": "High-speed rail can lower the need for planes and cars, reducing emissions."
    }
  },
  {
    "question": "What does the term 'post-pandemic loneliness' refer to?",
    "options": [
      "New diseases from loneliness",
      "Isolation people felt even after lockdowns ended",
      "Better friendships after COVID-19",
      "A lack of vaccines in rural areas"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "pandemic",
        "loneliness",
        "society"
      ],
      "reasoning": "Even after restrictions were lifted, many people reported feelings of isolation."
    }
  },
  {
    "question": "Which of the following is a theme often explored in dystopian literature?",
    "options": [
      "Perfect societies",
      "Unlimited freedom and peace",
      "Government control and lack of personal rights",
      "Parties and celebration"
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "dystopia",
        "government",
        "freedom"
      ],
      "reasoning": "Dystopian literature usually warns about too much control and loss of freedom."
    }
  },
  {
    "question": "What is one reason space colonization is controversial?",
    "options": [
      "Earth has unlimited resources.",
      "It is cheap and easy to achieve.",
      "Some believe we should fix Earth first.",
      "We already live on Mars."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "space",
        "climate",
        "priority"
      ],
      "reasoning": "Critics argue that Earth\u2019s problems should be solved before investing in space."
    }
  },
  {
    "question": "What is one benefit of megaprojects like the Channel Tunnel?",
    "options": [
      "They reduce international cooperation.",
      "They provide long-term transportation links.",
      "They block tourism.",
      "They are built in deserts."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Channel Tunnel",
        "transportation",
        "Europe"
      ],
      "reasoning": "The Channel Tunnel connects countries and helps long-term travel."
    }
  },
  {
    "question": "What can art express that AI might struggle to capture?",
    "options": [
      "Brush strokes",
      "True human emotion and lived experience",
      "Pixel brightness",
      "Software updates"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "art",
        "emotion",
        "AI limits"
      ],
      "reasoning": "AI lacks true human experience, which makes human-created art unique."
    }
  },
  {
    "question": "What does it mean when a project is \u2018cancelled due to financial infeasibility\u2019?",
    "options": [
      "It became too popular.",
      "It could not be funded or afforded.",
      "It finished too early.",
      "It used recycled materials."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "finance",
        "project",
        "cancel"
      ],
      "reasoning": "Projects are often cancelled when they become too expensive to complete."
    }
  },
  {
    "question": "Why do some people oppose using AI to compose music?",
    "options": [
      "AI cannot write code.",
      "AI only plays classical music.",
      "AI lacks emotional depth and originality.",
      "AI is too expensive to use in schools."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "AI",
        "music",
        "emotion"
      ],
      "reasoning": "Critics argue that music made by AI may lack the emotion and creativity of human compositions."
    }
  },
  {
    "question": "What is a key reason governments build new planned cities like Sejong in South Korea?",
    "options": [
      "To replace old cities completely",
      "To reduce crowding and improve regional development",
      "To build more shopping malls",
      "To make cities look futuristic"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "urban planning",
        "Sejong",
        "overpopulation"
      ],
      "reasoning": "Sejong was designed to ease Seoul's congestion and support balanced development."
    }
  },
  {
    "question": "Which of the following is a concern with climate change reparations?",
    "options": [
      "They only help rich countries.",
      "They can be difficult to calculate and agree upon.",
      "They are paid by individuals, not governments.",
      "They reduce rainfall."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate justice",
        "reparations",
        "policy"
      ],
      "reasoning": "Countries disagree on how to calculate damages and who should pay."
    }
  },
  {
    "question": "Which feature makes the Hong Kong-Zhuhai-Macau Bridge unique?",
    "options": [
      "It floats on water.",
      "It combines bridges, tunnels, and artificial islands.",
      "It connects to a volcano.",
      "It has underwater hotels."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "HZMB",
        "bridge",
        "engineering"
      ],
      "reasoning": "The HZMB includes several connected structures, making it an engineering feat."
    }
  },
  {
    "question": "Why are megaprojects often delayed or over budget?",
    "options": [
      "They use robots for every task.",
      "They are too small in scale.",
      "They involve complex logistics and unexpected challenges.",
      "They are all based on video games."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "delay",
        "budget",
        "megaproject"
      ],
      "reasoning": "The large size and complexity of megaprojects often cause delays and overspending."
    }
  },
  {
    "question": "Which genre of literature often explores technology and its impact on society?",
    "options": [
      "Mystery",
      "Science Fiction",
      "Romantic Comedy",
      "Biography"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "sci-fi",
        "technology",
        "future"
      ],
      "reasoning": "Science fiction commonly examines how technology could shape the future."
    }
  },
  {
    "question": "How can megaprojects affect the environment?",
    "options": [
      "They reduce taxes.",
      "They always help nature grow faster.",
      "They can disrupt ecosystems and wildlife habitats.",
      "They increase chocolate production."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "environment",
        "impact",
        "megaproject"
      ],
      "reasoning": "Large construction projects can damage ecosystems during building."
    }
  },
  {
    "question": "Why is the Three Gorges Dam significant?",
    "options": [
      "It is the tallest building in Asia.",
      "It is the largest hydroelectric power station by capacity.",
      "It is used mainly for fishing.",
      "It connects three countries."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "dam",
        "energy",
        "China"
      ],
      "reasoning": "It provides massive amounts of electricity and is a major Chinese infrastructure project."
    }
  },
  {
    "question": "Which issue may arise when AI writes school essays?",
    "options": [
      "The essays are too colorful.",
      "It may encourage cheating or reduce student learning.",
      "They include too much singing.",
      "It is only available at night."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "education",
        "writing"
      ],
      "reasoning": "Some educators worry students may rely too much on AI instead of learning to write themselves."
    }
  },
  {
    "question": "Which literary theme connects to post-pandemic society?",
    "options": [
      "Festivals and parades",
      "Isolation and reconnection",
      "Talking animals",
      "Time travel for fun"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "theme",
        "pandemic",
        "literature"
      ],
      "reasoning": "Post-pandemic stories often explore themes like loneliness and rebuilding social ties."
    }
  },
  {
    "question": "What makes the Khazar Islands project an example of a stalled megaproject?",
    "options": [
      "It was built in the wrong country.",
      "It failed due to political conflict.",
      "It paused after oil prices dropped and legal issues arose.",
      "It was destroyed by a tsunami."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Khazar Islands",
        "delay",
        "oil crash"
      ],
      "reasoning": "The project stalled due to the oil price crash and financial/legal problems faced by its developer."
    }
  },
  {
    "question": "Which challenge is common in building high-speed rail in countries like Canada?",
    "options": [
      "Too much rainfall.",
      "Most tracks are owned by freight companies, limiting access.",
      "All cities already have subways.",
      "Snow makes trains too fast."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Canada",
        "rail",
        "ownership"
      ],
      "reasoning": "Freight companies own most rail lines, making it difficult for high-speed passenger trains to operate effectively."
    }
  },
  {
    "question": "Which of these is an ethical concern about AI in journalism?",
    "options": [
      "AI prints newspapers too fast.",
      "AI may spread misinformation or bias.",
      "AI only uses black and white images.",
      "AI requires too much electricity."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "ethics",
        "news"
      ],
      "reasoning": "If not carefully programmed, AI could unintentionally promote bias or false information."
    }
  },
  {
    "question": "Why is the idea of space colonization debated in ethics?",
    "options": [
      "It increases sunburn.",
      "It may ignore the needs of Earth's poor and suffering.",
      "It makes gravity disappear.",
      "It requires no funding."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "space",
        "ethics",
        "Earth"
      ],
      "reasoning": "Some argue resources should be spent on helping Earth before exploring space."
    }
  },
  {
    "question": "What does the term 'biodiversity' refer to?",
    "options": [
      "The variety of jobs in one country.",
      "The number of colors in an artwork.",
      "The variety of living organisms in a specific environment.",
      "The structure of ancient cities."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "environment",
        "biodiversity",
        "ecosystem"
      ],
      "reasoning": "Biodiversity includes all different species living together in one place."
    }
  },
  {
    "question": "In literature, what is a common purpose of satire?",
    "options": [
      "To list scientific facts.",
      "To make people laugh without thinking.",
      "To criticize society using humor and irony.",
      "To describe landscapes."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "satire",
        "literature",
        "criticism"
      ],
      "reasoning": "Satire is often used to point out problems in society through humor or exaggeration."
    }
  },
  {
    "question": "Which statement is true about the California High-Speed Rail?",
    "options": [
      "It is a privately funded train in Alaska.",
      "It was canceled after finishing construction.",
      "It is being built in sections due to limited funding.",
      "It only connects small towns."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "California",
        "funding",
        "infrastructure"
      ],
      "reasoning": "Due to budget constraints, the rail is being built section by section."
    }
  },
  {
    "question": "What is one reason NEOM\u2019s \u2018The Line\u2019 has drawn attention?",
    "options": [
      "It is a round tower with gardens.",
      "It\u2019s a straight city built to reduce environmental impact.",
      "It is underwater and for sea creatures.",
      "It will be powered by oil."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "NEOM",
        "The Line",
        "design"
      ],
      "reasoning": "\u2018The Line\u2019 is a linear city designed for environmental efficiency and futuristic living."
    }
  },
  {
    "question": "How can literature influence public opinion about megaprojects?",
    "options": [
      "It shows only diagrams of buildings.",
      "It repeats government announcements.",
      "It raises awareness and encourages debate through storytelling.",
      "It gives readers construction tools."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "literature",
        "megaproject",
        "awareness"
      ],
      "reasoning": "Books and articles can shape how people feel about large projects by telling their impacts."
    }
  },
  {
    "question": "Which of these represents global justice in climate action?",
    "options": [
      "Rich nations supporting developing countries\u2019 recovery from climate disasters.",
      "Developing countries ignoring climate rules.",
      "Building new factories with no limits.",
      "Sending more emails about climate change."
    ],
    "answer": 0,
    "explanation": {
      "keywords": [
        "climate",
        "justice",
        "support"
      ],
      "reasoning": "Climate justice calls for richer nations to assist those hit hardest by climate effects."
    }
  },
  {
    "question": "What is an advantage of automation in factories?",
    "options": [
      "It reduces the need for electricity.",
      "It replaces all managers with robots.",
      "It can increase production speed and consistency.",
      "It teaches humans how to dance."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "automation",
        "factory",
        "efficiency"
      ],
      "reasoning": "Automation helps factories produce more efficiently and with fewer errors."
    }
  },
  {
    "question": "Why might someone argue that AI art should not win human art competitions?",
    "options": [
      "AI art is too colorful.",
      "It might not involve human creativity or effort.",
      "It requires oil paints.",
      "AI can only draw animals."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "art",
        "competition"
      ],
      "reasoning": "Some feel it is unfair if AI art, which lacks emotional input, competes with human-made pieces."
    }
  },
  {
    "question": "Which of the following is an example of a 'soft' infrastructure project?",
    "options": [
      "A new highway bridge",
      "A satellite launch center",
      "A national school reform program",
      "An oil pipeline across a desert"
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "soft infrastructure",
        "education",
        "policy"
      ],
      "reasoning": "Soft infrastructure refers to human systems such as education, health, or law."
    }
  },
  {
    "question": "Why do many megaprojects go over budget?",
    "options": [
      "Engineers forget to bring tools.",
      "Project scope and costs are often underestimated.",
      "The projects are done entirely by AI.",
      "There are too many snack breaks."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "megaproject",
        "budget",
        "underestimate"
      ],
      "reasoning": "Early planning often misses hidden costs and risks, leading to overruns."
    }
  },
  {
    "question": "Which of these actions best shows climate responsibility?",
    "options": [
      "Burning more coal during winter",
      "Supporting clean energy projects",
      "Cutting down forests for farming",
      "Building more highways"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate",
        "clean energy",
        "responsibility"
      ],
      "reasoning": "Clean energy reduces greenhouse gas emissions and helps fight climate change."
    }
  },
  {
    "question": "What is a reason some people want to regulate AI use in classrooms?",
    "options": [
      "AI eats paper.",
      "It may reduce students\u2019 motivation to think critically.",
      "AI always asks students to sing.",
      "AI doesn't like books."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "education",
        "regulation"
      ],
      "reasoning": "Teachers worry students may rely too much on AI instead of developing their own skills."
    }
  },
  {
    "question": "Why was the Channel Tunnel controversial before it was built?",
    "options": [
      "It blocked whale migration.",
      "People feared it could harm national security.",
      "It crossed over a volcano.",
      "Trains might explode underwater."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Channel Tunnel",
        "security",
        "UK"
      ],
      "reasoning": "Critics feared that a physical connection could pose security risks for the UK."
    }
  },
  {
    "question": "What is an effect of climate change on oceans?",
    "options": [
      "Oceans are freezing over.",
      "Oceans are rising and becoming more acidic.",
      "Oceans are turning into rivers.",
      "They are creating more diamonds."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate change",
        "ocean",
        "acidification"
      ],
      "reasoning": "Rising CO2 causes oceans to become more acidic and sea levels to rise."
    }
  },
  {
    "question": "What is a key difference between human and AI-created poetry?",
    "options": [
      "AI uses better rhymes.",
      "Humans may express deeper emotional experience.",
      "AI always includes footnotes.",
      "Human poems are shorter."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "poetry",
        "AI",
        "emotion"
      ],
      "reasoning": "Humans write from personal experience, which gives poetry emotional depth."
    }
  },
  {
    "question": "Why might some oppose funding megaprojects like space colonies?",
    "options": [
      "They hate space movies.",
      "They believe that money should first solve Earth\u2019s urgent problems.",
      "Space projects are invisible.",
      "They dislike astronauts."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "space",
        "funding",
        "ethics"
      ],
      "reasoning": "Some believe helping Earth (poverty, climate) should come before investing in space."
    }
  },
  {
    "question": "Which of the following best defines a 'megaproject'?",
    "options": [
      "A small, short-term local project",
      "A project costing over $1 billion and affecting millions of people",
      "Any building taller than 50 floors",
      "A video game project that goes viral"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "megaproject",
        "definition",
        "scale"
      ],
      "reasoning": "Megaprojects are large-scale, expensive infrastructure or development projects that often exceed $1 billion in cost."
    }
  },
  {
    "question": "Why is AI sometimes considered dangerous in decision-making?",
    "options": [
      "AI prefers bananas over apples.",
      "AI lacks moral judgment and can reflect human bias.",
      "AI always takes too long to decide.",
      "AI demands to be called 'boss'."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "ethics",
        "bias"
      ],
      "reasoning": "AI can replicate existing human bias or make decisions without ethical reasoning."
    }
  },
  {
    "question": "What was the original purpose of Sejong City in South Korea?",
    "options": [
      "To serve as a movie studio",
      "To reduce crowding in Seoul and spread investment",
      "To host the Winter Olympics",
      "To be a new tourist island"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Sejong",
        "capital",
        "urban planning"
      ],
      "reasoning": "It was designed to relieve pressure on Seoul by distributing government agencies and growth."
    }
  },
  {
    "question": "Which of these is a key concern about megaprojects like NEOM?",
    "options": [
      "Too many trees were planted.",
      "It might force people to leave their homes and harm the environment.",
      "It\u2019s too cold in the desert.",
      "It only allows bicycles."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "NEOM",
        "criticism",
        "human rights"
      ],
      "reasoning": "The project has been criticized for forced relocations and environmental damage."
    }
  },
  {
    "question": "In what way can literature help students understand technology?",
    "options": [
      "It teaches students how to use smartphones.",
      "It includes fictional stories that explore the impact of technology on society.",
      "It contains phone numbers of tech experts.",
      "It always mentions robots."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "literature",
        "technology",
        "themes"
      ],
      "reasoning": "Science fiction and speculative literature explore technology\u2019s effect on people."
    }
  },
  {
    "question": "Which of these describes a fair trade practice?",
    "options": [
      "Paying workers below minimum wage",
      "Ensuring producers in developing countries receive a fair price",
      "Using child labor in factories",
      "Banning all foreign products"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "economics",
        "fair trade",
        "justice"
      ],
      "reasoning": "Fair trade supports ethical treatment and fair pricing for producers."
    }
  },
  {
    "question": "Why was the Big Dig in Boston heavily criticized?",
    "options": [
      "It was built in the wrong city.",
      "It ran into major delays, cost overruns, and safety problems.",
      "It had no traffic lights.",
      "It was completed too quickly."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Big Dig",
        "criticism",
        "construction"
      ],
      "reasoning": "The Big Dig faced major planning and engineering failures, leading to serious issues."
    }
  },
  {
    "question": "How is global cooperation important in fighting climate change?",
    "options": [
      "Only one country can solve it alone.",
      "Every country must act together, as climate affects everyone.",
      "It helps countries take over each other.",
      "It ensures cars are faster."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate",
        "cooperation",
        "global"
      ],
      "reasoning": "Since climate change is a global issue, cooperation across countries is essential."
    }
  },
  {
    "question": "What is a characteristic of a dystopian novel?",
    "options": [
      "It describes a perfect society.",
      "It explores flawed societies with oppression or control.",
      "It\u2019s always a comedy.",
      "It has no characters."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "dystopia",
        "literature",
        "theme"
      ],
      "reasoning": "Dystopian stories explore how societies can go wrong, often warning about control or inequality."
    }
  },
  {
    "question": "Why are floating cities being considered for the future?",
    "options": [
      "People want to live with mermaids.",
      "They\u2019re safer from pirates.",
      "To adapt to rising sea levels caused by climate change.",
      "They are easier to draw on maps."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "floating cities",
        "climate adaptation",
        "future"
      ],
      "reasoning": "As sea levels rise, floating cities are explored as alternatives for coastal living."
    }
  },
  {
    "question": "Which of the following best describes the purpose of the Three Gorges Dam?",
    "options": [
      "To store food for emergencies",
      "To create a wildlife park",
      "To generate electricity and control floods",
      "To grow aquatic plants"
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Three Gorges Dam",
        "electricity",
        "flood control"
      ],
      "reasoning": "It was built to produce hydroelectric power and help manage water levels in China."
    }
  },
  {
    "question": "What concern do critics have about the use of facial recognition AI?",
    "options": [
      "It can't recognize faces in cartoons.",
      "It may violate personal privacy and lead to surveillance abuse.",
      "It doesn't work on sunny days.",
      "It turns people into robots."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "facial recognition",
        "privacy"
      ],
      "reasoning": "Many worry it allows governments or companies to track individuals unfairly."
    }
  },
  {
    "question": "Why is biodiversity important to ecosystems?",
    "options": [
      "It makes forests look nicer.",
      "It increases the balance and resilience of living systems.",
      "It provides places for robots to live.",
      "It makes plants grow faster."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "biodiversity",
        "ecosystems",
        "resilience"
      ],
      "reasoning": "Greater biodiversity helps ecosystems recover from damage and support life more effectively."
    }
  },
  {
    "question": "Which is a key benefit of investing in education megaprojects?",
    "options": [
      "It makes schools taller.",
      "It increases test difficulty.",
      "It improves access and equality in learning opportunities.",
      "It allows students to skip lunch."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "education",
        "infrastructure",
        "access"
      ],
      "reasoning": "Large educational investments can improve outcomes and fairness in society."
    }
  },
  {
    "question": "What can satire in literature help us do?",
    "options": [
      "Build robots",
      "Laugh at serious topics to encourage reflection",
      "Cook faster meals",
      "Sleep better"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "literature",
        "satire",
        "reflection"
      ],
      "reasoning": "Satire uses humor and exaggeration to make us think critically about issues."
    }
  },
  {
    "question": "Why might cities choose to build green roofs?",
    "options": [
      "To attract bees",
      "To reduce building temperature and manage rainwater",
      "To grow trees tall enough to block planes",
      "To keep birds away"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "urban design",
        "green roofs",
        "sustainability"
      ],
      "reasoning": "Green roofs help with insulation and water absorption, making cities more eco-friendly."
    }
  },
  {
    "question": "Why do some critics oppose AI-generated news articles?",
    "options": [
      "They contain too many jokes.",
      "AI cannot verify facts or understand context like humans.",
      "AI writes in poems.",
      "News should only appear on paper."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "news",
        "context"
      ],
      "reasoning": "AI may struggle with complex political or emotional judgment that journalism requires."
    }
  },
  {
    "question": "Why do some scholars believe climate reparations are necessary?",
    "options": [
      "To encourage more ice cream sales",
      "To make rich countries poorer",
      "To acknowledge that developed nations contributed more to climate change",
      "To stop solar panels from being built"
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "climate",
        "reparations",
        "justice"
      ],
      "reasoning": "Many developed nations historically emitted more carbon and have a duty to support others."
    }
  },
  {
    "question": "What is an ethical concern about self-driving cars?",
    "options": [
      "They forget to refuel.",
      "They don't understand traffic jokes.",
      "They must be programmed to make life-or-death decisions.",
      "They can't drive backwards."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "self-driving",
        "AI",
        "ethics"
      ],
      "reasoning": "In emergencies, AI must make difficult decisions, such as choosing who to protect."
    }
  },
  {
    "question": "What made the Hong Kong-Zhuhai-Macao Bridge controversial?",
    "options": [
      "It was painted pink.",
      "It blocked air traffic.",
      "Many felt it was a waste due to low daily usage and high bureaucracy.",
      "It only allowed bicycles."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "infrastructure",
        "controversy",
        "usage"
      ],
      "reasoning": "Although impressive, the bridge was underused and required complex permits."
    }
  },
  {
    "question": "What is a key reason high-speed rail is difficult to build in Canada?",
    "options": [
      "There are too many mountains in the way.",
      "The trains are too slow.",
      "Most railway tracks are owned by freight companies.",
      "Canada already has too many subways."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Canada",
        "high-speed rail",
        "ownership"
      ],
      "reasoning": "Freight companies own most tracks, limiting the space for new high-speed trains."
    }
  },
  {
    "question": "What is a major downside to poorly planned megaprojects?",
    "options": [
      "They are usually fun to design.",
      "They often lose public trust and waste resources.",
      "They create too many video games.",
      "They always become tourist attractions."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "megaproject",
        "planning",
        "cost"
      ],
      "reasoning": "Without proper planning, megaprojects can become overly expensive and ineffective."
    }
  },
  {
    "question": "Why are some people skeptical about the NEOM project?",
    "options": [
      "It\u2019s located in Antarctica.",
      "It requires expensive technology no one understands.",
      "It may displace local people and harm the environment.",
      "It was built without a government."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "NEOM",
        "criticism",
        "environment"
      ],
      "reasoning": "Critics point to forced relocation and ecological damage as key concerns."
    }
  },
  {
    "question": "Why do critics say AI-generated art lacks authenticity?",
    "options": [
      "It takes too long to load.",
      "It doesn\u2019t come with a signature.",
      "It may copy others\u2019 work and lacks emotional depth.",
      "It always uses blue and green."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "AI",
        "art",
        "authenticity"
      ],
      "reasoning": "AI art may mimic styles but lacks human emotion or original thought."
    }
  },
  {
    "question": "What made the Channel Tunnel a historical breakthrough?",
    "options": [
      "It was the first underwater tunnel between two continents.",
      "It was the shortest train ride in Europe.",
      "It connects New York and London.",
      "It was built by robots."
    ],
    "answer": 0,
    "explanation": {
      "keywords": [
        "Channel Tunnel",
        "history",
        "transport"
      ],
      "reasoning": "The Channel Tunnel was the first fixed undersea link between the UK and Europe."
    }
  },
  {
    "question": "What is a potential danger of over-relying on space colonization?",
    "options": [
      "People might forget about helping Earth.",
      "Astronauts will get lonely.",
      "Too many planets will become crowded.",
      "Spacesuits are uncomfortable."
    ],
    "answer": 0,
    "explanation": {
      "keywords": [
        "space",
        "colonization",
        "ethics"
      ],
      "reasoning": "Focusing on space might distract us from solving urgent problems on Earth."
    }
  },
  {
    "question": "What is one role literature plays in understanding society?",
    "options": [
      "It helps people write longer sentences.",
      "It gives insight into human experiences and social issues.",
      "It makes paper books valuable.",
      "It shows off fonts."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "literature",
        "society",
        "insight"
      ],
      "reasoning": "Literature reflects culture, challenges ideas, and presents social commentary."
    }
  },
  {
    "question": "Which is an argument for using AI in classrooms?",
    "options": [
      "It grades without getting tired.",
      "It replaces all teachers completely.",
      "It makes students run faster.",
      "It can\u2019t understand emotions."
    ],
    "answer": 0,
    "explanation": {
      "keywords": [
        "AI",
        "education",
        "efficiency"
      ],
      "reasoning": "AI tools can assist teachers by handling routine tasks and saving time."
    }
  },
  {
    "question": "What was the main purpose of Khazar Islands project?",
    "options": [
      "To create floating schools",
      "To build artificial luxury islands for tourism",
      "To protect endangered fish",
      "To make more farmland"
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "Khazar Islands",
        "luxury",
        "development"
      ],
      "reasoning": "The project was planned as a luxury destination built on artificial islands."
    }
  },
  {
    "question": "What ethical challenge does AI face in war technology?",
    "options": [
      "It refuses to wear helmets.",
      "AI might make life-or-death decisions without human judgment.",
      "It always fights for the wrong side.",
      "It slows down tanks."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "warfare",
        "ethics"
      ],
      "reasoning": "AI-controlled weapons may lack human moral judgment, posing serious risks."
    }
  },
  {
    "question": "Why is the Big Dig often cited as an example of a failed megaproject?",
    "options": [
      "It was finished too quickly.",
      "It used cutting-edge technology.",
      "It faced cost overruns, delays, and safety issues.",
      "It turned into a swimming pool."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Big Dig",
        "failure",
        "cost"
      ],
      "reasoning": "The project suffered from poor planning and execution, causing numerous problems."
    }
  },
  {
    "question": "Which of the following best shows the idea of climate injustice?",
    "options": [
      "Everyone experiences the same climate.",
      "Developed countries caused more damage but poorer countries suffer more.",
      "Rainfall is unpredictable.",
      "Cities have more trees than villages."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate",
        "justice",
        "inequality"
      ],
      "reasoning": "Poorer nations often face harsher climate effects caused by wealthier countries."
    }
  },
  {
    "question": "What is a concern about AI being used in writing literature?",
    "options": [
      "AI doesn\u2019t enjoy reading.",
      "AI might replace human authors\u2019 voices and reduce originality.",
      "Books will get longer.",
      "Libraries won\u2019t allow AI books."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "writing",
        "originality"
      ],
      "reasoning": "AI-written works can lack creative soul or originality."
    }
  },
  {
    "question": "What makes The Line, part of NEOM, unique as a city plan?",
    "options": [
      "It floats on the ocean.",
      "It is shaped like a triangle.",
      "It is a linear city powered by renewable energy.",
      "It only has underground buildings."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "The Line",
        "NEOM",
        "linear city"
      ],
      "reasoning": "The Line is a planned city built in a straight line with smart technology and green energy."
    }
  },
  {
    "question": "Why do some believe that literature should remain a human craft?",
    "options": [
      "Because people like writing with pens.",
      "Human emotions and lived experience can\u2019t be replaced by machines.",
      "Books are too heavy for AI.",
      "AI doesn\u2019t have a library card."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "literature",
        "human",
        "emotion"
      ],
      "reasoning": "Writers express unique perspectives and emotional insight from their experiences."
    }
  },
  {
    "question": "What is a possible ethical issue with using robots for elderly care?",
    "options": [
      "Robots don\u2019t wear shoes.",
      "It could reduce human interaction and empathy.",
      "Elderly people don\u2019t like buttons.",
      "They might forget to recharge."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "robots",
        "elderly",
        "ethics"
      ],
      "reasoning": "Over-reliance on robots may isolate older adults emotionally."
    }
  },
  {
    "question": "Why was the Hambantota port criticized as a megaproject?",
    "options": [
      "It was too colorful.",
      "It was extremely successful.",
      "It was built in a low-demand area and created debt issues.",
      "It connected two mountain villages."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "Hambantota",
        "Sri Lanka",
        "criticism"
      ],
      "reasoning": "The port raised concerns about financial viability and strategic debt."
    }
  },
  {
    "question": "Why do scholars study megaproject failures?",
    "options": [
      "To laugh at them.",
      "To learn lessons and avoid repeating mistakes.",
      "To build models for fun.",
      "To compare architecture styles."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "megaprojects",
        "lessons",
        "planning"
      ],
      "reasoning": "Analyzing past failures helps improve future projects."
    }
  },
  {
    "question": "How can climate education help society?",
    "options": [
      "It teaches people to swim.",
      "It inspires action and spreads awareness about solutions.",
      "It makes weather reports more interesting.",
      "It changes the temperature."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "climate",
        "education",
        "awareness"
      ],
      "reasoning": "Educated citizens are more likely to act on environmental issues."
    }
  },
  {
    "question": "What\u2019s the main idea behind post-pandemic loneliness studies?",
    "options": [
      "People like being alone now.",
      "Technology made us more social.",
      "Isolation during the pandemic has lasting effects on mental health.",
      "Everyone became smarter."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "loneliness",
        "pandemic",
        "mental health"
      ],
      "reasoning": "Researchers found that social isolation increased mental health risks after COVID-19."
    }
  },
  {
    "question": "What is a common risk of infrastructure megaprojects in developing countries?",
    "options": [
      "They are too small to notice.",
      "They attract too many tourists.",
      "They often lead to heavy debt and underuse.",
      "They get completed too early."
    ],
    "answer": 2,
    "explanation": {
      "keywords": [
        "megaprojects",
        "developing countries",
        "risk"
      ],
      "reasoning": "Such projects can be expensive and not fully used, leading to debt burdens."
    }
  },
  {
    "question": "How might AI affect student creativity if overused?",
    "options": [
      "It encourages dancing.",
      "It could reduce independent thinking and expression.",
      "It helps students sleep better.",
      "It makes notebooks unnecessary."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "creativity",
        "education"
      ],
      "reasoning": "Over-relying on AI may reduce students' own problem-solving and imagination."
    }
  },
  {
    "question": "What is the value of studying poetry in modern education?",
    "options": [
      "It rhymes with everything.",
      "It teaches strong vocabulary and emotional expression.",
      "It replaces math homework.",
      "It improves handwriting."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "poetry",
        "education",
        "expression"
      ],
      "reasoning": "Poetry builds language skills and helps students express emotions."
    }
  },
  {
    "question": "Which of the following is an example of 'soft infrastructure'?",
    "options": [
      "A bridge.",
      "A health care system.",
      "A mountain.",
      "A dam."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "soft infrastructure",
        "examples"
      ],
      "reasoning": "Soft infrastructure includes institutions like healthcare, education, and governance."
    }
  },
  {
    "question": "Why is it important to learn about global megaprojects?",
    "options": [
      "They make great vacation spots.",
      "They show how large investments affect economies, environments, and people.",
      "They all use the same machines.",
      "They teach cooking skills."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "megaprojects",
        "importance",
        "impact"
      ],
      "reasoning": "Studying them helps us understand global change and development issues."
    }
  },
  {
    "question": "What is a challenge of teaching AI-generated information?",
    "options": [
      "AI is usually wrong.",
      "It\u2019s hard to tell if the information is biased or inaccurate.",
      "Students won\u2019t like it.",
      "It\u2019s always too advanced."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "AI",
        "bias",
        "education"
      ],
      "reasoning": "AI content can reflect human biases and must be critically reviewed."
    }
  },
  {
    "question": "Why do some critics oppose space colonization?",
    "options": [
      "It involves alien languages.",
      "Resources should be used to fix Earth\u2019s problems first.",
      "Mars has bad Wi-Fi.",
      "It's not mentioned in fairy tales."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "space",
        "ethics",
        "resources"
      ],
      "reasoning": "They argue we should solve hunger, poverty, and climate change on Earth first."
    }
  },
  {
    "question": "Which is a goal of sustainable urban planning?",
    "options": [
      "Widen all roads.",
      "Reduce pollution and create livable environments.",
      "Build more shopping malls.",
      "Paint all houses green."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "sustainability",
        "urban planning"
      ],
      "reasoning": "Sustainable design promotes cleaner, healthier, and more efficient cities."
    }
  },
  {
    "question": "How can debate help students in real life?",
    "options": [
      "They learn how to shout.",
      "They improve public speaking, reasoning, and empathy.",
      "They become lawyers immediately.",
      "They don\u2019t need to write anymore."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "debate",
        "skills",
        "real life"
      ],
      "reasoning": "Debating builds logic, communication, and perspective-taking."
    }
  },
  {
    "question": "What makes post-pandemic education different?",
    "options": [
      "Students wear shoes now.",
      "It includes more digital learning and flexible formats.",
      "Books are banned.",
      "All students sing before class."
    ],
    "answer": 1,
    "explanation": {
      "keywords": [
        "post-pandemic",
        "education",
        "digital"
      ],
      "reasoning": "Education systems adapted with more technology and blended learning after COVID."
    }
  }
];
