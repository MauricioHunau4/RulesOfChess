import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();
    return (
        <Html>
           <span className="canvas-load"> </span>
           <p
           className="font-Royale text-white text-5xl"
           >{progress.toFixed(2)}%</p>
        </Html>
    )
}
export default Loader