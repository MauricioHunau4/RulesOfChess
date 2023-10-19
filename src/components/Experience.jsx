import { CameraControls, Environment, OrbitControls, RoundedBox, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { Pawn } from "./Pawn"
import { Rook } from "./Rook"
import { Bishop } from "./Bishop"
import { King } from "./King"
import { Queen } from "./Queen"
import { Knight } from "./Knight"
import { useState } from "react"
import { useSpring, a } from '@react-spring/three';

const Experience = () => {
    const [active, setActive] = useState(null)

    //Condicional si active !== null && active !== nombrePiezaSeleccionada entonces scale === [0, 0, 0]
    

    const scale = useSpring({
        scalePawn: active === 'pawn' ? [0.3, 0.3, 0.3] : [0.08, 0.08, 0.08],
        scaleRook: active === 'rook' ? [1.7, 1.7, 1.7] : [0.7, 0.7, 0.7],
        scaleBishop: active === 'bishop' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleKing: active === 'king' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleQueen: active === 'queen' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
        scaleKnight: active === 'knight' ? [1.5, 1.5, 1.5] : [0.7, 0.7, 0.7],
    })

    const positionY = useSpring({
        y: active === 'pawn' ? 0 : -0.61,
    });

    const positionX = useSpring({
        xRook: active === 'rook' ? -3 : -2,
        xQueen: active === 'queen' ? -3 : 1,
        xKing: active === 'king' ? -3 : 2,
        xKnight: active === 'knight' ? -3 : -1,
        xBishop: active === 'bishop' ? -3 : 0,
    });

    const map = useTexture('/textures/Realism.jpg')

    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <OrbitControls />
            <Pawn scale={scale.scalePawn} position-y={positionY.y} position-x={-3} onDoubleClick={() => setActive(active === 'pawn' ? null : 'pawn')} />
            <Rook scale={scale.scaleRook} position-y={-1} position-x={positionX.xRook} onDoubleClick={() => setActive(active === 'rook' ? null : 'rook')} />
            <Bishop scale={scale.scaleBishop} position-y={-1} position-x={positionX.xBishop} onDoubleClick={() => setActive(active === 'bishop' ? null : 'bishop')} />
            <King scale={scale.scaleKing} position-y={-1} position-x={positionX.xKing} onDoubleClick={() => setActive(active === 'king' ? null : 'king')} />
            <Queen scale={scale.scaleQueen} position-y={-1} position-x={positionX.xQueen} onDoubleClick={() => setActive(active === 'queen' ? null : 'queen')} />
            <Knight scale={scale.scaleKnight} position-y={-1} position-x={positionX.xKnight} onDoubleClick={() => setActive(active === 'knight' ? null : 'knight')} />
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