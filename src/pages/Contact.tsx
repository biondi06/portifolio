import React from 'react';
import '../styles/contact.css'; 
import { FaLinkedin, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="section-title">Contato</h1>

      <div className="contact-grid">
        <div className="left-column">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Meu Endereço</h3>
              <p>Rua Aristides Germano Montagnini</p>
              <p>Mogi das Cruzes, SP, Brasil</p>
            </div>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>E-mail</h3>
              <p>gustavomolinapessoa@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right-column">
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
