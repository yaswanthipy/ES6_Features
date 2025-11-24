let username = "Yashu"; // Using template literals
let course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);


const name = "Sam";// Using object property shorthand and method definitions
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

const getFullName = (first, last) => `${first} ${last}`;// Using arrow functions

console.log(getFullName("Sam", "Smith"));
student.greet();
