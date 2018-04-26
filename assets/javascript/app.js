//store questions and corresponding answers in objects
var triviaList = [
    {
        question: "What is the name of Ferris Bueller's girl friend?",
        correct: "A.) Sloane Petterson",
        incorrect: ["B.) Rose Wilson", " C.) Molly Henderson", " D.) Sydney Crange"],
    },

    {
        question: "How did Richard Kimble track down his wife's killer in The Fugitive 1993?",
        correct: "A.) By tracing his prostetic arm",
        incorrect: []
    },

    {
        question: "What was the name of The Cheif of Police in the first Jaws film?",
        correct: "A.) Martin Brody",
        incorrect: []
    },

    {
        question: "In the first instalment of the movie franchise Scream, what does the killer talk to his second victim about?",
        correct: "A.) Horror Movies",
        incorrect: []
    },

    {
        question: "In Top Gun what is the codename of Maverick's copilot?",
        correct: "A.) Goose",
        incorrect: []
    },

    {
        question: "In a famous scene from The GodFather, how does Don Corleone intimidate one of his enemies?",
        correct: "A.) He has a severed horse head placed in his bed while he is sleeping",
        incorrect: []
    },

    {
        question: "What speed did Marty McFly have to reach in the DeLorean in order to activate the flux copacitor time machine in Back To The Future?",
        correct: "A.) 88 mph",
        incorrect: [" B.) Rose Wilson ", " C.) Molly Henderson", " D.) Sydney Crange"],
    }
]

for (i = 0; i < triviaList.length; i++) {
    console.log(triviaList[i].question);
    console.log(triviaList[i].correct);
    console.log(triviaList[i].incorrect);
}


//create array to store user answers
var userAnswers

//variables for question screen and result screen timers
var questionTime = 15;
var resultTime = 7;

//variables for question screen and result screen inteval ids
var questionInterval;
var resultInterval;
var gameTime

//variables to keep track of questions and answers
var currentQuestion;
var currentAnswers;

// loop through triviaList array
function displayQuestion(x) {
    $("#question").text(triviaList[x].question);
    $("#answers").append(triviaList[x].answers);
    $("#answers").append(triviaList[x].incorrect);
}