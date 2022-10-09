import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import pic1 from "../images/family2.jpg";
import pic2 from "../images/family.jpg";
import rey from "../images/rey.png";
import paradise from "../images/paradise.jpg";
import dumbledore from "../images/dumbledore.jpg";
import stillwater from "../images/Stillwater.jpg";

function Box() {
  const colorMap = useLoader(TextureLoader, pic1);
  const colorMap2 = useLoader(TextureLoader, pic2);
  const colorMap3 = useLoader(TextureLoader, rey);
  const colorMap4 = useLoader(TextureLoader, paradise);
  const colorMap5 = useLoader(TextureLoader, dumbledore);
  const colorMap6 = useLoader(TextureLoader, stillwater);

  
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <meshLambertMaterial attach="material" color="blue" /> */}
      <meshLambertMaterial attach="material-0" map={colorMap} />
      <meshLambertMaterial attach="material-1" map={colorMap2} />
      <meshLambertMaterial attach="material-2" map={colorMap3} />
      <meshLambertMaterial attach="material-3" map={colorMap4} />
      <meshLambertMaterial attach="material-4" map={colorMap5} />
      <meshLambertMaterial attach="material-5" map={colorMap6} />
    </mesh>
  );
}

export default Box;
