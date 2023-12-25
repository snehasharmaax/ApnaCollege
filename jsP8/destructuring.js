// Destructuring :- Storing values of array into multiple variables

// ----------- Destructuring (Array)
let names = ["sneha", "lucky", "ashi", "nikhil"];
// let winnner = names[0]
// let runnerUp=names[1]
// let secondRunnerUp = names[2]

let [winnner, runnerUp, ...others] = names;

// ----------- Destructuring (Objects)-----------------
const student = {
  name: "sneha",
  age: 20,
  class: BCA,
  subjects: ["FOC", "NM", "OS", "DBMS"],
  username: "sneha@123",
  password: "abcd",
};
// let username = student.username;
// let password = student.password;

// let {username, password} = student
let { username: user, password: secret, city = "Mumbai" } = student;
