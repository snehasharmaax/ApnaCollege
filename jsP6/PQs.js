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
// function mulTab(n) {
//   for (let i = n; i <= n * 10; i += n) {
//     console.log(i);
//   }
// }
// mulTab(2);

// Practice Question 5
// Create a Function that returns the sum of numbers from 1 to n
// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSum(30));

// Practice Question 6
// Create a Function that returns the concatenation of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];
// function concat(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(concat(str));

// Practice Question 7
// What will be the output?
let greet = "hello"; //global scope

function changeGreet() {
  let greet = "namaste"; //function scope
  // console.log(greet);

  function innerGreet() {
    console.log(greet); // lexical scope
  }
  innerGreet();
}
console.log(greet);
changeGreet();
