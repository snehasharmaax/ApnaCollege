// let student = {
//   name: "sneha",
//   age: "20",
//   marks: 94.4,
// };
// console.log(student.name); //method1 for get value
// console.log(student["name"]); //method2 for get value

// const item = {
//   price: 100.99,
//   discount: 50,
//   colors: ["red", "blue"],
// };
// console.log(item);

// ------- Add/Update Value
// const student = {
//   name: "Sneha",
//   age: 20,
//   city: "Aligarh",
//   marks: 89.9,
// };
// console.log(student.city);

// Update
// student.city = "Harigarh";
// console.log(student.city);

// Add
// student.gender = "Female";
// console.log(student.gender);

// delete
// delete student.marks;
// console.log(student);

// ----------Object of objects (Nesting)
// const classInfo = {
//   sneha: {
//     grade: "A",
//     city: "Harigarh",
//   },
//   lucky: {
//     grade: "B",
//     city: "Aligarh",
//   },
//   ashi: {
//     grade: "C",
//     city: "Bihar",
//   },
// };
// console.log(classInfo.sneha);

// --------- Array of objects
const classInfo = [
  {
    name: "Sneha",
    grade: "A+",
    city: "Harigarh",
  },
  {
    name: "Lucky",
    grade: "B+",
    city: "Aligarh",
  },
  {
    name: "Ashi",
    grade: "C+",
    city: "Aligarh",
  },
];
// console.log(classInfo[1]);
// console.log(classInfo[1].name);
// console.log(classInfo[1].grade);
// console.log(classInfo[1].city);
// classInfo[1].name = "Sakshi";
// console.log(classInfo);

// Random Integers
// let step1 = Math.random();
// console.log(step1);

// let step2 = step1 * 100;
// console.log(step2);

// let step3 = Math.floor(step2);
// console.log(step3);

let random = Math.floor(Math.random() * 10) + 1;
