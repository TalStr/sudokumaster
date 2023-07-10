import React, { useState } from 'react';
import Tile from './Tile'

function Board({ puzzle, grid, setSelectedTile, setSelectedValue }){
	const handleTileClick = (row, col) => {
		setSelectedTile({ row, col, value: grid[row][col] });
		setSelectedValue(grid[row][col]);
	  };
	
    return (
        <div className="board">
            {grid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    const isInitial = puzzle[rowIndex][colIndex] !== 0;
                    const isSelected = rowIndex === selectedTile.row && colIndex === selectedTile.col;
                    const selectedValue = selectedTile.value;

                    return <Tile 
                        key={`${rowIndex}-${colIndex}`}
                        value={grid[rowIndex][colIndex]}
                        isInitial={isInitial}
                        isSelected={isSelected}
                        onClick={() => handleTileClick(rowIndex, colIndex)}
                        selectedValue={selectedValue}
                    />
                });
            })}
        </div>
    );
}

export default Board;
