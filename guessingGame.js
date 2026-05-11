let secretNumber = Math.floor(Math.random() * 20) + 1;
let guess = 10;

if(guess > secretNumber){
    console.log("Too High");
} else if (guess === secretNumber) {
    console.log("Correct!");
} else {
    console.log("Too Low");
}