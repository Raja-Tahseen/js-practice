# Question 3a. Store and retrieve an array in local storage?

Since local storage only supports strings, you need to convert arrays to strings when storing and parse them back when retrieving:

## Storing an Array

```javascipt
const fruits = ['apple', 'banana', 'orange'];
localStorage.setItem('fruits', JSON.stringify(fruits));
```

## Retrieving an Array

```javascipt
const storedFruits = JSON.parse(localStorage.getItem('fruits'));
console.log(storedFruits); // ['apple', 'banana', 'orange']
```

##

##

##

# Question 3b. What problems do we face in both scenario?

# Potential Problems

## When Storing Arrays

### 1. Non-serializable Data Loss

**Problem:** Some data types can't be properly serialized with JSON.stringify()

```javascript
const data = [new Date(), function () {}, undefined];
localStorage.setItem("problemData", JSON.stringify(data));
// Stored as: "[null,null,null]"
```

### 2. Circular References

**Problem:** Objects with circular references cause errors

```javascript
const obj = {};
obj.self = obj;
JSON.stringify([obj]); // Throws "TypeError: Converting circular structure to JSON"
```

### 2. Large Arrays Performance

**Problem:** Stringifying large arrays can block the main thread

```javascript
const bigArray = new Array(1000000).fill("data");
localStorage.setItem("bigData", JSON.stringify(bigArray)); // May cause lag
```

## When Retrieving Arrays

### 1. Null/Undefined Returns

**Problem:** getItem() returns null for non-existent keys

```javascript
const missingData = JSON.parse(localStorage.getItem("nonExistentKey"));
// throws error when parsing null
```

### 2. Malformed JSON Data

**Problem:** Corrupted storage data causes parse errors

```javascript
localStorage.setItem("corrupt", "not valid JSON");
JSON.parse(localStorage.getItem("corrupt")); // Throws SyntaxError
```

### 3. Type Conversion Issues

**Problem:** JSON.parse revives everything as plain objects

```javascript
const specialArray = [new Date()];
localStorage.setItem("dates", JSON.stringify(specialArray));
const retrieved = JSON.parse(localStorage.getItem("dates"));
console.log(retrieved[0] instanceof Date); // false - it's just a string
```

## Best Practices

### 1. Safe Retrieval with Error Handling

```javascript
function safeGetArray(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Failed to parse stored array", e);
    return null;
  }
}
```

### 2. Handle Special Data Types

```javascript
// Custom reviver for Dates
const dateReviver = (key, value) => {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
};
const withDates = JSON.parse(localStorage.getItem("withDates"), dateReviver);
```

### 3. Consider Size Limits

```javascript
function isWithinSizeLimit(data) {
  return JSON.stringify(data).length < 5 * 1024 * 1024; // 5MB
}
```

### 4. Alternative for Complex Data

Consider IndexedDB for:

1. Very large datasets

2. Non-serializable data types

3. Binary data

4. More sophisticated querying needs
