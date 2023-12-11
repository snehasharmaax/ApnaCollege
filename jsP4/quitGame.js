const movie = "Avatar";
var guess = prompt("Guess my fav movie");
while (guess != movie && guess != "quit") {
  guess = prompt("wrong guess. Please try again");
}
if (guess == movie) {
  console.log("Congrats");
} else {
  console.log("You Quit");
}
