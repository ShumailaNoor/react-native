# React Native Learning Summary

## What I Learned Today

### 1. Safe Area and Project Structure

* Learned that `SafeAreaView` from **React Native** is now **deprecated**.
* Installed and started using **`react-native-safe-area-context`** instead.
* Discovered that it’s best practice to wrap the app in a `SafeAreaProvider` and use its `SafeAreaView` for consistent layout across devices with notches or curved edges.
* Updated `App.js` to use this structure:

  ```js
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  ```

---

### 2. Styling in React Native

* Practiced defining styles using `StyleSheet.create()` instead of inline styles.
* Understood why `StyleSheet.create()` is better:

  * It improves performance (styles are created once).
  * It validates properties and helps catch mistakes.
  * It keeps JSX cleaner and easier to maintain.
* Learned that React Native uses **unitless numbers** (not `px` or `em`).

Example:

```js
const styles = StyleSheet.create({
container: {
	backgroundColor: 'blue',
	padding: 20,
},
text: {
	fontSize: 18,
	color: 'white',
},
});
```

---

### 3. Flexbox Layout System

* Learned how **Flexbox** controls layout in React Native.
* Understood that the **default `flexDirection` is `column`**, not `row` like in web CSS.
* Practiced using the following properties:

  * `flexDirection` – sets layout direction (`row`, `column`)
  * `justifyContent` – aligns content along the main axis
  * `alignItems` – aligns content along the cross axis
  * `flex` – makes elements grow or shrink to fill space
  * `flexWrap` – allows items to wrap into multiple lines
* Built and tested layouts like:

  * Centered elements vertically and horizontally
  * Horizontal rows with equal spacing
  * Two-column responsive grid

---

### 4. Responsive and Reusable Design

* Learned how to make layouts responsive by using flexible widths like `'48%'` and `flex: 1`.
* Used `ScrollView` to make the grid scrollable when content overflows.
* Practiced adding consistent spacing, margins, padding, and shadows for both iOS and Android.

---

### 5. Component-Based Practice

* Created reusable components:

  * `ProfileCard` for displaying user image, name, and bio.
  * `UserGrid` to render multiple cards in a two-column layout.
* Learned how to pass props between components (`name`, `bio`, `imageUrl`).
* Structured the app so each part handles its own styling and logic cleanly.
