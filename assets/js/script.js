var quizContainer = document.getElementById("form-area"); 
var questions = document.getElementById("questions");
var submitButton = document.getElementById("submit");
var initialInput = ;

var scoreCounter = 0; 
var correctAnswer = 1; 
 
 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions,quizContainer) {

    }

    function showResults(questions, quizContainer, resultsContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer); 
    }
}

function showQuestions(questions, quizContainer) {
    var output = []; 
    var answers; 

    for(var i=0; i<questions.length; i++){
        answers: []; 

        for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
        ); 
    }

    quizContainer.innerHTML = output.join(''); 
    
}

showQuestions(questions, quizContainer);

function showResults(){}

var questionGenerator = [
    {
        question: "Sun is gold",
        answers: {
            a: "True",
            b: "False",
            c: "Maybe"
        },
        correctAnswer: "c"
    },
    {
        question: "Sky is blue",
        answers: {
            a: "True",
            b: "False",
            c: "Maybe"
        },
        correctAnswer: "a"
    },
    {
        question: "grass is blue",
        answers: {
            a: "True",
            b: "False",
            c: "Maybe"
        },
        correctAnswer: "b"
    }
]


submitButton.addEventListener("click", showResults); 