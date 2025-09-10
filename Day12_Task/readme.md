# Today's Learning Summary

## Spread Operator (...)
- **Definition:** Expands (spreads) elements of an array or properties of an object.
- **Usage:**
  - Merge arrays: `[...arr1, ...arr2]`
  - Copy objects: `{ ...obj }`
  - Add new properties: `{ ...obj, newKey: "value" }`

---

## Rest Operator (...)
- **Definition:** Collects multiple arguments into a single array.
- **Usage:**
  - Functions:  
    ```js
    function sumAll(...nums) {
      return nums.reduce((a, b) => a + b, 0);
    }
    ```
  - Allows **any number of inputs**.

---

## Ternary Operator ( `condition ? expr1 : expr2` )
- **Definition:** Short-hand if-else statement.
- **Examples:**
  - Even/Odd check → `num % 2 === 0 ? "Even" : "Odd"`
  - Age check → `age >= 18 ? "Adult" : "Minor"`
  - Theme switch → `isDarkMode ? "black" : "white"`

---

## Tagged Template Literals
- **Definition:** A special way to customize how template literals (`` `...` ``) are processed using a function.
- **How it works:**
  - A function receives:
    - `strings` → array of string parts
    - `...values` → interpolated values
  - Example:
    ```js
    function highlight(strings, ...values) {
      return strings.reduce(
        (result, str, i) => result + str + (values[i] ? values[i].toUpperCase() : ""),
        ""
      );
    }

    const name = "ali";
    const city = "karachi";
    console.log(highlight`My name is ${name} and I live in ${city}.`);
    // Output: "My name is ALI and I live in KARACHI."
    ```
- **Use cases:**
  - Formatting strings
  - Escaping HTML
  - Styling console messages
  - i18n (translations)

---

## Practice Tasks Completed
1. **Spread/Rest Practice**
   - Merge Arrays  
   - Copy an Object  
   - Sum Function with Rest Parameters  
   - Filter Function with Rest  

2. **Ternary Operator Practice**
   - Even or Odd Checker  
   - Age Check  
   - Theme Switch  

3. **Tagged Template Literals**
   - Learned how to process and transform template literal strings using custom functions.


