import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div>
                    <div className="nav-style">
            <nav>
                <NavLink className="style-nav" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="style-nav" activeStyle={activeStyle} to="/about_us">About Us</NavLink>
                <NavLink className="style-nav" activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink className="style-nav" activeStyle={activeStyle} to="/instructors">Instructors</NavLink>
            </nav>
        </div>
        </div>
    );
};

export default NavBar;