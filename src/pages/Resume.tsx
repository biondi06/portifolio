import React from 'react';
import '../styles/resume.css'; 

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h1 className="section-title">Currículo</h1>

      <div className="resume-content">
        <p>Baixe meu currículo clicando no botão abaixo:</p>
        <a href="/curriculo-gustavo-molina.pdf" download="Curriculo_Gustavo_Molina.pdf" className="resume-download-button">
          <i className="fas fa-download"></i> Baixar Currículo
        </a>
      </div>
    </div>
  );
};

export default Resume;
