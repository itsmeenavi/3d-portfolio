// src/components/Scene.js
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Planet from './Planet';
import { OrbitControls, Stars } from '@react-three/drei';

function RotatingGroup({ activePage, planetData }) {
  const groupRef = React.useRef();

  // Rotate the group of planets
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Adjust speed as needed
    }
  });

  return (
    <group ref={groupRef}>
      {planetData.map((planet, index) => (
        <Planet
          key={index}
          position={planet.position}
          texturePath={planet.texturePath}
          isActive={activePage === planet.name}
        />
      ))}
    </group>
  );
}

function Scene({ activePage }) {
  // Define planet data
  const planetData = [
    {
      name: 'Home',
      texturePath: '/textures/planet1.jpg',
      position: [5, 0, 0],
    },
    {
      name: 'About Me',
      texturePath: '/textures/planet2.jpg',
      position: [3.5, 3.5, 0],
    },
    {
      name: 'Projects',
      texturePath: '/textures/planet3.jpg',
      position: [0, 5, 0],
    },
    {
      name: 'Skills',
      texturePath: '/textures/planet4.jpg',
      position: [-3.5, 3.5, 0],
    },
    {
      name: 'Experience',
      texturePath: '/textures/planet5.jpg',
      position: [-5, 0, 0],
    },
    {
      name: 'Certificates',
      texturePath: '/textures/planet6.jpg',
      position: [-3.5, -3.5, 0],
    },
    {
      name: 'Resume',
      texturePath: '/textures/planet7.jpg',
      position: [0, -5, 0],
    },
    {
      name: 'Contact',
      texturePath: '/textures/planet8.jpg',
      position: [3.5, -3.5, 0],
    },
  ];

  return (
    <Canvas
      style={{ height: '100vh', width: '50vw' }}
      camera={{ position: [5, 0, 15], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingGroup activePage={activePage} planetData={planetData} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

export default Scene;
