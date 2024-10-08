import React from 'react';
import '../styles/about.css'; // Estilos atualizados
import minhaImagem from '../assets/minha-imagem.jpg'; // Importando a imagem

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="section-title">Gustavo Molina</h1>

      {/* Seção sobre com imagem e detalhes */}
      <div className="about-content">
        {/* Imagem de perfil */}
        <div className="about-image">
          <img src={minhaImagem} alt="Gustavo Molina" />
        </div>

        {/* Descrição e detalhes pessoais */}
        <div className="about-details">
          <p className="about-description">
            Me chamo Gustavo Molina, sou estudante de Design Gráfico na Universidade de Mogi das Cruzes, nascido e residente em Mogi das Cruzes.
            Tenho uma grande paixão por tudo que envolve arte, fotografia, música, moda e natureza. Além disso, faço 
            ilustrações e adoro explorar novas formas criativas de expressão. Sinta-se à vontade para entrar em contato 
            comigo se precisar de ajuda com projetos de design gráfico ou ilustração!
          </p>

          {/* Informações adicionais */}
          <div className="personal-info">
            <p><i className="fas fa-birthday-cake"></i> <strong>Data de Nascimento:</strong> 23 de Janeiro de 2006</p>
            <p><i className="fas fa-phone-alt"></i> <strong>Telefone:</strong> +55 11 95328-9333</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>Cidade:</strong> Mogi das Cruzes, SP</p>
            <p><i className="fas fa-envelope"></i> <strong>E-mail:</strong> gustavomolinapessoa@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Seção de interesses */}
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
