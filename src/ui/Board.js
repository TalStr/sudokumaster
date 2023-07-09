const React = require('react');
const { useState, useRef } = React;
const Tile = require('./Tile')
function Board({ puzzle, grid, onTileClick }){
    return (
	<div className="board">
		<Tile puzzle={puzzle} grid={grid} onTileClick={onTileClick}/>
	</div>    
	);
}

export default Board;
