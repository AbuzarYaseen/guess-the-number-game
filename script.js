/**
 * Guess the Number Game
 * Get user value from input and save it to variablr numberGuess
 * Generate a random number 1 to 100 and save it to a variable correctNumber
 * Console weather a random number is too high, too low, or is correct inside playGameFunction
 * Create a function called displayResult to move the logic for if the guess is too high, too low, or is correct
 * Complete the showYouWon, showNumberAbove, showNumberBelow
 * Use the showYouWon... functions within a displayResult to display the correct dialog
 * Save the guess history in a variable called guesses
 * Display the guess history using displayHistory() function
 * Use initGame() function to restart the game
 */

// Variable to store correct random number
let correctNumber = getRandomNumber();
// Variable to store the list of guess
let guesses = [];
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  // domEvents();
};

// function domEvents() {
//   for (let i = 0; i < document.body.children.length; i++) {
//     alert(document.body.children[i].innerHTML);
//   }
// }

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  //Saving the entered guess number in a function "saveGuessHistory" of array
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    // console.log("Too high");
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    // console.log("too low");
    shownumberBelow();
  } else {
    // console.log("correct");
    showYouWon();
  }
}

function initGame() {
  // Reset the correctNumber
  // Reset the resultDisplay
  // Reset the guesses array
  // Reset the guess histroy display
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

function getDialog(dialogType, text) {
  let dialog;

  switch (dialogType) {
    case "warning":
      dialog = `<div class = "alert alert-warning" role="alert">`;
      break;
    case "won":
      dialog = `<div class="alert alert-success" role="alert">`;
      break;
  }
  dialog += text;
  dialog += `</div>`;
  return dialog;
}

function showYouWon() {
  const text = "Awosome job, you got it";
  let dialog = getDialog("won", text);
  // console.log(dialog);

  document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove() {
  const text = "Your number is too high";
  let dialog = getDialog("warning", text);
  // console.log(dialog);

  document.getElementById("result").innerHTML = dialog;
}
function shownumberBelow() {
  const text = "Your number is too low";
  let dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function getRandomNumber() {
  let wholeNumber = Math.floor(Math.random() * 100 + 1);
  return wholeNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML to use
 * <ul class ='list-group'>
 *  <li class ='list-group-item'&You guessed {number}</li>
 * </ul>
 * hint: use while loop and string concatination to create a list
 */
function displayHistory() {
  let index = guesses.length - 1; //TODO
  let list = "<ul class ='list-group'>";
  // Code goes below here
  while (index >= 0) {
    list +=
      "<li class ='list-group-item'>" +
      "You guessed : " +
      guesses[index] +
      "</li>";
    index--;
  }
  list += "</ul>";
  console.log(guesses);
  document.getElementById("history").innerHTML = list;
}
