let startBtn = document.getElementById("start")
let startMenu = document.getElementById("startMenu")
let timer = document.getElementById("timer")
let quizSection = document.getElementById("quizSection")
let question = document.getElementById("question")
let answerA = document.getElementById("answerA")
let answerB = document.getElementById("answerB")
let answerC = document.getElementById("answerC")
let answerD = document.getElementById("answerD")


var questions = [
    {
        q: "How is a string indicated?",
        a: "A. exclamation marks",
        b: "B. curly brackets",
        c: "C. angle brackets",
        d: "D. quotation marks",
        answer: "D. quotation marks"
    },
    {
        q: "Which symbol indicates an ID?",
        a: "A. %",
        b: "B. $",
        c: "C. #",
        d: "D. none of the above",
        correct: "C. #"
    },
    {
        q: "The element selector ul is an abbreviation for which of the following?",
        a: "A. unordered list",
        b: "B. unused listener",
        c: "C. unusually loud",
        d: "D. unfortunate lie",
        correct: "A. unordered list"
    }
];

timerCount = 5s;
function renderPageLoad() {
    quizSection.style.display = "none";
}

function runQuiz() {
    timer.textContent = "Time: " + timerCount;
    question.textContent = questions[0].q
    answerA.textContent = questions[0].a
    answerB.textContent = questions[0].b
    answerC.textContent = questions[0].c
    answerD.textContent = questions[0].d
}

renderPageLoad();
//to begin quiz (start button)
startBtn.addEventListener("click", function () {
    startTimer();
    startMenu.style = "display:none";
    quizSection.style.display = "block";
    runQuiz();
});

//timer and start quiz
function startTimer() {
    let countdown = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if (timerCount === 0) {
            clearInterval(countdown)
        }
    }, 1000);
}