## 1. For which scenario would one prefer switch over if/else statement?

In JavaScript, using a switch statement is preferred over if/else in the following scenarios:

1. **Single Variable/Expression with Multiple Discrete Values**
   When testing the same variable or expression against multiple specific values (e.g., strings, numbers, enums), switch offers cleaner syntax than repetitive if (x === value) checks.

```javascript
// Switch example
switch (day) {
  case "Monday":
    startWeek();
    break;
  case "Friday":
    planWeekend();
    break;
  default:
    work();
}
```

2. **Improved Readability for Many Cases**
   For a large number of conditions, switch is more organized and easier to read/modify than a long chain of if/else if statements.

3. **Intentional Fall-Through Behavior**
   Use switch to execute the same code for multiple cases by omitting break, avoiding code duplication:

```javascript
switch (fruit) {
  case "Apple":
  case "Pear":
    console.log("Core fruit");
    break;
  case "Orange":
    console.log("Citrus");
    break;
}
```

4. **Strict Equality Checks (===)**
   When strict type/value comparisons are sufficient, switch ensures each case matches exactly without type coercion.

5. **Enumerations or Fixed Sets of Values**
   Common in scenarios like handling Redux action types, HTTP status codes, or other predefined constants where all possible cases are known.

## When to Avoid switch:

1. For ranges (e.g., if (x > 5)), truthy/falsy checks, or complex conditions.

2. When dynamic or non-strict comparisons are needed.

---

## What is a Loop?

A **loop** is a programming construct that repeats a block of code multiple times until a specified condition is met. It automates repetitive tasks, allowing you to perform operations like iterating through data, processing lists, or executing logic repeatedly without writing the same code over and over.

## Why Do We Need Loops?

Loops are essential for:

1. **Repetition Without Redundancy**
   **Example:** Printing numbers 1 to 100.
   Without a loop, you’d write console.log(1); console.log(2); ... 100 times.
   With a loop:

```javascript
for (let i = 1; i <= 100; i++) {
  console.log(i); // Repeats for i = 1, 2, ..., 100
}
```

Saves time, reduces errors, and keeps code clean.

2. **Processing Collections**
   **Example:** Summing all elements in an array.

```javascript
const numbers = [10, 20, 30];
let total = 0;
for (let num of numbers) {
  total += num; // Adds each number to total
}
console.log(total); // 60
```

Loops simplify working with arrays, objects, or other iterable data.

3. **Handling Dynamic Data**
   When the number of iterations isn’t known upfront (e.g., reading user input until they type "quit").

```javascript
let input;
do {
  input = prompt("Enter 'quit' to exit:");
} while (input !== "quit");
```

4. **Efficiency**
   Avoids redundant code, making programs faster to write and easier to maintain.

## Common Loop Types in JavaScript

1. for Loop: Best when you know the number of iterations upfront.

```javascript
for (let i = 0; i < 5; i++) { /* Runs 5 times */ }
while Loop: Runs while a condition is true (good for unknown iterations).
```

2. while Loop: Runs while a condition is true (good for unknown iterations).

```javascript
let count = 0;
while (count < 5) { count++; }
do...while Loop: Runs at least once, then checks the condition.
```

3. do...while Loop: Runs at least once, then checks the condition.

```javascript
let x = 0;
do { x++; } while (x < 5);
for...of Loop: Iterates over arrays, strings, or other iterables.
```

4. for...of Loop: Iterates over arrays, strings, or other iterables.

```javascript
for (const char of "Hello") {
  console.log(char);
}
```

## Real-World Use Cases

1. **Data Processing:** Filtering/searching large datasets.

2. **UI Updates:** Rendering lists (e.g., React components).

3. **Games/Animations:** Continuously updating the screen.

4. **APIs:** Fetching paginated data until all pages are retrieved.
