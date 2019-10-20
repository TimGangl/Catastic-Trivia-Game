$(document).ready(function () {
    //questions and answers object------------------------------------------
    var questions = [{
        ques: "1) What is the proper term for a group of kittens?",
        ans: ["Kaboodle", "Kindle", "Kine", "Kettle"],
        correct: "Kindle"
    },
    {
        ques: "2) All cats are born with what color eyes?",
        ans: ["Green", "Blue", "Black", "Brown"],
        correct: "Blue eyes"
    },
    {
        ques: "3) How many different sounds can a cat make?",
        ans: ["10", "27", "150", "100"],
        correct: "100"
    },
    {
        ques: "4) how many breeds of domestic cat are there worldwide?",
        ans: ["70", "140", "280", "210"],
        correct: "70"
    },
    {
        ques: "5) What is the normal body tempature of a cat?",
        ans: ["102°F", "94°F", "106°F", "98°F"],
        correct: "102°F"
    },
    {
        ques: "6) What breed of cat has a reputation for being cross-eyed?",
        ans: ["Egyptian Mau", "Himalayan", "Persian", "Siamese"],
        correct: "Siamese"
    },
    {
        ques: "7) Which country has more cats per person than any other country in the World?",
        ans: ["Denmark", "USA", "India", "New Zealand"],
        correct: "New Zealand"
    },
    {
        ques: "8) What percent of people identify as  cat people?",
        ans: ["34.6%", "48.2%", "27.9%", "11.5%"],
        correct: "11.5%"
    },
    {
        ques: "9) How fast can cats run?",
        ans: ["40mph", "50mph", "20mph", "30mph"],
        correct: "30mph"
    },
    {
        ques: "10) Why do cats rub against you?",
        ans: ["To show affection", "To mark you with its sent", "To say hello", "All of these"],
        correct: "All of these"
    }];

    //variables---------------------------------------------------------
    var card = $(".card");
    var questionDisplay = $("#ques-disp");
    var timesUpDisplay = $("#times-up-disp");
    var gameOverDisplay = $("#game-over");
    var correctAnswer = $("#correct-answer");
    var incorrectAnswer = $("#incorrect-answer");
    var correctAns = $("#correct-ans");
    var wrongAns = $("#wrong-ans");
    var startBtn = $("#start-btn");
    var answer1 = $("#ans1");
    var answer2 = $("#ans2");
    var answer3 = $("#ans3");
    var answer4 = $("#ans4");
    var i = 0;


    //functions---------------------------------------------------------

    //start screen load hide all divs
    function gameStart() {
        card.hide();
        questionDisplay.hide();
        timesUpDisplay.hide();
        gameOverDisplay.hide();
        correctAnswer.hide();
        incorrectAnswer.hide();
        correctAns.hide();
        wrongAns.hide();
    };
    //show question card
    function showQues() {
        questionDisplay.text(questions[i].ques);
        answer1.text(questions[i].ans[0]);
        answer2.text(questions[i].ans[1]);
        answer3.text(questions[i].ans[2]);
        answer4.text(questions[i].ans[3]);

    };
    gameStart();




    //set timer for 5 sec that hides the card, displays times up for 3 sec, increments loss, and sets up next question (display q and a)

    // when answer is clicked, clear interval timer, hide card compare against the correct answer

    //if correct, clear interval timer, increment correct, diplay correct screen for 3 secs, set up next question

    //if wrong, clear interval timer, increment wrong, display incorrect screen for 3 sec, set up next question

    //if time runs out on question, go to times up screen, increment incorrect answer, set up next question 

    //after final question diplay game over screen along with results of game

    //game--------------------------------------------------------------

    //on start click hide all div and show first question div
    startBtn.on("click", function () {
        i = 0;
        showQues();
        card.show();
        questionDisplay.show();
        $(".jumbotron").hide();
        answer1.show();
        answer2.show();
        answer3.show();
        answer4.show();
    });


    //start timer
    function quesTime() {
        setTimeout(function () {
            card.hide();
            timesUpDisplay.show();
            wrongAns++;
        });
    }
    quesTime();

    for (i = 0; i < questions.length; i++) {
        if (questions[i].ques === questions[i].ans) {
            correctAnswer++;
            correctAns.text;
        } else incorrectAnswer++;
        wrongAns.text;
        showQues();

    }
});

