import BoardSquare from './BoardSquare';

const Board = () => {
    const squares = Array(9).fill(null); 

    return ( 
        <div className="board" style={{display: 'flex', flexWrap: 'wrap', width: '450px'}}>
            {squares.map((value, i) =>
                squares.map((value, j) => <BoardSquare key={i * 9 + j} />)
            )}
        </div>
    );
}

export default Board;
