//store questions and corresponding answers in objects
var triviaList = {
    q1: {
        question: "What is the name of Ferris Bueller's best friend?",
        answers: ["Sloane Petterson",]  
    },

    q2: {
        question: "What speed did Marty McFly have to hit in order to activate the flux copacitor time machine in Back To The Future?",
        answers: ["88 mph",]  
    },

    q3: {
        question: "What was the name of The Cheif of Police in the first Jaws film?",
        answers: ["Martin Brody",]  
    },

    q4: {
        question: "In the first instalment of the movie franchise Scream, what does the killer talk to his second victim about?",
        answers: ["Horror Movies",]  
    },

    q5: {
        question: "In Top Gun what is the codename of Maverick's wingman?",
        answers: ["Goose",]  
    },

    q6: {
        question: "In a famous scene from The GodFather, how does Don Corleone intimidate one of his enemies?",
        answers: ["He has a severed horse head placed in his bed while he is sleeping",]  
    },

    q7: {
        question: "How did Richard Kimble track down his wife's killer in The Fugitive 1993?",
        answers: ["By tracing his prostetic arm",]  
    }
}


// var aliStyleObj = {
//     property: {
//         nestProperty: "nested string",
//         nestProperty2: ["nested array" , "nested array-2"]
//     }
// };
// console.log(aliStyleObj);
// console.log(aliStyleObj.property);
// console.log(aliStyleObj.property.nestProperty2[1]);
// var currentQuestion = 0;
// console.log(questionAnswers[currentQuestion])


//create array to store user answers
var userAnswers

//variables for question screen and result screen timers
var questionTime = 15;
var resultTime = 7;

//variables for question screen and result screen inteval ids
var questionInterval;
var resultInterval;

//variables to keep track of questions and answers
var currentQuestion;
var currentAnswers;

//loop through triviaList obj
for(var k in triviaList){
    $("#question").text(triviaList[k].question);
    $("#answers").text(triviaList[k].answers);
    console.log(triviaList[k].question)
    console.log(triviaList[k].answers);
}



// console.log(triviaList);
// console.log("working console");