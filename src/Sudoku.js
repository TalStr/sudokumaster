import React, { useState, useRef, useEffect} from 'react';
import Board from "./ui/Board"
import Interface from "./ui/Interface"
import Toolbar from "./ui/Toolbar";
import Timer from "./ui/Timer";
import './App.css';
import { WinDialog } from './ui/WinDialog';


const diff = 0.95;

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
            if(Math.random() > diff){
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

function getCount(grid){
    let counters = Array(9).fill(0);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] !== 0) {
            counters[grid[i][j]-1] += 1;
          }
        }
      }
      return counters;
  
}

function isComplete(counters) {
    for (let i = 0; i < 9; i++)
        if (counters[i] < 9)
            return false;
    return true;
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
    const [counters, setCounters] = useState(getCount(grid));
    const [seconds, setSeconds] = useState(0);
    const [openWinDialog, setOpenWinDialog] = useState(false);

    const incrementCounter = (index) => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] += 1;
          return newCounters;
        });
    };    
    const decrementCounter = (index) => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          newCounters[index] -= 1;
          return newCounters;
        });
    };    

    useEffect(() => {
        if (isComplete(counters)) {
          console.log("WIN!");
        }
      }, [grid]);
    

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
            incrementCounter(number-1);
        }
    };
    const setSelectedValue = (value) => {
        setSelectedTile({ row: selectedTile.row, col: selectedTile.col, value: value });
    }
    function handleTool(action) {
        switch(action) {
            case "erase":
                if(originalPuzzle.current[selectedTile.row][selectedTile.col] === 0){
                    setGrid((grid) => {
                        const newGrid = [...grid];
                        newGrid[selectedTile.row][selectedTile.col] = 0;
                        return newGrid;    
                    });
                    if(selectedTile.value > 0)
                        decrementCounter(selectedTile.value - 1);
                    setSelectedValue(0);
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
            <Timer
                seconds={seconds}
                setSeconds={setSeconds}/>
            <Counter count={count}/>
            <Board 
                puzzle={originalPuzzle.current} 
                grid={grid} 
                setSelectedTile={setSelectedTile}
                selectedTile={selectedTile}
                />
            <Toolbar handleTool={handleTool}/>
            <Interface 
                onButtonClick={handleButtonClick} 
                setSelectedValue={setSelectedValue}
                counters={counters}
                />
            <button
                onClick={() => {
                    setOpenWinDialog(true);
                }}
                />
            <WinDialog
                openDialog={openWinDialog}
                setOpenDialog={setOpenWinDialog}
                />
        </div>
    );
}
export default Sudoku;