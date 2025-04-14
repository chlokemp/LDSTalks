let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let userGuess = document.getElementById('guess').value;
  let result = document.getElementById('result');

  if (userGuess == randomNumber) {
    result.textContent = "Correct! You guessed the number!";
  } else if (userGuess < randomNumber) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }
}
