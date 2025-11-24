

// a) Output & Explanation
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); // 20
// console.log(x); // ReferenceError: x is not defined
// Explanation:
// var is function-scoped → accessible outside block
// let is block-scoped → NOT accessible outside {}

// b) Optional chaining safe access
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  // "test@mail.com"
console.log(profile?.user?.details?.phone);  // undefined (no error)

// c) Optional chaining preventing runtime error
const order = {
  item: "Mobile",
  price: 12000
};

console.log(order?.customer?.name); // undefined (no crash)
