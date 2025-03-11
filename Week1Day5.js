//#########################
// 1 - [String Methods]

let str = "Hello, World!";
let length = str.length; // Returns 13

const str2 = "Hello, World!";
console.log(str2.slice(0, 5)); // Output: "Hello"
console.log(str2.slice(7)); // Output: "World!"
console.log(str2.slice(-6, -1)); // Output: "World"

const str3 = "Hello, World!";
console.log(str3.substring(0, 5)); // Output: "Hello"
console.log(str3.substring(7)); // Output: "World!"
console.log(str3.substring(7, 12)); // Output: "World"

const str4 = "Hello, World!";
console.log(str4.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str4.toLowerCase()); // Output: "hello, world!"

const str5 = "Hello";
const str6 = "World";
const result = str5 + " " + str6;
console.log(result); // Output: "Hello World"

const str7 = "A quick brown fox jumps over a lazy dog";
const wordCount = str7.split(" ").length;
console.log(wordCount); // Output: 9

//#########################
// 2 - [Number Methods]

// 1. What is NaN in JavaScript?
// Invalid math operation
const invalidMath = 0 / 0; // NaN
console.log(invalidMath); // NaN
// Parsing failure
const parseFail = parseInt("string"); // NaN
console.log(parseFail); // NaN
// NaN is not equal to itself
console.log(NaN === NaN); // false
// Check for NaN
console.log(Number.isNaN(invalidMath)); // true

//2. Can we access infinity in JavaScript?
// Division by zero
const positiveInfinity = 1 / 0; // Infinity
console.log(positiveInfinity); // Infinity
// Negative infinity
const negativeInfinity = -1 / 0; // -Infinity
console.log(negativeInfinity); // -Infinity
// Exceeding maximum number size
const exceedMax = Number.MAX_VALUE * 2;
console.log(exceedMax); // Infinity

// Global property
console.log(Infinity); // Infinity

//3. How can we convert string into number?
// Using Number()
const num1 = Number("123");
console.log(num1); // 123 (number)
console.log(Number("123.45")); // 123.45

// Using parseInt() and parseFloat()
console.log(parseInt("456px")); // 456 (integer)
console.log(parseFloat("3.14π")); // 3.14

// Unary plus
const str8 = "789";
console.log(+str8); // 789 (number)
console.log(+"42.5"); // 42.5

//4. Write a function that accepts a number and returns with max two float points.
function toMaxTwoDecimals(num) {
  return parseFloat(num.toFixed(2));
}
console.log(toMaxTwoDecimals(3.456)); // 3.46
console.log(toMaxTwoDecimals(2.4)); // 2.4

//#########################
// 3 - [Exploring Javascript Objects]

//#########################
// 4 - [Javascript Math]

//1. Make a head/tails program.
function flipCoin() {
  // Returns "Heads" or "Tails" randomly
  return Math.random() < 0.5 ? "Heads" : "Tails";
}
console.log(flipCoin()); // Output: "Heads" or "Tails"

//2. What's the difference between ceil and floor
//Rounds a number up to the nearest integer.
Math.ceil(4.2); // 5
Math.ceil(9.001); // 10
//Rounds a number down to the nearest integer.
Math.floor(4.7); // 4
Math.floor(9.999); // 9
