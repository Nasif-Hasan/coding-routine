import React from 'react';
import './BreakBox.css'

const BreakBox = ({space, setSpace, spaceTime}) => {
    
    
    // console.log(space);

    return (
        <div>
            <h2>Break Time</h2>
                <div className='break-box'>
                    <h3 className='break-btn-group'>
                        <button onClick={() => spaceTime(5)} className='break-btn'>{5}m</button>
                        <button onClick={() => spaceTime(10)} className='break-btn'>{10}m</button>
                        <button onClick={() => spaceTime(15)} className='break-btn'>{15}m</button>
                        <button onClick={() => spaceTime(20)} className='break-btn'>{20}m</button>    
                    </h3>
                </div>
        </div>
    );
};

export default BreakBox;