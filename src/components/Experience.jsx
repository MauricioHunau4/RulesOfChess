import { Environment, OrbitControls, RoundedBox, Text, useCursor, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { Pawn } from "./Pawn"
import { Rook } from "./Rook"
import { Bishop } from "./Bishop"
import { King } from "./King"
import { Queen } from "./Queen"
import { Knight } from "./Knight"
import { useEffect, useState } from "react"
import { useSpring, a } from '@react-spring/three';

const pawnDetails = 'The pawn is one of the most important pieces in the game'

//Hacer condicional para cuando se vuelva a clickear el mismo objeto, pase a null pero con un setTimeout para que accione el roundedbox

const Experience = () => {
    const [active, setActive] = useState(null)
    const [hovered, setHovered] = useState(null)
    const [test, setTest] = useState(false)

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

    const handlePieces = (piece) => {
        setTest(!test)
        if(active === piece) setTimeout(() => {return setActive(null)}, 250)
        setActive(piece)
    }

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
            {active !== null && <RoundedBoxForEach test={test}>
                <Text
                    color="white"
                    fontSize={0.2}
                    maxWidth={3.6}
                    position={[0, 1.14, 0.2]}
                >
                    {active === 'pawn' && (pawnDetails)}
                    {active === 'rook' && 'The rook is one of the most important pieces in the game' }
                    {active === 'bishop' && 'The bishop is one of the most important pieces in the game' }
                    {active === 'king' && 'The king is one of the most important pieces in the game' }
                    {active === 'queen' && 'The queen is one of the most important pieces in the game' }
                    {active === 'knight' && 'The knight is one of the most important pieces in the game' }
                </Text>
            </RoundedBoxForEach>}
            <Pawn
                scale={scale.scalePawn}
                position-y={positionY.y}
                position-x={positionX.xPawn}
                onClick={()=>handlePieces('pawn')}
                onPointerEnter={() => setHovered('pawn')}
                onPointerLeave={() => setHovered(null)}
            />
            <Rook
                scale={scale.scaleRook}
                position-y={-1}
                position-x={positionX.xRook}
                onClick={()=>handlePieces('rook')}
                onPointerEnter={() => setHovered('rook')}
                onPointerLeave={() => setHovered(null)} />
            <Bishop
                scale={scale.scaleBishop}
                position-y={-1}
                position-x={positionX.xBishop}
                onClick={()=>handlePieces('bishop')}
                onPointerEnter={() => setHovered('bishop')}
                onPointerLeave={() => setHovered(null)} />
            <King
                scale={scale.scaleKing}
                position-y={-1}
                position-x={positionX.xKing}
                onClick={()=>handlePieces( 'king')}
                onPointerEnter={() => setHovered('king')}
                onPointerLeave={() => setHovered(null)} />
            <Queen
                scale={scale.scaleQueen}
                position-y={-1}
                position-x={positionX.xQueen}
                onClick={()=>handlePieces('queen')}
                onPointerEnter={() => setHovered('queen')}
                onPointerLeave={() => setHovered(null)} />
            <Knight
                scale={scale.scaleKnight}
                position-y={-1}
                position-x={positionX.xKnight}
                onClick={()=>handlePieces('knight')}
                onPointerEnter={() => setHovered('knight')}
                onPointerLeave={() => setHovered(null)} />
            <mesh>
                <sphereGeometry args={[6, 64, 64]} />
                <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>

        </>
    )
}

const RoundedBoxForEach = ({ children, test }) => {
    const [isUnmounted, setIsUnmounted] = useState(false);
    
    const positionAnimation = useSpring({
        from: { position: [0, isUnmounted? 0.3: 10, 0] },
        to: { position: [0, isUnmounted? -5.5 : 0.3, 0] },
      });

      useEffect(() => {
        if (!test) {
          // Si active pasa a ser null, establecemos isUnmounted en true para la última animación
          setIsUnmounted(true);
        }
      }, [test]);

    return (
        <a.group {...positionAnimation}>
            <RoundedBox
                args={[4, 3, 0.2]}
                material-color="black"
                radius={0.08} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4}>
                {children}
            </RoundedBox>
        </a.group>
    )
}

export default Experience