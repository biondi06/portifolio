import React from "react";

const Projects: React.FC = () => (
  <section id="projetos" className="section dark-section">
    <div className="container">
      <span className="section-pill reveal">Projetos</span>
      <h2 className="reveal">
        Trabalhos feitos para
        <span className="gradient-text"> serem lembrados.</span>
      </h2>

      <div className="projects">
        {["Identidade visual", "Motion design", "Design gráfico"].map((x, i) => (
          <article className={`project p${i + 1} reveal`} key={x}>
            <div>
              <small>{x}</small>
              <h3>Projeto em destaque {String(i + 1).padStart(2, "0")}</h3>
              <p>Adicione aqui a descrição, o contexto e os resultados do projeto.</p>
            </div>
            <div className="mockup">Adicione seu mockup</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
