'use strict';

//question one


function questionOne() {

  var userName = prompt('What is your name?');
  var guessesRight = 0;
  console.log('Hi' + userName); 
  alert('Hi there ' + userName + '! I hope your day is going well!');
}
questionOne();


// //question two

function questionTwo() {
  var homeLocation = prompt('Am I from Seattle?').toLowerCase();


  if (homeLocation === 'yes' || homeLocation === 'y') {
    //     // console.log('Yes I am from Seattle');
    alert('Yes I am from Seattle');
    guessesRight++;
  }
}
questionTwo();

// // console.log('Nice, ' + homeLocation + ' is great!');


// // question three
function questionThree() {

  var whyCoding = prompt('Have I worked in tech before?').toLowerCase();

  if (whyCoding === 'no' || whyCoding === 'n') {
    // console.log('No I have not worked in tech before');
    alert('No I have not worked in tech before');
  }
}
questionThree();

// console.log('That is great that ' + whyCoding + 'is a goal of yours! ');

// // question four
function questionFour() {
  var milVeteran = prompt('Am I a military veteran?').toLowerCase();
  if (milVeteran === 'yes' || milVeteran === 'y') {
    // console.log('Yes, I am a veteran');
    alert('Yes, I am a veteran');
    guessesRight++;
  }
}

questionFour();


// console.log('Woah! I hear that ' + milVeteran + ' is a amazing!');



// // question five


function questionFive() {

  var carFan = prompt('Do I like cars?').toLowerCase();



  if (carFan === 'yes' || carFan === 'y') {
    // console.log('Yes, I love cars!')
    alert('Yes, I love cars!');
    guessesRight++;
  }
  console.log('I like cars too' + carFan + ' my favorite car is a ferrari.');
}
questionFive();

// question six number game... REMEMBER TO BREAK THE WHILE LOOP


function questionSix() {

  outerloop: while (true) {
    var attempt = 0;
    // var randomNumber = (Math.floor)(Math.random() * 10 + 1)
    var randomNumber = 5;
    var userGuess;
    var correctAnswer = (Math.floor)(Math.random);

    while (attempt < 4) {
      var userGuess = parseInt(prompt('Guess a number between 1 and 10'));
      console.log(typeof userGuess);
      if (userGuess === randomNumber) {
        alert('You guessed the right number. Winner!');
        guessesRight++;
        break outerloop;

      } else if (userGuess > randomNumber) {
        alert('You guessed too high');
        attempt++; //guess again
      } else if (userGuess < randomNumber) {
        alert('Your guess is too low');
        attempt++;
      } //else {
      //     alert('You guessed right!');
      // }

      if (attempt === 4 && userGuess !== randomNumber) {
        alert('the right answer was: ' + randomNumber + ' You did not win this time, try again next time!');
      }

      function qustionSix() {
          outerloop: while (true) {
          var attempt = 0;
          var randomNumber = (Math.floor)(Math.random() * 10 + 1);
          var userGuess;

          while (attempt < 4) {
            var userGuess = prompt('Guess a number between 1 and 10');

            if (userGuess === randomNumber) {
              alert('You guessed the right number. Winner!');
              guessesRight++;
              break outerloop;

            } else if (userGuess > randomNumber) {
              alert('You guessed too high');
              attempt++; //guess again
            } else if (userGuess < randomNumber) {
              alert('Your guess is too low');
              attempt++;
            } else {
              alert('Please enter a number!');

            }
            var again = prompt('Try again? type yes/y or no/n').toLowerCase;
            if (again !== 'yes' || again !== 'y') {
              break;
            }
          }
        }
        questionSix();

        // question seven  favorite month

        function questionSeven() {

          var calMonths = ['february', 'october', 'december'];
          var attemptsLeft = 6;
          var guessMonth = prompt('What are three of my favorite months?');
          var correctMonth = false;

          while (attemptsLeft > 0 && !correctMonth) {
            attemptsLeft--;
            for (var i = 0; i < calMonths.length; i++) {
              if (guessMonth === calMonths[i]) {
                correctMonth = true;
                alert('Great! ' + guessMonth + ' is one of my favorite months!');
                guessesRight++;
              }
            }
            if (attemptsLeft > 0 && !correctMonth) {
              guessMonth = prompt('Nice guess, but try again!');
            }
            if (attemptsLeft === 0 && !correctMonth) {
              alert('You had SIX TRIES and couldn\'t guess THREE out of 12\?');
            }


            questionSeven();
          }
          // question seven  favorite month




        }
        alert('You\'ve gotten ' + guessesRight + ' correct!');
      }
    }
  }
}


