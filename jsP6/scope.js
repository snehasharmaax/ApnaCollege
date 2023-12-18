// Scope :- Function, Block, Lexical

//  -------------------------- Function Scope
// let sum = 54;
// function calSum(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }
// calSum(5, 6);

// ----------------------------Block Scope
// var a = 5;
// {
//   let a = 6;
// }
// var a = 10;
// console.log(a);
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// console.log(i);

// ----------------------------Lexical Scope
function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}
outerFunc();
