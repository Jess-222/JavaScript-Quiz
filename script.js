let startBtn = document.getElementById("start")
let startMenu = document.getElementById("startMenu")
let timer = document.getElementById("timer")
let quizSection = document.getElementById("quizSection")

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
    }
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

startBtn.addEventListener("click", function () {
    startTimer();
    startMenu.style = "display:none";
});

function startTimer() {
    setInterval(function () {

    }, 1000);
}