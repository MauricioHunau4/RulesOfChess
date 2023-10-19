import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

export function Bishop(props) {
  const { nodes, materials } = useGLTF('/chess_pieces/bishop/scene.gltf')
  const groupRef = useRef();

  useFrame(() => {
      // Rotar la escena continuamente
      //Puedes ajustar la velocidad de rotación aquí
      groupRef.current.rotation.z += 0.005;
  });

  return (
    <a.group {...props} dispose={null}>
      <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
        <mesh geometry={nodes.Chess_Bishop_0.geometry} ref={groupRef} material={materials.Root} position={[-0.006, 0, 2.832]} />
      </a.group>
    </a.group>
  )
}

useGLTF.preload('/chess_pieces/bishop/scene.gltf')
