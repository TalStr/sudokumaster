import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedValue, selectedTile, row, col }) {
    const isSameRowOrCol = selectedTile && (selectedTile.row === row || selectedTile.col === col);
    // const borderStyle = {
    //     border-bottom: (row == 8) ? '4px' : '2px',
    //     borderRightWidth: (col === 8) ? '4px' : '2px',
    //     borderLeftWidth: (col % 3 == 0) ? '4px' : '2px',
    //     borderTopWidth: (row % 3 == 0) ? '4px' : '2px',
    
    // }
    return (
        <div 
            className={
                "tile" +
                (isSelected ? " selected" : "") +
                (isInitial ? " initial" : "") +
                (value !== 0 && !isSelected && value === selectedValue ? " same-value" : "") +
                (value !== 0 ? " taken" : "") +
                (isSameRowOrCol && !isSelected ? " same-row-col" : "")
            }
            style={{
                borderBottomWidth: (row == 8) ? '4px' : '4px',
                borderRightWidth: (col === 8) ? '4px' : '2px',
                borderLeftWidth: (col % 3 == 0) ? '4px' : '2px',
                borderTopWidth: (row % 3 == 0) ? '4px' : '2px',

            }}
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
