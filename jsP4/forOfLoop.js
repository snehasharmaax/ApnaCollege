// for of loop
// let fruits = ["mango", "apple", "banana", "orange", "litchi"];
// for (i of fruits) {
//   console.log(i);
// }

// for (char of "snehasharma") {
//   console.log(char);
// }

// Nested for of loop
let heroes = [
  ["superman", "batman", "wonder woman"],
  ["spiderman", "ironman", "thor"],
];
for (list of heroes) {
  console.log(list);
  for (hero of list) {
    console.log(hero);
  }
}
