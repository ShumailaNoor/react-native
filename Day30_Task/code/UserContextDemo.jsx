import { createContext, useContext, useState } from 'react';

// Step 1: Create Context
const UserContext = createContext();

function Header() {
  const username = useContext(UserContext);
  
  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#3f51b5',
      color: 'white',
      borderRadius: '8px 8px 0 0'
    }}>
      <h2>Welcome, {username}!</h2>
    </header>
  );
}

function Sidebar() {
  const username = useContext(UserContext);
  
  return (
    <aside style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3>Profile</h3>
      <p>Logged in as: <strong>{username}</strong></p>
    </aside>
  );
}

function Footer() {
  const username = useContext(UserContext);
  
return (
    <footer style={{
        padding: '15px',
        backgroundColor: '#e0e0e0',
        borderRadius: '0 0 8px 8px',
        textAlign: 'center'
    }}>
        <p>&copy; 2024 {username}'s React App</p>
    </footer>
);
}

function UserContextDemo() {
  const [username, setUsername] = useState('Shumaila');
  
  return (
    // Step 2: Provide Context
    <UserContext.Provider value={username}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{textAlign: 'center'}}>useContext Example</h1>
        
          <label style={{ marginRight: '10px' }}>Change Username:</label>
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '16px',
              border: '2px solid #3f51b5',
              borderRadius: '5px',
              width: '630px',
              marginBottom: '10px'
            }}
          />
        
        <Header />
        <Sidebar />
        <Footer />
        
      </div>
    </UserContext.Provider>
  );
}

export default UserContextDemo;