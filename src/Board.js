import BoardSquare from './BoardSquare';
import SquareGroup from './SquareGroup';

const Board = () => {
    const squares = Array(3).fill(null); 

    return (           
          <div id="sudoku">
            <div ClassName="parentCube">
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
            </div>
            <div ClassName="parentCube">
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
            </div>
            <div ClassName="parentCube">
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
              <div ClassName="childCube"></div>
            </div>
          </div>
              );
}

export default Board;
