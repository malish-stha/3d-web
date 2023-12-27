/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Animateria (https://sketchfab.com/Animateria)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/volcano-island-lowpoly-4a6591dc9fee40d8bfda8350683af9af
Title: Volcano Island Lowpoly
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3D/island.glb";

const Island = (props) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        position={[180.509, 1151.676, 5904.325]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        position={[3492.547, 1112.371, 3620.925]}
        rotation={[-1.38, 0.112, -0.022]}
        scale={100}
      />
      <mesh
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        position={[3541.67, 1110.094, 3568.021]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100.041}
      />
      <mesh
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100.041}
      />
    </a.group>
  );
};

useGLTF.preload("/volcano_island_lowpoly.glb");

export default Island;
