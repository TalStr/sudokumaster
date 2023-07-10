import React, {useState} from 'react';
import Tile from './Tile'
function Board({ puzzle, grid, onTileClick }){
	const [selectedTile, setSelectedTile] = useState({ row: 0, col: 0 });
	const onTileClick = (tile) => {
		setSelectedTile(tile);
	};
    return (
	<div className="board">
		<Tile puzzle={puzzle} grid={grid} onTileClick={onTileClick}/>
	</div>    
	);
}

export default Board;
