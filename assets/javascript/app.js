//questions object
var questions = [{
    ques: "1) What is the proper term for a group of kittens?",
    ans: ["Kaboodle", "Kindle", "Kine", "Kettle"],
    name: "kittenGroup",
    correct: "Kindle"
},
{
    ques: "2) All cats are born with what color eyes?",
    ans: ["Green", "Blue", "Black", "Brown"],
    name: "catEyes",
    correct: "Blue eyes"
},
{
    ques: "3) How many different sounds can a cat make?",
    ans: ["10", "27", "150", "100"],
    name: "catSounds",
    correct: "100"
},
{
    ques: "4) how many breeds of domestic cat are there worldwide?",
    ans: ["70", "140", "280", "210"],
    name: "catBreed",
    correct: "70"
},
{
    ques: "5) What is the normal body tempature of a cat?",
    ans: ["102°F", "94°F", "106°F", "98°F"],
    name: "catTemp",
    correct: "102°F"
},
{
    ques: "6) What breen of cat ha a reputation for being cross-eyed?",
    ans: ["Egyptian Mau", "Himalayan", "Persian", "Siamese"],
    name: "crossEye",
    correct: "Siamese"
},
{
    ques: "7) Which country has more cats per person than any other country in the World?",
    ans: ["Denmark", "USA", "India", "New Zealand"],
    name: "catCountry",
    correct: "New Zealand",
},
{
    ques: "8) What percent of people identify as  cat people?",
    ans: ["34.6%", "48.2%", "27.9%", "11.5%"],
    name: "catPeople",
    correct: "11.5%"
},
{
    ques: "9) How fast can cats run?",
    ans: ["40mph", "50mph", "20mph", "30mph"],
    name: "catSpeed",
    correct: "30mph"
},
{
    ques: "10) Why do cats rub against you?",
    ans: ["To show affection", "To mark you with its sent", "To say hello", "All of these"],
    name: "catRub",
    correct: "All of these"
},
] // end questions object


var labels = ["first", "second", "third"];

//click to start then diplay questions
var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(90);
    questionDisplay();
});

//function for displaying questions

//function for countdown timer

//loop through correctArray & radioName to match html elements & answer

//click event for submit button to timer

//end countdown

//function grade quiz sumbit button is clicked

//loop though correctArray & radioName to match html elements & answers



//once submit is clicked...
//test
//stop timer

//fade out questions

//show answerScreen

//display correctAnswer

//display wrongAnswers

//end gradeQuiz