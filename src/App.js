import './App.css';
import { Canvas } from "@react-three/fiber";
import Box from './components/Box';
import Plane from './components/Plane';
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
     <Canvas className="canvas" style={{height: "800px"}} shadowMap={true}>
      <OrbitControls enableZoom={true} autoRotate={true} rotateSpeed={.8} />
      <ambientLight intensity={0.3} castShadow={true}/>
      <pointLight position={[10, 10, 10]} castShadow={true}/>
      <directionalLight position={[-2, 5, 2]} intensity={1} castShadow={true}/>
      <Box className="box" castShadow={true}/>
     
     </Canvas>
     <Canvas shadowMap={true}>
     <Plane receiveShadow={true}/>
     </Canvas>
    </div>
  );
}

export default App;
