//store questions and corresponding answers in objects
var triviaList = [
    {
        question: "What is the name of Ferris Bueller's girl friend?",
        answers: ["A.) Sloane Petterson", "B.) Rose Wilson", " C.) Molly Henderson", " D.) Sydney Crange"],
        correct: 0,
    },

    {
        question: "How did Richard Kimble track down his wife's killer in The Fugitive 1993?",
        answers: ["A.) By tracing his prostetic arm",],
        correct: 0,
    },

    {
        question: "What was the name of The Cheif of Police in the first Jaws film?",
        answers: ["A.) Martin Brody",],
        correct: 0,
    },

    {
        question: "In the first instalment of the movie franchise Scream, what does the killer talk to his second victim about?",
        answers: ["A.) Horror Movies",],
        correct: 0,
    },

    {
        question: "In Top Gun what is the codename of Maverick's copilot?",
        answers: ["A.) Goose",],
        correct: 0,
    },

    {
        question: "In a famous scene from The GodFather, how does Don Corleone intimidate one of his enemies?",
        answers: ["A.) He has a severed horse head placed in his bed while he is sleeping",],
        correct: 0,
    },

    {
        question: "What speed did Marty McFly have to reach in the DeLorean in order to activate the flux copacitor time machine in Back To The Future?",
        answers: ["A.) 88 mph", " B.) 60mph ", " C.) 100mph", " D.) 68mph"],
        correct: 0,
    },
]

var userAnswers = [];

//create array to store user answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//variables for question screen and result screen inteval ids
var questionInterval;
var resultInterval;
var gameTime;

//variables to keep track of questions and answers
var currentQuestion;
var currentAnswers;

//create game timer and reveal timer
questionInterval = setInterval(triviaScreen, 5000);
revealInterval = setTimeout(revealScreen, 5000);

//gain access to buttons and divs
var questionDiv = $("#question");
var answersDiv = $("#answers");
var chosenButton = $(".choice");

var radioA = $("#answer-a");
var choseA = radioA.val();

var radioB = $("#answer-b");
var choseB = radioB.val();

var radioC = $("#answer-c");
var choseC = radioC.val();

var radioD = $("#answer-d");
var choseD = radioD.val();




//screen functions to run game and reveal screens
var x = 0;
function triviaScreen() {
    console.log(userAnswers);
    // console.log(x);
    // console.log(triviaList[x].question);
    // console.log(triviaList[x].answers);
    // console.log(triviaList[x].answers[triviaList[x].correct]);
    
    // function used to deselect buttons when question advances
    chosenButton.on("click", function () {
        $(this).prop("checked", false);
        userAnswers.push($(this).attr("id"));
        triviaScreen();
    });
    
    questionDiv.text(triviaList[x].question);

    radioA.text(triviaList[x].answers[0]);
    radioB.text(triviaList[x].answers[1]);
    radioC.text(triviaList[x].answers[2]);
    radioD.text(triviaList[x].answers[3]);

    x++;

    if (x === triviaList.length) {
        clearInterval(questionInterval);
    }
}



function revealScreen() {
    // console.log("reveal " + triviaList[x].answers[triviaList[x].correct]);
}

// console.log(radioA.val());
// console.log(radioB.val());
// console.log(radioC.val());
// console.log(radioD.val());

//manipulate buttons with jq
// radioA.val("it changed");
// console.log(radioA.val());

//function triggered on click event used to respond to correct and incorrect answers
