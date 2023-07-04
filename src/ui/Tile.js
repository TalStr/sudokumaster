
function Tile({ puzzle, grid }) {
    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <input 
                className={puzzle[rowIndex][colIndex] !== 0 ?"initial": col !== 0? "tile taken":"tile"}
                type="text" 
                value={grid[rowIndex][colIndex] !== 0 ? grid[rowIndex][colIndex] : ""}
                key={rowIndex + " " + colIndex}
                />
            );
        });
    });
} 
export default Tile;