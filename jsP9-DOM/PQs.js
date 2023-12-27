// 1. a <p> with red text says "Hey I'm a red!"
let para1 = document.createElement("p");
para1.innerText = "Hey I'm a red P";
document.querySelector("body").append(para1);

para1.classList.add("red");

// 2. an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement("h3");
h3.innerText = "Hey I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

// 3. a <div> with a black border and pink background color wiht the following elements inside of it:
// - another <h1> that says "I'm in a div"
// - a <p> that says "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
