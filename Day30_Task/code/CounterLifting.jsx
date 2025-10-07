import { useState } from 'react';

// Child Component 1 - Displays count
function CounterDisplay({ count }) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e3f2fd',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3>Current Count</h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1976d2' }}>
        {count}
      </p>
    </div>
  );
}

// Child Component 2 - Updates count
function CounterButtons({ count, setCount }) {
  return (
    <div style={{ 
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center' 
      }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// Parent Component - Holds the state
function CounterLifting() {
  const [count, setCount] = useState(0);
  
  return (
    <div>      
      <CounterDisplay count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
}

export default CounterLifting;