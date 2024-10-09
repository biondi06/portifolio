import React from 'react';
import '../styles/contact.css'; // Estilos específicos para contato
import { FaLinkedin, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Ícones

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="section-title">Contato</h1>

      <div className="contact-grid">
        {/* Lado esquerdo - Endereço e E-mail */}
        <div className="left-column">
          {/* Endereço */}
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Meu Endereço</h3>
              <p>Rua Aristides Germano Montagnini</p>
              <p>Mogi das Cruzes, SP, Brasil</p>
            </div>
          </div>

          {/* E-mail */}
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>E-mail</h3>
              <p>gustavomolinapessoa@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Lado direito - Perfis Sociais e Contato */}
        <div className="right-column">
          {/* Redes Sociais */}
          <div className="contact-card">
            <div className="social-icon-wrapper">
              <FaLinkedin className="contact-icon" />
              <FaGoogle className="contact-icon" />
            </div>
            <div>
              <h3>Perfis Sociais</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/gustavo-molina-7662052ab/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" /> LinkedIn
                </a>
                <a href="mailto:gustavomolinapessoa@gmail.com">
                  <FaGoogle className="social-icon" /> Enviar e-mail
                </a>
              </div>
            </div>
          </div>

          {/* Telefone */}
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Contato</h3>
              <p>+55 11 95328-9333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
