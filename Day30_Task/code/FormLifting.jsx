import { useState } from 'react';

function FirstNameInput({ value, onChange }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        First Name:
      </label>
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter first name"
        style={{
          width: '520px',
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #5885b1ff',
          borderRadius: '5px',
        }}
      />
    </div>
  );
}

function LastNameInput({ value, onChange }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        Last Name:
      </label>
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter last name"
        style={{
          width: '520px',
          padding: '10px',
          fontSize: '16px',
          border: '2px solid #5885b1ff',
          borderRadius: '5px'
        }}
      />
    </div>
  );
}

function Greeting({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`.trim();
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e8eef5ff',
      border: '2px solid #5885b1ff',
      borderRadius: '8px',
      marginTop: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#164869ff', margin: '0 0 10px 0' }}>
        {fullName ? `Hello, ${fullName}` : 'Enter your name above'}
      </h2>
    </div>
  );
}

function FormLiftingDemo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleReset = () => {
    setFirstName('');
    setLastName('');
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Form with Lifted State</h1>
      <p style={{ color: '#666' }}>
        The first name and last name inputs share state through their parent component.
      </p>
      
      <div style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <FirstNameInput value={firstName} onChange={setFirstName} />
        <LastNameInput value={lastName} onChange={setLastName} />
        
      </div>
      
      <Greeting firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default FormLiftingDemo;