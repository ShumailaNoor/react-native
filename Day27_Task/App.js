//---------------Practice 1-----------------
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1 style={{textAlign: 'center'}}>Home</h1>;
}

function About() {
  return <h1 style={{textAlign: 'center'}}>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center', backgroundColor: 'cyan', marginBottom: '10px', padding: '10px'}}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link>
      </nav>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//---------------Practice 2-----------------
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { jsx } from 'react/jsx-runtime';

function Home() {
  return <h1 style={{textAlign: 'center'}}>Home</h1>;
}

function About() {
  return <h1 style={{textAlign: 'center'}}>About</h1>;
}

function Contact() {
  return <h1 style={{textAlign: 'center'}}>Contact</h1>;
}

function Navigation() {
  const navStyle = {
    padding: '20px',
    backgroundColor: '#2c3e50',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center'
  };
  
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#f39c12' : 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '10px',
    borderBottom: isActive ? '3px solid #f39c12' : 'none'
  });
  
  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//---------------Practice 3-----------------
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
function User(){
  const {username} = useParams();

  return <h1 style={{textAlign: 'center'}}>User: {username}</h1>;
}

function Home (){
  return <h1 style={{textAlign: 'center'}}>Home</h1>;
}

  const navStyle = {
    padding: '20px',
    backgroundColor: '#2c3e50',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    color: 'transparent'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

function App() {
  return(
    <BrowserRouter>
    <nav style={navStyle}>
      <Link style={linkStyle} to='/'>Home</Link> 
      <Link style={linkStyle} to='/user/John'>John</Link> 
      <Link style={linkStyle} to='/user/Jane'>Jane</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:username' element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

//---------------Practice 4-----------------
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const buttonStyle = {
  padding: '10px 20px', 
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer'
}

function Home() {
  const navigate = useNavigate();
  
  const goToAbout = () => {
    navigate('/about');
  };
  
  const goToContact = () => {
    navigate('/contact');
  };
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Home Page</h1>
      <p>Click buttons to navigate:</p>
      <button 
        onClick={goToAbout}
        style={buttonStyle}>
        Go to About
      </button>
      <button 
        onClick={goToContact}
        style={buttonStyle}>
        Go to Contact
      </button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Page</h1>
      <button style={buttonStyle} onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

function Contact() {
  const navigate = useNavigate();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Page</h1>
      <button style={buttonStyle} onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//---------------Practice 5-----------------
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

 const navStyle = {
    padding: '20px',
    backgroundColor: '#2c3e50',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    color: 'transparent'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

function Profile() {
  return <h3 style={{ textAlign: "center" }}>Profile Page</h3>;
}

function Settings() {
  return <h3 style={{ textAlign: "center" }}>Settings Page</h3>;
}

function Dashboard() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Dashboard</h1>
      <nav style={{justifyContent: 'center', display: 'flex', gap: '10px', marginBottom: '10px'}}>
        <Link style={{fontWeight: 'bold', color: '#2c3e50', fontSize: '20px'}} to="profile">Profile</Link> 
        <Link style={{fontWeight: 'bold', color: '#2c3e50', fontSize: '20px'}} to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h1 style={{ textAlign: "center" }}>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link> 
        <Link style={linkStyle} to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//---------------Practice 6-----------------
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "Apple", category: "fruit" },
  { id: 2, name: "Banana", category: "fruit" },
  { id: 3, name: "Carrot", category: "vegetable" },
  { id: 4, name: "Tomato", category: "vegetable" },
  { id: 5, name: "Mango", category: "fruit" },
];

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category"); 

  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Products</h1>

      <button onClick={() => setSearchParams({ category: "fruit" })}>Fruits</button>
      <button onClick={() => setSearchParams({ category: "vegetable" })}>Vegetables</button>
      <button onClick={() => setSearchParams({})}>All</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} ({p.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ textAlign: "center" }}>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//---------------Mini Project-----------------
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink,
  useParams,
  useNavigate,
  Navigate,
  Outlet
} from 'react-router-dom';
import { useState } from 'react';

const blogPosts = [
  { id: 1, title: 'Getting Started with React', content: 'React is a JavaScript library for building user interfaces. It makes creating interactive UIs painless.' },
  { id: 2, title: 'Understanding React Router', content: 'React Router enables navigation between different views in a React application without page reloads.' },
  { id: 3, title: 'State Management in React', content: 'State is data that changes over time. React provides useState hook for managing state in functional components.' },
  { id: 4, title: 'React Hooks Explained', content: 'Hooks are functions that let you use state and other React features without writing a class.' },
  { id: 5, title: 'Building Forms in React', content: 'Forms in React can be controlled components where form data is handled by React state.' }
];

function Navigation() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? '#e74c3c' : 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: isActive ? 'white' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal'
  });
  
  return (
    <nav style={{
      backgroundColor: '#3498db',
      padding: '20px',
      display: 'flex',
      gap: '10px',
      justifyContent: 'center', 
    }}>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/about" style={navStyle}>About</NavLink>
      <NavLink to="/dashboard" style={navStyle}>Dashboard</NavLink>
    </nav>
  );
}

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign: 'center'}}>Home</h1>
      <p style={{textAlign: 'center'}}>Welcome to our simple blog! Click on any post to read more.</p>
      
      <div style={{ marginTop: '30px' }}>
        {blogPosts.map(post => (
          <div 
            key={post.id}
            style={{
              padding: '20px',
              margin: '15px 0',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #dee2e6'
            }}
          >
            <h2>{post.title}</h2>
            <Link 
              to={`/blog/${post.id}`}
              style={{
                color: '#3498db',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About This Blog</h1>
      <p>This is a simple blog application built with React Router.</p>
    </div>
  );
}

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>(404) Not Found</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          cursor: 'pointer',
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
      Go Back
      </button>
      
      <article style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1>{post.title}</h1>
        <p style={{ 
          fontSize: '18px', 
          lineHeight: '1.6',
          color: '#555'
        }}>
          {post.content}
        </p>
        
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <strong>Post ID:</strong> {post.id}
        </div>
      </article>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      
      <nav style={{ 
        padding: '15px', 
        backgroundColor: '#ecf0f1',
        marginBottom: '20px',
        borderRadius: '5px',

      }}>
        <Link to="profile" style={{ margin: '0 15px' }}>Profile</Link>
        <Link to="settings" style={{ margin: '0 15px' }}>Settings</Link>
      </nav>
      
      <Outlet />
    </div>
  );
}

function Profile() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '5px' }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john@example.com</p>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', borderRadius: '5px' }}>
      <h2>Settings</h2>
      <label style={{ display: 'block', margin: '10px 0' }}>
        <input type="checkbox" /> Email Notifications
      </label>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    }
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ 
            padding: '10px', 
            width: '100%',
            marginBottom: '10px',
            fontSize: '16px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            width: '100%',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Hint: Enter any username to login
      </p>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center',
      backgroundColor: '#ffebee'
    }}>
      <h1 style={{ fontSize: '72px' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '15px 30px',
          marginTop: '20px',
          fontSize: '18px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;