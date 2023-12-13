// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (var i = 5; i >= 1; i--) {
//   console.log(i);
// }
// console.log(i);

// Print all 1 to 15
// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// Print even numbers
// for (let i = 0; i <= 2000; i = i + 2) {
//   console.log(i);
// }

// Print the multiplication table for 5
// for (i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

// Print the multiplication table for any number
// let n = prompt("Enter a number:");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

// Nested for Loop
// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// while (i <= 50) {
//   console.log(i);
//   i += 5;
// }

// let i = 1;
// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// ====================== Loops with Arrays =================
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (let i = fruits.length; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"],
// ];
// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[i]);
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }

let student = [
  ["sneha", 90],
  ["lucky", 89],
  ["ashi", 88],
];
for (let i = 0; i < student.length; i++) {
  console.log(`info of student #${i + 1}`);
  for (let j = 0; j < student[i].length; j++) {
    console.log(`${j}, ${student[i][j]}`);
  }
}
