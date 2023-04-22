var welcome = document.querySelector(".welcome");
var startBtn = document.querySelector(".startBtn");

var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var answer = document.querySelector(".answers");
var result = document.querySelector(".result")

var finish = document.querySelector(".finish");
finish.style.display = "none"
var scoreHeader = document.querySelector(".scoreHeader")
var input = document.querySelector(".initials")
var submitBtn = document.querySelector(".submitBtn")

var number = 0;
var score = 0;
var startTime = 60;

var questions = [
    {
        question: "What color is the sky?",
        choices: ["A. Blue", "B. Red", "C. Green", "D. Yellow"],
        correct: "A. Blue" 
    },
    {
        question: "How many wheels does a regular car have",
        choices: ["A. 1", "B. 9", "C. 4", "D. 5"],
        correct: "C. 4"
    }
];

function showQuestionAndAnswers(number) {
    question.innerHTML = "";
    answer.innerHTML = "";
    var currentQuestion = questions[number].question;
    question.innerHTML = currentQuestion;
    var currentAnswers = questions[number].choices;
    for(let i = 0; i < currentAnswers.length; i++) {
        var listChoice = document.createElement("li")
        listChoice.innerHTML = currentAnswers[i]
        answer.append(listChoice)
        listChoice.addEventListener("click", (checkValidity))
    }
}

function checkValidity(event) {
    var choice = event.target.innerHTML;
    if(choice === questions[number].correct) {
        console.log("Correct")
        score = score + 1
        result.innerHTML = "Correct!"
    } else {
        console.log("Wrong")
        startTime = startTime - 10
        result.innerHTML = "Wrong!"
    }
    number++
    if(number === questions.length) {
        endQuiz()
    } else {
        showQuestionAndAnswers(number)
    }
}

function endQuiz() {
    quiz.style.display = "none" 
    finish.style.display = "block"
    scoreHeader.innerHTML = "You got a score of: " + score + "/" + questions.length
    submitBtn.addEventListener("click", function() {
        var initials = input.value
        localStorage.setItem(initials, JSON.stringify(score))
        // add window.redirect("scores.html")
    })
}

startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    showQuestionAndAnswers(number)
    // create function using setInterval and clearInterval for timer
})