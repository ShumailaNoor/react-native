import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data = await response.json();
      setPosts(data.slice(0, 10));
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      ...newPost
    };
    setPosts([post, ...posts]); 
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
      }}>
        <Navigation />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                posts={posts} 
                loading={loading} 
                error={error}
                onRefresh={fetchPosts}
              />
            } 
          />
          <Route 
            path="/post/:id" 
            element={
              <PostDetail 
                posts={posts}
                onDelete={deletePost}
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddPost onAddPost={addPost} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;