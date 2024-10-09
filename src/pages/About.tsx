import React from 'react';
import '../styles/about.css'; 
import minhaImagem from '../assets/minha-imagem.jpg'; 

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="section-title">Gustavo Molina</h1>

      <div className="about-content">
        <div className="about-image">
          <img src={minhaImagem} alt="Gustavo Molina" />
        </div>

        <div className="about-details">
          <p className="about-description">
            Me chamo Gustavo Molina, sou estudante de Design Gráfico na Universidade de Mogi das Cruzes, nascido e residente em Mogi das Cruzes.
            Tenho uma grande paixão por tudo que envolve arte, fotografia, música, moda e natureza. Além disso, faço 
            ilustrações e adoro explorar novas formas criativas de expressão. Sinta-se à vontade para entrar em contato 
            comigo se precisar de ajuda com projetos de design gráfico ou ilustração!
          </p>
          <div className="personal-info">
            <p><i className="fas fa-birthday-cake"></i> <strong>Data de Nascimento:</strong> 23 de Janeiro de 2006</p>
            <p><i className="fas fa-phone-alt"></i> <strong>Telefone:</strong> +55 11 95328-9333</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>Cidade:</strong> Mogi das Cruzes, SP</p>
            <p><i className="fas fa-envelope"></i> <strong>E-mail:</strong> gustavomolinapessoa@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="interests">
        <h2>Interesses</h2>
        <div className="interest-cards">
          <div className="interest-card">Design Gráfico</div>
          <div className="interest-card">Ilustração</div>
          <div className="interest-card">Fotografia</div>
          <div className="interest-card">Moda</div>
          <div className="interest-card">Música</div>
        </div>
      </div>
    </div>
  );
};

export default About;
