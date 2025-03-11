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

## 1. length

**Use Case**: Validate password length during user registration.

```javascript

function validatePassword(password) {

if (password.length >= 8) return "Valid";

else return "Password must be at least 8 characters!";

}

console.log(validatePassword("1234")); // Output: Invalid

```

## 2. charAt(index)

**Use Case**: Capitalize the first letter of a username for display.

```javascript

const username = "john";

const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

console.log(formattedName); // Output: "John"

```

## 3. concat

**Use Case**: Dynamically generate API endpoints by combining a base URL with a path.

```javascript

const baseUrl = "https://api.example.com";

const endpoint = "/users";

const fullUrl = baseUrl.concat(endpoint); // "https://api.example.com/users"

```

## 4. `includes`

**Use Case**: Filter unread emails in an inbox by checking for "[UNREAD]" in the subject.

```javascript

const emails = ["[UNREAD] Meeting", "Promotion", "[UNREAD] Newsletter"];

const unread = emails.filter(email => email.includes("[UNREAD]"));

// Output: ["[UNREAD] Meeting", "[UNREAD] Newsletter"]

```

---

## 5. `indexOf(substring)`

**Use Case**: Extract query parameters from a URL.

```javascript

const url = "https://example.com?search=javascript";

const queryIndex = url.indexOf("?");

const query = url.slice(queryIndex + 1); // "search=javascript"

```

---

## 6. `slice(start, end)`

**Use Case**: Display a truncated credit card number for security (e.g., "--****-1234").

```javascript

const cardNumber = "4111111111111234";

const masked = "****-****-****-" + cardNumber.slice(-4);

console.log(masked); // "****-****-****-1234"

```

---

## 7. `substring(start, end)`

**Use Case**: Format phone numbers (e.g., "+1 (555) 123-4567" → "555-123-4567").

```javascript

const phone = "+1 (555) 123-4567";

const cleaned = phone.substring(4, 7) + "-" + phone.substring(9, 12) + "-" + phone.substring(13);

// Output: "555-123-4567"

```

---
## 8. `replace(searchValue, replaceValue)`
**Use Case**: Redact sensitive information like credit card numbers in logs.

```javascript

const log = "User paid with card 4111-1111-1111-1111";
const redacted = log.replace(/\d{4}-\d{4}-\d{4}-\d{4}/, "****-****-****-****");
// Output: "User paid with card ****-****-****-****"
```

---
## 9. `toLowerCase()`
**Use Case**: Case-insensitive username comparison during login..

```javascript

const storedUsername = "JohnDoe";
const inputUsername = "johndoe";
if (storedUsername.toLowerCase() === inputUsername.toLowerCase()) {
  console.log("Login successful!");
}

```

---
## 10. `split(separator)`
**Use Case**: Parse CSV data into an array of objects.

```javascript

const csv = "Name,Age,Location\nAlice,30,Paris\nBob,25,London";
const rows = csv.split("\n");
const headers = rows[0].split(","); // ["Name", "Age", "Location"]
}

```

---
## 11. `startsWith(substring)`
**Use Case**: Route HTTP requests based on URL paths (e.g., in a web server).

```javascript

const url = "/api/users/123";
if (url.startsWith("/api")) {
  handleAPIRequest(url); // Route to API handler
} else {
  serveStaticFile(url); // Serve HTML/CSS
}

```

---
## 12. `match(regexp)`
**Use Case**: Extract hashtags from a social media post.

```javascript

const post = "Loving #JavaScript and #WebDev!";
const hashtags = post.match(/#\w+/g); // ["#JavaScript", "#WebDev"]

```

```javascript
const str = "A quick brown fox jumps over a lazy dog";
const wordCount = str.split(" ").length;
console.log(wordCount); // Output: 9
```
