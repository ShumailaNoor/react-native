import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// Dummy blog data
const blogs = [
  { id: 1, title: "React Basics", content: "Learn about components, props, and state." },
  { id: 2, title: "React Router", content: "Learn about routes, links, and navigation." },
  { id: 3, title: "React Hooks", content: "Learn about useState, useEffect, and custom hooks." },
];

// Navbar
function Navbar() {
  return (
    <nav style={{ textAlign: "center", marginBottom: "20px" }}>
      <NavLink to="/" style={{ margin: "0 10px" }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: "0 10px" }}>About</NavLink>
      <NavLink to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</NavLink>
    </nav>
  );
}

// Home Page
function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blog Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <NavLink to={`/blog/${blog.id}`}>{blog.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// About Page
function About() {
  return <h1 style={{ textAlign: "center" }}>About This Blog App</h1>;
}

// Blog Details Page
function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

// Dashboard with Nested Routes
function Dashboard() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to="profile" style={{ margin: "0 10px" }}>Profile</NavLink>
        <NavLink to="settings" style={{ margin: "0 10px" }}>Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2 style={{ textAlign: "center" }}>User Profile</h2>;
}

function Settings() {
  return <h2 style={{ textAlign: "center" }}>Settings Page</h2>;
}

// Fake Protected Route
function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/" />;
}

// Not Found Page
function NotFound() {
  return <h1 style={{ textAlign: "center" }}>404 - Page Not Found</h1>;
}

// Main App
function App() {
  const [isLoggedIn] = useState(true); // change to false to test ProtectedRoute

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Nested Dashboard (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
