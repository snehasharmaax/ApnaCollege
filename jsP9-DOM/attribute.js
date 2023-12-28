// Manipulating Attributes :-
// obj.getAttribute(attr)
// obj.setAttribute(attr, val)

// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// console.log(img.setAttribute("id", "spidermanImg"));
// console.log(img.setAttribute("src", "assets/creation_3.jpeg"));

// Manipulating Style :-
// style property
// let img = document.querySelector("img");
// console.dir(img);

// let heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";

let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "green";
// }

for (link of links) {
  link.style.color = "green";
}
