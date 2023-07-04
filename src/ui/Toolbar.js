import restartImage from '../images/undo-arrow.png';
import eraseImage from '../images/eraser.png';
import hintImage from '../images/idea.png'

function Toolbar({ handleTool }){
    return ( 
        <div className="tools">
            <button className="tool-button" onClick={() => handleTool("reset")}>
                <img src={ restartImage } alt="Restart" className="tool-image" />
            </button>
            <button className="tool-button" onClick={() => handleTool("erase")}>
                <img src={ eraseImage } alt="Erase" className="tool-image" />
            </button>
            <button className="tool-button" onClick={() => handleTool("hint")}>
                <img src={ hintImage } alt="Hint" className="tool-image" />
            </button>
        </div>
     );
}

export default Toolbar;
