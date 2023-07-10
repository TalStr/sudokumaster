import React, { useEffect, useState} from 'react';

const Timer = ({ seconds, setSeconds}) => {
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds+1);
        }, 10000)
        return() => clearInterval(timer);
    });
    return(
        <div className='timer'>
            {seconds};
        </div>
    );
}

export default Timer;