import React, { useEffect } from 'react';

const Timer = ({ seconds, setSeconds }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setSeconds]);

  return (
    <div className='timer'>
      {(seconds/60) + ":" + (seconds%60)}
    </div>
  );
}

export default Timer;