# React Native Lists — Learning Summary

Today, I learned how to display, organize, and manage lists of data efficiently in React Native using `ScrollView`, `FlatList`, and `SectionList`. I also built a **Mini Grocery Catalog App** that combines these list types with tab navigation.

---

## Core Concepts Learned

### 1. **ScrollView**

* Used for small lists and mixed content (images, text, buttons).
* Renders all elements at once — **not ideal for large datasets**.
* Supports horizontal scrolling and custom layouts.

### 2. **FlatList**

* Best for rendering **large, uniform data lists** efficiently.
* Accepts props like `data`, `renderItem`, and `keyExtractor`.
* Supports `numColumns` for grid layouts.
* Allows customization with `ListHeaderComponent`, `ListEmptyComponent`, and `ListFooterComponent`.

### 3. **SectionList**

* Used for **grouped or categorized lists** (e.g., Fruits, Vegetables).
* Each section has a title and array of items.
* Supports sticky headers and custom footers.

---

## Mini Project: Grocery Catalog App

### Features Implemented

* **Home Screen (ScrollView):** Banner, featured items, categories, and CTA button.
* **Products Screen (FlatList):** Grid of grocery items with Add-to-Cart buttons.
* **Categories Screen (SectionList):** Grouped list of items under categories.
* **Tab Navigation:** Custom bottom navigation to switch between screens.

---

## Skills Gained

* Practical understanding of React Native list components.
* Designing clean and performant list-based UIs.
* Managing complex layouts with nested scrolling.
* Implementing simple tab navigation for multiple screens.
