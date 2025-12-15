//Module Imports
import { Canvas } from "@react-three/fiber";

//Custom Imports
import Earth from "./Earth"
import { Suspense } from "react";

//Style Imports

const Globe = () => {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <Earth/>
      </Suspense>
      <directionalLight position={[0, 1, 2]} color="white" />
    </Canvas>
  )
};

export default Globe;