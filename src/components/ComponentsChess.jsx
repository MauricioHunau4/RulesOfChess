import { useState } from "react"
import { ChessCanvasRook, ChessCanvasQueen, ChessCanvasKing, ChessCanvasKnight, ChessCanvasPawn, ChessCanvasBishop } from "../canvasComponents/ChessComponent"

const ComponentsChess = () => {
    const [clicked, setClicked] = useState('')
    
    return (
        <div className="flex h-full">
            <ChessCanvasRook onClick={()=>setClicked('rook')}/>
            <ChessCanvasQueen onClick={()=>setClicked('queen')}/>
            <ChessCanvasKing onClick={()=>setClicked('king')}/>
            <ChessCanvasKnight onClick={()=>setClicked('knight')}/>
            <ChessCanvasPawn onClick={()=>setClicked('pawn')}/>
            <ChessCanvasBishop onClick={()=>setClicked('bishop')}/>
        </div>
    )
}
export default ComponentsChess