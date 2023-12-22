// Q.1 Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
// const arrayAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));

// Q.2 Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
let num = 10;
let isEven = (num) => num % 2 == 0;

// Q.3 What is the output of the following code:
// const object = {
//   message: "Hello, world",
//   logMessage() {
//     console.log(this.message);
//   },
// };

// Q.4 What is the output of the following code:
// let length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback;
//   },
// };
// object.method(callback, 1, 2)
