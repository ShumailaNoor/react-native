# Summary of Today's Learning

This is a summary of what I learned today about **JSON** and **APIs**, along with hands-on coding practice.

---

## Phase 1: Concept Learning

### JSON (JavaScript Object Notation)

JSON is a text-based format for storing and exchanging data. It is lightweight, easy to read, and widely used for communication between web applications and servers.

Key points:
- JSON stands for JavaScript Object Notation
- It looks similar to JavaScript objects but is always a string
- Keys must be in double quotes
- Values can be strings, numbers, booleans, arrays, objects, or null
- It cannot contain comments, functions, or `undefined`

Example of valid JSON:
```json
{
  "name": "Alice",
  "age": 22,
  "hobbies": ["reading", "coding"],
  "active": true
}
```

### JSON vs JavaScript Objects

| JavaScript Object         | JSON String                     |
| ------------------------- | ------------------------------- |
| `{name: "John", age: 25}` | `'{"name": "John", "age": 25}'` |
| Keys can be unquoted      | Keys must be quoted             |
| Can contain functions     | Functions not allowed           |
| Can contain undefined     | Undefined not allowed           |
| Lives in memory           | Stored as text                  |

### Converting Between JSON and JS

```javascript
// Object to JSON string
let obj = { name: "Alice", age: 20 };
let jsonStr = JSON.stringify(obj);

// JSON string to Object
let parsed = JSON.parse('{"name":"Bob","age":22}');
```

---

## APIs (Application Programming Interfaces)

An API is a way for different software components to communicate. A useful analogy is a restaurant: the client places an order (request), the kitchen prepares the food (server), and the waiter (API) delivers it back (response).

### REST APIs

Most APIs are REST-based, using HTTP methods:

* GET – retrieve data
* POST – create new data
* PUT – update existing data
* DELETE – remove data

### Common HTTP Status Codes

* 200 OK – request succeeded
* 201 Created – resource created
* 400 Bad Request – invalid input
* 404 Not Found – resource does not exist
* 500 Internal Server Error – problem on the server
