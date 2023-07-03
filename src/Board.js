import BoardSquare from './BoardSquare';
const Board = () => {
    const squares = Array(9).fill(null); // create an array of length 9

    return ( 
        <div className="board">
            {squares.map((value, i) => (
                <div key={i} className="board-row">
                    {squares.map((value, j) => <BoardSquare key={i * 9 + j} />)}
                </div>
            ))}
        </div>
    );
}
 
export default Board;