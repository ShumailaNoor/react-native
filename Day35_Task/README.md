# React Native `useState` — Learning Summary

Today’s learning focused on understanding **state management** in React Native using the `useState` hook. State allows components to store and update dynamic data that changes during user interaction, such as input text, button clicks, toggles, and UI updates.

---

## Key Concepts Learned

### 1. What is State?

* State is data that changes over time in a component.
* When state changes, React Native **re-renders** the UI to reflect updates.
* Example: Counter value, text input, toggle switch, or selected mood.

### 2. `useState` Hook

* Declares a state variable inside a functional component.

  ```js
  const [count, setCount] = useState(0);
  ```
* `count` = current value
* `setCount()` = function to update value
* Updating state triggers UI re-render.

### 3. Props vs State

| Props                  | State                    |
| ---------------------- | ------------------------ |
| Passed from parent     | Managed within component |
| Read-only              | Can be updated           |
| Used for communication | Used for interactivity   |

---

## Patterns & Usage

### • Functional Updates

Used when new state depends on previous value.

```js
setCount(prev => prev + 1);
```

### • Object & Array States

Spread operator used to update nested data.

```js
setUser({ ...user, age: 26 });
```

### • Rules of Hooks

1. Call hooks only at the **top level**.
2. Call hooks only in **functional components or custom hooks**.
3. Use the **same order** of hooks each render.

---

## Practical Applications

### Counter App

Learned to create a **counter with increment, decrement, and reset** using multiple `useState` hooks.

### Input Demo

Used `useState` to store and display text entered by the user — also showed live **character and word count**.

### Toggle Switch

Managed ON/OFF states using a boolean value and dynamically changed background color.

### Mood Tracker (Mini Project)

Built an interactive app to:

* Select and highlight a mood (😊 😐 😔 😡)
* Display a motivational message
* Track **timestamp of last update**
* Reset mood selection