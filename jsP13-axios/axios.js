// Axios :- Library is a library to make HTTP requests

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   //   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("error - ");
//     return "No fact found";
//   }
// }

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   console.log(link);
//   let img = document.querySelector("#result2");
//   img.setAttribute("src", link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   } catch (e) {
//     console.log("error - ", e);
//     return "No image found";
//   }
// }

// Sending Headers with API Requests ---------------
const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
