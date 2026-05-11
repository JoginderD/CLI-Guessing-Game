let secretNumber = 20;
let guess = 20;

if(guess > secretNumber){
    console.log("Too High");
} else if (guess === secretNumber) {
    console.log("Correct!");
} else {
    console.log("Too Low");
}