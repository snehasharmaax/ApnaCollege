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
// printInfo("Sneha", 21);

// return keyword
function sum(a, b) {
  console.log("Hello");
  return a + b;
  console.log("Hello2");
  console.log("Hello2");
}
console.log(sum(4, 5));

function isAdult(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "not adult";
  }
}
