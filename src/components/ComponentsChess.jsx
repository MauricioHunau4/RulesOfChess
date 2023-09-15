import { useState } from "react"
import { ChessCanvasRook, ChessCanvasQueen, ChessCanvasKing, ChessCanvasKnight, ChessCanvasPawn, ChessCanvasBishop } from "../canvasComponents/ChessComponent"

const ComponentsChess = () => {
    const [clicked, setClicked] = useState('')

    return (
        <div className="flex" style={clicked === '' ? {height: '50%' } : {height: '100%'}}>
            <ChessCanvasRook setClicked={setClicked} clicked={clicked}/>
            <ChessCanvasQueen setClicked={setClicked} clicked={clicked}/>
            <ChessCanvasKing setClicked={setClicked} clicked={clicked}/>
            <ChessCanvasKnight setClicked={setClicked} clicked={clicked}/>
            <ChessCanvasBishop setClicked={setClicked} clicked={clicked}/>
            <ChessCanvasPawn setClicked={setClicked} clicked={clicked}/>
        </div>
    )
}
export default ComponentsChess