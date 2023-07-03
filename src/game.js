let board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

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

solve(board);
console.log(board);