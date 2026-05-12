const readline = require("readline");
let count = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 20) + 1;

function askGuess() {
    rl.question("Enter your guess: ", function(answer) {
        let guess = Number(answer);

        count ++;
        console.log("Guess Tracker: " + count);

        if (guess > secretNumber) {
            console.log("Too High");
            askGuess();
        } else if (guess === secretNumber) {
            console.log("Correct!");
            console.log("You got it in " + count + " attempts.");
            playAgain();
        } else {
            console.log("Too Low");
            askGuess();
        }
    });
}

askGuess();

function playAgain () {
    rl.question("Play Again? (YES/NO): ", function(answer) {
        if (answer === "YES"){
            secretNumber = Math.floor(Math.random() * 20) + 1;
        count = 0;
        askGuess();
        } else {
            rl.close();
        }
    });
}