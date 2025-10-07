
# React Forms – Summary

## Core Concepts
- **React Forms vs HTML Forms:**  
  React controls inputs via state (no page reload).  
  Use `onSubmit` + `e.preventDefault()` for handling form submission.

- **Controlled Components:**  
  Inputs use `value` and `onChange` to stay synced with state.  
  React becomes the single source of truth.  

- **One-Way Data Flow:**  
  User input → `onChange` → `setState` → input `value` → re-render.

---

## Handling Multiple Inputs
- Use individual states or a single `formData` object:
  ```js
  const [formData, setFormData] = useState({ name: '', email: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  ```

---

## Form Validation

* Check input values and show error messages conditionally.
* Disable submit until all fields are valid.
* Example:

  ```js
  if (!email.includes('@')) setError('Invalid email');
  ```

---

## Input Types

* **Text, Email, Number** → use `value` and `onChange`.
* **Checkbox/Radio** → use `checked` and `onChange`.
* **Select Dropdown** → controlled with `value`.
* **File Input** → read via `e.target.files[0]`.

---

## Practice Work

* **Live Input:** Display typed text below.
* **Login Form:** Username & password handling with `preventDefault()`.
* **Signup Form:** Name, email, age with inline validation.
* **Advanced Form:** Includes dropdown, checkbox, and file input.

---

## Key Takeaways

* Always use **controlled components** for predictable state.
* Use **useState** for managing form data.
* Implement validation and conditional UI.
* preventDefault()` avoids reload on submit.
