import Navbar from './Navbar';
import Home from './Home';
import Board from './ui/Board';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Board/>
      </div>
    </div>
  );
}

export default App;