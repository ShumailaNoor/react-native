import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const post = posts.find(p => p.id === parseInt(id));

  const handleDelete = () => {
    onDelete(parseInt(id));
    navigate('/');   };

  if (!post) {
    return (
      <div style={{
        maxWidth: '900px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1>404 - Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#2196f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '30px 20px'
    }}>
      <button
      onClick={() => navigate(-1)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        marginBottom: "20px",
        backgroundColor: "#757575",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#616161")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#757575")}
    >
      <FaArrowLeft /> Back
    </button>

      <div style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '20px',
          marginBottom: '20px'
        }}>
          <h1 style={{
            color: '#1976d2',
            marginTop: 0,
            marginBottom: '10px',
            fontSize: '32px'
          }}>
            {post.title}
          </h1>
          <p style={{ color: '#999', margin: 0 }}>
            Post ID: {post.id} | User ID: {post.userId}
          </p>
        </div>

        <div style={{
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '30px'
        }}>
          <p>{post.body}</p>
        </div>
        <div style={{
          borderTop: '2px solid #e0e0e0',
          paddingTop: '20px',
          display: 'flex',
          gap: '10px'
        }}>
          <button 
            onClick={() => setShowDeleteConfirm(true)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Delete Post
          </button>
          
          <Link 
            to="/"
            style={{
              padding: '12px 24px',
              backgroundColor: '#2196f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            View All Posts
          </Link>
        </div>
      </div>

      {showDeleteConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            maxWidth: '400px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#f44336', marginTop: 0 }}>
              Confirm Delete
            </h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>
              Are you sure you want to delete this post?.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                onClick={handleDelete}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Yes, Delete
              </button>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#9e9e9e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetail;