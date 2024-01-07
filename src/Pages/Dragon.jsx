/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Prof.v7x (https://sketchfab.com/profesor_v7x)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dragon-boss-a8d48a46c4264148974a7b7c37087e94
Title: Dragon Boss
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import dragonScene from "../assets/3D/Dragon.glb";

const Dragon = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(dragonScene);
  const { actions, names } = useAnimations(animations, ref);

  useEffect(() => {
    // Ensure that both animations are loaded
    if (actions["Dragon_Boss_05_idle"] && actions["Dragon_Boss_05_skill05"]) {
      // Stop die animation when rotating
      actions["Dragon_Boss_05_skill05"].stop();

      // Play the idle animation when rotating
      if (isRotating) {
        actions["Dragon_Boss_05_idle"].play();
      } else {
        // Play the die animation when not rotating
        actions["Dragon_Boss_05_skill05"].play();
      }
    }
  }, [actions, isRotating]);

  useEffect(() => {
    return () => {
      actions["Dragon_Boss_05_idle"]?.stop();
      actions["Dragon_Boss_05_skill05"]?.stop();
    };
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;