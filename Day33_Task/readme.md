# React Native Core Components — Learning Summary

Today, I learned the **core building blocks** of React Native applications — the fundamental components that form every mobile app UI. These components act like the “HTML tags” of React Native but render to **native mobile UI elements** on Android and iOS.

---

## Key Concepts Learned

### 1. Core Components
| React Native Component | Purpose | Web Equivalent |
|------------------------|----------|----------------|
| `<View>` | Container for layout and grouping elements | `<div>` |
| `<Text>` | Displays text content | `<p>`, `<span>` |
| `<Button>` | Interactive button for user actions | `<button>` |
| `<Image>` | Displays images | `<img>` |
| `<TextInput>` | Input field for user text | `<input>` |
| `<ScrollView>` | Scrollable container | `<div>` (with scroll) |
| `<FlatList>` | Efficiently renders long lists | `<ul>` |

---

### 2. Props and Styling
- **Props** are used to pass data or configure components (like attributes).
- Each core component has its own common props — e.g.,  
  `title`, `onPress` for `<Button>` or `style`, `numberOfLines` for `<Text>`.
- Styling can be done in two ways:
  1. **Inline Styles** — quick and simple for testing.
  2. **StyleSheet.create()** — organized and optimized for better performance.

**Best Practice:** Use `StyleSheet` for clean and reusable styles.

---

### 3. Layout and Flexbox
- React Native layouts rely heavily on **Flexbox**, not CSS Grid.
- Common properties: `justifyContent`, `alignItems`, `flexDirection`.
- Flexbox helps center, align, and space components responsively.

---

### 4. Hands-on Practice Summary
**Practice 1: Hello React Native**
- Created a centered text “Hello React Native” with a clickable button.

**Practice 2: Colorful Boxes**
- Designed three colored boxes (`Red`, `Green`, `Blue`) stacked vertically with styled text.

**Practice 3: Button Actions**
- Built interactive buttons that show different alerts using `Alert.alert()` and `onPress` handlers.

**Mini Project: Simple Profile Card**
- Combined all learned concepts to build a small profile card with:
  - Name, Role, and Bio
  - Follower stats and action buttons
  - Reusable and organized styling via `StyleSheet`

---

## Skills Gained
- Understanding of **core components** and their native behavior.
- Ability to **create, style, and organize UI** using React Native’s StyleSheet.
- Using **props** to customize components.
- Handling **button events** and alerts.
- Building **layouts with Flexbox** for alignment and positioning.