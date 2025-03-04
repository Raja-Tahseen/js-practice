# JavaScript Statements

## What is a Statement in JavaScript?
A **statement** in JavaScript is a standalone instruction that performs an action. It represents a single step in a program's logic, such as declaring a variable, assigning a value, or controlling program flow. Statements are executed sequentially and form the building blocks of JavaScript code.

---

## Key Characteristics of Statements

### 1. Simple Statements
- **Examples**: Variable declarations, function calls.
- **Syntax**: Terminated with a semicolon (`;`).
  ```javascript
  let x = 5;
  console.log("Hello");
  ```

### 2. Compound Statements
- **Examples**: Loops, conditionals, blocks.
- **Syntax**: Enclosed in curly braces (`{}`). No semicolon after the closing brace.
  ```javascript
  if (condition) {
    console.log("True");
  }
  ```

---

## When Is a Statement Completed?
A statement is considered completed in the following cases:

### 1. Explicit Semicolon
- A semicolon (`;`) marks the end of a simple statement.  
  ```javascript
  const name = "Alice"; // Statement ends here
  ```

### 2. Automatic Semicolon Insertion (ASI)
- JavaScript's parser adds semicolons implicitly if:
  - The next token cannot continue the current statement.
  - Line breaks are used unambiguously.
- Example:
  ```javascript
  let y = 10 // ASI adds a semicolon here
  [1, 2].forEach(console.log); // Error without semicolon before `[`
  ```
- **Best Practice**: Use explicit semicolons to avoid ASI pitfalls.

### 3. Block Closing Brace
- Compound statements end at the closing `}`.  
  ```javascript
  function greet() {
    console.log("Hello!"); // Block ends at `}`
  }
  ```

---

## Notes on ASI
- ASI can cause unexpected behavior in cases like:
  ```javascript
  return // ASI inserts a semicolon here, returning `undefined`
  { result: 42 };
  ```
- Always add explicit semicolons in critical places to ensure code reliability.

---

## Example Breakdown
```javascript
// Simple statements
const name = "Alice";
alert(name);

// Compound statement
function greet() {
  console.log("Hello!");
}

// ASI in action
let a = 1; // Explicit semicolon
let b = 2  // ASI adds semicolon here
```

---

**Summary**:  
A JavaScript statement is completed by:
1. An explicit semicolon (`;`),
2. ASI rules (with caution), or
3. The closing brace (`}`) of a block.



# JavaScript Concepts

---

## What is a Code Block?
A **code block** in JavaScript is a group of statements enclosed in curly braces `{}`. It is used to group multiple statements together, typically in control structures like `if`, `for`, `while`, or functions.

### Example:
```javascript
if (condition) {
  // This is a code block
  console.log("Condition is true");
  let x = 10;
}
```

---

## Reserved Keywords in JavaScript
JavaScript has a set of **reserved keywords** that cannot be used as variable names, function names, or identifiers because they have special meanings in the language.

### Examples of Reserved Keywords:
- `let`, `const`, `var` (variable declarations)
- `if`, `else`, `switch` (conditional statements)
- `for`, `while`, `do` (loops)
- `function`, `return` (functions)
- `class`, `new`, `this` (object-oriented programming)
- `try`, `catch`, `finally` (error handling)
- `true`, `false`, `null`, `undefined` (literals)

---

## JavaScript Primitives
JavaScript has **primitive data types**, which are the most basic building blocks of the language. These are immutable (cannot be changed) and are passed by value.

### Primitive Data Types:
1. **Number**: Represents numeric values (e.g., `42`, `3.14`).
2. **String**: Represents textual data (e.g., `"Hello"`).
3. **Boolean**: Represents logical values (`true` or `false`).
4. **Undefined**: Represents a variable that has been declared but not assigned a value.
5. **Null**: Represents an intentional absence of any value.
6. **Symbol**: Represents a unique and immutable value (introduced in ES6).
7. **BigInt**: Represents large integers (introduced in ES2020).

---

## How to Differentiate Between Number, String, and Boolean
You can use the `typeof` operator to determine the type of a value.

### Examples:
```javascript
let num = 42;
let str = "Hello";
let bool = true;

console.log(typeof num);  // Output: "number"
console.log(typeof str);  // Output: "string"
console.log(typeof bool); // Output: "boolean"
```

---

## Behaviour of Adding Two Strings
When you add two strings in JavaScript, the `+` operator performs **string concatenation**, combining the two strings into one.

### Example:
```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; // Concatenation
console.log(result); // Output: "Hello World"
```

---

## Why Addition Doesn't Work Between Number and String
When you try to add a number and a string, JavaScript performs **type coercion**. It converts the number into a string and then concatenates the two strings.

### Example:
```javascript
let num = 10;
let str = "20";
let result = num + str; // Type coercion occurs
console.log(result); // Output: "1020" (a string, not a number)
```

### Explanation:
- JavaScript prioritizes string concatenation over numeric addition when one of the operands is a string.
- To perform numeric addition, you must explicitly convert the string to a number using `Number()` or `parseInt()`.

### Correct Way:
```javascript
let num = 10;
let str = "20";
let result = num + Number(str); // Explicit conversion
console.log(result); // Output: 30 (a number)
```

---

## Summary
- **Code Block**: A group of statements enclosed in `{}`.
- **Reserved Keywords**: Special words like `let`, `if`, `function`, etc.
- **Primitives**: Basic data types like `number`, `string`, `boolean`, etc.
- **Differentiation**: Use `typeof` to check types.
- **String Addition**: Concatenates strings.
- **Number + String**: Results in string concatenation due to type coercion.

---

You can save this as `javascript-concepts.md` and upload it to GitHub. Let me know if you need further assistance! 😊
