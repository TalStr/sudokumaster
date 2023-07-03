import Navbar from './Navbar';
import Home from './Home';
import BoardSquare from './BoardSquare';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <BoardSquare/>
      </div>
    </div>
  );
}

export default App;