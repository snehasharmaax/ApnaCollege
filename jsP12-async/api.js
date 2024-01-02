// API :- Application Programming Interface
// Some Random API's
// https://catfact.ninja/fact (sends random cat facts)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

// JSON (JavaScript Object Notation) :- Accepting data form JSON
// - JSON.parse ( data ) Method :- To parse a string data into a JS object
// - JSON.stringify( json ) Method :- To parse a JS object data into JSON

// let jsonRes =
//   '{"activity":"Volunteer at your local food pantry","type":"charity","participants":1,"price":0,"link":"","key":"1878070","accessibility":0.1}';
// let validRes = JSON.parse(jsonRes);
// // console.log(validRes.activity);

// let student = {
//   name: "sneha",
//   marks: 95,
// };
// let studRes = JSON.stringify(student);
// console.log(studRes);

// AJAX ( Asynchronous JavaScript and XML)

// Our first request :- using fetch -------------------
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 =", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

//   using Fetch with async/await ------------------------
let url = "https://catfact.ninja/fact2";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  } catch (e) {
    console.log("error :", e);
  }
}
