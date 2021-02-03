// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>ES6</h1>`;

//let
// variable declared using let
let name = "Sara";
{
  // can be accessed only inside
  let name = "Peter";

  console.log(name); // Peter
}
console.log(name); // Sara

//JavaScript const
// name declared with const cannot be changed
const name = "Sara";

//JavaScript Arrow Function
// function expression using arrow function
let x = (x, y) => x * y;

//JavaScript Classes

class Person {
  constructor(name) {
    this.name = name;
  }
}

//Default Parameter Values
function sum(x, y = 5) {
  // take sum
  // the value of y is 5 if not passed
  console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20

//JavaScript Template Literals
const first_name = "Jack";
const last_name = "Sparrow";

console.log(`Hello ${first_name} ${last_name}`);

//JavaScript Destructuring
const person = {
  name: "Sara",
  age: 25,
  gender: "female"
};

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

//JavaScript import and export
// export
export default function contact(name, age) {
  console.log(`The name is ${name}. And age is ${age}.`);
}
import contact from "./contact.js";

contact("Sara", 25);
// The name is Sara. And age is 25

//JavaScript Promises
// returns a promise
let countValue = new Promise(function(resolve, reject) {
  reject("Promise rejected");
});

// executes when promise is resolved successfully
countValue.then(function successValue(result) {
  console.log(result); // Promise resolved
});

//JavaScript Rest Parameter and Spread Operator
//rest
function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

show("one", "two", "three", "four", "five", "six");

//spread
let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four", "five"];
console.log(arr2); // ["one", "two", "three", "four", "five"]
