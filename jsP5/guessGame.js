// Guessing Game
// User enters a max number & then tries to guess a random generated number between 1 to max

let max = prompt("enter the max number");
// console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("User Quit");
    break;
  }
  if (guess == random) {
    console.log("You are right! Congrats!! Random number was ", random);
    break;
  } else if (guess < random) {
    guess = prompt("Hint : Your guess was too small, Please try again");
  } else {
    guess = prompt("Hint: Your guess was too large, Please try again");
  }
  //   else {
  //     guess = prompt("Your guess was wrong. Please try again");
  //   }
}
