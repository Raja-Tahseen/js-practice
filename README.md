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
