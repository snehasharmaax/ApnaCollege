// Practice Question 1
// Create a function that prints a poem
// function printPoem() {
//   console.log("Twinkle Twinkle, little star");
//   console.log("how I wonder what you are");
// }
// printPoem();

// Practice Question 2
// Create a Function to roll a dice & always display the value of the dice (1 to 6).
// function dice() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }
// dice();

// Practice Questions 3
// Create a function that gives us the average of 3 numbers.
// function calcAvg(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }
// calcAvg(5, 5, 20);

// Practice Question 4
// Create a function that prints the multiplication table of a number.
function mulTab(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}
mulTab(2);
