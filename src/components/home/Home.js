import React from 'react';
import logo from '../../images/logo1.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='header-container'>
            <nav className='header-logo'>
                <img src={logo} alt="" />
            </nav>
            <h3>Fitnes Club</h3>
        </div>
    );
};

export default Home;