import React from 'react';
import Tile from './Tile'

function Board({ puzzle, grid, setSelectedTile, selectedTile, selectedValue }){
	const handleTileClick = (row, col) => {
		setSelectedTile({ row: row, col: col, value: grid[row][col] });
	  };
	
    return (
        <div className="board">
            {grid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    const isInitial = puzzle[rowIndex][colIndex] !== 0;
                    const isSelected = rowIndex === selectedTile.row && colIndex === selectedTile.col;

                    return <Tile 
                        key={`${rowIndex}-${colIndex}`}
                        value={grid[rowIndex][colIndex]}
                        isInitial={isInitial}
                        isSelected={isSelected}
                        onClick={() => handleTileClick(rowIndex, colIndex)}
                        selectedValue={selectedTile.value}
						selectedTile={selectedTile}
						row={rowIndex}
						col={colIndex}					  
                    />
                });
            })}
        </div>
    );
}

export default Board;
