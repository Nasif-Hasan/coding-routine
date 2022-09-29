import React from 'react';
import SoloProgram from '../SoloProgram/SoloProgram';
import './Programs.css'

const Programs = ({programs, addToStudyTime}) => {


    return (
        
        <div className='programs-container'>
            {
                programs.map((p) => (
                    <SoloProgram 
                    program={p}
                    key={p.id}
                    addToStudyTime={addToStudyTime}
                    ></SoloProgram>
                ))
            }
            
        </div>
    );
};

export default Programs;