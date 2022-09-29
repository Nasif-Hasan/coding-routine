import React from 'react';
import SoloProgram from '../SoloProgram/SoloProgram';
import './Programs.css'

const Programs = ({programs, cart, setCart}) => {
    // console.log(programs);

    return (
        
        <div className='programs-container'>
            {
                programs.map((p) => (
                    <SoloProgram 
                    program={p}
                    key={p.id}
                    cart={cart}
                    setCart={setCart}
                    ></SoloProgram>
                ))
            }
            
        </div>
    );
};

export default Programs;