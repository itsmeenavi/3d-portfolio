// App.js
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Sphere, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import helvetikerFont from './fonts/helvetiker_bold.typeface.json';

// Text component for the glowing sun
function GlowingText() {
  return (
    <Center> {/* Centers the text in the scene */}
      <Text3D
        font={helvetikerFont} // Path to your font file
        size={2} // Size of the text
        height={0.4} // Thickness of the text
        curveSegments={12} // Smoothness of the text curves
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
      >
        Ivhan
        <meshStandardMaterial
          emissive="#FF4500" // Orange glow effect
          emissiveIntensity={1.5} // Glow intensity
          color="#FF6500" // Base color for the text
        />
      </Text3D>
    </Center>
  );
}

// Planet component that revolves around the sun
function Planet({ distance, size, speed, texture }) {
  const planetRef = useRef();
  const planetTexture = useLoader(TextureLoader, texture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    planetRef.current.position.x = distance * Math.sin(t);
    planetRef.current.position.z = distance * Math.cos(t);
  });

  return (
    <Sphere ref={planetRef} args={[size, 32, 32]}>
      <meshStandardMaterial map={planetTexture} />
    </Sphere>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}> {/* Black background */}
      <Canvas style={{ height: '100vh' }}>
        <ambientLight intensity={0.6} /> {/* Soft ambient light for the scene */}
        <pointLight position={[0, 0, 0]} intensity={2} distance={20} color="#FF4500" /> {/* Light source for sun */}

        {/* Sun (glowing text) */}
        <GlowingText />

        {/* Solar system planets with textures */}
        <Planet distance={3} size={0.3} speed={1.6} texture='/textures/mercury.jpg' />  {/* Mercury */}
        <Planet distance={5} size={0.5} speed={1.2} texture='/textures/venus.jpg' />    {/* Venus */}
        <Planet distance={8} size={0.6} speed={1} texture='/textures/earth.jpg' />      {/* Earth */}
        <Planet distance={12} size={0.3} speed={0.8} texture='/textures/mars.jpg' />    {/* Mars */}
        <Planet distance={20} size={1.2} speed={0.4} texture='/textures/jupiter.jpg' /> {/* Jupiter */}
        <Planet distance={28} size={1.0} speed={0.3} texture='/textures/saturn.jpg' />  {/* Saturn */}
        <Planet distance={35} size={0.7} speed={0.2} texture='/textures/uranus.jpg' />  {/* Uranus */}
        <Planet distance={45} size={0.6} speed={0.1} texture='/textures/neptune.jpg' /> {/* Neptune */}

        {/* Stars in the background */}
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />

        <OrbitControls /> {/* Allows you to manually rotate the scene */}
      </Canvas>
    </div>
  );
}

export default App;
