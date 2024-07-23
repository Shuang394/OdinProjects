document

const container = document.querySelector("#container");

const para = document.createElement("p");

para.textContent = "Hey I'm Red!!!!";

para.style.cssText = "color: red";

container.appendChild(para);

const header = document.createElement("h3");

header.textContent = "I'm a blue h3";

header.style.color = "blue";

container.appendChild(header);

// div

const div = document.createElement("div");

div.style.cssText = "background-color: pink; border-color: black";



//h1

const h1 = document.createElement("h1");
const p1 = document.createElement("p");

h1.textContent = "i'm in a div";
p1.textContent = "me 2";

div.appendChild(h1);
div.appendChild(p1);

container.appendChild(div);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
  
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

