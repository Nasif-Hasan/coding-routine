import React, { useState } from 'react';
import './SideCart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import BreakBox from '../BreakBox/BreakBox';

const SideCart = ({cart, setCart}) => {

    // console.log(cart);
    const [space, setSpace] = useState([])

    const notify = () => toast("Wow You Have Completed All Tasks...!");

    return (
        <div>
            <div className='profile'>
                    <img className='profile-img' src="https://cdn.dribbble.com/users/1174720/screenshots/15718185/media/b54ee56400b00386f558b6a6f465d5b0.png?compress=1&resize=320x240&vertical=top" alt="" />
                    <div>
                        <h3>Nasif Hasan</h3>
                        <p><FontAwesomeIcon className='location' icon={faLocationDot}></FontAwesomeIcon> Dhaka</p>
                    </div>
                </div>
                <div className='info-box'>
                    <div>
                        <h2>56</h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5'6"</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>20</h2>
                        <p>Age</p>
                    </div>

                </div>

                <div>
                    <BreakBox
                    space={space}
                    setSpace={setSpace}
                    ></BreakBox>
                </div>

                <div>
                    <h2>Total Learning Time</h2>
                    
                    <div className='info-box'>
                        <h4>Total Time: {cart.map((p) => (p.time))} m</h4>
                    </div>

                    <div className='info-box'>
                        <h4>Break Time: 00 Minutes</h4>
                    </div>

                </div>

                <div>
                    <button onClick={notify} className='btn-activity'>
                        <h3>Coding Activity</h3>
                    </button>
                    <ToastContainer />
                </div>
        </div>
    );
};

export default SideCart;