// ----------------------- callback promises
// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// savetoDB(
//   "apna college",
//   () => {
//     console.log("success : your data was saved ");
//     savetoDB(
//       "hello world",
//       () => {
//         console.log("success2 : data2 saved");
//         savetoDB(
//           "sneha sharma",
//           () => {
//             console.log("success3 : data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure : weak connection, data not saved");
//   }
// );

// ------------------- Promises :- The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// resolve & reject

// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }
// savetoDB("sneha sharma");

//  --------------then() & catch()
// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }
// savetoDB("sneha sharma") //req = promise object
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// savetoDB("sneha sharma") //req = promise object
//   .then(() => {
//     console.log("promise was resolved");
//     savetoDB("helloworld").then(() => {
//       console.log("data2 saved");
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//  -------------- Promise Chaining :- Improved Version
// savetoDB("sneha sharma") //req = promise object
//   .then(() => {
//     console.log("data1 saved");
//     return savetoDB("helloworld");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return savetoDB("lucky");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// -------------- Promises Results :- Promises are rejected and resolved with some data(valid results or errors)
// function savetoDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }
// savetoDB("sneha sharma") //req = promise object
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise :", result);
//     return savetoDB("helloworld");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise :", result);
//     return savetoDB("lucky");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise :", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise :", error);
//   });

// ----------- Example of promise chaining
h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  });
