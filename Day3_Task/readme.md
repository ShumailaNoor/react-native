# What I Learned Today – CSS Layout & Responsiveness

## 1. CSS Box Model
- Every element is a box made of:
  - **Content** → text/image area  
  - **Padding** → space inside border  
  - **Border** → line around padding/content  
  - **Margin** → space outside border  
- `box-sizing: border-box;` ensures width/height includes padding & border.

---

## 2. CSS Positioning
- **static** → default, follows normal flow.  
- **relative** → relative to its original position.  
- **absolute** → positioned relative to the nearest ancestor with position.  
- **fixed** → fixed to viewport (stays on scroll).  
- **sticky** → switches between relative and fixed.

---

## 3. Display Properties
- **block** → takes full width, starts new line.  
- **inline** → no new line, only as wide as content.  
- **inline-block** → inline element but allows width/height.  
- **flex** → enables 1D layouts (row or column).  
- **grid** → enables 2D layouts (rows + columns).  

---

## 4. Flexbox Layout
- **Main Axis** → defined by `flex-direction` (row/column).  
- **Cross Axis** → perpendicular to main axis.  
- Common properties:
  - `display: flex;`
  - `justify-content` → controls alignment on main axis.  
  - `align-items` → controls alignment on cross axis.  
  - `gap` → spacing between items.  
  - `flex-wrap` → allows wrapping items.  

---

## 5. Responsive Design
- **Mobile-first approach** → design for small screens first, then expand.  
- **Media Queries** → change styles based on screen size.  

---

## How to Open Each Task

- **Task 1: Simple Flexbox Layout**  
  Navigate to `Task1_Simple_Flexbox_Layout` folder and open `index.html` in your browser.

- **Task 2: Responsive Cards**  
  Navigate to `Task2_Responsive_Card_Layout` folder and open `index.html` in your browser.

- **Task 3: Responsive Portfolio Section**  
  Navigate to `Task3_Responsive_Portfolio_Section` folder and open `index.html` in your browser.
