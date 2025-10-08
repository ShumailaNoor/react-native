import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPost({ onAddPost }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  const [errors, setErrors] = useState({
    title: '',
    body: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }

    if (formData.body.trim() === '') {
      newErrors.body = 'Content is required';
    } else if (formData.body.length < 10) {
      newErrors.body = 'Content must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAddPost({
        title: formData.title,
        body: formData.body,
        userId: 1
      });

      setSubmitted(true);
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const isFormValid = 
    formData.title.trim() !== '' &&
    formData.body.trim() !== '' &&
    formData.title.length >= 5 &&
    formData.body.length >= 10;

  if (submitted) {
    return (
      <div style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px'
      }}>
        <div style={{
          padding: '30px',
          backgroundColor: '#d4edda',
          border: '2px solid #28a745',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#155724', margin: '0 0 15px 0' }}>
            Post Created Successfully!
          </h1>
          <p style={{ color: '#155724', fontSize: '18px' }}>
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: '30px 20px'
    }}>
      <h1 style={{ color: '#333', marginBottom: '10px' }}>
        Create a New Post
      </h1>

      <form onSubmit={handleSubmit} style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Title Field */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333'
          }}>
            Post Title <span style={{ color: '#f44336' }}>*</span>
          </label>
          <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title..."
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: `2px solid ${errors.title ? '#f44336' : '#ddd'}`,
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
          {errors.title && (
            <p style={{
              color: '#f44336',
              fontSize: '14px',
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.title}
            </p>
          )}
          <p style={{
            fontSize: '14px',
            color: '#999',
            marginTop: '5px',
            marginBottom: 0
          }}>
            {formData.title.length}/100 characters
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333'
          }}>
            Post Content <span style={{ color: '#f44336' }}>*</span>
          </label>
          <textarea 
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows="8"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: `2px solid ${errors.body ? '#f44336' : '#ddd'}`,
              borderRadius: '5px',
              boxSizing: 'border-box',
              fontFamily: 'Arial, sans-serif',
              resize: 'vertical'
            }}
          />
          {errors.body && (
            <p style={{
              color: '#f44336',
              fontSize: '14px',
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.body}
            </p>
          )}
          <p style={{
            fontSize: '14px',
            color: '#999',
            marginTop: '5px',
            marginBottom: 0
          }}>
            {formData.body.length}/500 characters
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit"
            disabled={!isFormValid}
            style={{
              flex: 1,
              padding: '14px',
              fontSize: '18px',
              fontWeight: 'bold',
              backgroundColor: isFormValid ? '#4caf50' : '#a6d6a8ff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.3s'
            }}
          >
            Publish
          </button>
          
          <button 
            type="button"
            onClick={() => navigate('/')}
            style={{
              flex: 1,
              padding: '14px',
              fontSize: '18px',
              backgroundColor: '#757575',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;