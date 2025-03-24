# 1. Explain how many ways we can initialize `Date` constructor?

In JavaScript, there are 4 primary ways to create a Date object in JavaScript:

1. **No Arguments (Current Date/Time):**

```javascript
const now = new Date(); // Uses system time
```

2. **Timestamp (Milliseconds since Unix Epoch):**
   Accepts the number of milliseconds since January 1, 1970 (UTC).

```javascript
const date = new Date(1696521600000); // Represents 2023-10-05T00:00:00Z
```

3. **Date String:**
   Parses a date string in a recognized format. Accepts ISO 8601 ('YYYY-MM-DDTHH:mm:ss.sssZ') or RFC 2822 formats.

```javascript
const date = new Date("2023-10-05T14:30:00Z"); // ISO format (UTC)
const date2 = new Date("October 5, 2023 14:30:00"); // RFC 2822-like
```

Browser-dependent parsing; avoid ambiguous formats like '10-05-2023'

4. **Individual Components (Local Time):**

```javascript
// Syntax: new Date(year, month, day?, hours?, minutes?, seconds?, milliseconds?)
const date = new Date(2023, 9, 5, 14, 30, 45, 500); // October 5, 2023, 14:30:45.500
```

1. Takes individual values for the date and time.
2. Note: Months are zero-based (0 = January, 11 = December).
3. Required: year, month (0-indexed: 0=January, 11=December).
4. Optional: Day (default=1), hours (default=0), etc.

---

# 2. How do we set initial seconds, minutes, hours, days, months, and years?

JavaScript provides set methods to modify different parts of a Date object:

1. **Set Seconds**

```javascript
let date = new Date();
date.setSeconds(45);
console.log(date);
```

2. **Set Minutes**

```javascript
date.setMinutes(15);
console.log(date);
```

3. **Set Hours**

```javascript
date.setHours(8);
console.log(date);
```

4. **Set Day of the Month**

```javascript
date.setDate(20);
console.log(date);
```

5. **Set Month**

Remember, months are zero-based (0 = January, 11 = December).

```javascript
date.setMonth(5); // Sets June
console.log(date);
```

6. **Set Year**

```javascript
date.setFullYear(2025);
console.log(date);
```

7. **Set All Components Together**

```javascript
date.setFullYear(2025, 11, 25); // December 25, 2025
date.setHours(14, 30, 15); // 14:30:15 (2:30:15 PM)
console.log(date);
```

---

# 3. Explain all methods that date constructor offers. Which index represent the month 'January' in getMonth() method?

## JavaScript Date Constructor Methods

The JavaScript `Date` constructor provides various methods to work with dates and times. These methods can be categorized into **static methods** and **instance methods**.

---

## Static Methods

These are called directly on the `Date` object.

| Method                             | Description                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| `Date.now()`                       | Returns the current timestamp (milliseconds since Unix epoch).                 |
| `Date.parse(dateString)`           | Parses a date string and returns the timestamp (invalid formats return `NaN`). |
| `Date.UTC(year, month, day?, ...)` | Returns the timestamp for UTC date/time components (month is **0-indexed**).   |

---

## Instance Methods

Called on a `Date` object instance.

### Getters

| Method                | Description                                       |
| --------------------- | ------------------------------------------------- |
| `getFullYear()`       | 4-digit year (e.g., 2024).                        |
| `getMonth()`          | **0-indexed** month (0 = January, 11 = December). |
| `getDate()`           | Day of the month (1–31).                          |
| `getDay()`            | Day of the week (0 = Sunday, 6 = Saturday).       |
| `getHours()`          | Hours (0–23).                                     |
| `getMinutes()`        | Minutes (0–59).                                   |
| `getSeconds()`        | Seconds (0–59).                                   |
| `getMilliseconds()`   | Milliseconds (0–999).                             |
| `getTime()`           | Timestamp (milliseconds since Unix epoch).        |
| `getTimezoneOffset()` | Timezone offset in minutes (UTC vs local time).   |

### UTC Getters

Replace `get` with `getUTC` (e.g., `getUTCMonth()`) to get UTC-based values.

---

### Setters

| Method                                             | Description                 |
| -------------------------------------------------- | --------------------------- |
| `setFullYear(year)`                                | Set the year (4-digit).     |
| `setMonth(month)`                                  | **0-indexed** month (0–11). |
| `setDate(day)`                                     | Day of the month (1–31).    |
| `setHours(hours)`                                  | Hours (0–23).               |
| ... (similar for `setMinutes`, `setSeconds`, etc.) |                             |

### UTC Setters

Replace `set` with `setUTC` (e.g., `setUTCHours()`) to set UTC-based values.

---

### Conversion Methods

| Method                 | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `toString()`           | Full date string in local time.                        |
| `toDateString()`       | Date portion in readable format (local time).          |
| `toTimeString()`       | Time portion in readable format (local time).          |
| `toISOString()`        | ISO 8601 string in UTC (e.g., `2024-01-01T00:00:00Z`). |
| `toUTCString()`        | Date string in UTC timezone.                           |
| `toLocaleDateString()` | Localized date string (e.g., `1/1/2024`).              |
| `toLocaleTimeString()` | Localized time string (e.g., `12:00:00 AM`).           |
| `toJSON()`             | ISO string (used by `JSON.stringify()`).               |

---

# 4. Which index represent the month 'January' in getMonth() method?

In the `getMonth()` method, **January is represented by the index `0`**.  
Example:

```javascript
const date = new Date("2024-01-01");
console.log(date.getMonth()); // 0
```

---

# 5. How does internationalization help us with date formatting?

**Internationalization (Intl)** in JavaScript helps format dates according to different **locales, calendars, and numbering systems.** This ensures that dates are displayed in a way that matches regional preferences.

**Benefits of using Intl.DateTimeFormat:**

1. Automatic Locale Formatting: Displays dates in a format that matches the user's region.
2. Supports Different Calendars: Can format dates according to Islamic, Buddhist, or other calendars.
3. Handles Time Zones: Adjusts dates/times based on the specified time zone.
4. Localized Numbers and Month Names: Uses region-specific numerals and month/day names.

```javascript
let date = new Date();
console.log(new Intl.DateTimeFormat("en-US").format(date)); // MM/DD/YYYY (US format)
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // DD/MM/YYYY (UK format)
console.log(
  new Intl.DateTimeFormat("ja-JP", { dateStyle: "full" }).format(date)
); // Japanese full date format
```

---

# 6. Write down a method to render date in Urdu using Intl.

To display a date in Urdu (Pakistan), we use the locale ur-PK with Intl.DateTimeFormat.

```javascript
function formatDateInUrdu(date) {
  return new Intl.DateTimeFormat("ur-PK", { dateStyle: "full" }).format(date);
}

// Example Usage:
let today = new Date();
console.log(formatDateInUrdu(today)); // Output: جمعہ، 14 مارچ، 2025
```

---

# 7. Create a currency converter that formats the amount as per currency.

We can create a currency converter that formats amounts based on a given currency and locale.

```javascript
function formatCurrency(amount, currency, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

// Example Usage:
console.log(formatCurrency(1000, "USD", "en-US")); // $1,000.00 (US)
console.log(formatCurrency(1000, "PKR", "ur-PK")); // ₨1,000.00 (Pakistan)
console.log(formatCurrency(1000, "EUR", "de-DE")); // 1.000,00 € (Germany)
console.log(formatCurrency(1000, "JPY", "ja-JP")); // ¥1,000 (Japan)
```
