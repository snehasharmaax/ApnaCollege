// Write an arrow function that returns the square of a number 'n'
// const square = (n) => n * n;
// square(4);

// Write a function that print "Hello World" 5 times at intervals of 2s each.
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval ran");
}, 10000);
