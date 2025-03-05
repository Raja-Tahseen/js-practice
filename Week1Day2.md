# Day - 2 - JavaScript Output

## 1. Difference between `innerHTML` and `document.write()`:

- **`innerHTML`**:

  - Used to set or get the HTML content inside an element.
  - Only affects the content of the specified element.
  - Does not overwrite the entire document.
  - Commonly used for dynamically updating parts of a webpage.
  - Example:
    ```javascript
    document.getElementById("myElement").innerHTML = "<p>New content</p>";
    ```

- **`document.write()`**:
  - Writes content directly into the HTML document at the point where the script is executed.
  - If used after the page has loaded, it will overwrite the entire document.
  - Generally discouraged for modern web development due to its destructive nature.
  - Example:
    ```javascript
    document.write("<p>This will overwrite the page if used after load</p>");
    ```

## 3. Use cases for `console.log()`:

- **Debugging**:

  - Output variable values, objects, or function results to the console for debugging purposes.
  - Example:
    ```javascript
    let x = 10;
    console.log(x); // Outputs: 10
    ```

- **Logging messages**:

  - Display informational messages, warnings, or errors during development.
  - Example:
    ```javascript
    console.log("This is a log message.");
    console.warn("This is a warning.");
    console.error("This is an error.");
    ```

- **Inspecting objects**:

  - Print the contents of objects or arrays to inspect their structure and values.
  - Example:
    ```javascript
    let obj = { name: "Alice", age: 25 };
    console.log(obj); // Outputs: { name: "Alice", age: 25 }
    ```

- **Performance tracking**:

  - Use `console.time()` and `console.timeEnd()` to measure the execution time of code blocks.
  - Example:
    ```javascript
    console.time("myTimer");
    // Some code to measure
    console.timeEnd("myTimer"); // Outputs the time taken
    ```

- **Testing code flow**:

  - Log messages to confirm if certain parts of the code are being executed.
  - Example:
    ```javascript
    if (condition) {
      console.log("Condition is true");
    } else {
      console.log("Condition is false");
    }
    ```

- **Grouping logs**:
  - Use `console.group()` and `console.groupEnd()` to organize related logs.
  - Example:
    ```javascript
    console.group("User Details");
    console.log("Name: Alice");
    console.log("Age: 25");
    console.groupEnd();
    ```

## 3. What are Variables in JavaScript? How do we Declare Variables?

In JavaScript, variables are used to store data that can be referenced and manipulated in a program. They act as containers for values, which can be of various types such as numbers, strings, objects, or functions.

### Declaring Variables

Variables in JavaScript can be declared using the following keywords:

- `var`
- `let`
- `const`

**Example:**

```javascript
var name = "John"; // Using var
let age = 25; // Using let
const PI = 3.14; // Using const
```

## 4. Difference between `let`, `const`, and `var`:

- **`var`**:

  - Function-scoped or globally-scoped (not block-scoped).
  - Can be redeclared and reassigned.
  - Hoisted to the top of its scope, meaning it can be accessed before declaration (but will be `undefined`).
  - Example:
    ```javascript
    var x = 10;
    if (true) {
      var x = 20; // Same variable, reassigned
    }
    console.log(x); // Outputs: 20
    ```

- **`let`**:

  - Block-scoped (limited to the block in which it is defined).
  - Cannot be redeclared in the same scope, but can be reassigned.
  - Not hoisted in the same way as `var`; accessing it before declaration results in a `ReferenceError`.
  - Example:
    ```javascript
    let y = 10;
    if (true) {
      let y = 20; // Different variable, block-scoped
    }
    console.log(y); // Outputs: 10
    ```

- **`const`**:
  - Block-scoped (like `let`).
  - Cannot be redeclared or reassigned after initialization.
  - Must be initialized at the time of declaration.
  - Not hoisted; accessing it before declaration results in a `ReferenceError`.
  - Example:
    ```javascript
    const z = 10;
    // z = 20; // Error: Cannot reassign a constant
    if (true) {
      const z = 20; // Different variable, block-scoped
    }
    console.log(z); // Outputs: 10
    ```

## 5. What do we mean by Arithmetics in JavaScript:

Arithmetic in JavaScript refers to the use of mathematical operations to perform calculations on numeric values. JavaScript supports standard arithmetic operators for addition, subtraction, multiplication, division, and more. These operations can be performed on numbers (both integers and floating-point numbers) or variables holding numeric values.

**Common Arithmetic Operators**:

- **`+` (Addition)**: Adds two numbers.
  ```javascript
  let sum = 5 + 3; // sum = 8
  ```
- **`-` (Subtraction)**: Subtracts the second number from the first.
  ```javascript
  let difference = 10 - 4; // difference = 6
  ```
- **`*` (Multiplication)**: Multiplies two numbers.
  ```javascript
  let product = 7 * 2; // product = 14
  ```
- **`/` (Division)**: Divides the first number by the second.
  ```javascript
  let quotient = 20 / 5; // quotient = 4
  ```
- **`%` (Modulus)**: Returns the remainder of a division.
  ```javascript
  let remainder = 10 % 3; // remainder = 1
  ```
- **`**` (Exponentiation)\*\*: Raises the first number to the power of the second.
  ```javascript
  let power = 2 ** 3; // power = 8
  ```

**Increment and Decrement Operators**:

- **`++` (Increment)**: Increases a number by 1.
  ```javascript
  let x = 5;
  x++; // x = 6
  ```
- **`--` (Decrement)**: Decreases a number by 1.
  ```javascript
  let y = 8;
  y--; // y = 7
  ```

**Operator Precedence**:

- JavaScript follows the standard mathematical order of operations (PEMDAS/BODMAS):
  1.  Parentheses/Brackets
  2.  Exponents/Orders
  3.  Multiplication and Division (left to right)
  4.  Addition and Subtraction (left to right)
  ```javascript
  let result = 10 + 2 * 3; // result = 16 (2 * 3 is evaluated first)
  ```

**Special Cases**:

- **NaN (Not-a-Number)**: Occurs when arithmetic operations involve invalid values.
  ```javascript
  let invalid = 10 / "hello"; // invalid = NaN
  ```
- **Infinity**: Represents a number too large to handle.
  ```javascript
  let infinity = 1 / 0; // infinity = Infinity
  ```

**Type Coercion**:

- JavaScript may implicitly convert non-numeric values to numbers during arithmetic operations.
  ```javascript
  let coerced = "10" - 5; // coerced = 5 (string "10" is converted to number)
  ```

Arithmetic in JavaScript is fundamental for performing calculations, manipulating data, and solving mathematical problems in programs.

## 6. What is hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use functions and variables before they are declared in the code. However, only the declarations are hoisted, not the initializations or assignments.

- **Variable Hoisting**:

  - Variables declared with `var` are hoisted to the top of their function or global scope and initialized with `undefined`.
  - Example:
    ```javascript
    console.log(x); // Outputs: undefined (hoisted but not initialized)
    var x = 10;
    console.log(x); // Outputs: 10
    ```

- **Function Hoisting**:

  - Function declarations are fully hoisted, meaning the entire function is moved to the top of its scope.
  - Example:
    ```javascript
    foo(); // Outputs: "Hello" (function is hoisted)
    function foo() {
      console.log("Hello");
    }
    ```

- **Hoisting with `let` and `const`**:
  - Variables declared with `let` and `const` are hoisted but not initialized. Accessing them before declaration results in a `ReferenceError`.
  - Example:
    ```javascript
    console.log(y); // Error: Cannot access 'y' before initialization
    let y = 20;
    ```

## 7. Does declaring a variable with `let`/`const` allow hoisting?

- Yes, variables declared with `let` and `const` are hoisted, but they are not initialized. This is known as the **"temporal dead zone"** (TDZ), where the variable exists but cannot be accessed until it is declared.
- Example:
  ```javascript
  console.log(z); // Error: Cannot access 'z' before initialization
  const z = 30;
  ```

## 8. What do we mean by block-scope?

Block scope refers to the visibility and lifetime of variables within a block of code, which is defined by curly braces `{}`. Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are defined.

- **Block-Scoped Variables**:

  - Variables declared with `let` and `const` are confined to the block in which they are declared.
  - Example:
    ```javascript
    if (true) {
      let a = 5;
      const b = 10;
      console.log(a); // Outputs: 5
      console.log(b); // Outputs: 10
    }
    console.log(a); // Error: 'a' is not defined
    console.log(b); // Error: 'b' is not defined
    ```

- **Difference from Function Scope**:
  - Variables declared with `var` are function-scoped or globally-scoped, meaning they are accessible throughout the function or globally, regardless of block boundaries.
  - Example:
    ```javascript
    if (true) {
      var c = 15;
    }
    console.log(c); // Outputs: 15 (accessible outside the block)
    ```

Block scope is a key feature of modern JavaScript, providing better control over variable visibility and reducing the risk of unintended side effects.

## 9. How do we write JavaScript comments?

- Single-line comments: Use `//`.
  ```javascript
  // This is a single-line comment
  ```
- Multi-line comments: Use `/* ... */`.
  ```javascript
  /* This is a
     multi-line comment */
  ```

## 10. What's the use case for comments?

- Explain code functionality or logic.
- Temporarily disable code during debugging.
- Provide context for complex algorithms or decisions.
- Improve code readability for other developers or your future self.

## 11. What role do they play in code documentation?

- Serve as inline documentation to describe the purpose of code.
- Help maintain and update code by providing context.
- Facilitate collaboration by making code easier to understand.
- Can be used with tools like JSDoc to generate formal documentation.

## 12. Basic Arithmetic Operators:

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus)
- `**` (Exponentiation)

## 13. JavaScript Statements for Basic Operations:

```javascript
let a = 10;
let b = 5;

// Addition
let sum = a + b; // sum = 15

// Subtraction
let difference = a - b; // difference = 5

// Multiplication
let product = a * b; // product = 50

// Division
let quotient = a / b; // quotient = 2

// Modulus (Remainder)
let remainder = a % b; // remainder = 0

// Exponentiation
let power = a ** b; // power = 100000
```
