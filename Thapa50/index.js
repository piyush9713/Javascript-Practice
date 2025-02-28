/* 

// pass by value
let a = 5;
let b = a;
b = a + 5;
console.log(a);
console.log(b);
// pass by reference
let obj1 = {
  name: "piyush",
  age: "23",
};
let obj2 = obj1;
obj2.name = "nikhil";
console.log(obj1);
console.log(obj2);


// find intersection and union
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const interscetion = arr1.filter((item) => arr2.includes(item));
// console.log(interscetion);
const union = [...new Set([...arr1, ...arr2])];
console.log(union);
console.log(union.sort());
console.log(union.sort().reverse());

// typeof
console.log(typeof {});
console.log(typeof []);
// method 1
console.log(Array.isArray([]));
// method 2
console.log([] instanceof Array);

// prime number
let isPrime = (num) => {
  if (num <= 1) {
    console.log(`${num} not a Prime Number`);
  }
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      return console.log(`${num} is not a Prime Number`);
    }
    return console.log(`${num} is a Prime Number`);
  }
};
isPrime(15);

// unique value from Array
let arr = [1, 2, 3, 5, 7, 3, 2, 9];
let newArr = [...new Set(arr)];
console.log(newArr);

// fibonacci sequence
const fibonacci = (n) => {
  let sequence = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
  debugger;
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
};
console.log(fibonacci(10));

// check is vowel or consonent
const isVowel = (char) => {
  let lowerChar = char.toLowerCase();
  if (!/[a-z]/.test(lowerChar)) {
    return console.log("Please enter a valid char");
  }
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(lowerChar)) {
    return console.log(`${char} is vowel`);
  }
  return console.log(`${char} is consonent`);
};
isVowel("A");

// find the sum of this sum(1)(2)(3)()
const sum = (a) => {
  return (b) => {
    debugger;
    return b ? sum(a + b) : a;
  };
};
const total = sum(1)(2)(3)();
console.log(total);

const sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(8)());


// convert Array to Object
const arrayToObject = (arr) => {
  return Object.fromEntries(arr);
};
console.log(
  arrayToObject([
    ["a", 1],
    ["b", 2],
  ])
);

const objectToArray = (obj) => {
  return Object.entries(obj);
};
console.log(
  objectToArray({
    a: 1,
    b: 2,
  })
);


// ProtoType inheritance

// Step 1: Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add a method to Person's prototype
Person.prototype.introduce = function () {
  return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
};

// Step 3: Add a custom method to Array.prototype
Array.prototype.describe = function () {
  return `This array contains ${this.length} elements: ${this.join(", ")}`;
};

// Step 4: Add a custom method to Function.prototype
Function.prototype.describeFunction = function () {
  return `This function is named "${this.name || "anonymous"}".`;
};

// Step 5: Demonstrate inheritance
// Create an instance of Person
const piyush = new Person("Piyush", 25);
console.log(piyush.introduce()); // Output: Hi, I'm Piyush, and I'm 25 years old.

// Use the custom array method
const numbers = [10, 20, 30];
console.log(numbers.describe()); // Output: This array contains 3 elements: 10, 20, 30

// Use the custom function method
function sayHello() {
  return "Hello!";
}
console.log(sayHello.describeFunction()); // Output: This function is named "sayHello".

// Step 6: Verify prototype chaining
console.log(piyush.__proto__ === Person.prototype); // true
console.log(numbers.__proto__ === Array.prototype); // true
console.log(sayHello.__proto__ === Function.prototype); // true


const arr1 = [1, 7, 4, 8, 9, 3, 2, 4, 4, 2, 8, 9, 0];
const arr2 = [4, 6, 8, 3, 2, 9, 3, 7, 7, 2];

const newArr = [...arr1, ...arr2];
console.log(newArr);

const uniqueArr = [...new Set(newArr)];
console.log(uniqueArr);
console.log(uniqueArr.sort());

*/
