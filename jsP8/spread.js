// ----------------------- Spread :- Expands an iterable into multiple values
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
// let minNum = Math.min(...arr);
// console.log(...arr);
// console.log(arr);

// ----------------------- Spread (Array Literals)
let arr1 = [1, 2, 3, 4, 5];
let newArr = [...arr1];
console.log(newArr);
let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];

// ---------------------- Spread (Object Literals)
const data = {
  email: "sneha@gmail.com",
  password: "abcd",
};
const dataCopy = { ...data, id: 123, country: "India" };
