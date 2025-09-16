# Summary of Today’s Learning

## Topics Covered
- Asynchronous Programming in JavaScript
- Callbacks vs Promises
- `async/await`
- Error Handling
- Fetch API (GET, POST, JSON handling)
- Sequential & Parallel Async Operations
- Practice Questions with Code

---

## Key Concepts

### 1. Asynchronous Programming
- Allows JavaScript to perform **non-blocking operations**
- Runs time-consuming tasks in the background
- Benefits:
  - Better performance
  - UI remains responsive
  - Handles multiple tasks efficiently

---

### 2. Callbacks
- Functions passed as arguments to be executed later.
- **Issues**:
  - Callback Hell (nested callbacks → unreadable code)
  - Hard error handling
  - Inversion of control

---

### 3. Promises

* Represents eventual completion/failure of an async task.
* **States**:

  * Pending
  * Fulfilled
  * Rejected
* **Advantages**:

  * Chainable with `.then()`
  * Errors handled with `.catch()`
  * Avoids callback hell

---

### 4. async/await

* Syntactic sugar over Promises.
* Makes async code look synchronous.
* Easier to read and maintain.
* Error handling via `try/catch`.

---

### 5. Error Handling

* With Promises → `.catch()`
* With async/await → `try/catch`

---

### 6. Sequential vs Parallel Execution

#### Sequential

```javascript
async function sequentialOps() {
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    return { user, posts };
}
```

#### Parallel

```javascript
async function parallelOps() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
    return { users, posts };
}
```

---

### 7. Fetch API

* Modern way to make HTTP requests
* Promise-based
* Built-in JSON support
* Better error handling

#### GET Request

```javascript
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

#### POST Request

```javascript
const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', email: 'john@example.com' })
});
```

---

## Theory Questions (Quick Recap)

1. async/await solves callback hell & improves readability.
2. Difference: Promises use `.then()/.catch()`, async/await uses try/catch.
3. Async functions always return a Promise.
4. fetch() returns a Promise resolved with a Response object.
5. Default fetch method = **GET**.
6. Errors: check `response.ok` + use try/catch.

---

## Coding Practice (Key Exercises)

* Fetch users with `.then()` and with `async/await`
* Handle broken URLs with try/catch
* Sequential fetch (posts → comments)
* POST request with JSON body
* Create `delay(ms)` function and use `await`
* Fetch multiple resources with `Promise.all()`