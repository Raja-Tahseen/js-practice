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
