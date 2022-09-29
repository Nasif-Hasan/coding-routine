import React from 'react';
import './BreakBox.css'

const BreakBox = ({space, setSpace}) => {
    
    const handleAddToSpace = () => {
        setSpace(handleAddToSpace)
    }
    console.log(space);

    return (
        <div>
            <h2>Break Time</h2>
                <div className='break-box'>
                    <h3 className='break-btn-group'>
                        <button onClick={handleAddToSpace} className='break-btn'>5m</button>
                        <button onClick={handleAddToSpace} className='break-btn'>10m</button>
                        <button onClick={handleAddToSpace} className='break-btn'>15m</button>
                        <button onClick={handleAddToSpace} className='break-btn'>20m</button>    
                    </h3>
                </div>
        </div>
    );
};

export default BreakBox;