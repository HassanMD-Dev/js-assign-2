// Higher Order Functions

// Q1.Higher Order Function kya hota hai?
// Ans: higher order function wo hota hy jo apny argument mein aik ya aik se zaida function except karta hy.
// Q2.Kya map() ek higher order function hai?
// Ans: ji map() aik higher order function hy.
// Q3.Kya forEach() value return karta hai?
// Ans:nahi, forEach() koi value return nahi karta.
// Q4.Ek example do Higher Order Function ka.
// Ans:
function sum(res) {
  console.log("result ==>", res);
}

function result(a, b, cb) {
  let res = a + b;
  cb(res);
}
result(2, 5, sum);
// Q5.Callback function kya hota hai?
// Ans:Callback Functions in Javascript | by ...JavaScript mein callback function ek aisa function hota hai jise kisi dusre function ke andar as an argument (parameter) pass kiya jata hai.
// Q6.Ek function banao jo dusre function ko parameter me le.
// Ans:
function one(cb) {
  cb();
}
function two() {
  console.log("Hello World!");
}
one(two);
// Q7.filter() ka use kis liye hota hai?
// Ans: JavaScript mein filter() method ka istemal kisi Array mein mojood elements (data) ko ek makhsoos condition (shart) ke zariye alag karne aur ek naya array banane ke liye kiya jata hai.
// Q8.reduce() ka basic purpose kya hai?
// Ans:JavaScript mein reduce() method ka basic purpose ek array (list) ke sabhi elements ko merge/process karke ek single value return karna hota hai.
// Q9.find() aur filter() me kya difference hai?
// Ans:find(): Sirf pehla match hua element return karta hai (ek single value).
// filter(): Jitne bhi elements condition ko match karte hain, un sab ka ek naya array return karta hai.
// Q20.map() aur forEach() me kya difference hai?
// Ans:JavaScript mein map() aur forEach() dono arrays ke har element ko iterate (check) karne ke liye use hote hain. Dono me sab se bara farq yeh hai ke map() aik naya array return karta hai jab ke forEach() kuch return nahi karta.

// Array Higher Order Methods

// map()
// Q1.[1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.
// Ans:
let numArr = [1, 2, 3, 4];
numArr.map(function (n) {
  console.log(n * n);
});
// Q2.Ek array of names ko uppercase me convert karo using map().
// Ans:
let nameArr = ["hasan", "faheem", "usman", "najum", "hussain"];
nameArr.map(function (name) {
  console.log(name.toUpperCase());
});
// Q3.Prices array me har price me 10 add karo using map().
// Ans:
let priceArr = [12, 25, 45, 95, 105];
priceArr.map(function (pri) {
  console.log(pri + 10);
});
// Q4.Students names ke sath "Mr." add karo using map().
// Ans:
nameArr.map(function (nam) {
  console.log("Mr.", nam);
});
// Q5.Numbers array ko square me convert karo.
// Ans:
numArr.map(function (num) {
  console.log(`Squre ${num}:`, num ** num);
});

// filter()

// Q1.[1,2,3,4,5,6] me se sirf even numbers filter karo.
let nArr = [1, 2, 3, 4, 5, 6];
nArr.filter(function (nu) {
  if (nu % 2 == 0) {
    console.log("Even Numbers:", nu);
  }
});
// Q2.Names array me sirf wo names filter karo jinki length 5 se zyada ho.
// Ans:
let nmeArr = ["hasan", "faheem", "usman", "ali", "najm", "hussain"];
nmeArr.filter(function (nme) {
  if (nme.length > 5) {
    console.log(nme);
  }
});
// Q3.Ek prices array me sirf prices greater than 100 filter karo.
let priceArr1 = [95, 102, 115, 98, 85, 155];
priceArr1.filter(function (pri) {
  if (pri > 100) {
    console.log(pri);
  }
});
// Q4.Students me se passed students filter karo.
// Ans:
let stuArr = [
  {
    name: "ali",
    isPassed: true,
  },
  { name: "muslin", isPassed: false },
];
stuArr.filter(function (stu) {
  if (stu.isPassed == true) {
    console.log(stu);
  }
});
// Q5.Negative numbers ko filter karo.
let negNumArr = [-8, -6, -4, -3, 1, 5, 8];
negNumArr.filter(function (neg) {
  if (neg < 0) {
    console.log(neg);
  }
});

// forEach()

// Q1.Array ke tamam elements console me print karo using forEach().
// Ans:
nArr.forEach(function (nm) {
  console.log(nm);
});
// Q2.Ek fruits array ko numbering ke sath print karo.
// Ans:
let fruitArr = ["apple", "banana", "orange", "peach", "papaya", "kiwi"];
fruitArr.forEach(function (fur) {
  console.log(fur);
});
// Q3.Users array me har user ko welcome message do.
// Ans:
let userArr = ["Ali", "Hasan", "Usman", "Haider"];
userArr.forEach(function (user) {
  console.log(`Welcome ${user}`);
});
// Q4.Ek array ka total manually forEach() se nikalo.
let total = 0;
nArr.forEach(function (nt) {
  total += nt;
});
console.log(total);

// Q5.Har student ka naam uppercase me print karo.
userArr.forEach(function (st) {
  console.log(st.toUpperCase());
});

// find()

// Q1.[10,20,30,40] me se first number greater than 25 find karo.
// Ans:
let fNumArr = [10, 20, 30, 40];
fNumArr.find(function (fnum) {
  if (fnum > 25) {
    console.log(fnum);
  }
});
// Q2.Users array me "Ali" naam ka user find karo.
// Ans:
let fNameArr = ["Najm", "Ali", "Faheem", "Usman"];
fNameArr.find(function (fname) {
  if (fname == "Ali") {
    console.log(fname);
  }
});
// Q3.Ek products array me first expensive product find karo.
// Ans:
const expensiveProducts = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 85000 },
  { name: "Mouse", price: 2000 },
];
expensiveProducts.find(function (ep) {
  if (ep.price > 50000) {
    console.log(ep);
  }
});
// Q4.Ek array me first even number find karo.
// Ans:
let fEvenNumArr = [1, 2, 3, 5, 7, 9];
fEvenNumArr.find(function (fe) {
  if (fe % 2 === 0) {
    console.log(fe);
  }
});
// Q5.Students me first failed student find karo.
const students = [
  { naam: "Ali", result: "Pass" },
  { naam: "Ahmed", result: "Pass" },
  { naam: "Sara", result: "Fail" },
  { naam: "Bilal", result: "Fail" },
];
students.find(function (st) {
  if (st.result === "Fail") {
    console.log(st);
  }
});

// reduce()
// Q1.[1,2,3,4] ka sum reduce() se nikalo.
// Ans:
let rNumArr = [1, 2, 3, 4];
let sumR = rNumArr.reduce(function (acc, ci) {
  let resultR = ci + acc;
  return resultR;
}, 0);
console.log("Sum ==>", sumR);
// Q2.Prices array ka total calculate karo.
// Ans:
const prices = [150, 400, 250, 600];
let totalR = prices.reduce(function (acc, ci) {
  return acc + ci;
}, 0);
console.log("Total ==> ", totalR);

// Q3.Numbers array ka maximum value find karo using reduce().
// Ans:
const numbersR = [10, 50, 20, 85, 30];
let maxValue = numbersR.reduce(function (max, ci) {
  // return ci > max ? ci : max;
  if (ci > max) {
    return ci;
  } else {
    return max;
  }
}, 0);
console.log("MaxValue ==>", maxValue);
// Q4.Ek words array ko single sentence me convert karo.
// Ans:
const alfazArray = ["Me", "JavaScript", "seekh", "raha", "hun"];
let out = alfazArray.reduce(function (acc, cur) {
  return acc + cur;
});
console.log("Sentence ==>", out);

// Q5.Shopping cart ka total bill calculate karo.
const shoppingCart = [
  { item: "Laptop", price: 150000, quantity: 1 },
  { item: "Mouse", price: 2500, quantity: 2 },
  { item: "Keyboard", price: 4500, quantity: 1 },
];
let totalBill = shoppingCart.reduce(function (acc, curI) {
  return acc + curI.price * curI.quantity;
}, 0);
console.log("Total Bil ==>", totalBill);

// findLastIndex()

// Q1.[1,2,3,2,4,2] me last 2 ka index find karo.
// Ans:
let fiNumArr = [1, 2, 3, 2, 4, 2];
let indexOut = fiNumArr.findLastIndex(function (fin) {
  if (fin === 2) {
    return fin;
  }
});
console.log(indexOut);
// Q2.Last even number ka index find karo.
// Ans:
const numbersFil = [3, 7, 8, 12, 15, 20, 25];
let numOut = numbersFil.findLastIndex(function (efn) {
  if (efn % 2 === 0) {
    return efn;
  }
});
console.log("Last Even Num Index ==>", numOut);

// Q3.Ek names array me last "Ali" ka index find karo.
let nameOut = fNameArr.findLastIndex(function (fli) {
  if (fli === "Ali") {
    return fli;
  }
});
console.log("Ali Name Index ==>", nameOut);

// Q4.Ek products array me last expensive product ka index nikalo.
let expenOut = expensiveProducts.findLastIndex(function (exp) {
  if (exp.price > 50000) {
    return exp;
  }
});
console.log("Expensive Product index ==>", expenOut);

// Q5.Array me last negative number ka index find karo.
// Ans:
const negtiveArr = [10, -3, 5, -8, 2];
let negOut = negtiveArr.findLastIndex(function (ng) {
  if (ng < 0) {
    return ng;
  }
});
console.log("Negitive num index ==>", negOut);

// Objects

// Q1.Object kya hota hai JavaScript me?
// Ans: JavaScript mein Object ek aisi cheez hai jo data ko "Key-Value" pairs mein store karti hai.
// Q2.Ek student object banao jisme name aur age ho.
// Ans:
let stuObj = {
  name: "Faheem",
  age: 25,
};
// Q3.Object ki property access karne ke 2 methods likho.
// Ans: object ki propertery access karny ky 2 tariky hy Dot(.) notation aur Bracket([]).
// Q4.Object me new property add karo.
// Ans:
stuObj.email = "faheem@gmail.com";
console.log(stuObj);
// Q5.Object ki property delete karo.
// Ans:
delete stuObj.email;
console.log(stuObj);
// Q6.Ek car object banao jisme brand aur model ho.
// Ans:
const car = {
  brand: "Toyota",
  model: "Corolla",
  saal: 2026,
};
// Q7.Object ke andar function ka example do.
// Ans:
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2026,

  start: function () {
    console.log("Gaari start ho rahi hai... Vroom!");
  },
};
car1.start();
// Q8.this keyword object me kya karta hai?
// Ans:JavaScript mein this keyword ka kaam yeh batana hota hai ke filhaal kaun sa object is code (function ya method) ko execute ya call kar raha hai.
// Q9.Object keys kaise nikalte hain?
// Ans:
console.log(Object.keys(car));
// Q10.Object values kaise nikalte hain?
// Ans:
console.log(car1.model);
console.log(car1.brand);

// Nested Objects
// Q1.Ek object ke andar object ka example banao.
let student = {
  naam: "Ali",
  umar: 21,
  course: "Web Development",

  address: {
    shehar: "Lahore",
    mulk: "Pakistan",
    pinCode: 54000,
  },
};
// Q2.User object ke andar address object create karo.
let user1 = {
  name: "hassan",
  email: "hassan@gmail.com",
  pass: 123456,

  address: {
    city: "Multan",
    street: "j-45",
    pinCode: 45325,
  },
};
// Q3.Nested object ki city access karo.
console.log("City ==>", user1.address.city);

// Q4.Student object me marks object add karo.
student.marks = {
  eng: 65,
  com: 85,
  math: 55,
};
console.log(student);
// Q5.Company object me employee object create karo.
// Ans:
const company = {
  name: "Tech Solutions",
  location: "Lahore",

  employee: {
    name: "Ali Raza",
    designation: "Software Engineer",
    salary: 150000,
  },
};
console.log(company.employee.name);

// Array of Objects

// Q1.Array of objects kya hota hai?
// Ans: JavaScript mein Array of Objects ka matlab hai ek aisi list (array) jis ke andar bohot saare objects store hotay hain.
// Q2.Students ka array banao jisme har student ka name aur marks ho.
// Ans:
const studentsArr = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Ahmed", marks: 78 },
];
// Q3.Array of objects me se sirf names print karo.
// Ans:
let names = studentsArr.map(function (nam) {
  return nam.name;
});
console.log(names);

// Q4.Passed students filter karo from array of objects.
// Ans:
const students3 = [
  { naam: "Ali", marks: 75, status: "Pass" },
  { naam: "Sara", marks: 45, status: "Fail" },
  { naam: "Bilal", marks: 80, status: "Pass" },
  { naam: "Fatima", marks: 30, status: "Fail" },
];
let filterStu = students3.filter(function (std) {
  if (std.status === "Pass") {
    return std;
  }
});
console.log(filterStu);
// Q5.map() use karke students names uppercase me convert karo.
let stuNameUpper = students3.map(function (nup) {
  return nup.naam.toUpperCase();
});
console.log(stuNameUpper);
// Q6.Highest marks wala student find karo.
// Ans:
let highMarkOut = students3.reduce(function (acc, cur) {
  if (cur.marks > acc.marks) {
    return cur;
  } else {
    return acc;
  }
});
console.log(highMarkOut);
// Q7.Ek products array me total stock calculate karo.
// Ans:
const products2 = [
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 25 },
  { name: "Keyboard", stock: 15 },
];
let totalStock = products2.reduce(function (sum, curt) {
  return sum + curt.stock;
}, 0);
console.log(totalStock);
// Q8.Array of objects me new object push karo.
// Ans:
products2.push({ name: "earphone", stock: "8" });
console.log(products2);

// Q9.User object ko array me find karo.
// Ans:
students3.find(function (fau) {
  if (fau.naam === "Ali") {
    console.log(fau);
  }
});
// Q10.Array of objects ko loop se print karo.
let loopPrint = products2.forEach(function (lp) {
  console.log(`Name: ${lp.name} and Stock: ${lp.stock}`);
});
