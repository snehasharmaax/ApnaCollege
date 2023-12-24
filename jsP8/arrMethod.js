// Array Method :- forEach, map, filter, some, every, reduce

// -------------------- forEach --------------------
// let arr = [1, 2, 3, 4, 5];
// let print = function (el) {
//   console.log(el);
// };
// arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });

// arr.forEach((el) => { //with arrow function
//   console.log(el);
// });

// objects
let arr = [
  {
    name: "sneha",
    marks: 95,
  },
  {
    name: "lucky",
    marks: 90,
  },
  {
    name: "ashi",
    marks: 85,
  },
];
// arr.forEach((student) => {
//   console.log(student.marks);
// });

// ------------------------ map -------------------------
// Syntax :- let newArr = arr.map(some function definition or name)
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * el;
});

let students = [
  {
    name: "sneha",
    marks: 95,
  },
  {
    name: "lucky",
    marks: 90,
  },
  {
    name: "ashi",
    marks: 85,
  },
];
let gpa = students.map((el) => {
  return el.marks / 10;
});

// ----------------- filter ---------------
// Syntax:- let newArr = arr.filter(some function definition or name)
let nums = [1, 2, 3, 4, 7, 8, 3, 10, 20, 21, 11];
let ans = nums.filter((el) => {
  return el % 2 != 0; //even -> true, odd -> false
});

// ----------------- Every (returns true if every element of array gives true for some function. Else returns false.)--------------
// Syntax :- arr.every(some function definition or name)
// let all = [1, 2, 3, 4, 5, 5, 8, 9, 30];
let all = [2, 4, 6, 8];
let checkAns = all.every((el) => {
  return el % 2 == 0;
});

// ----------------- some (returns true if some elements of array give true for some function. else returns false)
// Syntax :- arr.some(some function definition or name)
// let sab = [1, 2, 3, 4, 5, 6, 7, 10];
let sab = [1, 3];
let ansCheck = sab.some((el) => el % 2 == 0);

// ---------------- reduce (reduces the array to a single value)
// Syntax :- arr.reduce(reducer function with 2 variables for (accumulator, element))
let arrRed = [1, 2, 3, 4];
let finalVal = arrRed.reduce((res, el) => {
  // console.log(`${res}, ${el}`);
  return res + el;
});

// ---------------- reduce in maximum
let arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];
// let max = -1;
// for (let i = 0; i < arr1.length; i++) {
//   if (max < arr1[i]) {
//     max = arr1[i];
//   }
// }

let max = arr1.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

// --------------- Default Parameters ----------------
function sum(a, b = 2) {
  return a + b;
}
