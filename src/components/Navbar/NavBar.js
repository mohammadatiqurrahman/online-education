import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about_us">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;