import { Environment, OrbitControls, useCursor, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { Pawn } from "./Pawn"
import { Rook } from "./Rook"
import { Bishop } from "./Bishop"
import { King } from "./King"
import { Queen } from "./Queen"
import { Knight } from "./Knight"
import { useState } from "react"
import { useSpring } from '@react-spring/three';

const Experience = () => {
    const [active, setActive] = useState(null)
    const [hovered, setHovered] = useState(null)
    useCursor(hovered)
    const scale = useSpring({
        scalePawn: active !== null && active !== 'pawn' ? [0, 0, 0] : active === 'pawn' ? [0.2, 0.2, 0.2] : [0.08, 0.08, 0.08],
        scaleRook: active !== null && active !== 'rook' ? [0, 0, 0] : active === 'rook' ? [1.7, 1.7, 1.7] : [0.7, 0.7, 0.7],
        scaleBishop: active !== null && active !== 'bishop' ? [0, 0, 0] : active === 'bishop' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleKing: active !== null && active !== 'king' ? [0, 0, 0] : active === 'king' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleQueen: active !== null && active !== 'queen' ? [0, 0, 0] : active === 'queen' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleKnight: active !== null && active !== 'knight' ? [0, 0, 0] : active === 'knight' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
    })

    const positionY = useSpring({
        y: active === 'pawn' ? 0 : -0.61,
    });

    const positionX = useSpring({
        xPawn: active === 'pawn' ? -3.5 : -2.5,
        xRook: active === 'rook' ? -3.5 : -1.5,
        xQueen: active === 'queen' ? -3.5 : 1.5,
        xKing: active === 'king' ? -3.5 : 2.5,
        xKnight: active === 'knight' ? -3.5 : -0.5,
        xBishop: active === 'bishop' ? -3.5 : 0.5,
    });

    const map = useTexture('/textures/Realism.jpg')

    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                zoom={0}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 2.5} />
            <Pawn
                scale={scale.scalePawn}
                position-y={positionY.y}
                position-x={positionX.xPawn}
                onClick={() => setActive(active === 'pawn' ? null : 'pawn')}
                onPointerEnter={() => setHovered('pawn')}
                onPointerLeave={() => setHovered(null)}
            />
            <Rook
                scale={scale.scaleRook}
                position-y={-1}
                position-x={positionX.xRook}
                onClick={() => setActive(active === 'rook' ? null : 'rook')}
                onPointerEnter={() => setHovered('rook')}
                onPointerLeave={() => setHovered(null)} />
            <Bishop
                scale={scale.scaleBishop}
                position-y={-1}
                position-x={positionX.xBishop}
                onClick={() => setActive(active === 'bishop' ? null : 'bishop')}
                onPointerEnter={() => setHovered('bishop')}
                onPointerLeave={() => setHovered(null)} />
            <King
                scale={scale.scaleKing}
                position-y={-1}
                position-x={positionX.xKing}
                onClick={() => setActive(active === 'king' ? null : 'king')}
                onPointerEnter={() => setHovered('king')}
                onPointerLeave={() => setHovered(null)} />
            <Queen
                scale={scale.scaleQueen}
                position-y={-1}
                position-x={positionX.xQueen}
                onClick={() => setActive(active === 'queen' ? null : 'queen')}
                onPointerEnter={() => setHovered('queen')}
                onPointerLeave={() => setHovered(null)} />
            <Knight
                scale={scale.scaleKnight}
                position-y={-1}
                position-x={positionX.xKnight}
                onClick={() => setActive(active === 'knight' ? null : 'knight')}
                onPointerEnter={() => setHovered('knight')}
                onPointerLeave={() => setHovered(null)} />
            <mesh>
                <sphereGeometry args={[6, 64, 64]} />
                <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>

        </>
    )
}

const ChangeView = () => {

}



export default Experience