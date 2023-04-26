let startBtn = document.getElementById("start");
let startMenu = document.getElementById("startMenu");
let timer = document.getElementById("timer");
let quizSection = document.getElementById("quizSection");
let question = document.getElementById("question");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");


var questions = [
    {
        q: "How is a string indicated?",
        a: "A. exclamation marks",
        b: "B. curly brackets",
        c: "C. angle brackets",
        d: "D. quotation marks",
        answer: "D. quotation marks",
    },
    {
        q: "Which symbol indicates an ID?",
        a: "A. %",
        b: "B. $",
        c: "C. #",
        d: "D. none of the above",
        answer: "C. #",
    },
    {
        q: "The element selector ul is an abbreviation for which of the following?",
        a: "A. unordered list",
        b: "B. unused listener",
        c: "C. unusually loud",
        d: "D. unfortunate lie",
        answer: "A. unordered list",
    },
];

score = 0;
timerCount = 5;
questionCount = 0;
function renderPageLoad() {
    quizSection.style.display = "none";
}

function runQuiz() {
    if(questionCount === 3) {
        return endQUiz();
    }
    timer.textContent = "Time: " + timerCount;
    question.textContent = questions[questionCount].q;
    answerA.textContent = questions[questionCount].a;
    answerB.textContent = questions[questionCount].b;
    answerC.textContent = questions[questionCount].c;
    answerD.textContent = questions[questionCount].d;
}

renderPageLoad();
//to begin quiz (start button)
startBtn.addEventListener("click", function () {
    startTimer();
    startMenu.style.display = "none";
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

//manage user decision
function manageSelectionA() {
    if (questions[questionCount].answer === "a") {
        questionCount++
        score += 10
        console.log("correct");
    } else {
        questionCount++
        console.log("wrong");
    }
    runQuiz()
}

function manageSelectionB() {
    if (questions[questionCount].answer === "b") {
        questionCount++
        score += 10
        console.log("correct");
    } else {
        questionCount++
        console.log("wrong");
    }
    runQuiz()
}

function manageSelectionC() {
    if (questions[questionCount].answer === "c") {
        questionCount++
        score += 10
        console.log("correct");
    } else {
        questionCount++
        console.log("wrong");
    }
    runQuiz()
}

function manageSelectionD() {
    if (questions[questionCount].answer === "d") {
        questionCount++
        score += 10
        console.log("correct");
    } else {
        questionCount++
        console.log("wrong");
    }
    runQuiz()
}
answerA.addEventListener("click", manageSelectionA)
answerB.addEventListener("click", manageSelectionB)
answerC.addEventListener("click", manageSelectionC)
answerD.addEventListener("click", manageSelectionD)