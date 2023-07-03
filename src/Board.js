import BoardSquare from './BoardSquare';
import SquareGroup from './SquareGroup';

const Board = () => {
    const squares = Array(3).fill(null); 

    return (           
          <div id="sudoku">
            <div class="parentCube">
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
            </div>
            <div class="parentCube">
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
            </div>
            <div class="parentCube">
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
              <div class="childCube"></div>
            </div>
          </div>
              );
}

export default Board;
