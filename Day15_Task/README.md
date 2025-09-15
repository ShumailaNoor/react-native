# Summary of Today’s Learning

## Topics Covered
- Callbacks
- Promises

---

## Callbacks

### What is a Callback?
A **callback** is a function passed into another function as an argument, which the receiving function can call later to complete a routine or action.

### Types
- **Synchronous callback** – executes immediately (example: `array.forEach`).
- **Asynchronous callback** – executes later, after an operation completes (examples: `setTimeout`, event handlers).

### Callback Hell
When many callbacks are nested, the code becomes deeply indented and hard to read/maintain. This is called *callback hell* or the *pyramid of doom*.

---

## Promises

### What is a Promise?
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### States of a Promise
- **Pending** — initial state  
- **Fulfilled** — operation completed successfully  
- **Rejected** — operation failed  

### Methods & Chaining
- `.then()` — handle fulfilled value  
- `.catch()` — handle rejection (errors)  
- `.finally()` — always runs (cleanup)  

Promises can be chained so the output of one `.then()` is passed to the next, which avoids callback hell.

---

## Key Takeaways
- Callbacks are useful but can cause **callback hell** when nested too much.  
- Promises provide a **cleaner, chainable** way to handle asynchronous code.  
- Use `.then()`, `.catch()`, and `.finally()` for better control and error handling.  
- Modern JavaScript often prefers Promises (or `async/await`) over deeply nested callbacks.
