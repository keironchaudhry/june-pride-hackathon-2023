const questionPool = [
  "Dream dinner guest, anyone in the world?",
  "Fame: Would you want it? How?",
  "Pre-call rehearsals: Do you do it? Why?",
  'Describe your "perfect" day.',
  "Last time you sang, alone or with someone?",
  "Mind or body: Age 90 vs. 30-year-old?",
  "Secret hunch about your own mortality?",
  "Three commonalities with your partner?",
  "What are you most grateful for in life?",
  "Changing your upbringing: What would you alter?",
  "Share your life story in detail, four minutes.",
  "Desired quality or ability to wake up with?",
  "Crystal ball revelation: What truth would you seek?",
  "Long-standing dreams and reasons for not pursuing?",
  "Your greatest accomplishment in life?",
  "What do you value most in friendships?",
  "Your most treasured memory?",
  "Your most terrible memory?",
  "If you knew you wouldd die in a year, would you change?",
  "Meaning of friendship to you?",
  "Role of love and affection in your life?",
  "Positive characteristics of your partner (five items).",
  "Family closeness and happiness in your childhood?",
  "Your feelings about your relationship with your mother?",
  'Three true "we" statements about us.',
  'Complete: "I wish I had someone to share..."',
  "Important things for your partner to know to be close friends?",
  "Honest compliments for your partner.",
  "Share an embarrassing moment from your life.",
  "Last time you cried with someone or alone?",
  "Something you already like about your partner.",
  "What is too serious to be joked about?",
  "Regrets: What have you not told someone? Why not?",
  "House on fire: One item to save and why?",
  "Whose death in your family would disturb you most? Why?",
  "Personal problem: Seek advice from your partner.",
];

let question;
let randomQuestion;

// add event listener to activate the question button.
questionButton.addEventListener("click", generateQuestion);

function generateQuestion() {
  let randomQuestion =
    questionPool[Math.floor(Math.random() * questionPool.length)];
  document.getElementById("question").innerHTML = `${randomQuestion}`;
}
