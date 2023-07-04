import React, { useState, useRef} from "react";
import Board from "./ui/Board"
import Interface from "./ui/Interface"
import Toolbar from "./ui/Toolbar";
import './App.css';

function getGrid() {
    let grid = [];
    for (let i = 0; i<9; i++){
        grid.push(Array(9).fill(0));
    }
    return grid;
}

function isValidPlace(grid, row, col, number) {
    for(let i = 0; i < 9; i++) {
        if(grid[i][col] === number) {
            return false;
        }
    }
    for(let i = 0; i < 9; i++) {
        if(grid[row][i] === number) {
            return false;
        }
    }
    let localBoxRow = row - (row % 3);
    let localBoxCol = col - (col % 3);
    for(let i = localBoxRow; i < localBoxRow + 3; i++) {
        for(let j = localBoxCol; j < localBoxCol + 3; j++) {
            if(grid[i][j] === number) {
                return false;
            }
        }
    }
    return true;
}

function solve(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if(grid[row][col] === 0) {
                for (let guess = 1; guess < 10; guess++) {
                    if(isValidPlace(grid, row, col, guess)) {
                        grid[row][col] = guess;
                        if(solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true
}

function createPuzzle(){
    let puzzle = getRandomSudoku();
    solve(puzzle);
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(Math.random() > 0.3){
                puzzle[i][j] = 0;
            }
        }
    }
    return puzzle;
}

function getRandomSudoku(){
    let puzzle = getGrid();
    for(let i = 0; i < 8; i++) {
        let number = Math.floor(Math.random() * 8) + 1;
        while(!isValidPlace(puzzle, 0, i, number)){
            number = Math.floor(Math.random() * 8) + 1;
        }
        puzzle[0][i] = number;
    }
    return puzzle;
}

function Counter({count}){
    return (
        <div className="mistake-counter">
            <div>Mistakes</div>
            <div>{count}</div>
        </div>
    );
} 

function Sudoku() {
    const puzzle = useRef(createPuzzle());
    const [grid, setGrid] = useState(puzzle.current);
    const [selectedTile, setSelectedTile] = useState({ row: 0, col: 0 });
    const [count, setCount] = useState(0); // Move count state to Sudoku

    const handleButtonClick = (number) => {
        if(!isValidPlace(grid, selectedTile.row, selectedTile.col, number)){
            setCount(count+1);
        }
        else if(grid[selectedTile.row][selectedTile.col] === 0){
            setGrid((grid) => {
                const newGrid = [...grid];
                newGrid[selectedTile.row][selectedTile.col] = number;
                return newGrid;
            });
        }
    };

    const handleTileClick = (tile) => {
        setSelectedTile(tile);
    };

    function handleTool(action) {
        switch(action) {
            case "erase":
                if(puzzle.current[selectedTile.row][selectedTile.col] === 0){
                    setGrid((grid) => {
                    const newGrid = [...grid];
                    newGrid[selectedTile.row][selectedTile.col] = 0;
                    return newGrid;    
                    });
                }
                break;
            case "reset":
                console.log("reset");
                break;
            case "hint":
                console.log("hint");
                break;
        }
    }

    return (
        <div className="Sudoku">
            <Counter count={count}/>
            <Board puzzle={puzzle.current} grid={grid} onTileClick={handleTileClick}/>
            <Toolbar handleTool={handleTool}/>
            <Interface onButtonClick={handleButtonClick}/>
        </div>
    );
}
export default Sudoku