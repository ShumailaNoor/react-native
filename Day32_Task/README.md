# React Native — Day Summary

## What I Learned Today

Today I learned the **basics of React Native** and how it differs from React for the web.

### 1. Understanding React Native
- React Native is a framework for building **mobile applications** using JavaScript and React.
- Unlike React (which renders HTML in a browser), React Native uses **native mobile components** like `<View>`, `<Text>`, and `<Image>`.
- It allows us to build **cross-platform apps** for both Android and iOS with the same codebase.

### 2. Difference from React (Web)
- React web uses HTML, CSS, and the DOM.
- React Native does not use HTML or CSS — it uses **native components** and **JavaScript-based styling**.
- Instead of rendering to the browser, it renders to **native mobile UI** using a bridge.

### 3. Core Components I Learned
| React Native | Web Equivalent | Purpose |
|---------------|----------------|----------|
| `<View>` | `<div>` | Used as a container or layout block |
| `<Text>` | `<p>` / `<span>` | For displaying text |
| `<Image>` | `<img>` | For showing images |
| `<ScrollView>` | `<div>` with scroll | For scrollable content |
| `<TextInput>` | `<input>` | For user input fields |

### 4. Project Setup with Expo
- Installed Expo CLI using `npx create-expo-app MyFirstReactNativeApp`
- Started the app with `npm start` and tested it using **Expo Go** on my phone.
- Learned how Expo simplifies running React Native apps without needing Android Studio or Xcode setup.

### 5. Project Structure
- `App.js` → main entry point for the app.
- `assets/` → contains images and fonts.
- `package.json` → manages dependencies.
- `app.json` → configuration for Expo app metadata.

### 6. Hands-on Practice
- Edited `App.js` to display:
  ```jsx
  <Text>Hello, React Native!</Text>
  ```

* Styled the screen using **Flexbox** to center elements.
* Learned that React Native layouts depend heavily on **Flexbox** instead of CSS grids or floats.

### 7. Key Takeaways

* React Native = React for mobile, but with **native UI components**.
* Styling is done via **StyleSheet objects**, not CSS files.
* **Flexbox** is the main layout system for React Native.
* **Expo** makes starting and testing projects easy and fast.
* The same React concepts (components, props, state) still apply — only the rendering target changes.

---

**Overall Summary**

> Today I built my first React Native app using Expo.
> I learned how React Native bridges JavaScript with native mobile UI,
> explored its basic components, and created a simple “Hello, React Native!” screen
> styled using Flexbox. I now understand the key differences between React for web and React Native for mobile development.