import React from 'react';
import Tile from './Tile'
function Board({ puzzle, grid, onTileClick }){
	const [selectedTile, setSelectedTile] = useState({ row: 0, col: 0 });
    return (
	<div className="board">
		<Tile puzzle={puzzle} grid={grid} onTileClick={onTileClick}/>
	</div>    
	);
}

export default Board;
