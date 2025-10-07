import { useState } from 'react';

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #bdc3c7',
    borderRadius: '5px'
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);
    
  };
  
  return (
    <div style={{  maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={inputStyle}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '18px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;