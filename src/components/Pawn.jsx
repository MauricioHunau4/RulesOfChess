import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

export function Pawn(props) {
  const { nodes, materials } = useGLTF('/chess_pieces/pawn/scene.gltf')
  const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí
        groupRef.current.rotation.y += 0.005;
    });

  return (
    <a.group {...props} dispose={null}>
      <a.mesh  geometry={nodes.pCylinder2_lambert1_0.geometry} ref={groupRef} material={materials.lambert1} />
    </a.group>
  )
}

useGLTF.preload('/chess_pieces/pawn/scene.gltf')
