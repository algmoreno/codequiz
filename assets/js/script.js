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
    console.log(obj.correctAnswer); 
    
})

var questionIndex = -1; 
 

function nextQuestion() {
    document.body.innerHTML = '';
    ++questionIndex; 
    document.write(myQuiz[questionIndex].question + "<br />");

        for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
            var radioButtons = document.createElement("input");
            radioButtons.type = "radio"; 
            radioButtons.addEventListener("click", showResults); 
        // document.write("<input type=radio id=myRadio name=radAnswer>" + myQuiz[questionIndex].choices[i] + "<br />");
        }
    

    if (questionIndex < (myQuiz.length -1 )) {
        var nextButton = document.createElement("input");
        nextButton.type = "button";
        nextButton.value = "Next question";
        nextButton.addEventListener("click", nextQuestion);
        document.body.appendChild(nextButton);
    }

    else {
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
