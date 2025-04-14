// JavaScript for the Number Guessing Game
let targetNumber = 382; // Fixed number of LDS Temples worldwide
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guess').value; // Get the user's guess
    const resultElement = document.getElementById('result');
    
    // Validate the input
    if (userGuess < 1 || userGuess > 500 || isNaN(userGuess)) { // Adjusted range to 1-500
        resultElement.textContent = "Please enter a valid number between 1 and 500.";
        return;
    }
    
    // Increment attempts
    attempts++;
    
    // Check if the guess is too low, too high, or correct
    if (userGuess < targetNumber) {
        resultElement.textContent = "Too low! Try again.";
    } else if (userGuess > targetNumber) {
        resultElement.textContent = "Too high! Try again.";
    } else {
        resultElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts. The total number of LDS temples is 382.`;
    }
}

