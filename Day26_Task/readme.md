## Topics Learned - Summary

### 1. `useEffect`

* Hook for running **side effects** (code that happens outside normal UI rendering).
* Runs after the component renders.
* Syntax:

  ```jsx
  useEffect(() => {
    // code here
    return () => {
      // cleanup (optional)
    };
  }, [dependencies]);
  ```
* **Uses:**

  * Fetching data from APIs
  * Updating document title
  * Setting up subscriptions or timers

---

### 2. Lists in React

* Render arrays using `.map()`.
* Each item needs a **unique `key`** prop.
* Example:

  ```jsx
  const fruits = ["Apple", "Banana", "Mango"];
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
  ```

---

### 3. Conditional Rendering

* Show components based on conditions.
* **Methods:**

  * `if/else`
  * **Ternary operator** → `condition ? A : B`
  * **Short-circuit** → `condition && <div>Show</div>`

---

## Handwritten Notes (Covered Separately)

* Definitions of `useEffect`, Lists, Conditional Rendering
* Syntax patterns
* Flow diagrams (useEffect lifecycle, conditional rendering flow)

---

## Practice Tasks

1. Render a list of fruits using `map()`.
2. Show **Login / Logout** button based on state.
3. Use `useEffect` to:

   * Log a message on mount.
   * Update document title with counter.
   * Fetch posts from `https://jsonplaceholder.typicode.com/posts`.

---

## Mini Project – User Dashboard

### Description

A React app that fetches and displays a list of users with conditional rendering.

### Features

* Fetch users from API using `useEffect`.
* Show **loading spinner** while fetching.
* Show **error message** if fetch fails.
* Render user list with `.map()`.
* Add toggle button to **show/hide emails**.

### Output

* Loading... → while fetching data
* Error message → if fetch fails
* User List → name and email displayed
* Toggle button → hides/shows emails

---

**Concepts Covered Today:** `useEffect`, Lists, Conditional Rendering
**Hands-on Practice:** Small snippets + Mini Project
**End Result:** Better understanding of side effects, rendering lists, and showing components conditionally.
