import React from 'react';
import Tile from './Tile'
function Board({ puzzle, grid, onTileClick }){
    return (
	<div className="board">
		<Tile puzzle={puzzle} grid={grid} onTileClick={onTileClick}/>
	</div>    
	);
}

export default Board;
