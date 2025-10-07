# React State Management – Lifting State Up & useContext

## Lifting State Up

### Concept
- “Lifting state up” means **moving shared state to a common parent** so multiple components can access and update it.
- Instead of each child managing its own copy of data, the parent holds the state and passes it down as **props**.

### Why It’s Needed
- When two or more components need to share or sync data.
- Prevents duplication and keeps the app data consistent.

### How It Works
1. Move state to the **nearest common parent**.
2. Pass state down to children via props.
3. Pass **callbacks** to update that state from children.

### Example Use Cases
- Two inputs sharing a single value (like Celsius ↔ Fahrenheit).
- Multiple buttons updating the same counter.
- Form and preview components showing the same text.

---

## useContext Hook

### Concept
- `useContext` provides a way to **share data globally** without passing props manually through multiple levels (avoids prop drilling).
- Works using:
  1. `createContext()` → Create the context.
  2. `Context.Provider` → Wrap components to give access.
  3. `useContext()` → Read or update the shared data anywhere inside.

### Why We Use It
- To share data like user info, app theme, or language across many components.
- Keeps code cleaner and more maintainable.

---

## Lifting State vs Context

| Feature | Lifting State Up | useContext |
|----------|------------------|-------------|
| Scope | For few related components | For many components across the app |
| Data Flow | Parent → Child via props | Provider → Child via context |
| Use Case | Shared counter, form inputs | Theme, user data, language |
| Communication | Props & callback functions | Context + useContext hook |

---

## Practice Work Completed

1. **Shared Counter (Lifting State):**  
   Two sibling components updating the same counter value by moving state to the parent.

2. **User Context:**  
   Created a `UserContext` to display username in multiple components using `useContext`.

3. **Theme Switcher (Context):**  
   Button toggles between dark and light mode — all components update instantly.

4. **Form Greeting (Lifting State):**  
   Two input fields (First Name, Last Name) share state in the parent and update a greeting component.

5. **Language Context (Advanced):**  
   Created `LanguageContext` to toggle text display between **English** and **Urdu** globally.