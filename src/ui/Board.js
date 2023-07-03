import React from 'react';
function Board({ puzzle, grid }){
    return (
	<div id="board">
		<Tile puzzle={puzzle} grid={grid}/>
	</div>    
	);
}

export default Board;
