# Today's Learning – React Basics: JSX & Functional Components

### JSX
- JSX is a **JavaScript syntax extension** that looks like HTML but compiles down to `React.createElement()`.
- It allows writing **UI structure directly in JavaScript**, making code more readable and expressive.
- Key differences from HTML:
  - Use `className` instead of `class`.
  - Use `htmlFor` instead of `for`.
- JSX supports **embedding JavaScript expressions** inside `{ }`, e.g., `{2 + 2}`, `{props.name}`.
- JSX must always return **one root/parent element**. If multiple are needed, wrap them inside a `<div>` or `<>...</>` (React fragments).
- Inline styles are passed as objects, e.g.:
  ```jsx
  <h1 style={{ color: "blue", fontSize: "20px" }}>Hello</h1>
  ```

### Functional Components

* A **component** is a reusable building block of UI.
* **Functional components** are simple JavaScript functions that return JSX.

  * Can be written as a function or an arrow function.
* Props are used to **pass data into components**, making them reusable and dynamic.
* Example:

  ```jsx
  function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```
* React components must always **return JSX**.
* Difference from Class Components:

  * Functional components are simpler and mostly used now.
  * Class components were used for state & lifecycle methods (before hooks).

---

## Key Takeaways

* JSX makes React more expressive but has **special rules** (className, one root element, etc.).
* Functional Components are the **core of modern React development**.
* Props allow **dynamic and reusable UI**.
* Learned to fix JSX errors, embed variables, and style elements.
* Built small practice components and a **Profile Card mini-project** to apply these concepts.
