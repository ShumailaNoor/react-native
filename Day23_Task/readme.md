#  React Basics – First Project Learning Summary

## What I Learned Today
- Installed **Node.js, npm, VS Code**, and useful extensions.
- Created my first React app using:
  ```bash
  npx create-react-app my-first-app
  npm start
  ```

* Explored **React project structure**:

  * `node_modules/` → dependencies
  * `public/` → static files (index.html)
  * `src/` → main code folder (App.js, index.js)

---

## Key Concepts

1. **React** → A JavaScript library for building user interfaces.
2. **SPA (Single Page Application)** → Uses one HTML file, updates UI dynamically without reload.
3. **Components** → Reusable UI building blocks (like Lego pieces).
4. **JSX** → JavaScript + HTML-like syntax for writing UI.

---

## Hands-On Practice

* Edited `App.js` to display:

  ```jsx
  <h1>Hello React 🚀</h1>
  <p>My first React component!</p>
  ```
* Created a new **Header Component (`Header.js`)** and imported it into `App.js`.

  ```jsx
  import Header from "./header";

	function App() {
		return(
			<div> 
				<h1>Hello React</h1>
				<Header /> 
				<p>This is my first react app</p>
			</div>
		);}

	export default App;
	```

---

## Wrap-Up

* React apps run on **[http://localhost:3000](http://localhost:3000)** by default.
* Components make UI modular and reusable.
* JSX makes React code readable and expressive.
* Learned how to structure, run, and modify a basic React project.