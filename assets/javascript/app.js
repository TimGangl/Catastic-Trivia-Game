var questions = [{
  ques: "10) What is the proper term for a group of kittens?",
  ans: ["Kaboodle", "Kindle", "Kine", "Kettle"],
  name: "kittenName",
  correct: "Kindle",
  divClass: ".kittenName"
},
{
  ques: "9) All cats are born with what color eyes?",
  ans: ["Green", "Blue", "Black", "Brown"],
  name: "catEyes",
  correct: "Blue",
  divClass: ".catEyes"
},
{
  ques: "8) How many different sounds can a cat make?",
  ans: ["10", "27", "150", "100"],
  name: "catSounds",
  correct: "100",
  divClass: ".catSounds"
},
{
  ques: "7) How many breeds of domestic cat are there worldwide?",
  ans: ["70", "140", "280", "210"],
  name: "catBreeds",
  correct: "70",
  divClass: ".catBreeds"
},
{
  ques: "6) What is the normal body tempature of a cat?",
  ans: ["102°F", "94°F", "106°F", "98°F"],
  name: "catTemp",
  correct: "102°F",
  divClass: ".catTemp"
},
{
  ques: "5) What breed of cat has a reputation for being cross-eyed?",
  ans: ["Egyptian Mau", "Himalayan", "Persian", "Siamese"],
  name: "crossEye",
  correct: "Siamses",
  divClass: ".crossEye"
},
{
  ques: "4) Which country has more cats per person than any other country?",
  ans: ["Denmark", "USA", "India", "New Zealand"],
  name: "catCountry",
  correct: "New Zealand",
  divClass: ".catCountry"
},
{
  ques: "3) What percent of people identify as cat people?",
  ans: ["34.6%", "48.2%", "27.9%", "11.5%"],
  name: "catPeople",
  correct: "11.5%",
  divClass: ".catPeople"
},
{
  ques: "2) How fast can cats run?",
  ans: ["40mph", "50mph", "20mph", "30mph"],
  name: "catSpeed",
  correct: "30mph",
  divClass: ".catSpeed"
},
{
  ques: "1) Why do cats rub against you?",
  ans: ["To show affection", "To mark you with its scent", "To say hello", "All of these"],
  name: "catRub",
  correct: "All of these",
  divClass: ".catRub"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function () {
  $(this).parent().hide();
  $('.container').show();
  countdown(60);
  questionDisplay();
  var catSound = new Audio("./assets/images/kitty-meow.mp3");
  catSound.play();
});

// function for displaying questions
var questionDisplay = function () {
  $(".questions :not('#sub-but')").empty();
  // loops through the 10 questions 
  for (var j = 0; j < 10; j++) {
    $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
    $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
    // loops through answers for each radio button
    for (var i = 0; i <= 3; i++) {
      $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
    }
    $('.questions').prepend('<hr />');
  }
}


// function for countdown timer
var countdown = function (seconds) {

  var timer = setInterval(function () {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

    if (seconds <= 0) {
      $('.container').fadeOut(500);
      var correctAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 0;

      // loop through correctArray & radioName to match html elements & answers
      for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
          console.log("this is correct! number:" + i)
        } else {
          wrongAnswers++;
          console.log("this is wrong! number:" + i)
        };
      }
      $('#correctTimesUp').append(correctAnswers);
      // display wrongAnswers
      $('#wrongTimesUp').append(wrongAnswers);
      $('#timesUp').fadeIn(1000).show();

      // alert("Times Up!");
      clearInterval(timer);
      return;
    }
  }, 1000);

  // click event for submit button to stop timer
  $('#sub-but').on('click', function () {
    clearInterval(timer);
  })
};


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function () {

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < 10; i++) {

    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

      correctAnswers++;
    } else {
      wrongAnswers++;
    };
  };


  countdown();

  $('.container').fadeOut(500);

  $('#answerScreen').show();

  $('#correctScreen').append(correctAnswers);

  $('#wrongScreen').append(wrongAnswers);

}); 