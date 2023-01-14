const quizData = [
  {
    subject: "Mathematics",
    questions: [
      {
        question: "Find the sum of 111 + 222 + 333",
        options: [700, 666, 10, 100],
        correctOption: 666,
      },
      {
        question: "Subtract 357 from 932",
        options: [10, 68, 575, 765],
        correctOption: 575,
      },
      {
        question: " 70 times 5 is equal to",
        options: [350, 686, 12, 705],
        correctOption: 350,
      },
      {
        question: "Simplify: 26 + 182 - 12",
        options: [70, 196, 190, 140],
        correctOption: 196,
      },
      {
        question: " Solve : 24 + 4 ÷ 4",
        options: [25, 6, 28, 10],
        correctOption: 25,
      },
    ],
  },
  {
    subject: "Coding",
    questions: [
      {
        question: "What is Html?",
        options: [
          "Hypertext Markup Language",
          "Hypotext Markup Language",
          "Hypertext Makeup Language",

          "Hypertext Mockup Language",
        ],
        correctOption: "Hypertext Markup Language",
      },
      {
        question: "Is CSS a programming Language",
        options: ["Yes", "No", "Maybe", "I don't know"],
        correctOption: "No",
      },
      {
        question: "Javascript is the same as Java",
        options: ["True", "False", "Maybe", "I don't know"],
        correctOption: "False",
      },
      {
        question: "Javascript can only be used for Web development",
        options: ["True", "False", "Maybe", "I don't know"],
        correctOption: "False",
      },
      {
        question: "What is '2' + '2'",
        options: [4, 22, 5, 10],
        correctOption: 22,
      },
    ],
  },
  {
    subject: "English",
    questions: [
      {
        question: "Which is correct?",
        options: [
          "Circumstance",
          "Circummstance",
          "Circcumstance",

          "Circumstanse",
        ],
        correctOption: "Circumstance",
      },
      {
        question: "Which is wrong?",
        options: ["Communicate", "Circumstance", "Counterfeit", "Contantment"],
        correctOption: "Contantment",
      },
      {
        question: "Which is a noun?",
        options: ["Advice", "Advise", "Coming", "feeling"],
        correctOption: "Advice",
      },
      {
        question: "Which is odd?",
        options: ["Country", "City", "Town", "People"],
        correctOption: "People",
      },
      {
        question: "What is odd?",
        options: ["Apple", "Orange", "Green", "Red"],
        correctOption: "Apple",
      },
    ],
  },
];

const subjectContainer = document.querySelector(".container-subject");
const subjectsList = document.querySelector(".subjects");
const questionContainer = document.querySelector(".question");
const questionsContainer = document.querySelector(".question-container");
const questionList = document.querySelector(".question");
const optionsContainer = document.querySelector(".answers");
const scoreContainer = document.querySelector(".score");

const previousBtn = document.querySelector(".pre-btn");
const quitBtn = document.querySelector(".quit-btn");
const nextBtn = document.querySelector(".next-btn");

const wonIcon = document.querySelector("#won");
const lostIcon = document.querySelector("#lost");
const commentOne = document.querySelector(".comment1");
const commentTwo = document.querySelector(".comment2");
const nextSubject = document.querySelector(".next-subj");
const yesBtn = document.querySelector("yes-btn");
const noBtn = document.querySelector("no-btn");
const finalScore = document.querySelector("final-score");
const resultContainer = document.querySelector("result-container");

let subject = "";
let score = 0;
let index = 0;
acceptingAnswers = true;

const getSubjects = () => {
  const subjects = quizData
    .map((data) => {
      return `
        <li class="subject" id="${data.subject.toLowerCase()}">
        ${data.subject}
        </li>
        `;
    })
    .join("");
  subjectsList.innerHTML = subjects;

  const listOfSubjects = document.querySelectorAll(".subject");
  listOfSubjects.forEach((container) => {
    container.addEventListener("click", (e) => {
      subject = e.currentTarget.id;
      subjectContainer.classList.remove("show");
      questionContainer.classList.add("show");
      questionsContainer.classList.add("show");
      getQuestion();
    });
  });
};
const getQuestion = () => {
  const subjectQuestions = quizData.find((data) => {
    if (data.subject.toLowerCase() === subject) {
      return data;
    }

    return;
  });
  let { questions } = subjectQuestions;
  let { question, options, correctOption } = questions[index];
  questionContainer.innerHTML = `<p class"question"><strong>Question:</strong> ${question}</p>`;
  scoreContainer.innerHTML = `<strong>Score:</strong> ${score}/5`;

  const optionList = options
    .map((option, question) => {
      return `
        <li class="option">
        ${option}</li>
        `;
    })
    .join("");
  optionsContainer.innerHTML = optionList;
  const optionsList = document.querySelectorAll(".option");

  //Note: handleClickFunc
  nextBtn.addEventListener("click", () => {
    index++;
    if (index > 4) {
      index = 4;
    }
    getQuestion();
  });
  previousBtn.addEventListener("click", () => {
    if (index != 0) {
      //still working on this
    }
    getQuestion();
  });
  quitBtn.addEventListener("click", () => {
    subjectContainer.classList.add("show");
    questionsContainer.classList.remove("show");
    index = 0;
    score = 0;
  });
};
getSubjects();
