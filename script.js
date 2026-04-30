// Section 1: JavaScript Basics (1–5)

// 1.JavaScript kya hoti hai? 2 lines mein explain karo.
// Ans: JavaScript aik programing language hy jo website mein interacitivicty lany
// ky liye itemal hoti hy aur yeh backend mein bi itemal hoti hy/
// 2.JavaScript ka use kaha kaha hota hai? 3 examples do.
// Ans: JavaScript ka use frontend aur backend mein hota aur website mein interactivicty lany mein bi use hoti hy
// 3.Browser JavaScript ko kaise run karta hai?
// Ans: Browser javascript ko console mein run karta hy
// 4.JavaScript ek compiled language hai ya interpreted?
// Ans: JavaScript aik interpreter language history.
// 5.Ek simple "Hello World" program likho.
console.log("Hello World");

// Section 2: Interpreter vs Compiler (6–10)

// 6.Interpreter kya hota hai?
// Ans: Interpreter code ko line by line check kr ky chlata hy
// 7.Compiler kya hota hai?
// Ans: Compiler pury program ko check karta hy aur phir chlata hy
// 8.JavaScript interpreter-based kyun kehlati hai?
// Ans: JavaScript ko interpreter-based ya interpreted language isliye kaha jata hai kyunki iska source code bina kisi pre-compilation step ke, seedha web browser ke engine (jaise V8) ke zariye line-by-line machine code mein badal kar execute (run) kiya jata hai.
// 9.Interpreter aur compiler mein 2 differences likho.
// Ans: (i) Interpreter code ko line by line check karky run karta hy
// (i) Compiler aik bar pury program ko check krky phir chalta hy
// (ii) Interpreter koi object code generate nahi karta
// (ii) Compiler object code generate karta hy
// 10.Kaunsi language compiler use karti hai? (example do)
// Ans: C++, Java, Rust, Go, C

// Section 3: Variables (var, let, const) (11–20)

// 11.Variable kya hota hai?
// Ans: Variable mein data ko store kia jata hy
// 12.var, let, aur const mein basic difference kya hai?
// Ans: var globally accessible hota hy jabky let block scope hota isko dobara update kr sakty hy aue const bi block scope hota yeh na to redeclare hota aur na iski value update kar saky hy balky jab isko inilized ky sath hi value dety hy
// 13.var ka scope kya hota hai?
// Ans: var ka scope globally hota hy yeh redelcare bi ho sakta hy aur update bi ho sakta hy
// 14.let ka scope kya hota hai?
// Ans: let block scope hota yeh redeclare nahi hota or iski value update ki ja sakti hy.
// 15.const ka use kab karte hain?
// Ans:const ka istemal tab hota jab koi asi value store karni ho jo pury program mein tabdil na ho
// 16.Kya const variable ko reassign kar sakte hain?
// Ans: Nahi, cons variable ko reassign nahi kar sakty.
// 17.Output kya hoga?
var x = 10;
var x = 20;

console.log(x);
// Ans: 20
// 18.Output kya hoga?
let y = 10;

y = 15;

console.log(y);
// Ans: 15
// 19.Error identify karo:
const z = 5;

// z = 10;
// Ans: Assignment to constant variable

//  Section 4: Data Types (21–28)

// 20.JavaScript mein kitne types ke data types hote hain?
// Ans: JavaScript mein do data types hoti hy
// i. Premitive data type
// ii. Non-Premitive data type
// 21.Primitive data types ke naam likho.
// Ans: String, Number, Null, Undefined, Boolean, Bigint
// 22.string kya hoti hai? Example do.
// Ans: String ko hamesha double quote mein likha jata hy aur is ki datatype string hoti hy
// Example let name = "Ali";
// 23.number data type kya hai?
// Ans: Number ko hamesha double quote ky beghar  likha jata hy aur is ki datatype number hoti hy
// 24.boolean kya hota hai?
// Ans: Boolean mein sirf do value hoti hy true aur false
// 25.null aur undefined mein difference kya hai?
// Ans: Null ka matlab ky varable khali hy is mein kuch nahi hy aur undefined lka matlab jis ko ap ny access kia hy yeh tha bi nahi yani wo variable hy bi nahi
// 26.Object kya hota hai?
// Ans: Object ek data structure hai jo related data aur functions (methods) ko ek jagah key: value pairs ki shakal mein store karta hai.
// 28.Array kya hota hai? Example do.
// Ans: JavaScript mein Array ek hi variable mein multiple values (data) store karne ka ek ordered tareeka hai. Ye ek list ki tarah kaam karta hai jisme numbers, strings, ya objects rakhe ja sakte hain aur har value ka ek index (position) hota hai jo 0 se shuru hota hai.
// example array
let furits = ["apple", "orange", "tagak", "banana"];

// 29.typeof operator kya karta hai?
// Ans: typeof operater variable ki types dekhny ky liye use hota hy
// 30.Output kya hoga?
typeof "Hello";
// Ans:String
// 31.Output kya hoga?
typeof 123;
// Ans: Number
// 32.Output kya hoga?
typeof null;
// Ans:Object

// Section 6: Truthy & Falsy (33–37)

// 33.Truthy value kya hoti hai?
// Ans:Truthy value har wo value hai jo if condition ya boolean context mein true mani jati hai
// 34.Falsy values ke naam likho (kam se kam 5).
// Ans: false, "", 0, NaN, null, undefined, -0
// 35.Output kya hoga?
if (0) {
  console.log("Yes");
} else {
  console.log("No");
}
// Ans: No
// 36.Output kya hoga?
if ("Hello") {
  console.log("True");
}
// Ans: True

// 37.false, 0, "" — kya yeh truthy hain ya falsy?
// Ans:Falsy

// Section 7: Operators (38–42)

// 37.Arithmetic operators ke naam likho.
// Ans: Addition, subtraction, multiplication, division, modulus
// 38.Output kya hoga?
let a = 5 + 3 * 2;
console.log(a);
// Ans:11

// 39. = aur == mein difference kya hai?
// Ans: = variable mein use hota hy == compare karny ky liye use hota hy
// === ka use kyun hota hai?
// Ans:=== yeh strict compare ky liye use hota hy yeh sath mein data type bi dekhta hy
// Output kya hoga?
5 == "5";
// Ans: true

//  Section 8: Comparison Operators (43–45)

// 43.Comparison operators ke naam likho.
// Ans: equal to, strict equal to, not equal to, strict not equal to, greater than, less than,greater than equal to, less than equal to
// 44.Output kya hoga?
10 > 5;
// Ans: true
// 45.Output kya hoga?
10 === "10";
// Ans: False

// Section 9: Logical Operators (46–48)

// 46.Logical operators ke naam likho.
// Ans:AND, OR, NOT
// 47.Output kya hoga?
true && false;
// Ans: false
// 48.Output kya hoga?
true || false;
// Ans: true

// Section 10: Increment / Decrement (49–50)

// 49.Output kya hoga?
let x = 5;
x++;
console.log(x);
// Ans:5
// 50.Output kya hoga?
let y = 5;
console.log(++y);
// Ans:6
