///////////////////////////////////////////////////////////////
/////////////// Day 1 - Conditionals & Loops //////////////////

// JS22 - [If Else]

//	Create a program which takes user age as input and verify that user age is greater than 18. In case of age less than 18, display alert that user is underage.

const userAge = prompt("Please enter age : ");
if (userAge < 18) {
  console.log("User is underage..!");
} else {
  console.log("Access Granted..!");
}

// [JS23 - Switch Statement]
//	Create a program which returns user grade based on user's score. Evaluation is as follows: A = 80, B = 60, C = 40, F = <30

const userGrade = 80;
switch (userGrade) {
  case 80:
    console.log("A");
    break;
  case 60:
    console.log("B");
    break;
  case 40:
    console.log("C");
    break;

  default:
    console.log("F");
}

/*
The requirement is not suitable for a switch statement. Here's why:

Key Issue: Ranges vs. Discrete Values
The grading logic requires checking numerical ranges (e.g., "A" for scores ≥80, "B" for 60-79, etc.), but switch in JavaScript is designed for exact/strict equality checks (===). It cannot directly evaluate conditions like score >= 80.
*/

// [JS24 - For Loop]
//Loop over an array and display the array items in console.

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// [JS25 - Loop Exercise]
//	Take user's input and create a table based on that

const table = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}
