import BoardSquare from './BoardSquare';
import SquareGroup from './SquareGroup';

const Board = () => {
    const squares = Array(3).fill(null); 

    return (           
          <div id="sudoku">
            <div className="parentCube">
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
            </div>
            <div className="parentCube">
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
            </div>
            <div className="parentCube">
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
              <div className="childCube"></div>
            </div>
          </div>
              );
}

export default Board;
