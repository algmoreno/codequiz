var quizBox = document.getElementById("form-area"); 
var questions = document.getElementById("questions");
var initialInput = ;

var scoreCounter = 0; 
var correctAnswer = 1; 

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