import React, { useState } from 'react';
import './Menu.css'; 

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

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
