
function Tile({ grid }) {
    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <input 
                className="tile" 
                type="text" 
                value="1" 
                key={rowIndex + " " + colIndex}
                />
            );
        });
    });
} 
export default Tile;