import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './styles.css';  // Importa o estilo global

const App: React.FC = () => {
  return (
    <Router>
      {/* Menu de navegação horizontal e centralizado */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/education">Educação</Link></li>
          <li><Link to="/experience">Experiência</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/resume">Currículo</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>

      {/* Rotas para cada página */}
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
