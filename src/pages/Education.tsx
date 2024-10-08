import React from 'react';
import '../styles/education.css'; // Estilos específicos para a educação
import etecLogo from '../assets/etec-logo.png'; // Adicionando logo da Etec
import umcLogo from '../assets/umc-logo.png'; // Adicionando logo da UMC

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <h1 className="section-title">Educação</h1>

      {/* Listagem de Educação */}
      <div className="education-content">
        <div className="education-item">
          <img src={etecLogo} alt="Logo Etec Presidente Vargas" className="education-logo" />
          <div className="education-details">
            <h2>Ensino Médio Técnico Integrado em Eletrônica</h2>
            <p className="education-period">2021 - 2023</p>
          </div>
        </div>

        <div className="education-item">
          <img src={umcLogo} alt="Logo Universidade de Mogi das Cruzes" className="education-logo" />
          <div className="education-details">
            <h2>Curso Superior de Tecnologia em Design Gráfico</h2>
            <p className="education-period">2024 - 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
