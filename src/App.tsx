import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './styles.css';  
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> 
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Educação</Link></li>
          <li><Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experiência</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projetos</Link></li>
          <li><Link to="/skills" onClick={() => setIsMenuOpen(false)}>Habilidades</Link></li>
          <li><Link to="/resume" onClick={() => setIsMenuOpen(false)}>Currículo</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
