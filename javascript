let totalTemples = 382; // Total number of temples worldwide
let operatingTemples = 195;
let underConstructionTemples = 54;
let renovationTemples = 8;
let announcedTemples = 120;

let randomNumber = Math.floor(Math.random() * totalTemples) + 1; // Random number between 1 and total temples
let attempts = 0;

function checkGuess() {
  let userGuess = document.getElementById('guessInput').value;
  let feedback = document.getElementById('feedback');
  attempts++;

  if (userGuess == randomNumber) {
    feedback.innerHTML = `Congratulations! You guessed correctly in ${attempts} attempt(s). The number was ${randomNumber}.`;
  } else if (userGuess < randomNumber) {
    feedback.innerHTML = `Too low! Try again.`;
  } else if (userGuess > randomNumber) {
    feedback.innerHTML = `Too high! Try again.`;
  } else {
    feedback.innerHTML = `Please enter a valid number.`;
  }
}
