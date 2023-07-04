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


function Sudoku() {
    const [grid, setGrid] = useState(getGrid);
    const puzzle = useRef(getRandomSudoku());
    return (
        <div className="Sudoku">
            <Board puzzle={puzzle.current} grid={grid}/>
            <Interface/>
        </div>
    );
}
export default Sudoku