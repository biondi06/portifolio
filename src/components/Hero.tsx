import React from "react";
import {LinkedIn,DescriptionRounded,ArrowDownwardRounded} from "@mui/icons-material";
const Hero:React.FC=()=> <section id="home" className="section hero">
 <div className="container hero-content">
  <span className="badge reveal">Disponível para novos projetos</span>
  <p className="hello reveal">Olá...</p>
  <h1 className="reveal">Eu sou<span className="gradient-text">Gustavo Molina</span></h1>
  <p className="roles reveal">Designer Gráfico <b>|</b> Photoshop <b>|</b> Illustrator <b>|</b> Premiere Pro <b>|</b> Edição de Vídeo <b>|</b> Ilustrador <b>|</b> Motion Designer</p>
  <div className="actions reveal">
   <a className="button primary" href="#projetos">Ver projetos <ArrowDownwardRounded/></a>
   <a className="button glass" href="https://www.linkedin.com/in/gustavo-molina-789001380/" target="_blank" rel="noreferrer"><LinkedIn/>LinkedIn</a>
   <a className="button glass" href="/CURRICULO-PDF-GUSTAVO-MOLINA.pdf" target="_blank" rel="noreferrer"><DescriptionRounded/>Currículo</a>
  </div>
 </div>
</section>;
export default Hero;
