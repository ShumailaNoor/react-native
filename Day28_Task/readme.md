# React Learning - Fetch API & Data Handling

## Concepts Learned

### 1. Fetch API
- Fetch is used to request data from APIs.
- Works with **Promises** (`.then().catch()`) or **async/await**.
- Always check `response.ok` to handle errors properly.

### 2. useEffect for API Calls
- API calls should be made inside `useEffect` to avoid infinite loops.
- Dependency array `[]` ensures fetching happens only once when the component mounts.

### 3. State Management with API
- `useState` used to store:
  - Data (users, posts, etc.)
  - Loading state (`Loading...`)
  - Error state (`Something went wrong`)

### 4. Handling Loading & Error
- Show **loading message/spinner** while fetching.
- Show **error message** if request fails.

### 5. Search & Filter
- Used input + state to filter users by name.
- Demonstrated how to filter an array dynamically.

### 6. Event Handling with API
- Buttons added for **Refresh** and **Show Posts**.
- `onClick` triggers functions to refetch or fetch additional data.

---

## Practice Tasks Completed
1. **Basic Fetch**
   - Logged posts and users from `https://jsonplaceholder.typicode.com`.
   - Used both `.then()` and `async/await`.

2. **Error Handling**
   - Used `try...catch` to gracefully handle API failures.

3. **React Component with Fetch**
   - Displayed user list with names & emails.
   - Added loading and error states.

4. **Extra Features**
   - Search bar to filter users.
   - Refresh button to reload users.
   - Show user posts in an **alert popup**.

---

## Mini Project: User List App
**Features Implemented:**
- Fetch users (`name`, `email`) from JSONPlaceholder API.
- Show data in a styled list.
- Loading and error handling.
- Refresh button to refetch users.
- Search users by name.
- Show posts of a selected user in an **alert popup**.

