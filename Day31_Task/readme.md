# React Blog UI – Learning Summary

## Project Overview
This project was a simple **Blog Interface** built using React that allows users to:
- View a list of blog posts.
- Read a post’s detailed content.
- Add a new blog post through a form.
- Delete a blog post locally.

Data was fetched from the **JSONPlaceholder API** (`https://jsonplaceholder.typicode.com/posts`)

---

## Key Concepts Practiced

### 1. **Data Fetching (fetch / axios)**
- Used `fetch()` or `axios` inside `useEffect` to load blog posts.
- Handled **loading** and **error** states properly.
- Example:
  ```js
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message));
  }, []);
````

### 2. **State Management**

* Managed posts using React’s `useState`.
* Updated state dynamically when adding or deleting posts.
* Demonstrated **immutability** by creating new arrays when modifying data.

### 3. **Rendering Lists**

* Displayed blog posts using the `.map()` function.
* Used unique keys for each rendered item.
* Conditional rendering for loading, error, and empty states.

### 4. **Routing & Navigation**

* Used React Router (`Routes`, `Route`, `Link`) to navigate between:

  * **Home Page:** List of posts
  * **Post Detail Page:** Individual post content
  * **Add Post Page:** Form for creating new posts

### 5. **Forms & Controlled Inputs**

* Built a simple form to add a new post (`title`, `body`).
* Used controlled components (`value` + `onChange`) to handle form input.
* Handled submission with `onSubmit` and `preventDefault()`.

### 6. **Delete Functionality**

* Implemented post deletion by filtering out the selected post from local state.
* Updated UI instantly without reloading.

---

## Core Features Implemented

| Feature              | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| **Home Page**        | Displayed a list of all blog posts with title and short excerpt. |
| **Post Detail Page** | Shown full post details when clicked.                            |
| **Add Post Page**    | Form to create a new blog post (title & body).                   |
| **Delete Post**      | Option to remove a post (state update only).                     |

---

## Concepts Reinforced

* React component structure and reusability.
* Handling **async API calls** with proper loading/error feedback.
* **State lifting** and prop passing between parent and child components.
* Controlled forms and two-way data binding.
* **Conditional rendering** based on application state.
