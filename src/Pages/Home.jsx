import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef, useEffect } from "react";
import Loader from "../Components/Loader";
import Island from "../models/Island";
import IslandTwo from "../models/Island2";
import Dragon from "./Dragon";

import Sky from "../models/Sky";
import HomeInfo from "../Components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let islandRotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -5.5, -43.4];
    } else {
      screenScale = [0.5, 0.5, 0.5];

      screenPosition = [-3, 8, -55];
    }
    return [screenScale, screenPosition, islandRotation];
  };

  const adjustDragonForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];

      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [dragonScale, dragonPosition, dragonRotation] =
    adjustDragonForScreenSize();

  //Model Two
  const adjustIslandTwoForScreenSize = () => {
    let screenScale, screenPosition;
    let islandRotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -5.5, -43.4];
    } else {
      screenScale = [0.05, 0.05, 0.05];
      screenPosition = [20, -20, -60];
    }
    return [screenScale, screenPosition, islandRotation];
  };

  const [islandTwoScale, islandTwoPosition, islandTwoRotation] =
    adjustIslandTwoForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={2}
            position={[0, 50, 0]}
          />
          <Sky />
          <Dragon
            isRotating={isRotating}
            dragonScale={dragonScale}
            dragonPosition={dragonPosition}
            rotation={[0, 20, 0]}
          />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>{" "}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
            position={[0, 50, 0]}
          />

          <IslandTwo
            scale={islandTwoScale}
            position={islandTwoPosition}
            rotation={islandTwoRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
