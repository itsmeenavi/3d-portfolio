// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Scene from './components/Scene';
import Home from './components/pages/Home';
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Certificates from './components/pages/Certificates';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPageContent = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About Me':
        return <Aboutme />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Certificates':
        return <Certificates />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="content-container">
        <div className="page-content">
          {renderPageContent()}
        </div>
        <div className="canvas-container">
          <Scene activePage={activePage} />
        </div>
      </div>
    </div>
  );
}

export default App;
