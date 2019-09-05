var questions = [{
        question: "What is the busiest airport in the world?",
        answers: ["London", "Beijing", "Atlanta", "New Dehli"]
    },
    {
        question: "How long is the longest flight?",
        answers: ["19 hours", "18 hours", "17 hours", "16 hours"]
    },
    {
        question: "What is the largest plane by seat number?",
        answers: ["A380", "A350", "A330", "B747"]
    },
]

var corrAnswers = //make an array [london, 19 hours, A380]


function createQuestion(){
    for (let i = 0; i < questions.length; i++) {
        $(".questions").append("<h1>" + questions[i].question + "</h1>")
        for (let j = 0; j < questions[i].answers.length; j++) {
            $(".questions").append("<input type='radio'>" + questions[i].answers[j] + "</input>")
            
        }
    }
}
createQuestion ()

//timer

//chosen answer checked against correct answer