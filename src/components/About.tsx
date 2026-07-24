import React, { useState } from "react";

import {
  WorkRounded,
  BrushRounded,
  SchoolRounded,
  MemoryRounded,
  ExpandMoreRounded,
} from "@mui/icons-material";

import etecLogo from "../assets/etec-logo.png";
import umcLogo from "../assets/umc-logo.png";

type AboutItem = {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  detail: string;
  icon: React.ReactNode;
  logo?: string;
  tone: "blue" | "violet" | "cyan" | "amber";
};

const academic: AboutItem[] = [
  {
    number: "01",
    eyebrow: "Formação técnica",
    title: "Eletrônica — ETEC",
    text:
      "Ensino Médio Integrado ao Técnico em Eletrônica, unindo raciocínio técnico, criatividade e resolução de problemas.",
    detail: "ETEC Presidente Vargas",
    icon: <MemoryRounded />,
    logo: etecLogo,
    tone: "amber",
  },
  {
    number: "02",
    eyebrow: "Graduação",
    title: "Design Gráfico — UMC",
    text:
      "Formação voltada à criação, identidade visual, comunicação e desenvolvimento de projetos digitais.",
    detail: "Universidade de Mogi das Cruzes",
    icon: <SchoolRounded />,
    logo: umcLogo,
    tone: "cyan",
  },
];

const professional: AboutItem[] = [
  {
    number: "03",
    eyebrow: "Trabalho independente",
    title: "Designer freelancer",
    text:
      "Desenvolvimento de projetos de identidade visual, social media e ilustração para diferentes necessidades e públicos.",
    detail: "Identidade visual • Social media • Ilustração",
    icon: <BrushRounded />,
    tone: "violet",
  },
  {
    number: "04",
    eyebrow: "Experiência profissional",
    title: "EletroBidu Energia Solar",
    text:
      "Criação de campanhas, peças digitais, edição e apresentação de vídeos, motion e comunicação visual para o setor de energia solar.",
    detail: "Designer gráfico • Marketing",
    icon: <WorkRounded />,
    tone: "blue",
  },
];

type AboutCardProps = {
  item: AboutItem;
};

const AboutCard = ({ item }: AboutCardProps) => (
  <article
    className={`about-list-card liquid-card tone-${item.tone}`}
  >
    <span className="about-number" aria-hidden="true">
      {item.number}
    </span>

    <span className="about-card-line" aria-hidden="true" />

    <div className="about-card-icon">
      {item.logo ? (
        <img
          src={item.logo}
          alt={`Logo ${item.title}`}
          className="about-institution-logo"
          draggable={false}
        />
      ) : (
        item.icon
      )}
    </div>

    <div className="about-card-content">
      <small>{item.eyebrow}</small>

      <h3>{item.title}</h3>

      <p>{item.text}</p>

      <span className="about-detail">
        {item.detail}
      </span>
    </div>
  </article>
);

type AboutGroupProps = {
  id: string;
  label: string;
  title: string;
  icon: React.ReactNode;
  items: AboutItem[];
};

const AboutGroup = ({
  id,
  label,
  title,
  icon,
  items,
}: AboutGroupProps) => {
  const [open, setOpen] = useState(false);

  const contentId = `${id}-content`;

  return (
    <div
      className={`about-group ${open ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="about-group-toggle liquid-card"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className="about-group-icon">
          {icon}
        </span>

        <div className="about-group-title">
          <small>{label}</small>
          <h3 id={id}>{title}</h3>
        </div>

        <span className="about-group-action">
          <ExpandMoreRounded />
        </span>
      </button>

      <div
        id={contentId}
        className="about-group-collapse"
        aria-hidden={!open}
      >
        <div className="about-group-collapse-inner">
          <div className="about-list">
            {items.map((item) => (
              <AboutCard
                item={item}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => (
  <section
    id="sobre"
    className="section dark-section"
  >
    <div className="container about-container">
      <span className="section-pill reveal">
        Sobre mim
      </span>

      <h2 className="reveal">
        Design, movimento e
        <span className="gradient-text">
          {" "}
          comunicação visual.
        </span>
      </h2>

      <div className="about-groups reveal">
        <AboutGroup
          id="academic-title"
          label="Aprendizado"
          title="Formação acadêmica"
          icon={<SchoolRounded />}
          items={academic}
        />

        <AboutGroup
          id="professional-title"
          label="Trajetória"
          title="Carreira profissional"
          icon={<WorkRounded />}
          items={professional}
        />
      </div>

      <div className="about-story-divider reveal">
        <span />
      </div>

      <p className="about-intro about-intro-bottom reveal">
        Desde criança, a arte sempre esteve presente na minha vida. Foi através
        do desenho que descobri minha paixão por criar, transformar ideias em
        imagens e comunicar através do visual. Hoje, essa paixão se tornou minha
        profissão.
      </p>
    </div>
  </section>
);

export default About;