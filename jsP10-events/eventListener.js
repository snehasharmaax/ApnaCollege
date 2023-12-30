// Event Listener :- addEventListener ------------------------
// Syntax :- element.addEventListener(event, callBack)

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   //   btn.addEventListener("click", sayHello);
//   //   btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function () {
//     console.log("You double clicked me");
//   });
// }

// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("Sneha Sharma");
// }

// eventListener Elements --------------------------
// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//   console.log("parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("mouse inside box");
// });

// this in Event Listener :- When 'this' is used in a callback of event handler of something, it refers to that something.
// let myBtn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "pink";
// }

// myBtn.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// ------------------------------------------------------------------

// let myBtn2 = document.querySelector("button");
// // myBtn2.addEventListener("click", function (e) {
// //   console.log(e);
// //   console.log("button clicked");
// // });

// myBtn2.addEventListener("dblclick", function (e) {
//   console.log(e);
//   console.log("button clicked");
// });

// keyboard Events -----------------------------
//

let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   console.log("key :-", event.key);
//   console.log("code :-", event.code);
//   console.log("key was pressed");
// });

// inp.addEventListener("keyup", function (event) {
//   console.log(event);
//   console.log("key was released");
// });

// inp.addEventListener("keydown", function (event) {
//   console.log("code :-", event.code);
//   if (event.code == "ArrowUp") {
//     console.log("character moves forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("character moves backward");
//   } else if (event.code == "ArrowLeft") {
//     console.log("character moves left");
//   } else if (event.code == "ArrowRight") {
//     console.log("character moves right");
//   }
// });

inp.addEventListener("keydown", function (event) {
  console.log("code :-", event.code);
  if (event.code == "KeyU") {
    console.log("character moves up");
  } else if (event.code == "KeyD") {
    console.log("character moves down");
  } else if (event.code == "KeyL") {
    console.log("character moves left");
  } else if (event.code == "KeyR") {
    console.log("character moves right");
  }
});
