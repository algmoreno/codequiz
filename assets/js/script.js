var scoreCounter= 0; 

var myQuiz = [
    {
    question: "What is the capital of California?",
    choices: ["Los Angeles", "San Francisco", "Sacramento", "San Diego", "Oakland"],
    correctAnswer: "Sacramento"
    }, 
    {
    question: "What is the capital of Pennsylvania?",
    choices: ["Pittsburgh", "Philadelphia", "Harrisburg", "Erie"],
    correctAnswer: "Harrisburg"
    }, 
    {
    question: "What is the capital of Florida?",
    choices: ["Tallahassee", "Tampa", "Miami", "Jacksonville"],
    correctAnswer: "Tallahassee"
    },
    {
    question: "What is the capital of Georgia?",
    choices: ["Augusta", "Atlanta", "Savannah"],
    correctAnswer: "Atlanta"
    }
]; 
 
 var questionIndex = -1; 

function nextQuestion() {
    document.body.innerHTML = '';
    ++questionIndex;
    document.write(myQuiz[questionIndex].question + "<br />");

        for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
        document.write("<input type=radio id=myRadio name=radAnswer>" + myQuiz[questionIndex].choices[i] + "<br />");
        }
    
    if ()
    if (questionIndex < (myQuiz.length -1 )) {
        var nextButton = document.createElement("input");
        nextButton.type = "button";
        nextButton.value = "Next question";
        nextButton.addEventListener('click', nextQuestion);
        document.body.appendChild(nextButton);
    }

    else if (questionIndex < (myQuiz.length)) {
        var submitButton = document.createElement("input");
        submitButton.type = "button";
        submitButton.value = "Submit";
        submitButton.addEventListener("click", showResults);
        document.body.appendChild(submitButton); 
    }

};

function showResults() {

}

nextQuestion(); 
    

