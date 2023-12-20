// ---------------------------- Function Expression ----------------------------------
// let name = "sneha";
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum);

// ---------------------------- Higher Order Functions
// function multipleGreet(func, count) {
//higher order function
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };
// multipleGreet(greet, 20);

// check odd-even
// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong request");
//   }
// }
// let request = "odd"; //even

// Methods----------------------------
const calculator = {
  num: 55,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};
