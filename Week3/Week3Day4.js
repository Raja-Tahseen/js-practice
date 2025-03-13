///////////////////////////////////////////////////////////////
/////////////// Day 4 - Date and Internationalization //////////////////

// JS44 - [Date initialization and formatting]

//1. Explain how many ways we can initialize `Date` constructor

//2. How do we set initial seconds, minutes, hours, days, months, and years.

//  JS45 - [Date methods]

//3. Explain all methods that date constructor offers.

//4. Which index represent the month 'January' in getMonth() method?

//  JS46 - [Intl.]

//5. How does internationalization help us with date formatting?
let date = new Date();
console.log(new Intl.DateTimeFormat("en-US").format(date)); // MM/DD/YYYY (US format)
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // DD/MM/YYYY (UK format)
console.log(
  new Intl.DateTimeFormat("ja-JP", { dateStyle: "full" }).format(date)
); // Japanese full date format

//6. Write down a method to render date in Urdu using Intl.
function formatDateInUrdu(date) {
  return new Intl.DateTimeFormat("ur-PK", { dateStyle: "full" }).format(date);
}

// Example Usage:
let today = new Date();
console.log(formatDateInUrdu(today)); // Output: جمعہ، 14 مارچ، 2025

//7. Create a currency converter that formats the amount as per currency.
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
