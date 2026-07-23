import React from "react";
const cards=[
 ["Experiência","EletroBidu Energia Solar","Criação de campanhas, peças digitais, vídeos e comunicação visual."],
 ["Freelancer","Designer independente","Identidades visuais, social media, ilustração, motion e edição."],
 ["Formação","Design Gráfico — UMC","Formação voltada à criação, identidade visual e projetos digitais."],
 ["Formação técnica","Eletrônica — ETEC","Ensino Médio Integrado ao Técnico em Eletrônica."]
];
const About:React.FC=()=> <section id="sobre" className="section dark-section"><div className="container">
 <span className="label">Sobre</span><h2>Design, movimento e<span className="gradient-text"> comunicação visual.</span></h2>
 <p className="intro">Sou designer gráfico com experiência em campanhas, materiais digitais, edição de vídeo, ilustração e motion design.</p>
 <div className="cards">{cards.map(([tag,title,text])=><article className="card" key={title}><small>{tag}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
</div></section>;
export default About;
