//------------Task 1: Fix this JSX---------------
// Correct
const element = (
  <div>
    <h1>Welcome to React</h1>
    <p>This is JSX</p>
  </div>
);

//-------------Task 2: Use variables inside JSX------------
const name = "John";
const age = 25;

const ele = <p>My name is {name} and I am {age} years old.</p>;

//--------------Task 3: Simple Functional Component------------
function Hello() {
  return <h1>Hello from React!</h1>;
}

//--------------Task 4: Component with props-----------------
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="Sara" />

//---------------Task 5: Profile Card component-------------
function ProfileCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}

//---------------Mini Project: Profile Card Generator-------------
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>
      <ProfileCard name="Alice" age={22} location="USA" />
      <ProfileCard name="Bob" age={28} location="UK" />
      <ProfileCard name="Charlie" age={30} location="Canada" />
    </div>
  );
}

export default App;

