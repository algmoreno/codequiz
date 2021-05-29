var quizContainer = document.querySelector("#quizContainer"); 
var scoreCounter= 0; 

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
 
var result = myQuiz.filter(obj => {
    return obj.correctAnswer; 
    
})

var questionIndex = -1; 

function start() {
    var startButton = document.createElement("input");
    startButton.type = "button";
    startButton.value = "Begin!";
    startButton.className = "startBtn"
    startButton.addEventListener("click", nextQuestion); 
    quizContainer.appendChild(startButton); 
}


function nextQuestion() {
    document.body.innerHTML = "";
    ++questionIndex; 
    document.write(myQuiz[questionIndex].question + "<br />");

        for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
            // var radioButton = document.createElement("input");
            // radioButton.type = "radio"; 
            // radioButton.addEventListener("click", ); 
        document.write("<input type=radio id=myRadio name=userAnswer>" + myQuiz[questionIndex].choices[i] + "<br />");
        }
    

    if (questionIndex < (myQuiz.length -1 )) {
        var nextButton = document.createElement("input");
        nextButton.type = "button";
        nextButton.value = "Next question";
        nextButton.addEventListener("click", nextQuestion);
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

function checkAnswer() {
    if ("userAnswer" === result) {
        console.log(result);
    }

    else {
        
    }

    // nextQuestion();
}

start();
