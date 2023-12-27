import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../Components/Loader";
import Island from "../models/Island";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    // let islandRotation = [0.2, 24, 2];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [0.25, 0.25, 0.25];
      screenPosition = [0, -6.5, -43.4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Popop
      </div> */}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight />
          <spotLight />
          <directionalLight />
          <pointLight />
          <hemisphereLight />

          <Island
            position={islandPosition}
            scale={islandScale}
            // rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
