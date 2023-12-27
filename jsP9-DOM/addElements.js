// Adding Elements :- document.createElement('p')
// 1. appendChild(element)
// 2. append( element )
// 3. prepend( element )
// 4. insertAdjacent( where, element)

let newPara = document.createElement("p");
console.dir(newPara);

newPara.innerText = "Hi, I am a new P";
console.dir(newPara);

let body = document.querySelector("body");
console.log(body.appendChild(newPara));

let box = document.querySelector(".box");
console.log(box.appendChild(newPara));

let btn = document.createElement("button");
console.dir(btn);

console.log((btn.innerText = "click me !"));

console.log(box.appendChild(btn));

newPara.append("This is new text");
