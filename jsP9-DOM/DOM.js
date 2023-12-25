// Selecting Elements :-
// 1. getElementById
// 2. getElementByClassName
// 3. getElementsByTagName

// 2. getElementByClassName :- Returns the elements as an HTML collection or empty collection (if not found)
// let oldimg = document.getElementsByClassName("oldImg");
// let oldimg = document.getElementsByClassName("oldImg")[0];
// let oldimg = document.getElementsByClassName("oldImg")[1];
// console.log(oldimg);

// let smallImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png";
//   console.log(`value of image no ${i} is changed`);
// }

// 3. getElementsByTagName :- Returns the Elements as an HTML collection or empty collection (if not found)
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText = "abc";
