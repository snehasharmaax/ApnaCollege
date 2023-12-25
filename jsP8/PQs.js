// Check if all numbers in pour array are multiples of 10 or not.
let nums = [10, 20, 30, 40];
let ans = nums.every((el) => el % 10 == 0);

// Create a function to find the min number in an array
let minNum = [10, 20, 30, 40, 50, 5];
let min = minNum.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
