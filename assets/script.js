var quizOpener = document.querySelector("#start");
var timerEl = document.querySelector("#timer");


var nextQuestion = 0;
var time = 100;

var startQuiz = function(event) {
    startTime();
    quizOpener.remove();
    nextQuestion(nextQuestion);
}
var startTimer = function() {
    var quizTime = setInterval(function() {
        if (time <= 0) {
            clearInterval(quizTime);
            time = 0;
        } else {
            timerEl.textContent = "Time Remaining: " + startTimer;
        }
        startTime -= 1;
    }, 1000);
}
var codeQuestions = [{
    title: "1. What symbol combination creates a CSS comment?",
    choices: {
       a: '/*',
       b: '//',
       c: '*|',
       d: '?$',
    },
    answer: '/*',
    },
    {title: "2. What git command should you use to create a new file?",
    choices: {
        a: 'pull',
        b: 'merge',
        c: 'touch',
        d: 'explore',
    },
    answer: 'touch',
    },
    {title: "3. What is the term for creating a skeleton of an HTML document?",
    choices: {
        a: 'bricking',
        b: 'scaffolding',
        c: 'building',
        d: 'roofing',
    },
    answer: 'touch',
    },
    {title: "4. What is a set of HTML code that builds part of the overall page's UI commonly referred to?",
    choices: {
        a: 'component',
        b: 'piece',
        c: 'element',
        d: 'unit',
    },
    answer: 'component',
    },
    {question: "5. What is the git command is used to save your work to your repository?",
    choices: {
        a: 'save',
        b: 'merge',
        c: 'init',
        d: 'pull/push',
    },
    answer : 'pull/push'    
    },
]
quizOpener.addEventListener("click", startQuiz);