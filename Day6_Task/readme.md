# Today's Learning  

Today I went deeper into **JavaScript fundamentals**: variables, data types, hoisting, and how to take user input in Node.js.  

---

## What I Learned  

### 1. `let` vs `const` vs `var`  
- **var** → old, function-scoped, hoisted with `undefined`.  
- **let** → modern, block-scoped, can be reassigned but not redeclared.  
- **const** → block-scoped, must be initialized, cannot be reassigned.  

Best practice: use **`const` by default**, and **`let`** only if the value will change.  

---

### 2. JavaScript Primitive Data Types  
Seven types:  
- **String** → `"Hello"`  
- **Number** → `42, 3.14`  
- **Boolean** → `true, false`  
- **Undefined** → declared but not assigned  
- **Null** → intentional empty value  
- **Symbol** → unique identifier  
- **BigInt** → very large numbers  

Fun fact: `typeof null` returns **"object"** → a long-standing bug in JS.  

---

### 3. Objects & Arrays (Non-Primitives)  
- **Object** → key:value storage.  
- **Array** → ordered list.  
Both return `typeof object`.  

---

### 4. Hoisting  
- JS moves declarations to the top.  
- `var` → hoisted with `undefined`.  
- `let` & `const` → hoisted but not initialized → ReferenceError if accessed early.  

---

### 5. Undefined vs Null  
- **undefined** = not assigned (default by JS).  
- **null** = assigned as “nothing” (intentional).  

---

### 6. Input Handling in Node.js  
- Browser → use `prompt()`  
- Node.js → use **`readline` module** to get input from terminal.  