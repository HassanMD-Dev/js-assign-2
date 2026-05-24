// =====================
// 1.arrow functions
// =====================

// 1.Ek arrow function banao jo 2 numbers add kare.
// Ans:
const sumArrow = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sumArrow(8, 5));
// 2.Arrow function se kisi naam ko print karo.
// Ans:
const nameFn = () => {
  console.log("Hassan");
};
nameFn();
// 3.Ek arrow function banao jo square return kare.
// Ans:
const squreAFn = (z) => {
  let res = z * z;
  return res;
};
console.log(squreAFn(8));
// 4.Array ke numbers ko double karne ke liye arrow function use karo.
// Ans:
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => num * num);
console.log(double);

// 5.Check karo number even hai ya odd using arrow function.
const isEven = (nu) => {
  let rest = nu % 2 == 0;
  return rest;
};
const isOdd = (nu) => {
  let rest = nu % 2 !== 0;
  return rest;
};
console.log(isEven(4));
console.log(isOdd(4));

// =====================
// 2.DOM introduction
// =====================

// 1.HTML me ek heading banao aur JS se usko access karo.
// Ans:
let heading = document.getElementById("heading");
console.log(heading);
// 2.Button click par paragraph ka text change karo.
// Ans:
let para = document.getElementById("para");
let btn = document.getElementById("click");
const changePara = () => {
  para.innerText = "change para";
};
btn.addEventListener("click", changePara);
console.log(para);
// 3.JS se body ka background color change karo.
// document.body.style.backgroundColor = "#ff0000";
// 4.Ek div ko JS me console par print karo.
// Ans:
let div = document.getElementById("div").innerText;
console.log(div);

// 5.HTML element ki value JS me read karo.
// Ans:
let val = para.innerHTML;
console.log(val);

// =====================
// 3.querySelector
// =====================

// 1.querySelector se heading select karo.
// Ans:
let head = document.querySelector("#heading");
console.log(head);
// 2.Class .box wali div ko select karo.
// Ans:
let box = document.querySelector(".box");
console.log(box);
// 3.Button ko select karke text change karo.
let nBtn = document.querySelector("#click");
nBtn.addEventListener("click", () => {
  nBtn.innerText = "click on btn";
});
// 4.Paragraph ka color purple karo using querySelector.
let paraColorPur = (para.style.color = "purple");
// 5.Ek image select karke uska width change karo.
// Ans:
let img = document.querySelector("#img");
img.style.width = "300px";

// =====================
// 4.getElementById
// =====================

// 1.id="title" wali heading ka text change karo.
// Ans:
let title = document.getElementById("title");
title.innerText = "Change Via DOM";
// 2.Input field ki value console me print karo.
// Ans:
let inputField = document.getElementById("username").value;
console.log(inputField);

// 3.Button click par div hide karo.
btn.addEventListener("click", () => {
  box.style.display = "none";
});
// 4.Background color change karo using ID.
//Ans: para.style.backgroundColor = "#00ff00";
// 5.Paragraph ka font size bada karo.
// Ans:
para.style.fontSize = "40px";

// =====================
// 5.getElementsByTagName
// =====================

// 1.Sare <p> tags select karo.
// Ans:
let allPara = document.getElementsByTagName("p");
console.log(allPara);
// 2.Pehle paragraph ka color blue karo.
// Ans:
para.style.color = "blue";
// 3.Sare <li> items ko console me print karo.
let list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerText);
}
// 4.Sare headings ka font size change karo.
let headi = document.getElementsByTagName("h1");
headi[0].style.fontSize = "60px";
headi[1].style.fontSize = "60px";
// 5.Last paragraph ka text update karo.
allPara[1].innerText = "Change with dom";
// =====================
// 6.textContent
// =====================

// 1.Heading ka textContent change karo.
// Ans:
title.textContent = "Change with textContent";
// 2.Paragraph ka pura text console me print karo.
let para2 = document.getElementById("para-2");
console.log(para2.textContent);

// 3.Button click par text update karo.
btn.addEventListener("click", changePara);
console.log(para);
// 4.Div me naya text add karo.
box.textContent = "New Div";
// 5.Empty paragraph me text insert karo.
let para3 = document.getElementById("para-3");
// para3.textContent = "para3";
// =====================
// 7.innerText
// =====================

// 1.Heading ka innerText set karo.
// Ans:
heading.innerText = "DOM Practices";
// 2.Paragraph ka visible text print karo.
let visible = para.innerText;
console.log(visible);
// 3.Button click par text replace karo.
let btn2 = document.getElementById("click2");
btn2.addEventListener("click", () => {
  btn2.innerText = "change via innerText ";
});
// 4.Ek div ka text uppercase karo.
box.innerText = box.innerText.toUpperCase();
// 5.Input value ko paragraph me show karo.
const showText = () => {
  para3.innerText = inputField;
};
showText();
// =====================
// 8.innerHTML
// =====================

// 1.Ek <div> ka text innerHTML se "Hello World" set karo.
// Ans:
box.innerHTML = "Hello World";
// 2.Button click par paragraph ka content change karo using innerHTML.
btn2.addEventListener("click", () => {
  para2.innerHTML = "New para 3";
});
// 3.innerHTML use karke list me ek naya <li> add karo.
// Ans:
let ulist = document.querySelector("ul");
ulist.innerHTML += "<li>New list aye</li>";

// =====================
// DOM Manipulation
// =====================

// 1.document.getElementById() se ek element select karo aur uska color red karo.
// Ans:
let ulList = document.getElementById("ulist");
ulist.style.color = "red";
// 2.Ek heading ka text JavaScript se update karo.
title.innerText = "hello ji";
// 3.Button click par kisi div ko hide/show karo.
const showDiv = () => {
  box.style.display = "block";
};
const hideDiv = () => {
  box.style.display = "none";
};
btn2.addEventListener("click", hideDiv);
btn.addEventListener("click", showDiv);
// =====================
// 9.createElement
// =====================

// JavaScript se ek <p> element create karo.
// Ans:
let newPara = document.createElement("p");
console.log(newPara);
// Ek <li> create karke usme "Apple" text add karo.
// Ans:
let newLi = document.createElement("li");
newLi.innerText = "Apple";
console.log(newLi);
// Ek image element create karo aur uska src set karo.
let newImg = document.createElement("img");
newImg.src =
  "data:image/jpeg;base64,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";
// document.body.appendChild(newImg);
console.log(newImg.src);

// =====================
// 10.appendChild
// =====================

// 1.Ek paragraph ko div ke andar append karo.
// Ans:
let append = box.appendChild(para3);
// 2.Ek new list item ko <ul> me append karo.
// Ans:
ulist.appendChild(newLi);
// 3.Ek button create karke body me append karo.
let newBtn = document.createElement("button");
newBtn.innerText = "newBtn";
document.body.append(newBtn);
// =====================
// 11.removeChild
// =====================

// 1.List ka pehla item remove karo.

list[0].remove();

// 2.Button click par paragraph remove karo.

newBtn.addEventListener("click", () => {
  para2.remove();
});

// 3.Div ke andar se image remove karo.
let image1 = document.getElementById("img");
let div1 = document.querySelector("div");
div1.remove(image1);

// =====================
// 12.classList
// =====================

// 1.Kisi div ki class console me print karo.
console.log(box.classList);
// 2.Check karo ke element me "active" class hai ya nahi.

// 3.Button click par class toggle karo.
let tBtn = document.getElementById("toggle");
// tBtn.addEventListener("click", () => {
//   document.body.classList.toggle("tog");
// });

// =====================
// 13.add
// =====================

// 1.Div me "highlight" class add karo.
// Ans:
div1.classList.add("highlight");
console.log(div1.classList);

// 2.Button click par "dark-mode" class add karo.
tBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// 3.Ek paragraph ko "text-red" class do.
para3.classList.add("text-red");

// =====================
// 14.remove
// =====================

// 1.Div se "hidden" class remove karo.
// Ans:
box.classList.remove("hidden");
console.log(box.classList);

// 2.Button click par "active" class remove karo.
newBtn.addEventListener("click", () => {
  para2.classList.remove("active");
});
// 3.Paragraph se "bold" class hatao.
para2.classList.remove("bold");
// =====================
// 15.style via JS
// =====================

// 1.JavaScript se text ka color blue karo.
// Ans:
heading.style.color = "blue";
// 2.Div ka background color yellow set karo.
box.style.backgroundColor = "yellow";
// 3.Button click par font size 30px karo.
newBtn.addEventListener("click", () => {
  newBtn.style.fontSize = "30px";
});
