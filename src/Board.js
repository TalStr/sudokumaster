import BoardSquare from './BoardSquare';
import SquareGroup from './SquareGroup';

const Board = () => {
    const squares = Array(3).fill(null); 

    return ( 
        <div className="board" style={{display: 'flex', flexWrap: 'wrap', width: '450px'}}>
            {squares.map((value, i) =>
                squares.map((value, j) => <SquareGroup key={i * 3 + j} />)
            )}
        </div>
    );
}

export default Board;
