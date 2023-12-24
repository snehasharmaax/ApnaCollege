// Q.1 Square and sum the array elements using the arrow functions and then find the average of the array.
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);

// Q.2 Create a new array using the map function whose each element is equal to the original element plus 5
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

// Q.3 Create a new array whose elements are in uppercase of words present in the original array.
let strings = ["sneha", "lucky", "ashi", "nikhil", "sudha", "jai"];
console.log(strings.map((string) => string.toUpperCase()));

// Q.4 Write a function called doubleAndReturnsArgs which accepts an array and a variable number of arguments. The function should return a new array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnsArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
doubleAndReturnsArgs([1, 2, 3, 4, 5, 6]);
doubleAndReturnsArgs([2], 10, 4);

// Q.5 Write a function called mergeObjects that accepts two objects anad returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) = ({...obj1, ...obj2});
mergeObjects({a:1,b:2}, {c:3, d:4})