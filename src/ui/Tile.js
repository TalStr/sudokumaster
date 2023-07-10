import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedValue, selectedTile, row, col }) {
    const isSameRowOrCol = (selectedTile.row === row || selectedTile.col === col);
    
    return (
        <div 
            className={
                "tile" +
                (isSelected ? " selected" : "") +
                (isInitial ? " initial" : "") +
                (value !== 0 && value === selectedValue ? " same-value" : "") +
                (value !== 0 ? " taken" : "") +
                (isSameRowOrCol && !isSelected ? " same-row-col" : "")
            }
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
