# Today's Learning Summary — React Native TextInput & Button

## Key Concepts

### TextInput Component
- Used to **capture user input** (like forms, search bars, or chat messages).
- Controlled via **state** using `useState`.
- Props:
  - `value` → Current input value.
  - `onChangeText` → Function to update the state.
  - `placeholder` → Hint text when input is empty.
  - `keyboardType` → Type of keyboard (`numeric`, `email-address`, etc.).
  - `secureTextEntry` → Masks text for passwords.
  - `multiline` → Allows multiple lines of input.

**Example:**
```js
const [name, setName] = useState('');
<TextInput
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>
```

---

### Button Component

* Triggers actions when pressed.
* Basic props:

  * `title` → Button text.
  * `onPress` → Function to handle the press event.
  * `color` → Customize button color.
  * `disabled` → Disable button interaction.

**Example:**

```js
<Button
  title="Submit"
  onPress={() => alert('Form Submitted!')}
  color="#2196f3"
/>
```

---

### Input Handling & Validation

* Always validate user input before using it.
* Common checks:

  * Empty input: `if (name.trim() === '') alert('Name required!')`
  * Email format: `isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)`
  * Password length: `if (password.length < 6) alert('Too short!')`

**Example Pattern:**

```js
const handleSubmit = () => {
  if (name.trim() === '') {
    alert('Name is required!');
    return;
  }
  console.log('Name:', name);
};
```

---

### Mini Project — Feedback Form

Learned to build a **multi-input feedback form**:

* Inputs: `Name`, `Email`, `Feedback`
* Validates user input with real-time error messages.
* Displays a success screen with summary after submission.
* Uses:

  * `ScrollView` for layout.
  * `TouchableOpacity` for custom buttons.
  * Dynamic UI updates using multiple state variables.