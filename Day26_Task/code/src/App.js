//---------Practice Task1----------
import { useState } from 'react';

function FruitList() {
  const [fruits] = useState([
    'Apple',
    'Banana', 
    'Orange',
    'Mango',
    'Strawberry'
  ]);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorite Fruits</h2>
      <ul style={{ fontSize: '18px' }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default FruitList;

// ---------Practice Task2----------

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>User Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
      <button 
        onClick={handleClick}
        style={{ 
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isLoggedIn ? 'red' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      
      {isLoggedIn && (
        <p style={{ color: 'green', marginTop: '20px' }}>
          Welcome!!!!.
        </p>
      )}
      
      {!isLoggedIn && (
        <p style={{ color: 'red', marginTop: '20px' }}>
          Please log in to continue.
        </p>
      )}
    </div>
  );
}

// export default LoginButton;

//---------Practice Task3(A)----------
// import { useEffect } from 'react';

function MountLogger() {
  useEffect(() => {
    console.log('Component mounted!');
    
    return () => {
      console.log('Component is unmounting...');
    };
  }, []);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Check the console!</h2>
      <p>Please reload to see unmouting on relaod and mounted on app fully loaded</p>
    </div>
  );
}

// export default MountLogger;

// ---------Practice Task3(B)----------
// import { useEffect } from 'react';

function TitleUpdater() {
  const [title, setTitle] = useState("Title");
  
  useEffect(() => {
    document.title = `${title}`;
    
    console.log('Title updated to:', title);
  }, [title]);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Look at the browser tab title! It updates automatically.</p>
      <input
        type="text"
        placeholder="Add Title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        onClick={() => setTitle(title)}
        style={{ margin: '5px' }}
      >
        Add
      </button>
    </div>
  );
}

// export default TitleUpdater;

//---------Practice Task4----------
// import { useEffect } from 'react';

function PostFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('Fetching posts...');
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.slice(0, 5)); 
        setLoading(false);
        console.log('Posts fetched successfully!');
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching posts:', error);
      });
  }, []); 
  
  if (loading) {
    return <div style={{ padding: '20px' }}><h2 style={{textAlign: 'center'}}>Loading posts...</h2></div>;
  }
  
  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Latest Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li 
            key={post.id}
            style={{ 
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          >
            <h3 style={{ color: '#333' }}>{post.title}</h3>
            <p style={{ color: '#666' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default PostFetcher;

//-----------Mini Project------------
import React, { useState, useEffect } from "react";

function UserDashboard() {
  const [users, setUsers] = useState([]);        
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      
  const [showEmails, setShowEmails] = useState(true); 

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  // Conditional rendering
  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Dashboard</h1>
      <button onClick={() => setShowEmails(!showEmails)}>
        {showEmails ? "Hide Emails" : "Show Emails"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong>
            {showEmails && <p>{user.email}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDashboard;
