export const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33A6",
  "#33A6FF",
  "#A633FF",
  "#FFA633",
  "#A6FF33",
  "#33FFA6",
  "#FF573A",
  "#FFA6A6",
  "#A6FFA6",
  "#A6A6FF",
  "#FFA6FF",
  "#FFFFA6",
  "#A6FFFF",
  "#FFA6A6",
  "#A6FFA6",
  "#A6A6FF",
  "#FFA6FF",
]
export const getLocalMissions = () => {
  const sexyMissions = [
    "The other partner will close its eyes and let the other one to do as he will for 1 minute",
    "Do a massage in the head for 3 minutes",
    "Full body massage for 15 minutes",
    "Do an Erotic dance to the partner for 1 minute",
    "tell the most secret fantacy that you had in mind ",
    "tell a story for one minute with a seducing voice",
    "Other partner will be fully nakend while you kiss his body where ever you want ",
    "Your target it to find the hotest way to turn on your partner while using your mouth around his/her neck",
    "Make a strip show for 3 minutes according to the song ",
    "2 minutes of lap dance according to song: Beyoncé - Drunk in Love (Explicit) ft. JAY Z.",
    "Tell the other partner what are you favorite position in sex",
    "tell about 3 things that make you the most horney ",
    "Give the other partner a massage for the part of his/her body part that he/she choose ",
    "Tell the story about the most sexy experience that you had in your life",
    "Tell all the things that you have done today in 2 minutes with the most seducing voice",
  ]
  return sexyMissions
}
export const getLocalQuestions = () => {
  const deepQuestions = [
    "What experience has fundamentally changed the way you see the world, and how?",
    "If you could have a conversation with any person, living or deceased, who would it be and why?",
    "What are your core values, and have you ever had to defend them?",
    "what do you do if you are facing a challange and you are keep trying and nothing is working ? ",
    "What is a dream or goal you have that you haven't shared with many people, and what makes it important to you?",
    "What does success mean to you, and how do you measure it in your life?",
    "What is the most important lesson you’ve learned from a past relationship, romantic or otherwise?",
    "If you could change one event in your life, what would it be and why?",
    "What book, movie, or piece of art has influenced you the most, and in what way?",
    "How do you think your closest friends would describe you, and do you agree with them?",
    "What do you think is the biggest challenge facing the world today, and how do you relate to it?",
    "If you could live during any historical period, when would it be and why?",
    "What are the most significant factors that have shaped your worldview?",
    "When you think about happiness, what’s the first thing that comes to mind?",
    "What’s a risk you’ve taken that paid off more than you anticipated?",
    "In your opinion, what is the most significant thing that most people overlook in life?",
    "How do you find balance between your personal and professional life?",
    "What's a belief you held strongly in the past that you've since changed your mind about?",
    "If you could gain one quality or ability that you admire in someone else, what would it be?",
  ]
  return deepQuestions
}
export const getRandomNumber = (n) => {
  return Math.floor(Math.random() * n)
}
export const sleep = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
