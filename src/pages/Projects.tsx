import React from 'react';
import '../styles/projects.css'; // Estilos específicos para projetos
import { FaPalette, FaBullhorn, FaChartLine } from 'react-icons/fa'; // Ícones

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="section-title">Projetos</h1>

      <div className="projects-content">
        {/* Projeto - Publicações em Redes Sociais */}
        <div className="project-card">
          <FaBullhorn className="project-icon" />
          <div>
            <h3>Publicações em Redes Sociais</h3>
            <p>
              Contribuição significativa para o desenvolvimento de publicações em redes sociais, desde o planejamento criativo até a entrega final, focando em campanhas que engajam e criam uma forte presença online.
            </p>
          </div>
        </div>

        {/* Projeto - Identidades Visuais */}
        <div className="project-card">
          <FaPalette className="project-icon" />
          <div>
            <h3>Identidades Visuais</h3>
            <p>
              Criação de identidades visuais para perfis e empresas, focando em transmitir a essência da marca e fortalecendo a comunicação visual de forma impactante.
            </p>
          </div>
        </div>

        {/* Projeto - Campanhas Digitais */}
        <div className="project-card">
          <FaChartLine className="project-icon" />
          <div>
            <h3>Campanhas Digitais</h3>
            <p>
              Desenvolvimento de campanhas digitais estratégicas, com foco em melhorar a presença online das marcas e aumentar seu impacto visual nas plataformas sociais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
