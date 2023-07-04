import React from 'react';
import Tile from './Tile'
function Board({ puzzle, grid }){
    return (
	<div className="board">
		<Tile puzzle={puzzle} grid={grid} onTileClick={handleTileClick}/>
	</div>    
	);
}

export default Board;
