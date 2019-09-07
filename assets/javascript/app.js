

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

var corrAnswers = ["London", "19 hours", "A380"]

// make radio buttons out of an answer list, be sure to give each button a value
function makeRadioButtons(answerList, questionID) {
    // go through each answer in the answer list
    for(let i=0;i<answerList.length;i++) {
        // print the answer together with a radio button, to the page
        let answerText = answerList[i];
        $(".questions").append("<input type='radio' name='" + questionID + "' value='"+answerText+"'>");
        $(".questions").append(answerText);
    }

}

// make a question object into a visual/interactive question on the page
function makeOneQuestion(theQuestion, theQuestionID) {
    // get the question text and put it on the page
    let questionText = theQuestion.question;
    $(".questions").append("<h1>" + questionText + "</h1>");

    // get the answer list and make it into radio buttons
    let answerList = theQuestion.answers;
    makeRadioButtons(answerList, theQuestionID);
}


// to create all the questions
function createQuestions() {
    // count through them one by one
    for (let i=0; i<questions.length;i++) {
        // get next question and make each question into a question on the page
        let nextQuestionObject = questions[i];
        makeOneQuestion(nextQuestionObject, "question"+i);
    }

}


function getUsersResponse(questionNumber) {
    return $("input[name=question"+questionNumber+"]:checked").val();
}

function gradeTest() {
    window.clearInterval(timerHandle);
    $("#timer").html("");
    $("#gradeButton").hide();
    

    let score = 0;
    // go through each question
    for(let i=0;i<questions.length;i++) {
        let correctAnswer = corrAnswers[i];
        let userSays = getUsersResponse(i);

        if(userSays == correctAnswer) {
            console.log("GOOD JOB!");
            score = score + 1;
        }
    }
    $("#score").html("You got " + score + " points out of " + questions.length);

}

function tick() {
    timer = timer - 1;
    $("#timer").html(timer);

    if(timer == 0) {
        gradeTest();
    }
}

    /*
    for (let i = 0; i < questions.length; i++) {
        $(".questions").append("<h1>" + questions[i].question + "</h1>")
        for (let j = 0; j < questions[i].answers.length; j++) {
            $(".questions").append("<input type='radio'>" + questions[i].answers[j] + "</input>")
            
        }
    }
    */

let timer = 10;
createQuestions ();
let timerHandle = window.setInterval(tick, 1000);

//timer

//chosen answer checked against correct answer
//one answer per question
//correct answers
//incorrect answers
//unanswered questions