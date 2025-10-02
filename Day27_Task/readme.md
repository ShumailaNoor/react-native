# React Router – Learning Summary

## What I Learned Today

### 1. Why React Router?
- React by itself doesn’t handle navigation between pages.
- React Router allows building **Single Page Applications (SPA)** where navigation happens without full page reloads.
- It makes apps feel faster and more dynamic.

---

### 2. Core Building Blocks
- **BrowserRouter** → Wraps the app and enables routing.
- **Routes & Route** → Define which component should load for which URL.
- **Link vs NavLink**
  - `Link` → Used for navigation without reloading the page.
  - `NavLink` → Same as Link but adds automatic **active styling** for the current page.

---

### 3. Hooks for Navigation
- **useNavigate** → Lets us move the user to another page with code (like redirect on button click).
- **useLocation** → Gives information about the current URL (pathname, search params, state).
- **useParams** → Access **dynamic URL parameters** (e.g., `/user/:id` → get `id`).
- **useSearchParams** → Handle query parameters (`?category=fruit`).

---

### 4. Advanced Concepts
- **Nested Routes**
  - Routes inside routes.
  - Useful for dashboards or layouts (e.g., Dashboard → Profile, Settings).
- **Protected Routes**
  - Restrict access based on a condition (like login status).
  - Common in apps with authentication.

---

### 5. Practice Highlights
- Built a small app with **Home** and **About** pages.
- Added dynamic routes like `/user/:id` and displayed the parameter on screen.
- Created a button that redirects using **useNavigate**.
- Implemented **nested routes** inside a Dashboard.
- Practiced filtering a list using **useSearchParams**.

---

### 6. Mini Project: Simple Blog App
- **Home Page** → Display list of blog posts.
- **About Page** → About info.
- **Blog Page** → Show details using `useParams`.
- **Not Found Page** → For invalid routes.
- **Navigation Bar** → Built with NavLink (highlight active links).
- Added a **Go Back** button with `useNavigate`.
- Extra: Built a **Dashboard** with nested routes (Profile, Settings) and a simple **Protected Route**.

---

## Key Takeaways
- React Router is essential for navigation in modern React apps.
- It avoids full page reloads and makes navigation smoother.
- Dynamic routes and query parameters make apps flexible.
- Nested routes help organize complex apps.
- Protected routes are the foundation for authentication-based navigation.
