// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("form submitted");
// });

// Extracting Form Data -------------------------
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   let inp = document.querySelector("input");
  //   console.dir(inp);
  //   console.log(inp.value);
});

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.dir(form);

//   let user = this.elements[0]; //form.elements[0]
//   let pass = this.elements[1]; //form.elements[1]

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("input changed");
  console.log("final value = ", user.value);
});
