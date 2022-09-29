import React, { useEffect, useState } from 'react';
import Programs from '../Programs/Programs';
import './Home.css'


import SideCart from '../SideCart/SideCart';

const Home = () => {

    const [programs, setPrograms] = useState([])
    
    const [cart, setCart] = useState([])

    const [study, setStudy] = useState(0)
    const addToStudyTime = (duration) => {
        setStudy(duration + study)
    }
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])

    return (
        <div className='home-container'>
            <div className='work-part'>
            <h1 className='top-text'>All Things For Learn Coding</h1>
                <Programs
                    programs={programs}
                    cart={cart}
                    setCart={setCart}
                    addToStudyTime={addToStudyTime}
                ></Programs>
            </div>
            <div className='side-cart'>
                <SideCart
                    cart={cart}
                    setCart={setCart}
                    study={study}
                ></SideCart>
            </div>
        </div>
    );
};

export default Home;