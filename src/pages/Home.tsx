import React, { useEffect, useState } from 'react';
import '../styles/home.css'; 

const phrases = [
  'Sou designer gráfico',
  'Sou ilustrador',
  'Sou fotógrafo',
  'Sou estilista',
  'Sou apaixonado por arte'
];

const Home: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 3000); 
    return () => clearInterval(phraseInterval); 
  }, []);

  return (
    <div className="home-container">
      <div className="intro-text">
        <h1 className="name">Gustavo Molina</h1>
        <h2 className="dynamic-phrase">{phrases[currentPhrase]}</h2>
      </div>
      <a
        href="https://www.linkedin.com/in/gustavo-molina-7662052ab/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <i className="fab fa-linkedin"></i> 
      </a>
    </div>
  );
};

export default Home;
