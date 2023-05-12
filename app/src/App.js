import React from 'react';

import About from './components/about/about';
import Projects from './components/projects';
import Contact from './components/contact';

import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavItemClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="app">
      <header>
        <h1>Christian Rodriguez</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleNavItemClick('about')}>About</button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
