import { Canvas } from "@react-three/fiber";
import 'tailwindcss/tailwind.css';
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      {/* <TitleName /> */}
      <Canvas shadows camera={{position: [0, 0, 10], fov: 30}}>
        <color attach={'background'} args={['#242424']} />
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
