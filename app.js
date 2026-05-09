// 🟢 Section 1: if / else Basics (1–8)

// 1.if statement kya hoti hai?
// Ans:if statement mein condition likhty hy.
// 2.else ka use kab hota hai?
// Ans: else ka use us waqt hota hy jab if condition false hu.
// 3.Simple example likho jahan number positive ho to print ho.
// Ans:
let ex = -1;
if (ex == -ex) {
  console.log(ex, "Number is Positive");
} else {
  console.log(ex, "Number is Negitive");
}
// 4.Ek program likho jo check kare number even hai ya odd.
let num = 5;
if (num % 2 == 0) {
  console.log(num, "is Even Number");
} else {
  console.log(num, "is Odd Number");
}
// 5.Output kya hoga?
// let x = 10;
// if (x > 5) {
//   console.log("Big");
// } else {
//   console.log("Small");
// }
// Ans: Big
// 6.Output kya hoga?
let x = 2;
if (x > 5) {
  console.log("Yes");
} else {
  console.log("No");
}
// Ans: No
// 7.Ek program likho jo age check kare (18+ allowed).
let age = 21;
if (age >= 18) {
  console.log("Your age is 18 or 18+");
} else {
  console.log("Your age is less 18");
}
// 8.Agar condition false ho to kya execute hota hai?
// Ans: age condition false ho tu else chalta hy.

// 🟢 Section 2: else if Ladder (9–15)

// 9.else if kya hota hai?
// Ans: else if aik conditional statement hy yeh us waqt istemal hoti hy jab if condition ghalat hu tu else if wali conditions check hoti hy
// 10.Kab use karte hain?
// Ans: else if tab use karte hain jab hamare paas do se zyada conditions hon aur hamein har condition ko check karna ho.
// 11.Grade system program likho (A, B, C).
let mar = 90;

if (mar >= 90) {
  console.log("Your Grade is A");
} else if (mar >= 60) {
  console.log("Your Grade is B");
} else {
  console.log("Your Grade is C");
}
// 12.Output kya hoga?
let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}
// Ans: output is B
// 13.Ek program likho jo number positive, negative ya zero check kare.
let checkNum = -100;
if (checkNum > 0) {
  console.log(checkNum, "is Positive");
} else if (checkNum == 0) {
  console.log(checkNum, "is Zero");
} else {
  console.log(checkNum, "is Negitive");
}
// 14.Multiple else if ka kya benefit hai?
// Ans: else if ka sabse bada benefit decision-making ko organize karna aur complex logic ko handle karna hai. Ye ek hi variable ya condition ki basis par kai saare mukhtalif options (alternatives) check karne ki sahulat deta hai
// 15.Kya ek se zyada else block ho sakte hain?
// Ans: No, JavaScript mein if ky sath aik hi else block hota hy

// 🟡 Section 3: Nested Conditions (16–22)

// 16.Nested if kya hota hai?
// Ans:Agar Outer if (bahar wali) condition true hoti hai, tabhi control Inner if (andar wali) condition ko check karta hai. Agar bahar wali condition false ho jaye, to andar wali condition check nahi hoti.
// 17.Example likho nested condition ka.
// Ans:
let pass = 123456;
let isAdmin = true;
if (pass === 123456) {
  //   console.log("Login Success");
  if (isAdmin) {
    console.log("Welcome to Admin");
  } else {
    console.log("Pehly admin access ly kr ayo");
  }
}
// 18.Output kya hoga?
let newAge = 18;
let hasID = true;

if (newAge >= 18) {
  if (hasID) {
    console.log("Allowed");
  } else {
    console.log("No ID");
  }
}
// Ans: Allowed
// 19.Ek program likho login system ka (username + password check).
let username = "ali";
let password = 45678;
if (username === "ali") {
  if (password === 45678) {
    console.log("Login Successful");
  } else {
    console.log("username aur password is incorrect");
  }
}
// 20.Nested vs simple if mein difference?
// Ans: Simple if: Aik waqt mein aik condition check hoti hai. Agar true hai to block chalta hai, varna skip.
// Nested if: Jab pehli condition true ho, tabhi andar wali doosri condition check hoti hai.
// 21.Deep nesting ka problem kya hota hai?
// Ans:JavaScript mein Deep Nesting (jaise nested functions, objects, ya callbacks) ka matlab hai jab ek block ke andar doosra, phir teesra, aur isi tarah bohot saare blocks ek ke andar ek hote chale jaate hain.
// 22.Ek real-life example do nested condition ka.
// Ans: E-Commerce Website aik real life example hy.

// 🟠 Section 4: switch Statement (23–30)

// 23.switch kya hota hai?
// Ans:JavaScript mein switch statement ek aisi conditional statement hai jo ek hi variable ya expression ki value ko mukhtalif (multiple) cases ke saath check karti hai.
// 24.switch kab use karte hain?
// Ans:JavaScript mein switch statement tab use karte hain jab aapke paas ek hi variable ya expression ki bohot saari possible values hon aur har value ke liye alag code chalana ho.
// 25.Ek example likho day of week ka.
let dayNum = 6;
switch (dayNum) {
  case 1:
    console.log("Aj Monday hy");
    break;
  case 2:
    console.log("Aj Tuesday hy");
    break;
  case 3:
    console.log("Aj Wednesday hy");
    break;
  case 4:
    console.log("Aj Thursday hy");
    break;
  case 5:
    console.log("Aj Friday hy");
    break;
  case 6:
    console.log("Aj Saturday hy ");
    break;
  case 7:
    console.log("Aj Sunday hy");
    break;

  default:
    console.log("You enter wrong value");
    break;
}
// 26.Output kya hoga?
let day = 2;
switch (day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  default:
    console.log("Invalid");
}

// 27.break ka kya role hai?
// Ans: code execution ko rokna hy
// 28.Agar break na ho to kya hota hai?
// Ans:break na hone ki waja se, JavaScript case 2 aur uske baad wale saare case (agar default bhi hai) execute karega,
// 29.default case kya hota hai?
// Ans: default case us waqt chalta hy jab baki sab case match na kary
// 30.switch vs if else difference?
// Ans: JavaScript mein if-else aur switch dono conditional statements hain, lekin inka istemaal alag hota hai. if-else complex logical conditions aur boolean checks (>, <, &&) ke liye behtar hai, jabke switch fixed values (equality check) aur bohot saare cases ko handle karne ke liye zyada readable aur fast ho sakta hai.

// 🔵 Section 5: for Loop (31–38)

// 31.for loop kya hota hai?
// Ans:JavaScript mein for loop aik aisa structure hai jo aik hi code ko baar-baar repeat karne (run karne) ke liye istemaal hota hai.
// 32.Syntax likho.
// Ans: for(){}
// 33.1 se 10 tak print karo.
// Ans:
for (let y = 1; y <= 10; y++) {
  console.log(y);
}
// 34.Even numbers print karo (1–20).
for (let t = 1; t <= 20; t++) {
  if (t % 2 == 0) {
    console.log(t);
  }
}
// 35.Output kya hoga?
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// Ans: 1,2,3
// 36.Reverse loop likho (10 se 1).
for (let w = 10; w >= 1; w--) {
  console.log(w);
}
// 37.Infinite loop kya hota hai?
// Ans: infinite loop wo hota hy jo kabi nahi rockta infinite chalta hy.
// 38.Ek loop likho jo array print kare.
// Ans:
let furits = ["apple", "orange", "banana", "pomegrnate"];
for (let r = 0; r <= furits.length; r++) {
  console.log(furits[r]);
}

// 🔵 Section 6: while Loop (39–44)

// 39.while loop kya hota hai?
// Ans:JavaScript mein while loop aik control flow statement hai jo kisi specific condition ke true hone tak code ke block ko baar-baar repeat karti hai. Jab tak condition sahi (true) rehti hai, loop chalta rehta hai, aur false hote hi ruk jaata hai.
// 40.for aur while mein difference?
// Ans:JavaScript mein for aur while loops dono ka maqsad code ko baar baar chalana (iteration) hai, lekin inke istemaal aur structure mein farq hai.
// 41.1 se 5 print karo using while.
// let g = 1;

// while (g <= 5) {
//   console.log(g);
//   g++;
// }
// 42.Output kya hoga?
// let i = 1;

// while (i <= 3) {
//   console.log(i);
//   i++;
// }
// 43.Infinite while loop ka example do.
// Ans: while (true) {
//   console.log("Yeh loop chalta rahega...");
// Yahan koi rokne wali condition (break) nahi hai
// }
// 44.Kab while use karte hain?
// Ans:JavaScript mein while loop tab use karte hain jab aapko ye confirm na ho ke loop kitni baar chalana hai, lekin aapko ye pata ho ke kab tak chalana hai

// 🟣 Section 7: do...while Loop (45–48)

// 45.do while kya hota hai?
// Ans: JavaScript mein do while loop aik control flow statement hai jo code ke block ko kam az kam aik baar zaroor chalata hai, chahe condition shuru mein false hi kyun na ho.
// 46.while aur do while mein difference?
// Ans: while loop: Condition pehle check hoti hai. Agar condition false ho, to loop ek baar bhi nahi chalega.
// do-while loop (Exit Controlled Loop): Condition baad mein check hoti hai. Iska matlab hai ki code block kam-az-kam ek baar zaroor chalega, bhale condition shuru mein hi false kyun na ho.
// 47.Output kya hoga?
let z = 5;

do {
  console.log(z);
  z++;
} while (z < 5);
// Ans: 5
// 48.Ek example likho jahan do while useful ho.
let number;

do {
  number = prompt("enter number between 1 to 10");
} while (number < 1 || number > 10);
console.log("Shukriya! Aap ne sahi number enter kiya: " + number);

// 🔴 Section 8: break & continue (49–54)

// 49.break kya karta hai?
// Ans:  JavaScript mein break poora loop khatam kar deta hai
// 50.continue kya karta hai?
// Ans:JavaScript mein loop ke andar continue statement current iteration (maujooda chakkar) ko rok kar seedha aglay iteration (next turn) par chala jata hai. Yeh sirf us khaas condition wali value ko skip karta hai, lekin loop ko poora khatam nahi karta.
// Ans: continue loop ko
// 51.Output kya hoga?
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Ans: 1,2
// 52.Output kya hoga?
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Ans: 1,2,4,5
// 53.break vs continue difference?
// Ans:JavaScript mein break poora loop khatam kar deta hai, jabki continue sirf current iteration (mojooda daur) ko skip karke aglay iteration par chala jata hai.
// 54.Real example do dono ka.
// Ans:  break ki real example jaise emergengy mein rockna aur continue jaise kisi cheez ko skip kr ky agay chalna

// 🟤 Section 9: Functions Basics (55–60)

// 55.Function kya hota hai?
// Ans:JavaScript mein Function code ka ek aisa block hota hai jo ek khas kaam (task) karne ke liye banaya jata hai.
// 56.Function kyun use karte hain?
// Ans: JavaScript mein functions ka use main maqsad code ko reuse karna, organize karna, aur debugging ko asaan banana hai
// 57.Simple function likho jo "Hello" print kare.
// Ans:
function name() {
  console.log("Hello");
}
name();
// 58.Function ka syntax likho.
// Ans: function name() {}
// 59.Function call kya hota hai?
// Ans: JavaScript mein function call ka matlab hai pehle se bane huye function ko execute (chalaana) karna. Jab hum function ke naam ke aage parentheses () lagate hain.
// 60.Output kya hoga?

function test() {
  console.log("Hi");
}

test();
// Ans: Hi

// 🟤 Section 10: Parameters & Return (61–68)

// 61.Parameter kya hota hai?
// Ans:JavaScript mein function parameter wo variables hote hain jo function ki definition (banaate waqt) mein declare kiye jaate hain.
// 62.Argument kya hota hai?
// Ans: JavaScript mein function arguments wo specific values ya data hote hain jo hum function ko call karte waqt pass karte hain
// 63.Function likho jo 2 numbers add kare.
// Ans:
function sum(a, b) {
  return a + b;
}
console.log(sum(6, 8));
// 64.return kya hota hai?
// Ans:JavaScript mein return statement function ka sabse ahem hissa hai, jo function ke andar hone wali calculation ya processing ka nateeja (result) wapas us jagah bhejta hai jahan function call hua tha.
// 65.Output kya hoga?

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
// Ans: 5
// 66.Agar return na ho to kya hota hai?
// Ans: JavaScript mein agar koi function return nahi karta, yaani usmein return statement nahi likhi jati, to wo by default undefined return karta hai.
// 67.Ek function likho jo square return kare.
// Ans:
function squre(a) {
  return a * a;
}
console.log(squre(5));
// 68.return ke baad code chalega?
// Ans: Nahi, JavaScript mein return statement ke baad koi code nahi chalta.

// ⚫ Section 11: Default Parameters (69–75)

// 69.Default parameter kya hota hai?
// Ans: JavaScript mein Default Parameters (ES6 feature) ka matlab hai ke jab aap function define karte hain, to parameters ko ek pehle se tay-shuda value (default value) de dete hain.
// 68.Syntax likho.
// Ans:function text(j, d) {}
// 69.Output kya hoga?
function greet(name = "Guest") {
  console.log(name);
}

greet();
// Ans: Guest
// 70.Output kya hoga?
greet("Ali");
// Ans: Ali

// 71.Default params ka benefit kya hai?
// Ans: JavaScript mein default parameters (ES6 feature) function ko extra flexibility dete hain, jisse agar function call karte waqt koi argument miss ho jaye, toh undefined ki jagah pre-defined value use ho.
// 72.Ek function likho jisme default value ho.
// Ans:
function greetUser(name = "Guest") {
  return "Assalam-o-Alaikum, " + name + "!";
}
// 73.Kya multiple default params ho sakte hain?
// Ans: Haan, JavaScript mein multiple default parameters ho sakte hain. Aap function define karte waqt ek se zyada parameters ko default values de sakte hain
