import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

function Header() {
    const { theme, toggleTheme } = useTheme();

    const headerStyle = {
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    return (
        <header style={headerStyle}>
            <h2>My Theme App</h2>
            <button
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    backgroundColor: theme === 'dark' ? '#ffc107' : '#673ab7',
                    color: theme === 'dark' ? '#000' : '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}

function Content() {
    const { theme } = useTheme();

    const contentStyle = {
        padding: '30px',
        backgroundColor: theme === 'dark' ? '#2c2c2c' : '#f5f5f5',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px',
        marginBottom: '20px',
        minHeight: '200px'
    };

    return (
        <div style={contentStyle}>
            <h3>Welcome to Theme Switcher!</h3>
        </div>
    );
}

function Sidebar() {
    const { theme } = useTheme();

    const sidebarStyle = {
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px'
    };

    return (
        <aside style={sidebarStyle}>
            <h3>Sidebar</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0' }}>Dashboard</li>
                <li style={{ padding: '10px 0' }}>Settings</li>
                <li style={{ padding: '10px 0' }}>Profile</li>
                <li style={{ padding: '10px 0' }}>Messages</li>
            </ul>
        </aside>
    );
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemeWrapper() {
    const { theme } = useTheme();

    const appStyle = {
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
        padding: '20px',
    };

    return (
        <div style={appStyle}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Header />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px' }}>
                    <Content />
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

function ThemeContextDemo() {
    return (
        <ThemeProvider>
            <ThemeWrapper />
        </ThemeProvider>
    );
}

export default ThemeContextDemo;