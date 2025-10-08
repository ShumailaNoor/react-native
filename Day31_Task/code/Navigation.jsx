import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  const navStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#ddd',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: isActive ? '#1976d2' : 'transparent',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'all 0.3s'
  });

  return (
    <nav style={{
      backgroundColor: '#2196f3',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          My Blog
        </Link>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
          <NavLink to="/add" style={navStyle}>
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;