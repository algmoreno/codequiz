var quizContainer = document.querySelector("#quizContainer"); 
var navBar = document.querySelector("#nav")
var timerEl = 0;
var userScore = 0; 
var userAnswer;

var pageBody = document.querySelector("#body");
    pageBody.append(navBar);    
    pageBody.append(quizContainer);
    
var scoreHeading = document.createElement("h1");
    scoreHeading.textContent = "Your Score: 0";
    scoreHeading.className = "score-header"
    navBar.append(scoreHeading); 

var timerHeading = document.createElement("h2");
    timerHeading.textContent = "Time: "
    timerHeading.className = "time-header"
    navBar.append(timerHeading); 

function scoreCounter() {
    userScore += 10; 
    scoreHeading.textContent = "Your Score: " + userScore; 
    
}
var timeLeft = 59;
function timer() {
    
  
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerHeading.textContent = "Time: " + timeLeft; 
        timeLeft--;
      }
  
      else if (timeLeft === 1) {
      timerHeading.textContent = "Time: " + timeLeft;
      timeLeft--;
      }
  
      else {
        timerHeading.textContent = "";
        clearInterval(timeInterval);
        showResults(); 
      }
    
    }, 1000);


} 

function minusTime(){
    timeLeft -= 10; 
}

var myQuiz = [
    {
    question: "What color is the sky?",
    choices: ["Green", "Blue", "Red", "Yellow", "Orange"],
    correctAnswer: "Blue"
    }, 
    {
    question: "What city are you in?",
    choices: ["Phoenix", "Los Angeles", "Tucson", "Chicago"],
    correctAnswer: "Tucson"
    }, 
    {
    question: "How many hours in a day?",
    choices: ["24", "34", "23", "19"],
    correctAnswer: "24"
    },
    {
    question: "What language are you using?",
    choices: ["HTML", "JavaScript", "CSS"],
    correctAnswer: "JavaScript"
    }
]; 


var questionIndex = -1; 

function start() {
    var userInput = document.createElement("input");
    userInput.type = "text";
    userInput.placeholder = "Enter your initials"
    userInput.className = "userInput"
    quizContainer.appendChild(userInput); 
    
    var startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Begin!";
    startButton.className = "startBtn"
    startButton.addEventListener("click", nextQuestion); 
    startButton.addEventListener("click", timer); 
    quizContainer.appendChild(startButton); 
}


function nextQuestion() {
    quizContainer.innerHTML = ""; 
    ++questionIndex; 
    var question = myQuiz[questionIndex].question 
    var divEl = document.createElement("div");
    divEl.setAttribute ("id", "questionsDiv")
    divEl.className = "options-div";

    var pEl = document.createElement("p");
    pEl.className = "question-text";
    pEl.textContent = question; 
    quizContainer.append(pEl); 
    

        for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
            var radioButton = document.createElement("input");
            radioButton.setAttribute ("type","radio"); 
            radioButton.setAttribute ("name", "userAnswer");
            // radioButton.setAttribute ("class", "question");
            radioButton.className = "option"; 
            radioButton.setAttribute ("value", myQuiz[questionIndex].choices[i]);
            radioButton.setAttribute ("id", myQuiz[questionIndex].choices[i]);
        

            var label = document.createElement("label")
            label.setAttribute ("for", myQuiz[questionIndex].choices[i]);
            label.textContent = myQuiz[questionIndex].choices[i]; 
            label.className = "label";
            
            var br = document.createElement("br")
            label.append(br); 
            divEl.append(radioButton);
            divEl.append(label); 
        }
    
        quizContainer.append(divEl);

    if (questionIndex < (myQuiz.length -1 )) {
        var nextButton = document.createElement("input");
        nextButton.type = "button";
        nextButton.value = "Next question";
        nextButton.className = "next-sub-btn"; 
        nextButton.addEventListener("click", checkAnswer); 
        quizContainer.appendChild(nextButton);
    }

    else {
        var submitButton = document.createElement("input");
        submitButton.type = "button";
        submitButton.value = "Submit";
        submitButton.className = "next-sub-btn"; 
        submitButton.addEventListener("click", showResults);
        quizContainer.appendChild(submitButton); 
    }

    
};



function checkAnswer(event) {
    
    var questionsDivEl = document.querySelectorAll(".option");

    for (i=0; i<questionsDivEl.length; i++) {
        var elementCheck = questionsDivEl[i].checked;
        var element = questionsDivEl[i].value; 

        if (elementCheck === true) {
            userAnswer = element 
        }
    }


    if (userAnswer === myQuiz[questionIndex].correctAnswer) {
        nextQuestion(); 
        scoreCounter(); 
    }

    else {
        var wrongSig = document.createElement("h3");
        wrongSig.textContent = "Incorrect";
        wrongSig.className = "wrong-text";
        quizContainer.append(wrongSig); 
        minusTime(); 
    }
   
}

function showResults() {
    quizContainer.textContent = ""; 
    var finalScore = document.createElement("h1")
    finalScore.textContent = " scored: " + userScore; 
    quizContainer.append(finalScore); 
} 

start();
