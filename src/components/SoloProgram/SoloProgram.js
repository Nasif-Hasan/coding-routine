import React from 'react';
import './SoloProgram.css'

const SoloProgram = ({program, cart, setCart}) => {
    // console.log(program);
    const { id, name, picture, time } = program

    const handleAddToCart = () => {
        const todo = {
            id,
            name,
            picture,
            time
        }

        const newTask = [todo]
        setCart(newTask)
    }

    // console.log(cart[0].time);

    return (
        <div className='course-card'>
            <img className='card-img' src={picture} alt="" />
            <h2>{name}</h2>
            <h3>Time {time}</h3>
            <button onClick={handleAddToCart} className='add-btn'>Add To Cart</button>
            
        </div>
    );
};

export default SoloProgram;