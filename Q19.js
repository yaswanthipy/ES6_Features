// ======================================================
// 1. Template Literals + Expressions
// ======================================================

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiline = `
Line 1
Line 2
Line 3
`;
console.log(multiline);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// ======================================================
// 2. Arrow Functions & this
// ======================================================

// a)
const square = n => n * n;

// b)
// Explanation:
// Arrow functions do NOT have their own 'this'.
// They take 'this' from the global scope, so this.value is undefined.

// c)
const objFixed = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
objFixed.test();


// ======================================================
// 3. Rest, Spread & Copying Objects
// ======================================================

// a)
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };

// b)
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };

// c)
const maxValue = (...nums) => Math.max(...nums);


// ======================================================
// 4. Destructuring & Optional Chaining
// ======================================================

// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

// c)
const info = {};
console.log(info?.user?.name);  // undefined, no error


// ======================================================
// 5. Scoping (let/var/const)
// ======================================================

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// c)
// const prevents reassignment → safer and avoids accidental changes.


// ======================================================
// 6. Ternary Operator – Practice
// ======================================================

// a)
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";

// b)
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// c)
let num = 5;
console.log(
  num > 0 ? "Positive" :
  num === 0 ? "Zero" :
  "Negative"
);


// ======================================================
// 7. Spread, Rest & Arrays
// ======================================================

// a)
const nums = [1, 2, 3];
const updatedNums = [...nums, 4, 5];

// b)
const aa = ["x", "y"];
const bb = ["z"];
const combined = [...aa, ...bb];

// c)
const printNames = (...names) => names;


// ======================================================
// 8. Object Destructuring & Shorthand
// ======================================================

// a)
const user1 = { id: 101, status: "active" };
const { id, status } = user1;

// b)
const id2 = 101;
const role2 = "admin";
const user2 = { id2, role2 };

// c)
const name3 = "Sam";
const age3 = 25;
const person = {
  name3,
  age3,
  greet() {
    console.log(`Hello ${this.name3}`);
  }
};


// ======================================================
// 9. Template Literals (More Practice)
// ======================================================

// a)
console.log(`Today is: ${new Date().toDateString()}`);

// b)
const NAME = "Yashu";
const SCORE = 95;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// ======================================================
// 10. Arrow Function Shorthands
// ======================================================

// a)
const add = (a, b) => a + b;

// b)
const isAdult = (age) => age >= 18;

// c)
const double = n => n * 2;


// ======================================================
// 11. Spread Operator (Arrays & Objects)
// ======================================================

// a)
const arrClone = [...nums];

// b)
const arrStart = [100, ...nums];

// c)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 }; 
const mergedOverride = { ...obj1, ...obj2 };


// ======================================================
// 12. Optional Chaining
// ======================================================

const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

// a)
console.log(user?.address?.city);

// b)
console.log(user?.job?.title); // undefined

// c)
const data = {};
console.log(data?.profile?.info?.email);  // undefined, no crash
