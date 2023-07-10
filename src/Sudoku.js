import React, { useState, useRef} from 'react';
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
            if(Math.random() > 0.7){
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
    const puzzle = useRef(createPuzzle()); // original puzzle
    const originalPuzzle = useRef([...puzzle.current.map(row => [...row])]);  // Deep copy of original puzzle
    const [grid, setGrid] = useState(puzzle.current); // current game board
    const [count, setCount] = useState(0); // Move count state to Sudoku
    const [selectedTile, setSelectedTile] = useState({ row: 0, col: 0, value: grid[0][0] });
    const [selectedValue, setSelectedValue] = useState(grid[0][0]);  

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
    function handleTool(action) {
        switch(action) {
            case "erase":
                if(originalPuzzle.current[selectedTile.row][selectedTile.col] === 0){
                    setGrid((grid) => {
                        const newGrid = [...grid];
                        newGrid[selectedTile.row][selectedTile.col] = 0;
                        return newGrid;    
                    });
                }
                break;
            case "reset":
                setCount(0);
                setGrid((grid) => {
                    return [...originalPuzzle.current.map(row => [...row])];  
                });  
                break;
            case "hint":
                console.log("hint");
                break;
            default:
                console.log("Error");
        }
    }

    return (
        <div className="Sudoku">
            <Counter count={count}/>
            <Board 
                puzzle={originalPuzzle.current} 
                grid={grid} 
                setSelectedTile={setSelectedTile}
                selectedTile={selectedTile}
                selectedValue={selectedValue}
                />
            <Toolbar handleTool={handleTool}/>
            <Interface onButtonClick={handleButtonClick} setSelectedValue={setSelectedValue}/>
        </div>
    );
}
export default Sudoku;