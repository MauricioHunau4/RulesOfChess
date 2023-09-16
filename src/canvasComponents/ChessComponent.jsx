import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import CanvasLoader from '../components/Loader'
import { King, Queen, Pawn, Knight, Rook, Bishop } from '../components/ChessPieces'
import { BishopDescription, KingDescription, KnightDescription, PawnDescription, QueenDescription, RookDescription } from "../components/ChessDescription"

// Hacer lo mismo con las otras piezas de ajedrez y agregar tablero

export const ChessCanvasRook = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)

    const handleClick = () => {
        if (clicked === 'rook') setClicked('')
        else {
            document.getElementById('rook').classList.add('animation-text')
            setClicked('rook')
        }
    }
    if (clicked === '' || clicked === 'rook')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="rook" className="flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
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
                {(clicked === 'rook') && <RookDescription />}
            </div>
        )
}

export const ChessCanvasQueen = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)

    const handleClick = () => {
        if (clicked === 'queen') setClicked('')
        else {
            document.getElementById('queen').classList.add('animation-text')
            setClicked('queen')
        }
    }
    if (clicked === '' || clicked === 'queen')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="queen" className="flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
                <Canvas
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        cursor: 'pointer',
                        width: clicked === 'queen' ? "30%" : "100%"
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
                        {(hover || clicked === 'queen') && (
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                                <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                            </mesh>
                        )}
                        <Queen />
                    </Suspense>
                    <Preload all />
                </Canvas>
                {(clicked === 'queen') && <QueenDescription />}
            </div>
        )
}

export const ChessCanvasKing = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)
    const handleClick = () => {
        if (clicked === 'king') setClicked('')
        else {
            document.getElementById('king').classList.add('animation-text')
            setClicked('king')
        }
    }
    if (clicked === '' || clicked === 'king')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="king" className="flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
                <Canvas
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        cursor: 'pointer',
                        width: clicked === 'king' ? "30%" : "100%"
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
                        {(hover || clicked === 'king') && (
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                                <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                            </mesh>
                        )}
                        <King />
                    </Suspense>
                    <Preload all />
                </Canvas>
                {(clicked === 'king') && <KingDescription />}
            </div>
        )
}

export const ChessCanvasKnight = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)
    const handleClick = () => {
        if (clicked === 'knight') setClicked('')
        else {
            document.getElementById('knight').classList.add('animation-text')
            setClicked('knight')
        }
    }
    if (clicked === '' || clicked === 'knight')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="knight" className=" flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
                <Canvas
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        cursor: 'pointer',
                        width: clicked === 'knight' ? "30%" : "100%"
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
                        {(hover || clicked === 'knight') && (
                            <mesh position={[0, 2, 0]}>
                                <coneGeometry args={[2.3, 6, 12]} /> {/* Configura los parámetros del cono aquí */}
                                <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                            </mesh>
                        )}
                        <Knight />
                    </Suspense>
                    <Preload all />
                </Canvas>
                {(clicked === 'knight') && <KnightDescription />}
            </div>
        )
}

export const ChessCanvasPawn = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)
    const handleClick = () => {
        if (clicked === 'pawn') setClicked('')
        else {
            document.getElementById('pawn').classList.add('animation-text')
            setClicked('pawn')
        }
    }

    if (clicked === '' || clicked === 'pawn')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="pawn" className=" flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
                <Canvas
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        cursor: 'pointer',
                        width: clicked === 'pawn' ? "30%" : "100%"
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
                        {(hover || clicked === 'pawn') && (
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                                <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                            </mesh>
                        )}
                        <Pawn />
                    </Suspense>
                    <Preload all />
                </Canvas>
                {(clicked === 'pawn') && <PawnDescription />}
            </div>
        )
}

export const ChessCanvasBishop = ({ setClicked, clicked }) => {
    const [hover, setHover] = useState(false)
    const handleClick = () => {
        if (clicked === 'bishop') setClicked('')
        else {
            document.getElementById('bishop').classList.add('animation-text')
            setClicked('bishop')
        }

    }

    if (clicked === '' || clicked === 'bishop')
        return (
            //The Canvas object is where you start to define your React Three Fiber Scene.
            <div id="bishop" className="flex gap-6" style={clicked === '' ? { width: '300px' } : { width: '100%' }}>
                <Canvas
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        cursor: 'pointer',
                        width: clicked === 'bishop' ? "30%" : "100%",
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
                        {(hover || clicked === 'bishop') && (
                            <mesh position={[0, 1.5, 0]}>
                                <coneGeometry args={[2, 5, 12]} /> {/* Configura los parámetros del cono aquí */}
                                <meshBasicMaterial color="white" transparent opacity={0.3} /> {/* Material para hacer el cono visible */}
                            </mesh>
                        )}
                        <Bishop />
                    </Suspense>
                    <Preload all />
                </Canvas>
                {(clicked === 'bishop') && <BishopDescription />}
            </div>
        )
}
