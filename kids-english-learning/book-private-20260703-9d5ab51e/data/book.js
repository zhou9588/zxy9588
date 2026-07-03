window.BOOK_CONFIG = {
  title: "三上电子课本童声配音版",
  totalPages: 107,
  imageFor(page) {
    return `assets/pages/page-${String(page).padStart(3, "0")}.jpg`;
  },
  units: [
    { id: "front", title: "封面与目录", from: 1, to: 6 },
    { id: "welcome", title: "Welcome unit", from: 7, to: 10 },
    { id: "unit1", title: "Unit 1 Hello, hello!", from: 11, to: 18 },
    { id: "unit2", title: "Unit 2 Colourful world", from: 19, to: 26 },
    { id: "unit3", title: "Unit 3 Numbers are fun!", from: 27, to: 34 },
    { id: "unit4", title: "Unit 4 My school things", from: 35, to: 42 },
    { id: "unit5", title: "Unit 5 In my classroom", from: 43, to: 50 },
    { id: "unit6", title: "Unit 6 Meet my family", from: 51, to: 59 },
    { id: "more", title: "More activities", from: 60, to: 85 },
    { id: "plays", title: "Plays", from: 86, to: 90 },
    { id: "words", title: "Words and expressions", from: 91, to: 97 },
    { id: "vocab", title: "Vocabulary", from: 98, to: 104 },
    { id: "proper", title: "Proper nouns", from: 105, to: 107 }
  ],
  curated: {
    4: {
      title: "致同学",
      cn: "欢迎进入英语学习的世界。本册将学习打招呼、介绍家人、询问物品、谈论颜色和数字。",
      lines: ["Welcome to English learning.", "Let's begin a happy English journey."],
      focus: ["English", "hello", "family", "colour", "number"]
    },
    6: {
      title: "Contents",
      cn: "本册目录：Welcome unit，Unit 1 到 Unit 6，More activities，Words and expressions。",
      lines: ["Welcome unit. Let's begin!", "Unit 1. Hello, hello!", "Unit 2. Colourful world.", "Unit 3. Numbers are fun!", "Unit 4. My school things.", "Unit 5. In my classroom.", "Unit 6. Meet my family."],
      focus: ["Welcome", "Hello", "Colour", "Numbers", "School things", "Classroom", "Family"]
    },
    7: {
      title: "Welcome unit: Let's begin!",
      cn: "先听一听英语学习开场歌，练习 listen, read, draw, write, speak。",
      lines: ["English is easy.", "Come on and join in.", "English is easy.", "Let's begin.", "Are you ready, kids?", "Yeah! OK. Join in."],
      focus: ["listen", "read", "draw", "write", "speak", "sing", "play"]
    },
    8: {
      title: "Classroom actions",
      cn: "课堂动作练习：听、指、涂、唱、写、表演。",
      lines: ["Listen and colour.", "Listen and sing.", "Listen and write.", "Listen and act.", "Look and listen.", "Let's play."],
      focus: ["listen", "colour", "sing", "write", "act", "play"]
    },
    10: {
      title: "Alphabet",
      cn: "认读 26 个英文字母。",
      lines: ["A, B, C, D, E, F, G.", "H, I, J, K, L, M, N.", "O, P, Q, R, S, T.", "U, V, W, X, Y, Z."],
      focus: ["A-Z", "letters", "alphabet"]
    },
    11: {
      title: "Unit 1: Hello, hello!",
      cn: "第一单元：学习打招呼和询问姓名。",
      lines: ["Hello! Hello! Hello!", "What's your name?", "I'm Toby.", "Hello, hello, hello!", "Let's go!"],
      focus: ["hello", "What's your name?", "I'm Toby"]
    },
    12: {
      title: "Ask and answer names",
      cn: "同桌互问姓名。",
      lines: ["What's your name?", "I'm Zhang Yinuo.", "Nice to meet you."],
      focus: ["What's your name?", "I'm ...", "Nice to meet you"]
    },
    13: {
      title: "Story time: Peck",
      cn: "故事：聪明的小鸟 Peck。",
      lines: ["Hello, Peck!", "Good morning, Peck!", "Goodbye, Peck!", "Peck is a clever bird.", "We all love him."],
      focus: ["hello", "good morning", "goodbye", "clever bird"]
    },
    14: {
      title: "Meet Peck",
      cn: "继续学习问候和祝福。",
      lines: ["This is Peck.", "Nice to meet you, Peck!", "Happy birthday, Peck!", "Good night, Peck!"],
      focus: ["This is ...", "Nice to meet you", "Happy birthday", "Good night"]
    },
    16: {
      title: "Language in use",
      cn: "综合练习姓名、告别和问候。",
      lines: ["How are you today?", "I'm fine.", "I'm OK.", "What's your name?", "I'm Wu Kai.", "Nice to meet you, too!", "Goodbye, children."],
      focus: ["How are you?", "I'm fine", "Goodbye"]
    },
    18: {
      title: "The ABC song",
      cn: "字母歌。",
      lines: ["A, B, C, D, E, F, G.", "H, I, J, K, L, M, N, O, P.", "Q, R, S, T, U, V.", "W, X, Y and Z.", "Now I can say my ABC."],
      focus: ["ABC", "letters", "song"]
    },
    19: {
      title: "Unit 2: Colourful world",
      cn: "第二单元：学习颜色。",
      lines: ["It's red.", "It's orange and yellow.", "Oh, what a rainbow!", "It's green.", "It's blue and purple.", "Oh, what a rainbow!"],
      focus: ["red", "orange", "yellow", "green", "blue", "purple"]
    },
    21: {
      title: "Story time: A colourful necklace",
      cn: "故事：彩色项链。",
      lines: ["Only white, red, yellow and blue.", "Let me think.", "Oh, an old necklace.", "I can paint it."],
      focus: ["white", "red", "yellow", "blue", "necklace", "paint"]
    },
    22: {
      title: "Colours for Mum",
      cn: "给妈妈的彩色项链。",
      lines: ["It's orange.", "Blue and yellow.", "It's green.", "Red and yellow.", "Happy birthday, Mum!", "Thank you, my dear!"],
      focus: ["orange", "green", "Happy birthday", "Mum"]
    },
    24: {
      title: "My little butterfly",
      cn: "蝴蝶歌曲。",
      lines: ["Hello, hello, hello.", "Oh, little butterfly.", "My little butterfly.", "Look at the butterfly.", "The lovely butterfly.", "Bye-bye, bye-bye, bye-bye."],
      focus: ["butterfly", "lovely", "hello", "bye-bye"]
    },
    25: {
      title: "Favourite colour",
      cn: "谈论最喜欢的颜色。",
      lines: ["What's your favourite colour?", "Is it blue?", "Is it green?", "No, no, no.", "Yes, that's right.", "My favourite colour is red."],
      focus: ["favourite colour", "Is it ...?", "Yes", "No"]
    },
    27: {
      title: "Unit 3: Numbers are fun!",
      cn: "第三单元：学习数字 1 到 10。",
      lines: ["The tiger jump, the tiger jump.", "Come on, let's do the tiger jump.", "One, two, three, four, five.", "Six, seven, eight, nine, ten."],
      focus: ["one", "two", "three", "four", "five", "ten"]
    },
    29: {
      title: "Story time: The ducks",
      cn: "故事：数鸭子。",
      lines: ["I see ducks!", "How many?", "One, two, three, four, five, six.", "Let's get out and have a look.", "The show is about to begin."],
      focus: ["ducks", "How many?", "one to ten"]
    },
    30: {
      title: "Safe ducks",
      cn: "帮助鸭子安全离开。",
      lines: ["Oh, no!", "One, two, three, four!", "Let's help.", "OK.", "The ducks are safe!", "Goodbye, ducks!"],
      focus: ["Let's help", "safe", "Goodbye"]
    },
    33: {
      title: "Numbers in life",
      cn: "生活中的数字。",
      lines: ["What's the number?", "It's ten.", "Find numbers in your life."],
      focus: ["What's the number?", "It's ten"]
    },
    35: {
      title: "Unit 4: My school things",
      cn: "第四单元：学习学习用品。",
      lines: ["What's this?", "It's a pencil.", "It's a pen.", "It's an eraser.", "It's a ruler.", "It's a schoolbag."],
      focus: ["pencil", "pen", "eraser", "ruler", "schoolbag"]
    },
    37: {
      title: "Story time: School things",
      cn: "故事：这是什么？",
      lines: ["I'm home!", "What's this?", "It's a pencil case.", "It's an eraser.", "It's a pencil.", "Nana, help me, please."],
      focus: ["What's this?", "It's ...", "help me"]
    },
    40: {
      title: "Take out school things",
      cn: "听指令拿出学习用品。",
      lines: ["Open your schoolbag.", "Take out a ruler.", "Take out two books.", "Take out three pens.", "Take out four pencils."],
      focus: ["Open your schoolbag", "Take out ..."]
    },
    41: {
      title: "Donate a schoolbag",
      cn: "准备并捐赠书包。",
      lines: ["What's in the schoolbag?", "Pencils and books.", "How many pencils?", "What's in it?", "How many?"],
      focus: ["What's in it?", "How many pencils?"]
    },
    43: {
      title: "Unit 5: In my classroom",
      cn: "第五单元：学习教室物品。",
      lines: ["Blackboard.", "Wall.", "Desk.", "Floor.", "Chair.", "Door.", "Window."],
      focus: ["blackboard", "desk", "chair", "door", "window"]
    },
    44: {
      title: "Where is it?",
      cn: "学习方位词。",
      lines: ["Where's the ball?", "It's on the desk.", "It's under the chair.", "It's beside the desk.", "It's behind the chair.", "It's in front of the window."],
      focus: ["where", "on", "under", "beside", "behind", "in front of"]
    },
    45: {
      title: "Story time: The bird",
      cn: "故事：教室里的小鸟。",
      lines: ["What's that?", "A bird!", "Where is it?", "It's in my desk.", "It's on my book.", "It's in front of the window.", "It's on the floor now."],
      focus: ["bird", "Where is it?", "It's ..."]
    },
    46: {
      title: "Let the bird go",
      cn: "帮助小鸟回家。",
      lines: ["Good morning, class.", "What's that, Pit?", "Look, it's under the desk.", "Come on, bird.", "Let it go.", "Come home with me, bird."],
      focus: ["Good morning", "under the desk", "Let it go"]
    },
    48: {
      title: "Clean the classroom",
      cn: "打扫教室。",
      lines: ["School is over.", "Let's clean the classroom.", "Clean the blackboard.", "Sweep the floor.", "Put your chair under the desk.", "See you tomorrow!"],
      focus: ["clean", "sweep", "put", "tomorrow"]
    },
    51: {
      title: "Unit 6: Meet my family",
      cn: "第六单元：学习家庭成员。",
      lines: ["Hello, Dad.", "Hello, Mum.", "Read with me.", "Hello, Brother.", "Hello, Sister.", "Play with me.", "Good morning, Grandpa.", "Good morning, Grandma.", "Have some tea."],
      focus: ["dad", "mum", "brother", "sister", "grandpa", "grandma"]
    },
    53: {
      title: "Story time: Family sports day",
      cn: "故事：家庭运动日。",
      lines: ["Today is family sports day.", "This is Dad.", "This is Mum.", "That is Grandpa.", "That is Grandma.", "We can win!", "We are the best!"],
      focus: ["This is ...", "That is ...", "family sports day"]
    },
    54: {
      title: "A great day",
      cn: "运动日结束。",
      lines: ["Are you all right?", "Yes, I'm fine.", "Thank you.", "Good job, Grandma!", "Great, Grandpa!", "Well done, Pit!", "What a great day!"],
      focus: ["Are you all right?", "I'm fine", "Well done"]
    },
    56: {
      title: "Introduce family",
      cn: "介绍家人。",
      lines: ["Who's this?", "This is my cousin.", "Her name is Li Luo.", "Nice to meet you.", "Nice to meet you, too."],
      focus: ["Who's this?", "This is my ...", "Nice to meet you"]
    },
    57: {
      title: "Family tree",
      cn: "介绍家庭树。",
      lines: ["Who's this?", "This is my brother.", "Draw your family tree.", "Point and say."],
      focus: ["family tree", "brother", "Who's this?"]
    },
    91: {
      title: "Words: Welcome and Unit 1",
      cn: "词汇复习：Welcome unit 和 Unit 1。",
      lines: ["let, begin, join, English, easy, come, listen, sing, speak, draw, write, read, hello, what, your, name, I."],
      focus: ["English", "hello", "name", "listen", "read"]
    },
    93: {
      title: "Words: Unit 2 and Unit 3",
      cn: "词汇复习：颜色和数字。",
      lines: ["rainbow, red, yellow, blue, green, orange, butterfly, favourite, number, tiger, jump, ten, nine, eight, seven, six, five, four, three, two, one."],
      focus: ["rainbow", "colour", "number", "one to ten"]
    },
    94: {
      title: "Words: Unit 4",
      cn: "词汇复习：学习用品。",
      lines: ["school, thing, pencil, pencil case, pen, eraser, schoolbag, ruler, book, home, where, picture, wall, paper."],
      focus: ["pencil", "schoolbag", "ruler", "book"]
    },
    95: {
      title: "Words: Unit 5 and Unit 6",
      cn: "词汇复习：教室和家庭。",
      lines: ["ball, behind, in front of, beside, under, class, clean, sweep, put, tomorrow, family, brother, sister, grandpa, grandma, uncle, aunt."],
      focus: ["classroom", "family", "under", "beside"]
    }
  }
};
