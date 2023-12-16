function hello() {
  console.log("Hello");
}
// hello();

function printName() {
  console.log("Sneha Sharma");
}
// printName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
// print1to5();

function isAdult() {
  let age = 2;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }
}
// isAdult();

// Functions with argument
function printInfo(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printInfo("Sneha", 21);
