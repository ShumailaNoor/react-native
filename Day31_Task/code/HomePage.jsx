import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #2196f3',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto'
      }}></div>
      <p style={{ marginTop: '20px', color: '#666' }}>Loading posts...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function ErrorMessage({ message, onRetry }) {
  return (
    <div style={{
      padding: '30px',
      margin: '20px',
      backgroundColor: '#ffebee',
      border: '2px solid #f44336',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#c62828' }}>Error</h2>
      <p style={{ color: '#d32f2f' }}>{message}</p>
      <button 
        onClick={onRetry}
        style={{
          padding: '10px 20px',
          marginTop: '15px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Try Again
      </button>
    </div>
  );
}

function PostCard({ post }) {
  const excerpt = post.body.length > 150 
    ? post.body.substring(0, 150) + '...' 
    : post.body;

  return (
    <div
      style={{
        padding: '20px',
        margin: '15px 0',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      <h2
        style={{
          color: '#2474c4ff',
          marginTop: 0,
          marginBottom: '10px',
          fontSize: '20px',
        }}
      >
        {post.title}
      </h2>

      <p
        style={{
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '15px',
        }}
      >
        {excerpt}
      </p>

      <Link
        to={`/post/${post.id}`}
        style={{
          color: '#e0973dff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
         onMouseEnter={(e) => (e.currentTarget.style.color = '#e48004ff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#e0973dff')}
      >
        Read More <FaArrowRight />
      </Link>
    </div>
  );
}

function HomePage({ posts, loading, error, onRefresh }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRefresh} />;
  }

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '30px 20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div>
          <h1 style={{ margin: '0 0 10px 0', color: '#333' }}>
            All Blog Posts
          </h1>
          <p style={{ margin: 0, color: '#666' }}>
            Total Posts: {posts.length}
          </p>
        </div>
        
        <button 
          onClick={onRefresh}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')}
        >
          Refresh
        </button>
      </div>

      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  );
}

export default HomePage;