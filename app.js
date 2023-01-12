const quizData = [{
    subject: 'Mathematics',
    questions:[
        {
        question:'what is 1+1 ?',
        options:[2,4,6,8],
        correctOption:2
    },
    {
        question: 'what is 20/2 ?',
        options:[10.2,10,5,200],
        correctOption:10
    },
    {
        question: "what is '20' * '2' ?",
        options:[200,100,40,20],
        correctOption:40
    },
    {
        question: 'what is a square ?',
        options:['two dimentional shape','equal shape','having length and breadth equal','4 equal sides and 4 vertices'],
        correctOption:'4 equal sides and 4 vertices'
    }
]
},
{
    subject: 'English',
    questions:[
        {
            question: '___ is a name of person, animal, place or things.',
            options: ['pronoun', 'noun', 'verb', 'action'],
            correctOption: 'noun'
        },
        {
            question: '___ action word.',
            options: ['noun', 'pronoun', 'verb', 'school'],
            correctOption: 'verb'
        },
        {
            question: '___ is used instead of a noun.',
            options: ['proonoun', 'pronoun', 'adverb', 'none of the above'],
            correctOption: 'pronoun'
        },
        {
            question: 'a young dog is called ?',
            options: ['little dog', 'small dog', 'poppi', 'puppy'],
            correctOption: 'puppy'
        }
    ]
},
{
    subject: 'Coding',
    questions: [
        {
            question: 'HTML stands for ?',
            options:['hipertext makeup language', 'hypertext mark language', 'highertext markup language', 'hypertext markup language'],
            correctOption: 'hypertext markup language'
        },
        {
            question: 'CSS stands for ?',
            options:['cascade styling sheet', 'cascading styles', 'cascading style sheet', 'casting styles sheet'],
            correctOption: 'cascading style sheet'
        },
        {
            question: 'JS stands for ?',
            options:['java script', 'javascript', 'javascrypt', 'javaskip'],
            correctOption: 'javascript'
        },
        {
            question: 'what HTML tag is used for linking JS files ?',
            options:['<script>', '<link>', '<root>', '<j>'],
            correctOption: '<script>'
        }
    ]
}
]

const subjectContainer = document.querySelector('.container-subject');
const subjectsList= document.querySelector('.subjects');
const questionContainer = document.querySelector('.question-container');
const questionList = document.querySelector('.question');
const optionsContainer = document.querySelector('.answers');
const scoreContainer = document.querySelector('.score');

let subject = "";
let score = 0;
let index = 0;

const getSubjects = () => {

    const subjects = quizData.map((data) => {
        return `
        <li class="subject" id="${data.subject.toLowerCase()}">
        ${data.subject}
        </li>
        `
    }).join('');
    subjectsList.innerHTML = subjects;

    const listOfSubjects = document.querySelectorAll('.subject');
    listOfSubjects.forEach((container) => {
        container.addEventListener('click', (e) => {
        subject = e.currentTarget.id;
        subjectContainer.classList.replace('show', 'question-container');
        questionContainer.classList.add('show');
        getQuestion();

        });
    });
};
const getQuestion = () => {
    scoreContainer.innerHTML = `<strong>Score:</strong> ${score}/4`

    const subjectQuestions = quizData.find((data) => {
        if(data.subject.toLowerCase() === subject) {
            return data;
        }
        return;
        
    });
    let { questions } = subjectQuestions;
    let { question, options, correctOption } = questions[index];
    questionContainer.innerHTML = `<strong>Question:</strong> ${question}`;
}
getSubjects()

