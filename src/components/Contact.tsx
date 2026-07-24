import React from "react";

import {
  EmailRounded,
  LinkedIn,
  Instagram,
  WhatsApp,
  ArrowOutwardRounded,
  DownloadRounded,
  VisibilityRounded,
} from "@mui/icons-material";

const contacts = [
  {
    label: "WhatsApp",
    value: "(11) 95328-9333",
    href: "https://wa.me/5511953289333",
    icon: <WhatsApp />,
    tone: "green",
  },
  {
    label: "Email",
    value: "gustavomolinapessoa@gmail.com",
    href: "mailto:gustavomolinapessoa@gmail.com",
    icon: <EmailRounded />,
    tone: "blue",
  },
  {
    label: "LinkedIn",
    value: "Gustavo Molina",
    href: "https://www.linkedin.com/in/gustavo-molina-789001380/",
    icon: <LinkedIn />,
    tone: "cyan",
  },
  {
    label: "Instagram",
    value: "@moliinagu",
    href: "https://www.instagram.com/moliinagu/",
    icon: <Instagram />,
    tone: "violet",
  },
];

const Contact: React.FC = () => {
  const curriculumPath =
    `${process.env.PUBLIC_URL}/Curriculo-Gustavo-Molina.pdf`;

  return (
    <section id="contato" className="section contact">
      <div className="container centered">
        <span className="section-pill reveal">Contato</span>

        <h2 className="reveal">
          Vamos criar algo
          <span className="gradient-text"> incrível juntos.</span>
        </h2>

        <p className="contact-intro reveal">
          Estou aberto a novos projetos, oportunidades e boas ideias. Escolha o
          canal que preferir e fale comigo.
        </p>

        <div className="contact-list">
          {contacts.map((contact) => {
            const opensExternally = contact.href.startsWith("http");

            return (
              <a
                className={`contact-card liquid-card tone-${contact.tone} reveal`}
                href={contact.href}
                target={opensExternally ? "_blank" : undefined}
                rel={opensExternally ? "noreferrer" : undefined}
                key={contact.label}
              >
                <span className="contact-icon">{contact.icon}</span>

                <div className="contact-copy">
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                </div>

                <span className="contact-arrow" aria-hidden="true">
                  <ArrowOutwardRounded />
                </span>
              </a>
            );
          })}
        </div>

        <div className="resume-section reveal">
          <div className="resume-section-heading">
            <small>Currículo profissional</small>
            <strong>Conheça mais sobre minha trajetória</strong>
          </div>

          <div className="resume-actions">
            <a
              className="resume-action resume-view liquid-card"
              href={curriculumPath}
              target="_blank"
              rel="noreferrer"
            >
              <span className="resume-action-icon">
                <VisibilityRounded />
              </span>

              <span>
                <small>Abrir no navegador</small>
                <strong>Visualizar currículo</strong>
              </span>

              <ArrowOutwardRounded className="resume-action-arrow" />
            </a>

            <a
              className="resume-action resume-download liquid-card"
              href={curriculumPath}
              download="Curriculo-Gustavo-Molina.pdf"
            >
              <span className="resume-action-icon">
                <DownloadRounded />
              </span>

              <span>
                <small>Arquivo em PDF</small>
                <strong>Baixar currículo</strong>
              </span>

              <DownloadRounded className="resume-action-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;