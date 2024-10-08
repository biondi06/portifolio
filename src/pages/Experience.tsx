import React from 'react';
import '../styles/experience.css'; // Estilos específicos para experiência
import { FaPaintBrush, FaLaptopCode, FaBullhorn } from 'react-icons/fa'; // Ícones

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h1 className="section-title">Experiências Profissionais</h1>

      <div className="experience-content">
        {/* Primeira Experiência - Criações Visuais */}
        <div className="experience-card">
          <FaPaintBrush className="experience-icon" />
          <div>
            <h3>Criações Visuais</h3>
            <p>
              Ampla experiência no desenvolvimento de criações visuais, incluindo logotipos, ilustrações artísticas e materiais gráficos. Trabalho focado na concepção e execução de projetos visuais estratégicos que engajam o público e comunicam a identidade de marcas de forma impactante.
            </p>
          </div>
        </div>

        {/* Segunda Experiência - Desenvolvimento Estratégico */}
        <div className="experience-card">
          <FaLaptopCode className="experience-icon" />
          <div>
            <h3>Desenvolvimento Estratégico</h3>
            <p>
              Execução de projetos que envolvem a criação de soluções visuais inovadoras para atender às necessidades de marcas em diversos setores. Cada projeto é pensado para atingir o público-alvo e transmitir de forma clara a identidade da marca.
            </p>
          </div>
        </div>

        {/* Terceira Experiência - Engajamento Visual */}
        <div className="experience-card">
          <FaBullhorn className="experience-icon" />
          <div>
            <h3>Engajamento Visual</h3>
            <p>
              Habilidade em criar campanhas visuais que engajam e se destacam no mercado. A combinação de estratégias de marketing com design criativo tem sido um diferencial para garantir o impacto visual dos projetos desenvolvidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
