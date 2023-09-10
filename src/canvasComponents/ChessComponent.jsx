import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../components/Loader'
import { King, Queen, Pawn, Knight, Rook, Bishop } from '../components/ChessPieces'

export const ChessCanvasRook = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas 
                style={{ cursor: 'pointer' }}
                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Rook />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasQueen = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                style={{ cursor: 'pointer' }}
                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Queen />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasKing = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                style={{ cursor: 'pointer' }}
                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <King />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasKnight = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                style={{ cursor: 'pointer' }}

                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Knight />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasPawn = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                style={{ cursor: 'pointer' }}

                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Pawn />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasBishop = () => {
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                style={{ cursor: 'pointer' }}
                //frameloop="demand"
                shadows
                //the most important part because is from where are we looking from, {position:[x, y, z]}
                //to properly render the model
                gl={{ preserveDrawingBuffer: true }}
            >
                <perspectiveCamera position={[0, 0, 0]} fov={0} />
                <Suspense fallback={<CanvasLoader />}>
                    {/* allow us to  move the model left and right*/}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        //To permit rotate in a expecific angle, not up and down
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Bishop />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}
