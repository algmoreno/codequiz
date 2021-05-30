var quizContainer = document.querySelector("#quizContainer"); 
var navBar = document.querySelector("#nav")
var timerEl = 0;
var userScore = 0; 
var userAnswer;

var userInput = document.createElement("input");
    userInput.type = "text";
    userInput.id = "initials"
    userInput.placeholder = "Enter your initials"
    userInput.className = "userInput"
    quizContainer.appendChild(userInput); 

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
    userScore += 20; 
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
    
    }, 900);
} 

function minusTime(){
    timeLeft -= 10; 
}

var myQuiz = [
    {
    question: "True or False: The DOM is built into the JavaScript language.",
    choices: ["True", "False"],
    correctAnswer: "True"
    }, 
    {
    question: "The .appendChild() method does which of the following?",
    choices: ["Adds a text value to the element", 
              "Adds a class name to the element",
              "Adds an element into another element after any prexisting content.", 
              "Adds an element into another element before and prexisting content"
              ],
    correctAnswer: "Adds an element into another element after any prexisting content."
    }, 
    {
    question: "What does event.preventDefault() do?",
    choices: ["It stops the browser from allowing the form submission event to occur.", 
              "It stops the browser from reloading the page upon a form submission.", 
              "It prevents the default browser from accessing your local storage", 
              "It allows you to customize your browser"],
    correctAnswer: "It stops the browser from reloading the page upon a form submission."
    },
    {
    question: "The browser event 'submit' allows us to do the following:",
    choices: ["Submit a form using a button.", 
              "Submit a form using the Enter key.", 
              "Submit a form using both a button and the Enter key."],
    correctAnswer: "Submit a form using both a button and the Enter key."
    },
    {
    question: "How do we use JavaScript to get the information entered into a form’s input field?",
    choices: ["We can select the form’s input element and use the textContent or innerHTML properties to read its data.", 
              "We can select the form’s input element and use the value property to read its data.", 
              "We can select the form itself and use the value property to read all of its data.", 
              "It allows you to customize your browser"],
    correctAnswer: "We can select the form’s input element and use the value property to read its data."
    },
    {
    question: "In the DOM’s event object, what does its target property refer to?",
    choices: ["It refers to the HTML element that was interacted with to dispatch the event.", 
              "It refers to the HTML element we want to affect as a result of our dispatched event."],          
    correctAnswer: "It refers to the HTML element that was interacted with to dispatch the event."
    },
    {
    question: "In the DOM’s event object, what does its target property refer to?",
    choices: ["It refers to the HTML element that was interacted with to dispatch the event.", 
              "It refers to the HTML element we want to affect as a result of our dispatched event.",],
                
    correctAnswer: "It refers to the HTML element that was interacted with to dispatch the event."
    },
]; 

var questionIndex = -1; 

function start() {
    
    var startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Begin!";
    startButton.className = "startBtn"
    startButton.addEventListener("click", nextQuestion); 
    startButton.addEventListener("click", timer); 
    quizContainer.appendChild(startButton); 

    var quizTitle = document.createElement("H2");
    quizTitle.textContent = "Code Quiz"
    quizTitle.className = "title";
    quizContainer.append(quizTitle); 
    
}

function storeInitials() {
    
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
    var storeUserInput = userInput.value;
    console.log(storeUserInput);

    quizContainer.textContent = ""; 
    var finalScore = document.createElement("h1")
    finalScore.textContent = storeUserInput + " scored: " + userScore; 
    quizContainer.append(finalScore); 

    
    
} 

start();
