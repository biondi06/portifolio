import React from "react";
import "./App.css";
import Background from "./components/Background";
import Dock from "./components/Dock";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RevealController from "./components/RevealController";

const App: React.FC = () => (
  <>
    <Background />
    <RevealController />
    <Dock />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </>
);

export default App;
