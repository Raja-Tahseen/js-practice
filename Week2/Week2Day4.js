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

// [JS40 - Differences]
// 	Differentiate between some and every.
// 	Differentiate between forEach and map.
