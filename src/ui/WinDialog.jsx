export const WinDialog = ({ openDialog, setOpenDialog }) => {
    return (
      <>
        {openDialog && (
          <div className="win-dialog">
            <div className="dialog-container">
              <h3>You Win</h3>
            </div>
          </div>
        )}
      </>
    );
  };
  