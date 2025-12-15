//Module Imports
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";

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
      <Suspense fallback={null}>
        <EffectComposer smaa>
            <SSAO />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
};

export default Globe;