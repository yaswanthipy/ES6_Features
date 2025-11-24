const arr1 = [1, 2, 3];// Using spread operator
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged);  // [1,2,3,4,5]

const sum = (...nums) => {// Using rest parameters
  return nums.reduce((acc, curr) => acc + curr, 0);
};

const user = {  // Using destructuring assignment
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name, city, pin);


