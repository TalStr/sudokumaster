import React from 'react';

function Tile({ value, isInitial, isSelected, onClick, selectedValue, selectedTile, row, col }) {

    let className = "tile";

    if(isSelected) className += " selected";
    else if(isInitial) className += " initial";
    else if(value !== 0 && value === selectedValue) className += " same-value";
    else if(value !== 0) className += " taken";
    else if(selectedTile && (selectedTile.row === row || selectedTile.col === col)) className += " same-row-col";

    return (
        <div 
            className={className}
            onClick={onClick}
        >
            {value !== 0 ? value : ""}
        </div>
    );
}

export default Tile;
