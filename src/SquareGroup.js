import BoardSquare from "./BoardSquare";

const SquareGroup = () => {
    const squares = Array(3).fill(null); 
    return ( 
        <div className="squaregroup" style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '175px',
            border: '3px solid black'
            }}>
            {squares.map((value, i) =>
                squares.map((value, j) => <BoardSquare key={i * 3 + j} />)
            )}
        </div>
     );
}
 
export default SquareGroup;