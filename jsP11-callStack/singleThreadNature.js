// ----------- Single Threaded Nature --------------
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

// ----------------------- callbacks (callbacks aise function hote hai jo dusre functions mai as argument jate hai ) -------------------------
// setTimeout(() => {
//   console.log("sneha sharma");
// }, 2000);
// setTimeout(() => {
//   console.log("lucky sharma");
// }, 2000);
// console.log("hello...");

//  ---------------------- callback Hell
h1 = document.querySelector("h1");

function changeColor(color, delay, nextChangeColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextChangeColor) nextChangeColor();
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("gold", 1000, () => {
      changeColor("blue", 1000, () => {
        changeColor("pink", 1000);
      });
    });
  });
  // callback nesting => callback hell
});
