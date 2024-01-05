let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomCOlor = getRandomColor();
  h3.innerText = randomCOlor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomCOlor;
  console.log("Color Updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
