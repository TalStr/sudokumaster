import React, { useEffect, useState} from 'react';

const Timer = ({ seconds, setSeconds}) => {
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds+1);
        }, 1000);
    });
    return(
        <div className='timer'>
            {seconds};
        </div>
    );
}