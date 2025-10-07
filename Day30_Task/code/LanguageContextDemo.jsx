import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  english: {
    welcome: 'Welcome to Our Website',
    greeting: 'Hello! How are you today?',
    description: 'This website supports multiple languages.',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    currentLanguage: 'Current Language: English'
  },
  urdu: {
    welcome: 'ہماری ویب سائٹ میں خوش آمدید',
    greeting: 'ہیلو! آج آپ کیسے ہیں؟',
    description: 'یہ ویب سائٹ متعدد زبانوں کی حمایت کرتی ہے۔',
    home: 'ہوم',
    about: 'ہمارے بارے میں',
    contact: 'رابطہ',
    currentLanguage: 'موجودہ زبان: اردو'
  }
};

function Header() {
  const { text } = useContext(LanguageContext);
  
  return (
    <header style={{
      padding: '20px',
      backgroundColor: '#3f51b5',
      color: 'white',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h1>{text.welcome}</h1>
      <p>{text.greeting}</p>
    </header>
  );
}


function Navigation() {
  const { text } = useContext(LanguageContext);

  const buttonStyle = {
  padding: '10px 20px',
  backgroundColor:  '#204aa6ff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  marginRight: '10px',
};
  
  
  return (
    <nav style={{
      padding: '15px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <button style={buttonStyle}>
        {text.home}
      </button>
      <button style={buttonStyle}>
        {text.about}
      </button>
      <button style={buttonStyle}>
        {text.contact}
      </button>
    </nav>
  );
}

function Content() {
  const { text } = useContext(LanguageContext);
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <p style={{ fontSize: '18px' }}>{text.description}</p>
      <p style={{ color: '#666', marginTop: '20px' }}>
        {text.currentLanguage}
      </p>
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  
  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#e8eaf6',
      borderRadius: '8px',
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <h3> {language === 'english'? 'Select Language' : 'زبان منتخب کریں'}</h3>
      <button 
        onClick={() => setLanguage('english')}
        style={{
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: language === 'english' ? '#4caf50' : '#ddd',
          color: language === 'english' ? 'white' : 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {language === 'english' ? 'English' : 'انگریزی'}
      </button>
      <button 
        onClick={() => setLanguage('urdu')}
        style={{
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: language === 'urdu' ? '#4caf50' : '#ddd',
          color: language === 'urdu' ? 'white' : 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {language === 'urdu' ? 'اردو' : 'Urdu'}
      </button>
    </div>
  );
}

function LanguageContextDemo() {
  const [language, setLanguage] = useState('english');
  
  const text = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, text }}>
      <div style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fafafa',
        minHeight: '100vh'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Language Context Demo
        </h1>
        
        <LanguageSwitcher />
    
        <Header />
        <Navigation />
        <Content />
      </div>
    </LanguageContext.Provider>
  );
}

export default LanguageContextDemo;