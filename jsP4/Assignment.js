// ---------------------- Question 1-----------------
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// ---------------------- Question 2 -----------------
// let number = 287152;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }
// console.log(count);

// ---------------------- Question 3 -----------------
// let number = 287152;
// let sum = 0;
// let copy = number;
// while (copy > 0) {
//   digit = copy % 10;
//   sum += digit;
//   copy = Math.floor(copy / 10);
// }
// console.log(sum);

// ---------------------- Question 4 -----------------
// let n = 4;
// let factorial = 1;
// for (let i = 0; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`Factorial of ${n} is ${factorial}`);

// ---------------------- Question 5 -----------------
let arr = [2, 5, 10, 40, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);
