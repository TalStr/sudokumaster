
function Tile({ puzzle, grid }) {
    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <div 
                className={puzzle[rowIndex][colIndex] !== 0 ?"initial": col !== 0? "tile taken":"tile"}
                key={rowIndex + " " + colIndex}
                >
                {grid[rowIndex][colIndex] !== 0 ? grid[rowIndex][colIndex] : ""}
                </div>
            );
        });
    });
} 
export default Tile;