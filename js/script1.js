                    //ASSIGNMENT 4

function guessNumberGame() {
const target = Math.floor(Math.random() * 10) + 1;
let userGuess = null;

    while (userGuess !== target) {
    userGuess = parseFloat(prompt("Guess a number between 1 and 10"));

        if (userGuess < target) {
        console.log("Too low! Try again.");  
        }
        else if (userGuess > target) {
        console.log("Too high! Try again.");
        }
        else if (userGuess === target) {
        console.log("Congrats! You guessed the correct number!")
        }    
        else {
        console.log("Please enter a valid number.")
        }
    }   
}

guessNumberGame();