export const WinDialog = ({ openDialog, setOpenDialog }) => {
    return (
      <>
        {openDialog && (
          <div className="win-dialog">
            <div className="main-container">
              <div className="dialog-container">
                <h3>Test</h3>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  