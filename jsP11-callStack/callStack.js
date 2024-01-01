// ---------- Example of callStack -----------
function hello() {
  console.log("hello");
  console.log(2 + 3);
}
function print() {
  console.log("helllo1");
  hello();
  console.log("hello 2");
}

// console.log("hello coding");
// print();
// console.log("ho gya jao ab");

// ---------- Example of callStack -----------
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
