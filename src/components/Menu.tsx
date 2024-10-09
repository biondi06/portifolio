import React, { useState } from 'react';
import './Menu.css'; // Certifique-se de que os estilos do menu estão sendo importados

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      {/* Ícone do menu hamburguer para mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu de navegação */}
      <ul className={`menu ${isOpen ? 'show' : ''}`}>
        <li><button className="menu-button">Sobre</button></li>
        <li><button className="menu-button">Educação</button></li>
        <li><button className="menu-button">Projetos</button></li>
        <li><button className="menu-button">Contato</button></li>
      </ul>
    </nav>
  );
};

export default Menu;
