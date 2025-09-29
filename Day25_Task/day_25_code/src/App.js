//---------Practice Task1---------

import { useState } from "react";

import { use, useState } from "react";
function Counter(){
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
}

const decrement = () => {
  setCount(count - 1);
}

const reset = () => {
  setCount(0);
}

  return <div>
    <h1 style={{margin: '10px'}} >Counter: {count}</h1>
    <button onClick={increment} style={{margin: '10px'}}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset} style={{margin: '10px'}}>Reset</button>
  </div>;
}

//export default Counter;

//---------Practice Task2---------
function UserForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return <div>
      <label>Name: </label>
      <input type="text" 
        value={name} 
        onChange= {(event) => setName(
          event.target.value)}
        placeholder="Enter your name"
        />
      <br />
      <label>Email: </label>
      <input type="email" 
        value={email} 
        onChange= {(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        />
      <br />
      <DisplayUSer name={name} email={email} />
  </div>;
}

function DisplayUSer({name, email}){
  return <div>
    <h2>User Information</h2>
    <h4>Name: {name}</h4>
    <h4>Email: {email}</h4>
  </div>;
}

// export default UserForm;

//---------Practice Task3---------
function ChangeBackground(){
  const [color, setColor] = useState("");

  const colors = ["white", "lightblue", "lightgreen", "lightpink", "lightyellow"];

  const changeColor = () =>{
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  }
  return <div style={{backgroundColor: color, height: '100vh', textAlign: 'center', padding: 0, margin: 0}}>
    <h1>Change Background Color</h1>
    <button onClick={changeColor}>Change Color</button>
  </div>;
}

// export default ChangeBackground;

//---------Practice Task4---------

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      
      {isVisible && (
        <div>
          <p>This text appears and disappears when click the button.</p>
        </div>
      )}
    </div>
  );
}

// export default ToggleText;

//---------Practice Task5---------

function ItemList({items}) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {

  const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
  return (
  <ItemList items={fruits} />
  );
}
// export default App;

//---------Mini Prject---------
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

