import React, { useState, useRef} from "react";
import Board from "./ui/Board"
import Interface from "./ui/Interface"

function getGrid() {
    let grid = [];
    for (let i = 0; i<9; i++){
        grid.push(Array(9).fill(0));
    }
    return grid;
}

function Sudoku() {
    const [grid, setGrid] = useState(getGrid);
    return (
        <div className="Sudoku">
            <Board puzzle={puzzle} grid={grid}/>
            <Interface/>
        </div>
    );
}
export default Sudoku