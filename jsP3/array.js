// let students = ["sneha", "sanjna", "sudha", "riya", "ashi"];
// console.log(students);
// console.log(students[0]);
// console.log(students.length);
// console.log(students[2][0]);
// console.log(students[2].length);

// let marks = [30, 50, 60, 70, 40];
// let mixed = ["sneha", 60, "science", true];
// let empty = [];
// console.log(marks, mixed, empty);

// =================== Arrays are mutable ======================
// let name = "lucky";
// console.log(name[0]);

// let fruits = ["mango", "apple", "litchi"];
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);

// fruits[10] = "pineapple";
// console.log(fruits);

// ========================= Array Method ==================
// Push
// console.log("Push Method");
// let cars = ["audi", "toyota", "BMW", "maruti"];
// console.log(cars);
// let addCar = cars.push("XUV");
// console.log(cars);
// addCar = cars.push("ferrari");
// console.log(cars);

// Pop
// console.log("Pop Method");
// removeCar = cars.pop();
// console.log(cars);
// console.log(removeCar);

// Unshift
// console.log("Unshift");
// let addStart = cars.unshift("Bolero");
// console.log(cars);
// addStart = cars.unshift("Baleno");
// console.log(cars);

// Shift
// console.log("Shift");
// let delStart = cars.shift("Baleno");
// console.log(cars);

// indexOf
// let marks = [99, 44, 69, 39, 95];
// console.log(marks.indexOf(39));
// console.log(marks.indexOf(93));

// includes
// let data = ["sneha", 20, "Computer Science", true, "Female"];
// console.log(data.includes(20));

// concat
// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];
// let allColors = primary.concat(secondary);
// console.log(allColors);

// reverse
// let cars = ["audi", "toyota", "BMW", "maruti"];
// console.log(cars.reverse());

// slice
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2, 3));
// console.log(colors.slice(-2));

// splice
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.splice(3));
// console.log(colors.splice(0, 1));
// console.log(colors.push("grey", "skyblue", "black", "brown", "wheat"));
// console.log(colors.splice(1, 2));
// console.log(colors.splice(0, 0, "green", "pink", "tealgreen"));
// console.log(colors.splice(1, 0, "purple"));

// sort
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// colors.sort();
// let chars = ["b", "d", "c", "a"];
// console.log(chars.sort());

// reference
// let arr = ["a", "b"];
// let arrCopy = arr;
// arrCopy.push("c");
// let compare = arr == arrCopy;
// console.log(compare);

// const variable
// const pi = 3.14;

// nestede arrays
let nums = [
  [2, 4],
  [3, 6],
  [4, 8],
];
console.log(nums);
console.log(nums[1]);
console.log(nums[1][0]);
console.log(nums[1].length);
