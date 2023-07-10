import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedValue, selectedTile, row, col }) {
    const isSameRowOrCol = selectedTile && (selectedTile.row === row || selectedTile.col === col);
    const isThickRightBorder = col === 2 || col === 4 || col === 6;
    return (
        <div 
            className={
                "tile" +
                (isSelected ? " selected" : "") +
                (isInitial ? " initial" : "") +
                (value !== 0 && !isSelected && value === selectedValue ? " same-value" : "") +
                (value !== 0 ? " taken" : "") +
                (isSameRowOrCol && !isSelected ? " same-row-col" : "") +
                (isThickRightBorder ? " thick-right-border" : "")
            }
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
