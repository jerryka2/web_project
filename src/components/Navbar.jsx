import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets.js'; // Corrected import path

const Navbar = () => {
    return (
        <div>
            <img src={assets.logo} alt="Logo" />

            <ul>
                <NavLink to="/">
                    <li>Home</li>
                    <hr />
                </NavLink>
                <NavLink to="/station">
                    <li>Station</li>
                    <hr />
                </NavLink>
                <NavLink to="/map">
                    <li>Map</li>
                    <hr />
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                    <hr />
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                    <hr />
                </NavLink>
            </ul>

            <div>
                <button>Create Account</button>
            </div>
        </div>
    );
};

export default Navbar;
