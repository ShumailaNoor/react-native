# React Native with Firebase Firestore – Summary

### 1. **Firebase Firestore Overview**

* Firestore is a cloud-based NoSQL database used to store, sync, and query app data in real time.
* Supports **collections (groups of documents)** and **documents (key-value pairs)**.

### 2. **CRUD Operations**

#### a. **Create**

```js
await addDoc(collection(db, "users"), { name: "John", age: 25 });
```

* Adds a new document to a collection with auto-generated ID.

#### b. **Read**

```js
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
```

* Fetches all documents from a collection.

#### c. **Update**

```js
await updateDoc(doc(db, "users", id), { age: 26 });
```

* Updates specific fields in an existing document.

#### d. **Delete**

```js
await deleteDoc(doc(db, "users", id));
```

* Removes a document permanently from Firestore.

### 3. **Best Practices**

* Always wrap Firestore operations in **try-catch** blocks for error handling.
* Use **async/await** for better readability.
* Clear input fields after successful CRUD actions.

### 4. **Real-World Application**

* Implemented a simple app with a `TextInput` and “Save to Firebase” button.
* On press, data is added to Firestore under a `messages` collection.
* Confirmations shown via `Alert.alert()`.