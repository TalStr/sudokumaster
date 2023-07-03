import React from 'react';
import BoardSquare from './BoardSquare'; 

const Board = () => {
    const squares = Array(9).fill(null); 

    return (
        <div className='sudoku'>
            {squares.map((_, i) => (
                <div key={i} className="parentCube">
                    {squares.map((_, j) => <BoardSquare key={i * 9 + j} />)}
                </div>
            ))}
        </div>
    );
}

export default Board;
