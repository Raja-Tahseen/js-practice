# Question 1. What is Local storage and also describe it's methods?

Local Storage is a web storage API that allows websites to store data persistently in a user's browser. Unlike session storage (which clears when the browser tab closes), local storage data has no expiration time and remains available until explicitly deleted.

## Key Characteristics

1. Stores data as key-value pairs (strings only)

2. Storage limit is typically about 5MB per domain

3. Data persists after browser restart

4. Only accessible by pages from the same origin (domain, protocol, and port)

## Local Storage Methods

### 1. setItem(key, value)

Stores a key-value pair in local storage.

```javascript
localStorage.setItem("username", "john_doe");
localStorage.setItem("theme", "dark");
```

### 2. getItem(key)

Retrieves the value associated with a key.

```javascript
const username = localStorage.getItem("username");
console.log(username); // Outputs: 'john_doe'
```

### 3. removeItem(key)

Removes a specific item from local storage.

```javascript
localStorage.removeItem("theme");
```

### 4. clear()

Removes all items from local storage for the domain.

```javascript
localStorage.clear();
```

### 5. key(index)

Returns the key at a specific index (order not guaranteed).

```javascript
const firstKey = localStorage.key(0);
console.log(firstKey); // Outputs the first key name
```

### 6. length

Property that returns the number of items stored.

```javascript
const itemCount = localStorage.length;
console.log(`Number of items: ${itemCount}`);
```

## Important Notes

## 1. Data is stored as strings:

If you need to store objects or arrays, you must convert them to strings first:

```javascript
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));
// Retrieve and parse
const storedUser = JSON.parse(localStorage.getItem("user"));
```

## 2. Synchronous operations:

All local storage operations are synchronous, which means they can block the main thread if you store large amounts of data.

## 3. Security:

Never store sensitive information in local storage as it's accessible via JavaScript and vulnerable to XSS attacks.

## 4. Storage events:

You can listen for changes across browser tabs/windows:

```javascript
window.addEventListener("storage", (event) => {
  console.log(`Key changed: ${event.key}`);
  console.log(`New value: ${event.newValue}`);
  console.log(`Old value: ${event.oldValue}`);
});
```

Local Storage is great for persisting non-sensitive user preferences, caching data, or maintaining application state across sessions.

##

##

##

# Question 2. What is the difference between local storage and session storage?

Both Local Storage and Session Storage are web storage APIs in JavaScript that allow you to store key-value pairs in the browser, but they have important differences:

## Key Differences

# React vs Angular Comparison

| Feature           | Local Storage                                 | Session Storage                                 |
| ----------------- | --------------------------------------------- | ----------------------------------------------- |
| **Lifetime**      | Persistent - stays until manually cleared     | Temporary - cleared when tab/browser closes     |
| **Scope**         | Shared across all tabs/windows of same origin | Limited to the browser tab where it was created |
| **Storage Limit** | ~5MB per domain                               | ~5MB per domain                                 |
| **Accessibility** | Accessible from any tab/window of same origin | Only accessible from the tab that created it    |
| **Expiration**    | Never expires (unless cleared)                | Expires when session ends (tab closes)          |

## Practical Examples

### 1. Persistence Example

```javascript
// Local Storage - persists after closing browser
localStorage.setItem("userPref", "dark-mode");

// Session Storage - disappears when tab closes
sessionStorage.setItem("currentTab", "settings");
```

### 2. Tab-Specific Behavior

```javascript
// In Tab 1:
sessionStorage.setItem("tabID", "1");

// In Tab 2 (same website):
sessionStorage.setItem("tabID", "2");
// Each tab has its own separate value
```

### 3. Shared vs Isolated Data

```javascript
// Local Storage (shared across tabs)
localStorage.setItem("language", "en");
// All tabs can access this value

// Session Storage (tab-specific)
sessionStorage.setItem("tempData", "123");
// Only this tab can access this value
```

## When to Use Each

### Use Local Storage for:

1. User preferences (theme, language settings)

2. Persistent application state

3. Data that should survive browser restarts

### Use Session Storage for:

1. Sensitive data that shouldn't persist

2. Tab-specific temporary data

3. Form data you want to preserve during page refreshes (but not after closing)

4. Single-session caching

## Shared Characteristics

Both storage types:

1. Store only strings **(use JSON.stringify()/JSON.parse() for objects)**

2. Have the same API methods (setItem(), getItem(), etc.)

3. Are subject to same-origin policy

4. Are synchronous (can block main thread with large data)

## Security Note

Neither storage type is secure for sensitive data - both are accessible via JavaScript and vulnerable to XSS attacks. For sensitive data, use HTTP-only cookies with secure flags instead.
