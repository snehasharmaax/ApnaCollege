// Q.1 Write a JS function that returns array elements larger than a number
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// function getElements(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }
// getElements(arr, num);

// Q.2 Write a JS function to extract unique characters from a string
// let str = "abcdabcdefgggh";
// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//       ans += currChar;
//     }
//   }
//   return ans;
// }
// getUnique(str);

// Q.3 Write a JS function that accepts a list of country names as input and returns the longest country name as output.
// let country = ["Australia", "Germany", "United States of America"];
// function longestName(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//       ansIdx = i;
//     }
//   }
//   return country[ansIdx];
// }
// longestName(country);

// Q.4 Write a JS function to count the  number of vowels in a string argument.
// let str = "snehasharmajailuckysudha";
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// Q.5 Write a JS function to generate a random number within a range(start, end)
let start = 100;
let end = 200;
function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
