import React from "react";

import photoshop from "../assets/icons/photoshop.svg";
import afterEffects from "../assets/icons/after-effects.svg";
import illustrator from "../assets/icons/illustrator.svg";
import premiere from "../assets/icons/premiere-pro.svg";
import capcut from "../assets/icons/capcut.svg";
import openai from "../assets/icons/openai.svg";

const skills = [
  { name: "Photoshop", level: 88, icon: photoshop, tone: "blue", color: "#31a8ff" },
  { name: "Premiere Pro", level: 82, icon: premiere, tone: "purple", color: "#9999ff" },
  { name: "Illustrator", level: 74, icon: illustrator, tone: "amber", color: "#ff9a00" },
  { name: "After Effects", level: 68, icon: afterEffects, tone: "violet", color: "#8f7cff" },
  { name: "CapCut", level: 86, icon: capcut, tone: "cyan", color: "#f4f7fb" },
  { name: "OpenAI", level: 85, icon: openai, tone: "green", color: "#10a37f" },
];

const Skills: React.FC = () => (
  <section id="habilidades" className="section">
    <div className="container centered">
      <span className="section-pill reveal">Habilidades</span>

      <h2 className="reveal">
        Ferramentas que transformam
        <span className="gradient-text"> ideias em experiências.</span>
      </h2>

      <p className="skills-intro reveal">
        Meu domínio em cada ferramenta, representado de forma visual dentro do
        meu processo criativo.
      </p>

      <div className="skills skill-levels">
        {skills.map((skill) => (
          <article
            className={`skill skill-level-card liquid-card tone-${skill.tone} reveal`}
            key={skill.name}
            style={{ "--skill-color": skill.color, "--skill-level": `${skill.level}%` } as React.CSSProperties}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" draggable={false} />

            <div className="skill-level-content">
              <div className="skill-level-heading">
                <span className="skill-name">{skill.name}</span>
                <strong>{skill.level}%</strong>
              </div>

              <div className="skill-track" aria-label={`${skill.name}: ${skill.level}%`}>
                <span className="skill-fill" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
