// Scene.js
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function Planet({ position, texturePath, rotationSpeed, isActive, shouldRotate }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, texturePath);

  useFrame(() => {
    if (shouldRotate) {
      // Rotate the planet for the animation
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Scene({ activeTab }) {
  const planetRefs = useRef([]);
  const rotationState = useRef({
    currentPlanet: -1,
    rotationStep: 0,
    isRotating: false,
  });

  // Positions for planets in a circular arrangement
  const planetPositions = [
    [3, 0, 0],
    [2.12, 0, 2.12],
    [0, 0, 3],
    [-2.12, 0, 2.12],
    [-3, 0, 0],
    [-2.12, 0, -2.12],
    [0, 0, -3],
    [2.12, 0, -2.12],
  ];

  // Map tabs to planet indices
  const tabPlanetMap = {
    home: 0,
    projects: 1,
    about: 2,
    // Add more mappings for additional tabs
  };

  const targetPlanetIndex = tabPlanetMap[activeTab] || 0;

  useEffect(() => {
    if (rotationState.current.isRotating) return;
    rotationState.current.isRotating = true;
    rotationState.current.rotationStep = 0;

    const interval = setInterval(() => {
      rotationState.current.currentPlanet =
        (rotationState.current.currentPlanet + 1) % planetPositions.length;
      rotationState.current.rotationStep += 1;

      if (rotationState.current.currentPlanet === targetPlanetIndex) {
        clearInterval(interval);
        rotationState.current.isRotating = false;
      }
    }, 500); // Adjust the delay as needed
  }, [activeTab]);

  return (
    <>
      {/* Planets */}
      {planetPositions.map((pos, index) => (
        <Planet
          key={index}
          position={pos}
          texturePath={`/textures/planet${index + 1}.jpg`}
          rotationSpeed={0.1}
          isActive={index === targetPlanetIndex}
          shouldRotate={
            index === rotationState.current.currentPlanet &&
            rotationState.current.isRotating
          }
        />
      ))}
    </>
  );
}

export default Scene;
