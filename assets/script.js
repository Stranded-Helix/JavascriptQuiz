var questionsAsked = 0;
var questionsCorrect = 0;
clock = 90;
var timerCount = document.getElementById("timer-count");
var viewportDiv = document.querySelector(".viewport");
var startBtn = document.getElementById("start");

startBtn.addEventListener("click", function() {
    startGame(questions);
})
//event delagate to handle correct answers
viewportDiv.addEventListener("click", function(event){
    //event delegation without jquery only activating when a button is clicked
    if(event.target.classList.contains("btn-answer")){
        //check if the answer was correct.
        if(event.target.value === "correct")
        //answer is correct
        console.log("Correct!");
        //if the answer is wrong
        else {
            console.log("Wrong. Lose 5 seconds")
            clock = clock - 5;
            timerCount.textContent = clock;
        }
        //check for end of questions
        questionsAsked++
        if(questionsAsked < questions.length){
            displayQuestion(questions[questionsAsked]);
        }
    }

})

//array of questions, answers, and correct answer
var questions = [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["scripting", "script", "javascript", "js"],
        correctAnswer: 1
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function = [myFunction()]"],
        correctAnswer: 0
    },
    {
        question: "Using the 'var' keyword in JavaScript creates what?",
        answers: ["Document", "Object", "Function", "Variable"],
        correctAnswer: 3
    },
    {
        question: "Using the square brackets [ ] in a variablee creates what?",
        answers: ["Function", "Object", "Array", "Font"],
        correctAnswer: 2
    },
    {
        question: "What is it called when you combine two strings together",
        answers: ["Append", "Concatenate", "Converse", "Chain"],
        correctAnswer: 1
    },
]

function displayQuestion(questionObject) {
    
    while(viewportDiv.firstChild)
    {
        viewportDiv.removeChild(viewportDiv.firstChild);
    }
    //creates a div and adds the question to display on screen
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.textContent = questionObject.question;

    //creates a div with the answer buttons
    var answerDiv = createAnswers(questionObject.answers)
    //adds "correct" value to the correct answer
    answerDiv.children[questionObject.correctAnswer].value = "correct";
    //appends question and answers to viewport
    viewportDiv.appendChild(questionDiv);
    viewportDiv.appendChild(answerDiv);
}

function createAnswers(array) {
    //creates div to hold answers
    var answersDiv = document.createElement("div");
    //set class to answers
    answersDiv.setAttribute("class", "answers");
    for(var i = 0; i < array.length; i++){
        answersDiv.appendChild(createButton(array[i]))
    }
    return answersDiv;
}

function createButton(string){
    var btn = document.createElement("button");
    btn.classList.add("btn-answer");
    btn.innerHTML = string;
    return btn;
}

function startGame(array) {
    displayQuestion(questions[0])
    var timer = setInterval(function(){
        if(clock <= 0){
            timer.clearInterval();
            gameEnd();
        }
        clock--;
        timerCount.textContent = clock;
    }, 1000)

    
    
}

function gameEnd() {
    //fix to have winning logic or losing logic
    console.log("Game Over")
}