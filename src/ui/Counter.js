import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div className="mistake-counter">{count}</div>
    );
} 
export default Counter;