function Interface({ onButtonClick, setSelectedValue }) {
    return ( 
        <div className="interface">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button key={number} onClick={() => {
                  setSelectedValue(number); 
                  onButtonClick(number);
                }}>
                    {number}
                </button>
            ))}
        </div>
     );
}
 
export default Interface;
