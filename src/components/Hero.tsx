import React from "react";
import { KeyboardArrowDownRounded } from "@mui/icons-material";

const Hero: React.FC = () => (
  <section id="home" className="section hero">
    <div className="container hero-content">
      <h1 className="hero-name reveal">
        <span className="gradient-text">Gustavo Molina</span>
      </h1>

      <p className="hero-role reveal">Designer gráfico</p>

      <a
        className="hero-scroll reveal"
        href="#sobre"
        aria-label="Ir para a seção Sobre mim"
      >
        <KeyboardArrowDownRounded />
      </a>
    </div>

    <div className="hero-bottom-fade" aria-hidden="true" />
  </section>
);

export default Hero;
