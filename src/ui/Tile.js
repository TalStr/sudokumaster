import React, { useState } from 'react';

function Tile({ puzzle, grid, onTileClick }) {
    const [selectedTile, setSelectedTile] = useState({ row: 0, col: 0 });

    const handleTileClick = (rowIndex, colIndex) => {
        setSelectedTile({ row: rowIndex, col: colIndex });
        onTileClick({ row: rowIndex, col: colIndex });
    };

    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            const isSelected = rowIndex === selectedTile.row && colIndex === selectedTile.col;
            return (
                <div 
                    className={
                        isSelected 
                            ? "tile selected" 
                            : puzzle[rowIndex][colIndex] !== 0 
                                ? "initial" 
                                : col !== 0 
                                    ? "tile taken"
                                    : "tile"
                    }
                    onClick={() => handleTileClick(rowIndex, colIndex)}
                    key={rowIndex + " " + colIndex}
                >
                    {grid[rowIndex][colIndex] !== 0 ? grid[rowIndex][colIndex] : ""}
                </div>
            );
        });
    });
} 

export default Tile;
