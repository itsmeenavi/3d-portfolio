// App.js
import React, { useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleTabClick('home')}>Home</li>
          <li onClick={() => handleTabClick('projects')}>Projects</li>
          <li onClick={() => handleTabClick('about')}>About Me</li>
          {/* Add more tabs as needed */}
        </ul>
      </nav>

      {/* Greeting */}
      {activeTab === 'home' && (
        <div className="greeting">
          <h1>Hi, I am Navi</h1>
        </div>
      )}

      {/* 3D Scene */}
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Scene activeTab={activeTab} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
