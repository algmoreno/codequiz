var quizContainer = document.querySelector("#quizContainer"); 
var scoreCounter= 0; 

var scoreCount = function () {
    
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
    userInput.placeholder = "Enter your initials here"
    quizContainer.appendChild(userInput); 
    
    var startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Begin!";
    startButton.className = "startBtn"
    startButton.addEventListener("click", nextQuestion); 
    quizContainer.appendChild(startButton); 
}


function nextQuestion() {
    quizContainer.innerHTML = ""; 
    ++questionIndex; 
    var question = myQuiz[questionIndex].question 
    var divEl = document.createElement("div");
    divEl.setAttribute ("id", "questionsDiv")
    var pEl = document.createElement("p");
    pEl.textContent = question; 
    divEl.append(pEl); 
    

        for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
            var radioButton = document.createElement("input");
            radioButton.setAttribute ("type","radio"); 
            radioButton.setAttribute ("name", "userAnswer");
            radioButton.setAttribute ("class", "question");
            radioButton.setAttribute ("value", myQuiz[questionIndex].choices[i]);
            radioButton.setAttribute ("id", myQuiz[questionIndex].choices[i]);
        

            var label = document.createElement("label")
            label.setAttribute ("for", myQuiz[questionIndex].choices[i]);
            label.textContent = myQuiz[questionIndex].choices[i]; 
            
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
        nextButton.addEventListener("click", checkAnswer);
        quizContainer.appendChild(nextButton);
    }

    else {
        var submitButton = document.createElement("input");
        submitButton.type = "button";
        submitButton.value = "Submit";
        submitButton.addEventListener("click", showResults);
        quizContainer.appendChild(submitButton); 
    }

    
};

function showResults() {

}

function checkAnswer(event) {
    var userAnswer 
    var questionsDivEl = document.querySelectorAll(".question");

    for (i=0; i<questionsDivEl.length; i++) {
        var elementCheck = questionsDivEl[i].checked;
        var element = questionsDivEl[i].value; 

        if (elementCheck === true) {
            userAnswer = element 
        }
    }


    if (userAnswer === myQuiz[questionIndex].correctAnswer) {
        nextQuestion(); 
        scoreCounter +5; 
    }

    else {
        console.log(false);
    }


   
}

start();
