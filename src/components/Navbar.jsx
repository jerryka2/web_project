import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 bg-white shadow-sm px-6">
            {/* ======== Logo ======== */}
            <img
                onClick={() => navigate('/')}
                className="w-40 cursor-pointer transition-transform duration-300 hover:scale-105"
                src={assets.logo}
                alt="Logo"
            />

            {/* ======== Desktop Menu ======== */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                {['/', '/map', '/stations', '/about', '/contact'].map((path, index) => (
                    <NavLink
                        key={index}
                        to={path}
                        className={({ isActive }) =>
                            `relative py-2 transition text-lg tracking-wide group ${isActive ? 'text-green-600 font-semibold' : 'hover:text-green-500'}`
                        }
                    >
                        {path === '/' ? 'HOME' : path.substring(1).toUpperCase()}
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-3/5"></span>
                    </NavLink>
                ))}
            </ul>

            {/* ======== Profile & Menu Button ======== */}
            <div className="flex items-center gap-6">
                {token ? (
                    <div className="relative group">
                        <button className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition">
                            <img className="w-10 h-10 rounded-full border-2 border-green-500" src={assets.profile_pic} alt="Profile" />
                            <span className="text-gray-800 font-medium">Profile</span>
                            <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-14 right-0 bg-white shadow-xl rounded-lg w-52 p-4 hidden group-hover:block z-30 transition-all duration-300">
                            <p onClick={() => navigate('/myprofile')} className="cursor-pointer hover:text-green-500 transition py-2 px-3 hover:bg-gray-100 rounded-lg">
                                My Profile
                            </p>
                            <p onClick={() => navigate('/my-appointments')} className="cursor-pointer hover:text-green-500 transition py-2 px-3 hover:bg-gray-100 rounded-lg">
                                My Appointments
                            </p>
                            <p onClick={() => setToken(false)} className="cursor-pointer text-red-500 hover:text-red-700 transition py-2 px-3 hover:bg-gray-100 rounded-lg">
                                Logout
                            </p>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hidden md:block hover:bg-green-600 transition"
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Button */}
                <img
                    onClick={() => setShowMenu(true)}
                    className="w-7 md:hidden cursor-pointer transition-transform duration-300 hover:scale-110"
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />
            </div>

            {/* ======== Mobile Menu ======== */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className={`fixed left-0 top-0 w-3/4 sm:w-2/3 h-full bg-white shadow-2xl transform transition-transform ${showMenu ? "translate-x-0" : "-translate-x-full"} duration-300`}>
                    {/* Close Button & Logo */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-200">
                        <img src={assets.logo} alt="Logo" className="w-36" />
                        <img onClick={() => setShowMenu(false)} className="w-6 cursor-pointer hover:scale-110 transition" src={assets.cross_icon} alt="Close" />
                    </div>

                    {/* Mobile Navigation Links */}
                    <ul className="flex flex-col gap-5 text-lg font-medium p-6">
                        {['/', '/map', '/stations', '/about', '/contact'].map((path, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-lg transition ${isActive ? 'bg-green-500 text-white' : 'hover:bg-green-100'}`
                                }
                                onClick={() => setShowMenu(false)}
                            >
                                {path === '/' ? 'Home' : path.substring(1)}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
