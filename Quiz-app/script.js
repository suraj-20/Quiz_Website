const quizData = [
    {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Hyperlink Markup Language',
        c: 'Hypertext Machine Language',
        d: 'Hightext Machine Language',
        correct: 'a'
    },
    {
        question: 'How is doucument type initialized in HTML5?',
        a: '</DOCTYPE HTML>',
        b: '</DOCTYPE>',
        c: '<!DOCTYPE HTML>',
        d: '</DOCTYPE html>',
        correct: 'c'
    }, {
        question: 'Which of the following HTML Elements is used to make text bold?',
        a: '<p>',
        b: '<i>',
        c: '<li>',
        d: '<b>',
        correct: 'd'
    }, {
        question: 'Which of the following HTML element is used to for creating an unordered list?',
        a: '<ui>',
        b: '<i>',
        c: '<em>',
        d: '<ul>',
        correct: 'd'
    }, {
        question: 'Which of the following charecter indicate closing of a tag?',
        a: '.',
        b: '/',
        c: '//',
        d: '!',
        correct: 'b'
    }, {
        question: 'How many heading tags are there in HTML5?',
        a: '2',
        b: '3',
        c: '5',
        d: '6',
        correct: 'd'
    }, {
        question: 'How many attributes are there in HTML5?',
        a: '2',
        b: '4',
        c: '1',
        d: 'None of the above',
        correct: 'd'
    }, {
        question: 'Which of the following attribute is used to link to any elements?',
        a: 'link',
        b: 'ref',
        c: 'href',
        d: 'newref',
        correct: "c"
    }, {
        question: 'What is the pupose of using div tags in HTML?',
        a: 'For creating Different Style',
        b: 'For creating different sections',
        c: 'For adding headings',
        d: 'For adding titles',
        correct: 'b'
    }, {
        question: 'Which of the following tags is used to add a line-break in HTML?',
        a: '<br>',
        b: '<break>',
        c: '</break>',
        d: '</br>',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    const answer = deselectAnswer();
}
loadQuiz();

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You scored ${score} out of ${quizData.length}.</h2>
                <button onClick="location.reload()">Reload</button>
                `
        }
    }

});