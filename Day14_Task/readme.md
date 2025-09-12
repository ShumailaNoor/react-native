# JavaScript Learning Summary – Scope, Hoisting, and Closures

## Topics Covered

### 1. Scope
- **Definition:** Scope determines the accessibility of variables in different parts of the code.
- **Types of Scope:**
  - **Global Scope:** Variables declared outside functions or blocks are accessible everywhere.
  - **Function Scope:** Variables declared inside a function are only accessible within that function.
  - **Block Scope:** Variables declared with `let` and `const` inside `{}` are restricted to that block.
- **Lexical Scope:** Inner functions can access variables from their outer function.
- **Scope Chaining:** JavaScript looks outward through nested scopes until it finds the variable.

### 2. Hoisting
- **Definition:** JavaScript moves variable and function declarations to the top of their scope before execution.
- **`var`:** Hoisted but initialized as `undefined`.
- **`let` and `const`:** Hoisted but not initialized (Temporal Dead Zone).
- **Functions:**
  - Function declarations are hoisted completely.
  - Function expressions are not hoisted the same way, leading to runtime errors if called early.

### 3. Closures
- **Definition:** A closure is formed when a function "remembers" the variables from its lexical scope even after the outer function has finished executing.
- **Uses:**
  - Data privacy
  - Maintaining state across function calls
  - Common in event listeners and `setTimeout`
- **Potential Issues:** Misused closures can cause memory leaks if references aren’t released.

## Practice Highlights
- Predicted outputs for scope and hoisting examples.
- Understood why block-scoped `let` and `const` differ from `var`.
- Built a counter function using closures.
- Created a private variable pattern using closures.
