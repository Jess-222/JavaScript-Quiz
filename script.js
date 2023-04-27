let startBtn = document.getElementById("start");
let startMenu = document.getElementById("startMenu");
let timer = document.getElementById("timer");
let quizSection = document.getElementById("quizSection");
let question = document.getElementById("question");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
let initialForm = document.getElementById("initialForm");
let scoreSection = document.getElementById("scoreSection");
let initials = document.getElementById("initials");
let endMenu= document.getElementById("endMenu");


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
timerCount = 30;
questionCount = 0;
let storedUsers;
function renderPageLoad() {
    quizSection.style.display = "none";
    endMenu.style.display = "none";
    if (JSON.parse(localStorage.getItem("highscores"))=== null) {
        storedUsers = [];
    } else {
        storedUsers = JSON.parse(localStorage.getItem("highscores"));
    }
    console.log(storedUsers);
}

function runQuiz() {
    if(questionCount === 3 || timerCount <= 0) {
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
    endMenu.style.display = "none";
    runQuiz();
});

//timer and start quiz
function startTimer() {
    let countdown = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if (timerCount <= 0) {
            clearInterval(countdown);
            endQUiz();
        }
    }, 1000);
}

//manage user decision
function manageSelectionA() {
    if (questions[questionCount].answer === "a") {
        questionCount++;
        score += 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-=5;
        questionCount++;
    }
    runQuiz();
}

function manageSelectionB() {
    if (questions[questionCount].answer === "b") {
        questionCount++;
        score += 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-=5;
        questionCount++;
    }
    runQuiz()
}

function manageSelectionC() {
    if (questions[questionCount].answer === "c") {
        questionCount++;
        score += 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-=5;
        questionCount++;
    }
    runQuiz()
}

function manageSelectionD() {
    if (questions[questionCount].answer === "d") {
        questionCount++;
        score += 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerCount-=5;
        questionCount++;
    }
    runQuiz()
}
answerA.addEventListener("click", manageSelectionA)
answerB.addEventListener("click", manageSelectionB)
answerC.addEventListener("click", manageSelectionC)
answerD.addEventListener("click", manageSelectionD)

//end quiz and provide input for usr initials
function endQUiz () {
    quizSection.style.display = "none";
    endMenu.style.display = "flex";
    console.log(score);
}

function saveScore(e) {
    e.preventDefault();
    newScore = {
        user: initials.value,
        userScore: score,
    };
    storedUsers.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(storedUsers));
    window.location.href ="highscores.html";
}
initialsForm.addEventListener("submit", saveScore);