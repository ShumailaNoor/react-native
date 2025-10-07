import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    agreed: false
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    agreed: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const validateName = (name) => {
    if (name.trim() === '') return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    return '';
  };
  
  const validateEmail = (email) => {
    if (email.trim() === '') return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email is invalid';
    return '';
  };
  
  const validateAge = (age) => {
    if (age === '') return 'Age is required';
    if (isNaN(age) || age <= 0) return 'Age must be a positive number';
    if (age > 150) return 'Age must be less than 150';
    return '';
  };

  const validateCountry = (country) => {
    if (!country) return 'Please select a country';
    return '';
  };

  const validateAgreed = (agreed) => {
    if (!agreed) return 'You must agree to the terms and policy';
    return '';
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,
      [name]: fieldValue
    });
    
    let error = '';
    if (name === 'name') error = validateName(fieldValue);
    if (name === 'email') error = validateEmail(fieldValue);
    if (name === 'age') error = validateAge(fieldValue);
    if (name === 'country') error = validateCountry(fieldValue);
    if (name === 'agreed') error = validateAgreed(fieldValue);
    
    setErrors({
      ...errors,
      [name]: error
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const ageError = validateAge(formData.age);
    const countryError = validateCountry(formData.country);
    const agreedError = validateAgreed(formData.agreed);
    
    setErrors({
      name: nameError,
      email: emailError,
      age: ageError,
      country: countryError,
      agreed: agreedError
    });
    
    if (!nameError && !emailError && !ageError && !countryError && !agreedError) {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
    }
  };
  
  const isFormValid = 
    formData.name && 
    formData.email && 
    formData.age &&
    formData.country &&
    formData.agreed &&
    !errors.name && 
    !errors.email && 
    !errors.age &&
    !errors.country &&
    !errors.agreed;
  
  const handleReset = () => {
    setFormData({ name: '', email: '', age: '', country: '', agreed: false });
    setErrors({ name: '', email: '', age: '', country: '', agreed: '' });
    setSubmitted(false);
  };
  
  if (submitted) {
    return (
      <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
        <div style={{
          marginTop: '20px',
          padding: '40px',
          backgroundColor: '#d4e9edff',
          borderRadius: '5px',
          textAlign: 'left',
        }}>
          <h3>Summary:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Agreed:</strong> {formData.agreed ? 'Yes' : 'No'}</p>
        </div>
        <button 
          onClick={handleReset}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Go Back
        </button>
      </div>
    );
  }
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Signup Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: `2px solid ${errors.name ? '#e74c3c' : '#bdc3c7'}`,
              borderRadius: '5px'
            }}
          />
          {errors.name && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.name}
            </p>
          )}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input 
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: `2px solid ${errors.email ? '#e74c3c' : '#bdc3c7'}`,
              borderRadius: '5px'
            }}
          />
          {errors.email && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.email}
            </p>
          )}
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Age:
          </label>
          <input 
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: `2px solid ${errors.age ? '#e74c3c' : '#bdc3c7'}`,
              borderRadius: '5px'
            }}
          />
          {errors.age && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.age}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Country:
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: `2px solid ${errors.country ? '#e74c3c' : '#bdc3c7'}`,
              borderRadius: '5px'
            }}
          >
            <option value="">Select Country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>
          {errors.country && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.country}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input 
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              style={{ marginRight: '10px' }}
            />
            I agree to the <a href="#" style={{ color: '#007bff', marginLeft: '5px' }}>terms and policy</a>
          </label>
          {errors.agreed && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.agreed}
            </p>
          )}
        </div>
        <button 
          type="submit"
          disabled={!isFormValid}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '18px',
            backgroundColor: isFormValid ? '#1da5b7ff' : '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
