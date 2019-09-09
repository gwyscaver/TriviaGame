

var questions = [{
        question: "In what country was the first written account of children using the phrase “trick or treat” on Halloween ?",
        answers: ["United States", "Mexico", "Canada", "Denmark"]
    },
    {
        question: "In what decade did trick-or-treating as we know it today start gaining popularity in America?",
        answers: ["1920s", "1930s", "1940s", "1950s"]
    },
    {
        question: "What were the original jack o’ lanterns made from?",
        answers: ["Turnips", "Pumpkins", "Potatoes", "Squash"]
    },
    {
        question: "In what country did carving jack o’ lanterns originate?",
        answers: ["Canada", "France", "United States", "Ireland"]
    },
    {
        question: "In what year will the next full moon occur during Halloween?",
        answers: ["2019", "2020", "2021", "2022"]
    },
    {
        question: "In the USA how many pieces of candy are most commonly handed out to trick-or-treaters?",
        answers: ["1 piece", "2 pieces", "3 pieces", "4 pieces"]
    },
    {
        question: "In what American state is it illegal to dress up like a priest or a nun?",
        answers: ["Florida", "Mississippi", "Georgia", "Alabama"]
    },
    {
        question: "Halloween is generally considered to have evolved from what ancient festival?",
        answers: ["Samhain", "Beltane", "Ostara", "Lammas" ]
    },
    {
        question: "If you want to keep spirits out of your home on Halloween, what should you sprinkle on your doorstep?",
        answers: ["Holy Water", "Sage", "Salt", "Garlic"]
    },
]

var corrAnswers = ["Canada", "1930s", "Turnips", "Ireland", "2020", "2 pieces", "Alabama", "Samhain"]

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

let timer = 10;
createQuestions ();
let timerHandle = window.setInterval(tick, 1000);
