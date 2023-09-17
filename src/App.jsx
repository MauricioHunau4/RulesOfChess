import { ChessCanvasBoard } from "./canvasComponents/ChessComponent";
import ComponentsChess from "./components/ComponentsChess";
import TitleName from "./components/TitleName"
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <TitleName />
      <ComponentsChess/>
      <ChessCanvasBoard />
    </div>
  )
}

export default App
