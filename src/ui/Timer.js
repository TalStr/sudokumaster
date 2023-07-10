import React, { useEffect, useState} from 'react';

const Timer = ({ seconds, setSeconds}) => {
    useEffect(() => {
        const timer = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
    }, [setSeconds]);
        return(
        <div className='timer'>
            {seconds};
        </div>
    );
}

export default Timer;