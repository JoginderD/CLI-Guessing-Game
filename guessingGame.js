const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 20) + 1;

rl.question("Enter your guess: ", function(answer) {
    let guess = Number(answer);

    if (guess > secretNumber) {
        console.log("Too High");
    } else if (guess === secretNumber) {
        console.log("Correct!");
    } else {
        console.log("Too Low");
    }

    rl.close();
});