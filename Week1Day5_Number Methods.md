## 1. What is NaN in JavaScript?

**NaN** stands for "Not a Number". It represents a value that is not a valid number, often resulting from invalid mathematical operations like `0/0` or `parseInt('string')`. Notably, `NaN` is not equal to itself; use `Number.isNaN()` to check for it.

## 2. Can we access Infinity in JavaScript?

Yes, JavaScript has **`Infinity`** (and `-Infinity`), a global property representing mathematical infinity. It arises from operations like division by zero (`1/0`) or exceeding the maximum number size.

## 3. How can we convert a string into a number?

Convert a string to a number using:

- `Number(str)`
- `parseInt(str)` (for integers) or `parseFloat(str)`
- Unary plus: `+str`
