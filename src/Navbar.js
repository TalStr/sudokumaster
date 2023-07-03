const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Sudoku Master</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/stats" style={{ 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>Statistics</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;