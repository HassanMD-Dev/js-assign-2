// 1. Variables (let, const, var)
// Q1.let, const, aur var mein difference likho.
// Ans: let block scope variable isko duray block mein access kr sakty hy jabky const bi aik block scope variable hy yeh sirf usi block mein access hota hy jis mein inslized ho aur var global scope variable hy jis ko kisi bi block mein access kr sakty hy.
// Q2.Ek variable userName banao aur usme apna naam store karo. Console mein print karo.
// Ans:
let userName = "Hasan";
console.log(userName);
// Q3.const variable ko dubara value assign karne par kya error aata hai?
// const age = 20;
// age = 25;
// Ans:  Missing initializer in const declaration
// Q4.Output predict karo:
// var a = 10;
// var a = 20;
// console.log(a);
// Ans: 20
// Q5.Konsi cheez mutable hai?
// const array;
// const string;
// const number;
// Ans: isme const array mutable hy kyu ky array mein isky index ky zarire un ki value ko update kia ja sakta hy.
// Q6.Aisa code likho:
// Explain.

let name = "Hasan";
let age = 21;
let city = "Karachi";
// Phir ek sentence print karo:
// My name is Hasan and I live in Karachi
console.log(`My name is ${name} and I live in ${city}`);

// 2. String Methods
// Q1. .toUpperCase() aur .toLowerCase() kya karte hain?
// Ans: .toUpperCase() string ko uppercase mein convert krta hy aur .toLowerCase() string ko lowercase mein convert krta hy.
// Q2.Output predict karo:
let str = "javascript";
console.log(str.slice(0, 4));
// Ans: java
// Q3.Ek string "Muhammad Hasan" mein se "Hasan" extract karo using slice().
let nStr = "Muhammad Hasan";
console.log(nStr.slice(8, 14));
// Q4. .charAt() aur indexing mein kya difference hai?
// Ans:JavaScript mein .charAt() aur indexing (square brackets []) dono strings se characters nikalne ke liye use hote hain, lekin inmein mukhya farak out-of-range behavior aur empty string handling ka hai. .charAt(index) ek method hai jo out-of-range par empty string ('') deta hai, jabki [index] bracket notation undefined deta hai.
// Q5.User ka naam "hAsAn" ho to usko proper lowercase mein convert karo.
// Ans:
let user1 = "hAsAn";
// Expected:
// hasan
console.log(user1.toLowerCase());
// Q6.Ek paragraph ko words array mein convert karo using split().
let para = "My name is Hasan";
console.log(para.split(" "));

// 3. Arrays
// Q1.Array kya hota hai?
// Ans:JavaScript mein Array ek aisa variable hai jo ek hi naam ke andar bahut saari values (multiple values) ko store kar sakta hai.
// Q2.Ek fruits array banao jisme 5 fruits hon.
let furitArr = ["Apple", "Banana", "Orange", "Kiwi", "Papaya"];
// Q3.push() aur pop() kya karte hain?
// Ans: .push() array ky end mein value add karta hy aur .pop() array ky end se value remove karta hy.
// Q4.Output predict karo:
let arr = ["a", "b", "c"];

arr.splice(1, 1, "z");
console.log(arr);
// Ans: a,z,c
// Q5.Ek array ka first aur last element print karo.
let stuArr = ["Ali", "Hussain", "Shoaib"];
console.log(stuArr[0]);
console.log(stuArr[2]);
// Q6.Nested array mein "orange" access karo:
let fruits = [["apple"], ["banana", "orange"]];
console.log(fruits[1][1]);

// 4. Array Methods
// Q1.slice() aur splice() mein difference likho.
// Ans: slice() array ki copy banata hy aur splice() mein array ki value ko remove, add or update kia ja sakta hy.
// Q2.Ek array mein "Ali" add karo index 2 par using splice().
// Ans:
let arrMeth = ["hasan", "random"];
arrMeth.splice(2, 0, "Ali");
console.log(arrMeth);
// Q3.Array mein se 2 elements remove karo using splice().
let rArr = [1, 2, 3, 4, 5, 6, 7];
rArr.splice(1, 2);
console.log(rArr);
// Q4.Output predict karo:
// let arr = [1, 2, 3, 4];
// console.log(arr.slice(1, 3));
// Ans: 1,2,3
// Q5.shift() aur unshift() kya karte hain?
// Ans: shift() array ky start mein se value remove karta hy aur unshift() array ky start mein value add karta hy
// Q6.Ek students array ki copy banao using slice().
let studentArr = ["Hasan", "Hussain", "Faheem", "Najm", "Usman"];
console.log(studentArr.slice(0, 4));

// 5. Objects
// Q1.Object kya hota hai?
// Ans: JavaScript mein Object ek data type hai jo multiple values ko ek saath group karne ke kaam aata hai
// Q2.Ek student object banao:
// name
// age
// email
const stuObj = {
  name: "Ali",
  age: 20,
  email: "ali@gmail.com",
};
// Q3.Object ki property access karne ke 2 tareeqe likho.
// Ans: pehla tarika hy .(notation) dusara bracket notation []
// Q4.Output predict karo:
let user = {
  name: "Hasan",
};
console.log(user.age);
// Ans: undefined
// Q5.Object mein new property add karo:
// city: "Karachi";
user.city = "Karachi";
// Q6.Ek object ka pura intro print karo:
// My name is Hasan and my age is 21
const stObj = {
  name: "Hasan",
  age: 21,
};
console.log(`My name is ${stObj.name} and my age is ${stObj.age}`);

// 6. Data Types
// Q1.Primitive data types konsay hain?
// Ans: Number, String, Boolean, undefined, null, Bigint
// Q2.Reference data types konsay hain?
// Ans: Array, Object, Functions
// Q3.undefined aur null mein difference?
// Ans: undefined ka matlab hy ky Value di hi nahi gayi aur null ka matlab hy ky wo variables khali hyn.
// Q4.Output predict karo:
let a;
console.log(a);
// Ans: undefined
// Q5.Check karo type kya hoga:
typeof [];
typeof {};
typeof null;
// Ans: object
// Q6.Boolean variable banao aur usko toggle karo.
let isLightOn = true;
console.log(isLightOn);

isLightOn = !isLightOn;
console.log(isLightOn);

// 7. Conditional Statements

// Q1.if else kab use hota hai?
// Ans: JavaScript mein if...else ka istemal faislay (decisions) karne aur mukhtalif conditions ke base par mukhtalif code run karne ke liye hota hai.
// Q2.Agar number even ho to "Even" print karo warna "Odd".
// Ans:
let numb = 2;
if (numb % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// Q3.Positive / Negative / Zero checker banao.
let checkNum = -18;
if (checkNum > 0) {
  console.log("Number is Positive");
} else if (checkNum < 0) {
  console.log("Number is Negitive");
} else {
  console.log("Number is Zero");
}
// Q4.Output predict karo:
let num = 5;
if (num > 2) {
  console.log("A");
} else {
  console.log("B");
}
// Ans: A
// Q5.Ek login system banao:
// email === "admin@gmail.com";
// password === "123";
// To "Login Success" print ho.
let email = "admin@gmail.com";
let password = 123;

if (email == "admin@gmail.com" && password == 123) {
  console.log("Login Success");
} else {
  console.log("Invalid email or password");
}
// Q6.Nested if ka real-world example do.
let isAdmin = false;
let name1 = "ali";
let emal = "ali@gmail.com";
let pass = 123456;
if (isAdmin == true) {
  if (name1 == "ali") {
    if (emal == "ali@gmail.com") {
      if (pass == 123456) {
        console.log("Signup Success");
      } else {
        console.log("You enter informatin is incorrect");
      }
    }
  }
}

// 8. Switch Statement
// Q1.Switch statement kyun use karte hain?
// Ans: JavaScript mein switch statement ka istemaal tab kiya jata hai jab aapko ek hi variable ya expression ki value ke bina par kai saare mukhtalif options (cases) mein se kisi ek ko execute karna ho.
// Q2.Weekday checker banao.
let days = "Friday";
switch (days) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
    console.log("Saturday");
    break;
  case "Sunday":
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
    break;
}
// Q3.Browser tab switch system banao:
// home
// about
// setting
let tab = "about";
switch (tab) {
  case "home":
    console.log("Home Tab");
    break;
  case "about":
    console.log("About Tab");
    break;
  case "Setting":
    console.log("Setting Tab");
    break;

  default:
    console.log("General Tab");
    break;
}
// Q4.Output predict karo:
let day = "Friday";

switch (day) {
  case "Friday":
    console.log("Holiday");
    break;

  default:
    console.log("Working Day");
}
// Ans: Holiday
// Q5.Switch aur if-else mein difference?
// Ans: If-else: Jab range check karna ho (jaise age > 18) ya complex logic ho.
// Switch: Jab ek hi variable ki fix values check karni ho (jaise menu == 1, menu == 2)
// Q6.Calculator banao using switch:
// +,-,*,/
let val1 = 4;
let val2 = 9;
let func = "mul";
switch ((val1, val2, func)) {
  case "sum":
    console.log("The sum is", val1 + val2);
    break;
  case "sub":
    console.log("The sub is", val1 - val2);
    break;
  case "mul":
    console.log("The mul is", val1 * val2);
    break;
  case "divi":
    console.log("The divi is", val1 / val2);
    break;

  default:
    console.log("invalid");
    break;
}

// 9. Loops
// Q1.Loop kya hota hai?
// Ans: JavaScript mein loop ek aisi programming technique hai jo ek hi code block ko baar-baar tab tak chalati hai jab tak ek di gayi condition sahi (true) rehti hai.
// Q2.1 se 10 tak numbers print karo using for loop.
for (j = 1; j <= 10; j++) {
  console.log(j);
}
// Q3.Even numbers print karo 1 se 20 tak.
for (let k = 1; k <= 20; k++) {
  if (k % 2 == 0) {
    console.log(k);
  }
}
// Q4.Output predict karo:
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Ans: 0,1,2
// Q5.Ek array ke tamaam elements print karo using loop.
let exArr = ["kuch nahi", "random", "kia", "nahi", "uh hoo"];
for (z = 0; z <= exArr.length; z++) {
  console.log(exArr[z]);
}
// Q6.Nested loop kya hota hai? Real example do.
// Ans:Nested loop ka matlab hai ek loop ke andar doosra loop.
for (t = 1; t <= 2; t++) {
  for (g = 1; g <= 5; g++) {
    console.log(`${t} * ${g} = `, t * g);
  }
}

// 10. Nested Arrays + Nested Loops
// Q1.Nested array kya hota hai?
// Ans: Nested array ka matlab hai ek array ky ander doosri array.
// Q2.Output predict karo:
let arr1 = [
  [1, 2],
  [3, 4],
];
console.log(arr1[1][0]);
// Ans: 3
// Q3.2D fruits array ke tamaam fruits print karo.
// Ans:
const fruitsArray = [
  ["Aam", "Kela"],
  ["Seb", "Angoor", "Amrood"],
  ["Anaar", "Tarbooz"],
];
for (let q = 0; q < fruitsArray.length; q++) {
  for (let r = 0; r < fruitsArray[q].length; r++) {
    console.log(fruitsArray[q][r]);
  }
}
// Q4.Ek multiplication table banao using nested loop.
for (let y = 2; y < 3; y++) {
  for (let s = 1; s <= 10; s++) {
    console.log(`${y} * ${s} = ${y * s}`);
  }
}
// Q5.Rows aur columns ka concept explain karo.
// Ans: In programming, rows are horizontal sequences of data (running left-to-right), and columns are vertical sequences of data (running top-to-bottom). In JavaScript, this concept is primarily managed using 2D Arrays (arrays inside arrays) to represent a grid of information.
// Q6.Ye output generate karo:
// *
// **
// ***
// ****
// using nested loop.
for (let f = 1; f <= 10; f++) {
  let row = "";
  for (let a = 0; a < f; a++) {
    row += "*";
  }
  console.log(row);
}
