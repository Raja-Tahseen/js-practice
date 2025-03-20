// -----------------------------------------------------
// ----------DAY 4---------- Arrays and Iterations
// -----------------------------------------------------

// [JS37 - For loop vs forEach]
// 	Create a list of todos with both for loop and forEach loop

// [JS38 - Basic Iterators]
// 	var elements = ['Hydrogen', 'Helium', 'Oxygen', 'Uranium', 'Nitrogen']
// 		1- Find the index of element 'Polonium'
// 		2- Filter elements that have length less than 7.
// 		3- Map the word 'Element-' with each element.
// 		4- Check if element 'Radium' exists in the array.

//SOLUTION:
var elements = ["Hydrogen", "Helium", "Oxygen", "Uranium", "Nitrogen"];
//1- Find the index of element 'Polonium'
const index = elements.indexOf("Polonium");
console.log(index); // -1  (Means not found)

//2- Filter elements that have length less than 7.
const filteredElements = elements.filter((elem) => elem.length < 7);
console.log(filteredElements);
/*
OUTPUT: 
[
    "Helium",
    "Oxygen"
]
    */

//3- Map the word 'Element-' with each element.
var mappedElements = elements.map((elem) => "Element-" + elem);
console.log(mappedElements);
/*
OUTPUT:
[
    "Element-Hydrogen",
    "Element-Helium",
    "Element-Oxygen",
    "Element-Uranium",
    "Element-Nitrogen"
]
*/

//4- Check if element 'Radium' exists in the array.
const isIncluded = elements.includes("Radium");
console.log(isIncluded); // false

// [JS39 - Conditions not matched]
// 	Describe returns values for find, some, filter, findIndex if conditions do not match
//1. find()
const numbers = [10, 20, 30, 40, 50];
const findResult = numbers.find((num) => num > 100);
console.log(findResult); // undefined

//2. some()
const someResult = numbers.some((num) => num > 100);
console.log(someResult); // false

//3. filter()
const filterResult = numbers.filter((num) => num > 100);
console.log(filterResult); // []

//4. findIndex()
const findIndexResult = numbers.findIndex((num) => num > 100);
console.log(findIndexResult); // -1

// [JS40 - Differences]
// 	Differentiate between some and every.
//Both are array methods that test elements against a condition. Some() checks if at least one
//element meets the condition, returning true if yes, false otherwise. Every() checks if all
// elements meet the condition, true only if all do. So the main difference is their return
// condition and when they short-circuit.

const arr = [1, 2, 3];
console.log(arr.some((x) => x % 2 === 0)); // true
console.log(arr.every((x) => x % 2 === 0)); // false

// 	Differentiate between forEach and map.
//Both iterate over arrays, but map() returns a new array with transformed elements, while
//forEach() just executes a function for each element without returning anything. So forEach()
//is for side effects, like logging or updating variables, and map() is for creating a new array based on the original.

const numbers2 = [1, 2, 3];
numbers2.forEach((x) => console.log(x)); // Output: 1, 2, 3
const doubled = numbers2.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]
