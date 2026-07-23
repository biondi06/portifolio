import React from "react";

import photoshop from "../assets/icons/photoshop.svg";
import afterEffects from "../assets/icons/after-effects.svg";
import illustrator from "../assets/icons/illustrator.svg";
import premiere from "../assets/icons/premiere-pro.svg";
import capcut from "../assets/icons/capcut.svg";
import openai from "../assets/icons/openai.svg";

const skills = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "After Effects",
    icon: afterEffects,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Premiere Pro",
    icon: premiere,
  },
  {
    name: "CapCut",
    icon: capcut,
  },
  {
    name: "IA Generativa",
    icon: openai,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="section">
      <div className="container centered">
        <span className="label">Habilidades</span>

        <h2>
          Ferramentas que transformam
          <span className="gradient-text"> ideias em experiências.</span>
        </h2>

        <div className="skills">
          {skills.map((skill) => (
            <article className="skill" key={skill.name}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                draggable={false}
              />

              <span className="skill-name">
                {skill.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;