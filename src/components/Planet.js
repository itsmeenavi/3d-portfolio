// In Planet.js
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Planet({ position, texturePath, isActive }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, texturePath);

  useFrame(() => {
    // Rotate planet on its axis
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[isActive ? 1.5 : 1, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissive={isActive ? 0x444444 : 0x000000}
        emissiveIntensity={isActive ? 0.5 : 0}
      />
    </mesh>
  );
}

export default Planet;
