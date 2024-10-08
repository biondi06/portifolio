import React, { useEffect, useState } from 'react';
import '../styles/home.css'; // Importando os novos estilos

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
    }, 3000); // Troca de frase a cada 3 segundos
    return () => clearInterval(phraseInterval); // Limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <div className="home-container">
      <div className="intro-text">
        <h1 className="name">Gustavo Molina</h1>
        <h2 className="dynamic-phrase">{phrases[currentPhrase]}</h2>
      </div>
      {/* Botão com ícone do LinkedIn */}
      <a
        href="https://www.linkedin.com/in/gustavo-molina-7662052ab/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <i className="fab fa-linkedin"></i> {/* Ícone do LinkedIn */}
      </a>
    </div>
  );
};

export default Home;
