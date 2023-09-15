import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import CanvasLoader from '../components/Loader'
import { King, Queen, Pawn, Knight, Rook, Bishop } from '../components/ChessPieces'

// Hacer lo mismo con las otras piezas de ajedrez y agregar tablero

export const ChessCanvasRook = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)

    const handleClick = () => {
        if (clicked === 'rook') setClicked('')
        else setClicked('rook')
    }
    if(clicked === '' || clicked === 'rook')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <div className="flex w-full gap-6">
            <Canvas
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    cursor: 'pointer',
                    width: clicked === 'rook' ? "30%" : "100%"
                }}
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
                    {(hover || clicked === 'rook') && (
                        <mesh position={[0, 1.5, 0]}>
                            <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <Rook clicked={clicked} />
                </Suspense>
                <Preload all />
            </Canvas>
           { clicked === 'rook' && (
           <div className="text-center w-3/4 animation-text">
                <h1>
                    The rook
                </h1>
                <ul className="text-left w-full leading-loose overflow-auto " style={{height: '700px'}}>
                    <li><strong>Appearance:</strong><p> Rooks are typically represented as rectangular-shaped pieces with a castle-like appearance.</p></li>
                    <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with two rooks. The rooks are placed in the corners of the board. The rooks on the a1 and h1 squares are usually called "queen-side rook" and "king-side rook," respectively, for White, while the corresponding rooks for Black are on a8 and h8.</p></li>
                    <li><strong>Movement</strong>:<p> Rooks move vertically (up and down) or horizontally (left and right) across the chessboard but cannot move diagonally. They can move any number of squares in these directions, as long as there are no other pieces in their path.</p></li>
                    <li><strong>Capture</strong>:<p> Rooks capture enemy pieces by moving to the square occupied by the opponent's piece, just like in their normal movement. If a rook captures an opponent's piece, that piece is removed from the board.</p></li>
                    <li><strong>Castling</strong>:<p> Rooks are involved in a special chess move called "castling." Castling is a move that involves the king and one of the rooks. The king and the rook move simultaneously, and it's subject to specific conditions: 
                        <ul className="list-disc">
                            <li className="ms-12">The king and the chosen rook have not moved previously in the game.</li>
                            <li className="ms-12">There are no pieces between the king and the rook.</li>
                            <li className="ms-12">The king is not in check.</li>
                            <li className="ms-12">The squares the king moves across or lands on during castling are not under attack.</li>
                        </ul>
                        Castling can occur on the king-side (short castling) or queen-side (long castling). It's a strategic move to improve the king's safety and connect the rooks.
                        </p>
                    </li>
                    <li><strong>Value</strong>:<p> Rooks are generally considered more valuable than knights and pawns but less valuable than queens. Their value lies in their ability to control open files (vertical or horizontal lines on the board) and their potential to create threats and combinations.</p></li>
                    <li><strong>Endgame</strong>:<p> In the endgame (when there are fewer pieces on the board), rooks become extremely powerful because they can dominate open files and control a significant portion of the board. Two rooks working together can often checkmate the opponent's king.</p></li>
                
                </ul>
            </div>)}
        </div>
    )
}

export const ChessCanvasQueen = ({setClicked, clicked}) => {
    const [hover, setHover] = useState(false)

    const handleClick = () => {
        if (clicked === 'queen') setClicked('')
        else setClicked('queen')
    }
    if(clicked === ''|| clicked === 'queen')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <div className="w-full flex">
            <Canvas
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
                    {hover && (
                        <mesh position={[0, 1.5, 0]}>
                            <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <Queen />
                </Suspense>
                <Preload all />
            </Canvas>
            { clicked === 'queen' && (
           <div className="text-center w-3/4 animation-text">
                <h1>
                    The queen
                </h1>
                <ul className="text-left w-full leading-loose overflow-auto " style={{height: '700px'}}>
                    <li><strong>Appearance:</strong><p> Rooks are typically represented as rectangular-shaped pieces with a castle-like appearance.</p></li>
                    <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with two rooks. The rooks are placed in the corners of the board. The rooks on the a1 and h1 squares are usually called "queen-side rook" and "king-side rook," respectively, for White, while the corresponding rooks for Black are on a8 and h8.</p></li>
                    <li><strong>Movement</strong>:<p> Rooks move vertically (up and down) or horizontally (left and right) across the chessboard but cannot move diagonally. They can move any number of squares in these directions, as long as there are no other pieces in their path.</p></li>
                    <li><strong>Capture</strong>:<p> Rooks capture enemy pieces by moving to the square occupied by the opponent's piece, just like in their normal movement. If a rook captures an opponent's piece, that piece is removed from the board.</p></li>
                    <li><strong>Castling</strong>:<p> Rooks are involved in a special chess move called "castling." Castling is a move that involves the king and one of the rooks. The king and the rook move simultaneously, and it's subject to specific conditions: 
                        <ul className="list-disc">
                            <li className="ms-12">The king and the chosen rook have not moved previously in the game.</li>
                            <li className="ms-12">There are no pieces between the king and the rook.</li>
                            <li className="ms-12">The king is not in check.</li>
                            <li className="ms-12">The squares the king moves across or lands on during castling are not under attack.</li>
                        </ul>
                        Castling can occur on the king-side (short castling) or queen-side (long castling). It's a strategic move to improve the king's safety and connect the rooks.
                        </p>
                    </li>
                    <li><strong>Value</strong>:<p> Rooks are generally considered more valuable than knights and pawns but less valuable than queens. Their value lies in their ability to control open files (vertical or horizontal lines on the board) and their potential to create threats and combinations.</p></li>
                    <li><strong>Endgame</strong>:<p> In the endgame (when there are fewer pieces on the board), rooks become extremely powerful because they can dominate open files and control a significant portion of the board. Two rooks working together can often checkmate the opponent's king.</p></li>
                
                </ul>
            </div>)}
        </div>
    )
}

export const ChessCanvasKing = ({clicked}) => {
    const [hover, setHover] = useState(false)
    if(clicked === ''|| clicked === 'king')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
                    {hover && (
                        <mesh position={[0, 1.5, 0]}>
                            <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <King />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasKnight = ({clicked}) => {
    const [hover, setHover] = useState(false)
    if(clicked === ''|| clicked === 'knight')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
                    {hover && (
                        <mesh position={[0, 2, 0]}>
                            <coneGeometry args={[2.3, 6, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <Knight />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasPawn = ({clicked}) => {
    const [hover, setHover] = useState(false)
    if(clicked === ''|| clicked === 'pawn')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
                    {hover && (
                        <mesh position={[0, 1.5, 0]}>
                            <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <Pawn />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}

export const ChessCanvasBishop = ({clicked}) => {
    const [hover, setHover] = useState(false)
    if(clicked === '' || clicked === 'bishop')
    return (
        //The Canvas object is where you start to define your React Three Fiber Scene.
        <>
            <Canvas
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
                    {hover && (
                        <mesh position={[0, 1.5, 0]}>
                            <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                            <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                        </mesh>
                    )}
                    <Bishop />
                </Suspense>
                <Preload all />
            </Canvas>
        </>
    )
}
