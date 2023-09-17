import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Rook = ({clicked}) => {
    const rook = useGLTF('./chess_pieces/rook/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí
        groupRef.current.rotation.y += 0.002;
    });
    
    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <>
            <mesh ref={groupRef}>
                {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
                <hemisphereLight intensity={2}
                    groundColor='black' />

                {/* A light that gets emitted from a single point in all directions.  */}
                {/* <pointLight intensity={1} /> */}

                <primitive
                    object={rook.scene}
                    scale={2}
                    position={[0, -1, 0]}
                    rotation={[0.05, 0, 0]}
                />
            </mesh>
        </>
    )
}

export const Queen = () => {
    const queen = useGLTF('./chess_pieces/queen/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí

        groupRef.current.rotation.y += 0.002;
    });

    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <>
            <mesh ref={groupRef}>
                {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
                <hemisphereLight intensity={2}
                    groundColor='black' />
                {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
                <primitive
                    object={queen.scene}
                    scale={2}
                    position={[0, -1, 0]}
                    rotation={[0.05, 0, 0]} />
            </mesh>
        </>
    )
}

export const King = () => {
    const king = useGLTF('./chess_pieces/king/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí

        groupRef.current.rotation.y += 0.002;
    });

    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <mesh ref={groupRef}>
            {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
            <hemisphereLight intensity={2}
                groundColor='grey' />

            {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
            <primitive
                object={king.scene}
                scale={2}
                position={[0, -1, 0]}
                rotation={[0.05, 0, 0]} />
        </mesh>
    )
}

export const Knight = () => {
    const knight = useGLTF('./chess_pieces/knight/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí

        groupRef.current.rotation.y += 0.002;
    });
    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <>
            <mesh ref={groupRef}>
                {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
                <hemisphereLight intensity={2}
                    groundColor='black' />
                {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
                <primitive
                    object={knight.scene}
                    scale={2}
                    position={[0, -1, 0]}
                    rotation={[0.05, 0, 0]} />
            </mesh>
        </>
    )
}

export const Bishop = () => {
    const bishop = useGLTF('./chess_pieces/bishop/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí

        groupRef.current.rotation.y += 0.002;
    });
    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <>
            <mesh ref={groupRef}>
                {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
                <hemisphereLight intensity={4}
                    groundColor='black' />
                {/* <spotLight 
                    position={[-20, 50, 10]}
                    angle={0.5}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    /> */}

                {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
                <primitive
                    object={bishop.scene}
                    scale={2}
                    position={[0, -1, 0]}
                    rotation={[0.05, 0, 0]} />
            </mesh>
        </>
    )
}

export const Pawn = () => {
    const pawn = useGLTF('./chess_pieces/pawn/scene.gltf')
    const groupRef = useRef();

    useFrame(() => {
        // Rotar la escena continuamente
        //Puedes ajustar la velocidad de rotación aquí

        groupRef.current.rotation.y += 0.002;
    });
    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <>
            <mesh ref={groupRef}>
                {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
                <hemisphereLight intensity={4}
                    groundColor='black' />
                {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
                <primitive
                    object={pawn.scene}
                    scale={0.24}
                    position={[0, 0.14, 0]}
                    rotation={[0.05, 0, 0]} />
            </mesh>
        </>
    )
}


export const Board = () => {
    const board = useGLTF('./chess_pieces/board/scene.gltf')

    return (
        // To actually see something in our scene, we'll add a lowercase <mesh /> native element, 
        //is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
        <mesh>
            {/* A light source positioned directly above the scene, with color fading from the sky color to the ground color. */}
            <hemisphereLight intensity={2}
                groundColor='grey' />

            {/* A light that gets emitted from a single point in all directions. 
                <pointLight intensity={1} />
                */}
            <primitive
                object={board.scene}
                scale={0.1}
                position={[0, 0, 0]}
                rotation={[-5, 0, 0]} />
        </mesh>
    )
}