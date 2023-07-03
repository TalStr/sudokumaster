import React, { useState, useRef} from "react";
import Board from "./ui/Board"
import Interface from "./ui/Interface"

function Sudoku() {
    const [grid, setGrid] = useState()
    return (
        <div className="Sudoku">
            <Board puzzle={puzzle} grid={grid}/>
            <Interface/>
        </div>
    )
}