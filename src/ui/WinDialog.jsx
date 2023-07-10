export const WinDialog = ({ openDialog, setOpenDialog, time }) => {
    return (
      <>
        {openDialog && (
          <div className="win-dialog">
            <div className="dialog-container">
              <h3>You Win</h3>
              <button>next</button>
            </div>
          </div>
        )}
      </>
    );
  };
  