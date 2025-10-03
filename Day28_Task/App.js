// import { useState, useEffect } from "react";

//------------Task 1 .then()-------------
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      console.log('All Posts:', posts);
      console.log('First Post:', posts[0]);
      console.log('Total Posts:', posts.length);
    })
    .catch(error => {
      console.error(error);
    });
}

fetchPosts();

//----------------Task 2 async/await-----------------
async function fetchUsers() {
  try {
    console.log('Fetching users...');
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    
    console.log('All Users:', users);
    console.log('First User:', users[0]);
    console.log('User Names:', users.map(u => u.name));
    
  } catch (error) {
    console.error(error.message);
  }
}

fetchUsers();

//----------------Task 3-----------------
import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10)); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {posts.map(post => (
        <div 
          key={post.id}
          style={{
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px'
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;

//----------------Task 4, 5, 6-----------------
import { useState, useEffect } from 'react';

function PostListWithLoading() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true); 
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10));
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); 
      });
  }, []);
  
  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {posts.map(post => (
        <div 
          key={post.id}
          style={{
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px'
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostListWithLoading;


//---------------Mini Project-----------------
import React, { useEffect, useState } from "react";

function UserCard({ user, onShowPosts }) {
  return (
    <div style={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button style={styles.btn} onClick={() => onShowPosts(user.id, user.name)}>
        Show Posts
      </button>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async (userId, userName) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();

      const postTitles = data.map((p, i) => `${i + 1}. ${p.title}`).join("\n");
      alert(`Posts by ${userName}:\n\n${postTitles}`);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>User List App</h1>

      <div style={styles.topBar}>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <button style={styles.btn} onClick={fetchUsers}>
          Refresh
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={styles.list}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onShowPosts={fetchPosts} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  topBar: { marginBottom: "20px" },
  input: { padding: "8px", marginRight: "10px", width: "200px" },
  btn: { padding: "8px 12px", cursor: "pointer" },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
};

export default App;
