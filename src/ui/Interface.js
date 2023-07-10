function Interface({ onButtonClick, setSelectedValue, counters }) {
    return ( 
        <div className="interface">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button 
                    key={number} 
                    onClick={() => {
                        setSelectedValue(number); 
                        onButtonClick(number);
                    }}
                    style= {{
                        
                    }}
                >
                    {number}
                </button>
            ))}
        </div>
     );
}
 
export default Interface;
