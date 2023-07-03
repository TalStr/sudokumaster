import React from 'react';
import Tile from './Tile'
function Board({ puzzle, grid }){
    return (
	<div id="board">
		<Tile puzzle={puzzle} grid={grid}/>
	</div>    
	);
}

export default Board;
