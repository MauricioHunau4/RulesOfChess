export const RookDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The rook
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> Rooks are typically represented as rectangular-shaped pieces with a castle-like appearance.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with two rooks. The rooks are placed in the corners of the board. The rooks on the a1 and h1 squares are usually called "queen-side rook" and "king-side rook," respectively, for White, while the corresponding rooks for Black are on a8 and h8.</p></li>
                <li><strong>Movement</strong>:<p> Rooks move vertically (up and down) or horizontally (left and right) across the chessboard but cannot move diagonally. They can move any number of squares in these directions, as long as there are no other pieces in their path.</p></li>
                <li><strong>Capture</strong>:<p> Rooks capture enemy pieces by moving to the square occupied by the opponent's piece, just like in their normal movement. If a rook captures an opponent's piece, that piece is removed from the board.</p></li>
                <li><strong>Castling</strong>: Rooks are involved in a special chess move called "castling." Castling is a move that involves the king and one of the rooks. The king and the rook move simultaneously, and it's subject to specific conditions:
                    <ul className="list-disc">
                        <li className="ms-12">The king and the chosen rook have not moved previously in the game.</li>
                        <li className="ms-12">There are no pieces between the king and the rook.</li>
                        <li className="ms-12">The king is not in check.</li>
                        <li className="ms-12">The squares the king moves across or lands on during castling are not under attack.</li>
                    </ul>
                    Castling can occur on the king-side (short castling) or queen-side (long castling). It's a strategic move to improve the king's safety and connect the rooks.
                </li>
                <li><strong>Value</strong>:<p> Rooks are generally considered more valuable than knights and pawns but less valuable than queens. Their value lies in their ability to control open files (vertical or horizontal lines on the board) and their potential to create threats and combinations.</p></li>
                <li><strong>Endgame</strong>:<p> In the endgame (when there are fewer pieces on the board), rooks become extremely powerful because they can dominate open files and control a significant portion of the board. Two rooks working together can often checkmate the opponent's king.</p></li>

            </ul>
        </div>
    )
}

export const QueenDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The queen
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> The queen is represented as a tall, regal piece with a crown-like appearance.</p></li>
                <li><strong>Starting position</strong>:<p>  In a standard chess game, each player starts with one queen. For White, the queen starts on the d1 square, and for Black, the queen starts on the d8 square.</p></li>
                <li><strong>Movement</strong>: The queen possesses remarkable freedom of movement and is the most versatile piece on the chessboard. It can move:
                    <ul className="list-disc">
                        <li className="ms-12">Vertically (up and down)</li>
                        <li className="ms-12">Horizontally (left and right)</li>
                        <li className="ms-12">Diagonally (in any direction)</li>
                    </ul>
                    The queen can move any number of squares in these directions as long as there are no other pieces obstructing its path.
                </li>
                <li><strong>Capture</strong>:<p> The queen captures enemy pieces by moving to the square occupied by the opponent's piece, similar to its normal movement. When capturing, the queen removes the captured piece from the board.</p></li>
                <li><strong>Value</strong>:<p> The queen is the most valuable piece on the chessboard, second only to the king in importance. It is often considered to be worth approximately nine points due to its immense mobility and ability to control various parts of the board.</p></li>
                <li><strong>Strategic importance</strong>:<p> Throughout the game, players often aim to develop their queen early, as it can play an active role in both offense and defense. However, bringing the queen out too early can make it vulnerable to attacks, so players must balance their strategy.</p></li>
                <li><strong>Endgame</strong>:<p>  In the endgame, the queen remains a powerful piece. It can deliver checkmates on its own or work in conjunction with other pieces to create powerful combinations. The queen's ability to control long diagonals and ranks and files makes it a formidable force in the endgame, where precise coordination and tactics become crucial.</p></li>
            </ul>
        </div>
    )
}

export const BishopDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The bishop
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> Bishops are typically represented as tall, pointed pieces with a mitre-like appearance.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with two bishops. One bishop starts on a light square, and the other starts on a dark square. For White, the bishops start on the c1 and f1 squares, and for Black, the bishops start on the c8 and f8 squares.</p></li>
                <li><strong>Movement</strong>:<p> Bishops move diagonally across the chessboard. They can move any number of squares in these directions, as long as there are no other pieces obstructing their path.</p></li>
                <li><strong>Capture</strong>:<p> Bishops capture enemy pieces by moving to the square occupied by the opponent's piece, similar to their normal movement. When capturing, the bishop removes the captured piece from the board.</p></li>
                <li><strong>Value</strong>:<p> Bishops are generally considered more valuable than knights and pawns but less valuable than rooks and queens. Their value lies in their ability to control long diagonals and their potential to create threats and combinations.</p></li>
                <li><strong>Strategic importance</strong>:<p> Bishops are often developed early in the game to control the center of the board and attack the opponent's pieces. However, bringing the bishops out too early can make them vulnerable to attacks, so players must balance their strategy.</p></li>
                <li><strong>Endgame</strong>:<p> In the endgame, bishops become extremely powerful because they can control long diagonals and a significant portion of the board. Two bishops working together can often checkmate the opponent's king.</p></li>
            </ul>
        </div>
    )
}

export const KnightDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The knight
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> Knights are typically represented as horse-like pieces.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with two knights. The knights are placed next to the bishops, and they are the only pieces that can jump over other pieces. For White, the knights start on the b1 and g1 squares, and for Black, the knights start on the b8 and g8 squares.</p></li>
                <li><strong>Movement</strong>:<p> Knights move in an "L" shape, two squares in one direction and then one square in a perpendicular direction. They can move to any square on the board as long as it's not occupied by a friendly piece. Knights are the only pieces that can jump over other pieces.</p></li>
                <li><strong>Capture</strong>:<p> Knights capture enemy pieces by moving to the square occupied by the opponent's piece, similar to their normal movement. When capturing, the knight removes the captured piece from the board.</p></li>
                <li><strong>Value</strong>:<p> Knights are generally considered less valuable than bishops and rooks but more valuable than pawns. Their value lies in their ability to control the center of the board and their potential to create threats and combinations.</p></li>
                <li><strong>Strategic importance</strong>:<p> Knights are often developed early in the game to control the center of the board and attack the opponent's pieces. However, bringing the knights out too early can make them vulnerable to attacks, so players must balance their strategy.</p></li>
                <li><strong>Endgame</strong>:<p> In the endgame, knights become extremely powerful because they can control a significant portion of the board. Two knights working together can often checkmate the opponent's king.</p></li>
            </ul>
        </div>
    )
}

export const PawnDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The pawn
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> Pawns are typically represented as small, round pieces.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with eight pawns. The pawns are placed in front of the other pieces, and they are the only pieces that cannot move backward. For White, the pawns start on the a2, b2, c2, d2, e2, f2, g2, and h2 squares, and for Black, the pawns start on the a7, b7, c7, d7, e7, f7, g7, and h7 squares.</p></li>
                <li><strong>Movement</strong>:<p> Pawns move forward one square at a time. However, on their first move, they can move forward two squares. Pawns can only move forward, never backward. They can capture enemy pieces by moving diagonally one square forward.</p></li>
                <li><strong>En passant</strong>:<p> En passant is a special chess move that involves pawns. It can only occur immediately after a player moves a pawn two squares forward from its starting position and an opponent's pawn could have captured it if it had only moved one square forward. In this case, the opponent's pawn can capture the pawn as if it had only moved one square forward.</p></li>
                <li><strong>Promotion</strong>:<p> When a pawn reaches the opposite side of the board, it can be promoted to any other piece (except a king). This is called pawn promotion.</p></li>
                <li><strong>Value</strong>:<p> Pawns are generally considered less valuable than knights, bishops, rooks, and queens. Their value lies in their ability to control the center of the board and their potential to create threats and combinations.</p></li>
                <li><strong>Strategic importance</strong>:<p> Pawns are often developed early in the game to control the center of the board and attack the opponent's pieces. However, bringing the pawns out too early can make them vulnerable to attacks, so players must balance their strategy.</p></li>
                <li><strong>Endgame</strong>:<p> In the endgame, pawns become extremely powerful because they can be promoted to any other piece (except a king). A pawn that reaches the opposite side of the board can be promoted to a queen, rook, bishop, or knight. This can be a powerful advantage in the endgame.</p></li>
            </ul>
        </div>

    )
}

export const KingDescription = () => {
    return (
        <div className="text-center w-3/4 animation-text">
            <h1>
                The king
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Appearance:</strong><p> Kings are typically represented as tall, regal pieces with a crown-like appearance.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with one king. For White, the king starts on the e1 square, and for Black, the king starts on the e8 square.</p></li>
                <li><strong>Movement</strong>:<p> Kings can move one square in any direction (horizontally, vertically, or diagonally). They can never move into check (a position where they could be captured on the next move).</p></li>
                <li><strong>Capture</strong>:<p> Kings capture enemy pieces by moving to the square occupied by the opponent's piece, similar to their normal movement. When capturing, the king removes the captured piece from the board.</p></li>
                <li><strong>Castling</strong>:<p> Castling is a special chess move that involves the king and one of the rooks. The king and the rook move simultaneously, and it's subject to specific conditions:
                    <ul className="list-disc">
                        <li className="ms-12">The king and the chosen rook have not moved previously in the game.</li>
                        <li className="ms-12">There are no pieces between the king and the rook.</li>
                        <li className="ms-12">The king is not in check.</li>
                        <li className="ms-12">The squares the king moves across or lands on during castling are not under attack.</li>
                    </ul>
                    Castling can occur on the king-side (short castling) or queen-side (long castling). It's a strategic move to improve the king's safety and connect the rooks.
                </p></li>
                <li><strong>Value</strong>:<p> The king is the most valuable piece on the chessboard. It is often considered to be worth approximately four points due to its importance in the game.</p></li>
                <li><strong>Strategic importance</strong>:<p> The king is the most important piece on the chessboard. It must be protected at all costs, and it's often a good idea to keep it near the center of the board.</p></li>
                <li><strong>Endgame</strong>:<p> In the endgame, the king becomes a powerful piece. It can be used to attack the opponent's pieces and help promote pawns. However, it must be protected at all costs, as losing the king means losing the game.</p></li>
            </ul>
        </div>
    )
}

export const ChessRules = () => {
    return(
        <div className="text-center w-3/4 animation-text">
            <h1>
                The rules of chess
            </h1>
            <ul className="text-left w-full leading-loose overflow-auto " style={{ height: '700px' }}>
                <li><strong>Goal</strong>:<p> The goal of chess is to checkmate the opponent's king. Checkmate occurs when the king is in check and cannot escape from capture.</p></li>
                <li><strong>Starting position</strong>:<p> In a standard chess game, each player starts with the following pieces:
                    <ul className="list-disc">
                        <li className="ms-12">One king</li>
                        <li className="ms-12">One queen</li>
                        <li className="ms-12">Two rooks</li>
                        <li className="ms-12">Two bishops</li>
                        <li className="ms-12">Two knights</li>
                        <li className="ms-12">Eight pawns</li>
                    </ul>
                    The pieces are placed on the first two rows (or ranks) of the chessboard. The first row is called the "first rank," and the second row is called the "second rank." For White, the pieces are placed on the first rank, and for Black, the pieces are placed on the eighth rank.
                </p></li>
                <li><strong>Capture</strong>:<p> A piece captures an opponent's piece by moving to the square occupied by the opponent's piece. When capturing, the piece removes the captured piece from the board.</p></li>
                <li><strong>Check</strong>:<p> A king is in check when it is under attack by an opponent's piece. A king in check must move out of check on the next move. A player cannot make a move that puts or leaves their king in check.</p></li>
                <li><strong>Checkmate</strong>:<p> Checkmate occurs when the king is in check and cannot escape from capture. The game ends immediately when checkmate occurs.</p></li>
                <li><strong>Stalemate</strong>:<p> Stalemate occurs when the king is not in check but cannot make a legal move. The game ends immediately when stalemate occurs, and it is considered a draw.</p></li>
                <li><strong>Draw</strong>:<p> A draw occurs when neither player can win the game. This can happen in several ways:
                    <ul className="list-disc">
                        <li className="ms-12">Stalemate</li>
                        <li className="ms-12">Agreement between the players</li>
                        <li className="ms-12">Threefold repetition</li>
                        <li className="ms-12">The fifty-move rule</li>
                        <li className="ms-12">Insufficient material</li>
                    </ul>
                </p></li>
                <li><strong>Threefold repetition</strong>:<p> Threefold repetition occurs when the same position occurs three times in a game with the same player to move. The position does not have to occur in consecutive moves, but it must be the same player's turn to move each time. The game ends immediately when threefold repetition occurs, and it is considered a draw.</p></li>
                <li><strong>The fifty-move rule</strong>:<p> The fifty-move rule states that if there have been fifty consecutive moves by each player without a capture or pawn move, the game is a draw. The game ends immediately when the fifty-move rule occurs.</p></li>
                <li><strong>Insufficient material</strong>:<p> Insufficient material occurs when neither player has enough material to checkmate the opponent's king. This can happen in several ways:
                    <ul className="list-disc">
                        <li className="ms-12">King vs. king</li>
                        <li className="ms-12">King and bishop vs. king</li>
                        <li className="ms-12">King and knight vs. king</li>
                        <li className="ms-12">King and bishop vs. king and bishop with bishops on the same color</li>
                    </ul>
                    The game ends immediately when insufficient material occurs, and it is considered a draw.
                </p></li>
                <li><strong>Time control</strong>:<p> Time control is a method of limiting the length of a chess game. It is used in tournaments to ensure that games do not go on for too long. There are several types of time control:
                    <ul className="list-disc">
                        <li className="ms-12">Sudden death</li>
                        <li className="ms-12">Incremental</li>
                        <li className="ms-12">Delay</li>
                    </ul>
                </p></li>
                <li><strong>Sudden death</strong>:<p> In sudden death time control, each player is given a certain amount of time to complete all of their moves. If a player runs out of time, they lose the game.</p></li>
                <li><strong>Incremental</strong>:<p> In incremental time control, each player is given a certain amount of time to complete all of their moves. However, they are also given a certain amount of time for each move. If a player runs out of time, they lose the game.</p></li>
                <li><strong>Delay</strong>:<p> In delay time control, each player is given a certain amount of time to complete all of their moves. However, they are also given a certain amount of time for each move. If a player runs out of time, they lose the game.</p></li>
            </ul>
        </div>
    )
}