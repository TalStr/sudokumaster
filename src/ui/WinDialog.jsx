export const WinDialog = ({ openDialog, setOpenDialog, time, newGame }) => {
    return (
      <>
        {openDialog && (
          <div className="win-dialog">
            <div className="dialog-container">
              <h3>You Win</h3>
              <button
                onClick={newGame}
                >next</button>
            </div>
          </div>
        )}
      </>
    );
  };
  