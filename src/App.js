// App.js
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import helvetikerFont from './fonts/helvetiker_bold.typeface.json'; // Use the font you downloaded

function SpinningText() {
  return (
    <Center> {/* Centers the text in the scene */}
      <Text3D
        font={helvetikerFont} // Path to your font file
        size={1} // Size of the text
        height={0.2} // Thickness of the text
        curveSegments={12} // Smoothness of the text curves
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
      >
        Ivhan
        <meshStandardMaterial color="#FF6500" /> {/* Orange color for the text */}
        <meshBasicMaterial wireframe color="#FFFFFF" /> {/* White outline for the text */}
      </Text3D>
    </Center>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#1E3E62', height: '100vh' }}> {/* Dark blue background */}
      <Canvas style={{ height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningText />
        <OrbitControls /> {/* Allows you to manually rotate the scene */}
      </Canvas>
      <div className="overlay">
        <h1 style={{ color: '#FF6500' }}>We</h1> {/* Orange title text */}
      </div>
    </div>
  );
}

export default App;
