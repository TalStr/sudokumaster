import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedValue, selectedTile, row, col }) {
    console.log(row + ", " + col);
    return (
        <div 
            className={
                "tile" +
                (isSelected ? " selected" : "") +
                (isInitial ? " initial" : "") +
                (value !== 0 && value === selectedValue ? " same-value" : "") +
                (value !== 0 ? " taken" : "") +
                ((selectedTile.row === row || selectedTile.col === col) && !isSelected ? " same-row-col" : "")
            }
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
