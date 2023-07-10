import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedTile, row, col }) {
    const isSameRowOrCol = selectedTile && (selectedTile.row === row || selectedTile.col === col);
    return (
        <div 
            className={
                "tile" +
                (isSelected ? " selected" : "") +
                (isInitial ? " initial" : "") +
                (value !== 0 && !isSelected && value === selectedTile.value ? " same-value" : "") +
                (value !== 0 && !isInitial ? " taken" : "") +
                (isSameRowOrCol && !isSelected ? " same-row-col" : "")
            }
            style={{
                borderBottomWidth: (row === 8) ? '6px' : '2px',
                borderRightWidth: (col === 8) ? '6px' : '2px',
                borderLeftWidth: (col % 3 === 0) ? '6px' : '2px',
                borderTopWidth: (row % 3 === 0) ? '4px' : '2px',
            }}
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
