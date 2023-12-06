// ======================== Question 1 =========================
// let num = 20;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// ======================== Question 2 ==========================
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let input = `${name} is ${age} years old.`;
// alert(input);

// ======================== Question 3 ==========================
// let months = 4;
// switch (months) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, Augustm September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Invalid Choice");
//     break;
// }

// ======================== Question 4 ==========================
// let goldStr = "aakash";
// if (goldStr[0] == "a" && goldStr.length > 5) {
//   console.log("This is a golden string");
// } else {
//   console.log("This is not a golden string");
// }

// ======================== Question 5 ==========================
// let a = 5;
// let b = 18;
// let c = 13;
// if (a > b) {
//   if (a > c) {
//     console.log(a, "largest");
//   } else {
//     console.log(c, "is largest");
//   }
// } else {
//   if (b > c) {
//     console.log(b, "is largest");
//   } else {
//     console.log(c, "is largest");
//   }
// }

// ======================== Question 6 ==========================
let num1 = 32;
let num2 = 47852;

if (num1 % 10 == num2 % 10) {
  console.log(`Numbers have the same last digit which is ${num1 % 10}`);
} else {
  console.log(`Numbers don't have the same last digit `);
}
