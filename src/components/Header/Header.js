import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='site-name'>
            <FontAwesomeIcon className='header-icon' icon={faCode}></FontAwesomeIcon>
            <h1>CODING WITH FUN...</h1>
        </div>
    );
};

export default Header;