import React from 'react';
import './SoloProgram.css'

const SoloProgram = ({program, addToStudyTime}) => {

    const { name, picture, time } = program

    return (
        <div className='course-card'>
            <img className='card-img' src={picture} alt="" />
            <h2>{name}</h2>
            <h3>Time: {time} Minutes</h3>
            <button onClick={() => addToStudyTime(time)} className='add-btn'>Add To Cart</button>
            
        </div>
    );
};

export default SoloProgram;