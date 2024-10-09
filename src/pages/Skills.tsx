import React from 'react';
import '../styles/skills.css';
import { FaPenFancy, FaVideo, FaPaintBrush } from 'react-icons/fa'; 

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h1 className="section-title">Habilidades Técnicas</h1>

      <div className="skills-content">
        <div className="skill-card">
          <FaPaintBrush className="skill-icon" />
          <div>
            <h3>Adobe Photoshop & Illustrator</h3>
            <p>
              Domínio em Adobe Photoshop e Illustrator para criação e manipulação de imagens, design gráfico e ilustração, com foco na entrega de resultados profissionais e impactantes.
            </p>
          </div>
        </div>
        <div className="skill-card">
          <FaPenFancy className="skill-icon" />
          <div>
            <h3>Canva</h3>
            <p>
              Experiência com Canva para o desenvolvimento ágil de materiais gráficos, especialmente focados em plataformas digitais e redes sociais.
            </p>
          </div>
        </div>
        <div className="skill-card">
          <FaVideo className="skill-icon" />
          <div>
            <h3>Desenho & Edição de Vídeo</h3>
            <p>
              Habilidade em aplicativos de desenho e softwares de edição de vídeo, criando conteúdos dinâmicos para redes sociais que capturam a atenção do público.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
