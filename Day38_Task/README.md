# React Native Learning Summary - useEffect & Fetch API

Today's learning focused on understanding the `useEffect` hook and the `Fetch API` in React Native. These concepts are essential for managing side effects and retrieving data from APIs efficiently.

---

## 1. useEffect Hook

### Purpose
`useEffect` allows performing side effects in functional components, such as fetching data, setting up event listeners, updating the document title, or starting timers.

### Syntax
```js
useEffect(() => {
  // effect logic

  return () => {
    // cleanup logic (runs on unmount)
  };
}, [dependencies]);
```

### Dependency Array

* **Empty array `[]`**: Runs once when the component mounts.
* **Specific dependencies `[value]`**: Runs when that value changes.
* **No array**: Runs after every render.

### Cleanup Function

Used to remove subscriptions, timers, or abort API calls to prevent memory leaks when the component unmounts or dependencies change.

### Example

```js
useEffect(() => {
  const timer = setInterval(() => console.log("Running..."), 1000);
  return () => clearInterval(timer);
}, []);
```

---

## 2. Fetch API

### Purpose

The Fetch API is used to make HTTP requests to retrieve or send data between the client and server.

### Basic Example

```js
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const json = await response.json();
    setData(json);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
```

### Key Concepts

* Always handle **three states**: loading, error, and data.
* Use `try/catch` with `async/await` for cleaner error handling.
* Keep API logic separate in a function and call it inside `useEffect`.

### Example with useEffect

```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 3. Common Patterns and Best Practices

### Avoiding Infinite Loops

Ensure dependencies in `useEffect` are correctly listed. Avoid updating state inside the effect without proper conditions.

### Three-State UI Pattern

```js
if (loading) return <Text>Loading...</Text>;
if (error) return <Text>{error}</Text>;
return <FlatList data={data} />;
```

### Cleanup Use Cases

* Clear intervals or timeouts
* Remove event listeners
* Cancel ongoing fetch requests

---

## 4. Practice Components

### EffectDemo.js

Demonstrates:

* Effects with and without dependencies
* Cleanup using return functions

### FetchDemo.js

Covers:

* Fetching API data with async/await
* Handling loading and error states
* Retry mechanism

### NewsScreen.js (Mini Project)

A simple news fetching screen using `useEffect` and `Fetch API`:

* Displays articles from a public API
* Shows loading and error feedback
* Implements a real-world async data flow