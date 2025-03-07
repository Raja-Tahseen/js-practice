## 1. How to check the length of a string?

To check the length of a string in JavaScript, you can use the `length` property.

```javascript
let str = "Hello, World!";
let length = str.length; // Returns 13
```

# 2. Explain slice and substring method.

## `slice` Method

The `slice` method is used to extract a portion of a string and return it as a new string. It does not modify the original string.

### Syntax

```javascript
string.slice(startIndex, endIndex);
```

### Examples

```javascript
const str = "Hello, World!";

console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(7)); // Output: "World!"
console.log(str.slice(-6, -1)); // Output: "World"
```

### Key Points

1. If startIndex is greater than endIndex, slice will return an empty string.
2. Negative indices count from the end of the string.

## `substring` Method

The `substring` method is also used to extract a portion of a string and return it as a new string. Like slice, it does not modify the original string.

### Syntax

```javascript
string.substring(startIndex, endIndex);
```

### Examples

```javascript
const str = "Hello, World!";

console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(7)); // Output: "World!"
console.log(str.substring(7, 12)); // Output: "World"
```

### Key Points

1. If startIndex is greater than endIndex, substring will swap the two indices.
2. Negative or NaN indices are treated as 0.

# 3. Can we modify the content of string to uppercase/lowercase?

Yes, you can modify the content of a string to uppercase or lowercase using the following methods:

## `toUpperCase()  toLowerCase()`

Converts the string to uppercase and lowerCase.

### Example

```javascript
const str = "Hello, World!";
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Output: "hello, world!"
```

# 4. How to join two strings?

# JavaScript: Joining Two Strings

You can join two strings in JavaScript using the following methods:

## Using the `+` Operator

Concatenates two strings together.

### Example

```javascript
const str1 = "Hello";
const str2 = "World";
const result = str1 + " " + str2;
console.log(result); // Output: "Hello World"
```

# 5 . Calculate how many words does this string have: 'A quick brown fox jumps over a lazy dog'.

To calculate the number of words in a string, you can split the string into an array of words using the `split()` method and then check the length of the array.

### Example

```javascript
const str = "A quick brown fox jumps over a lazy dog";
const wordCount = str.split(" ").length;
console.log(wordCount); // Output: 9
```
