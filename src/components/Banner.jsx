import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-b from-green-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* ========================= Left Side ======================= */}
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        ⚡ Seamless EV Charging <br /> <span className="text-green-600">At Your Fingertips</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find and book your charging slot with ease!
                        Access <span className="font-semibold text-gray-800">100+ trusted stations</span>
                        in your city for a fast, convenient, and eco-friendly charging experience.
                    </p>

                    {/* 🚀 Call To Action Button */}
                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                            className="relative overflow-hidden px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-lg 
                               bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 
                               hover:from-green-600 hover:to-green-700 hover:scale-105 active:scale-95 
                               focus:ring-4 focus:ring-green-300 group">

                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 
                                    transition-opacity duration-300 group-hover:opacity-10"></span>

                            🚀 Get Started
                        </button>
                    </div>
                </div>

                {/* ========================== Right Side ===================== */}
                <div className="flex justify-center relative">
                    {/* Glowing Background Effect */}
                    <div className="absolute w-60 h-60 bg-green-200 rounded-full opacity-30 blur-3xl 
                            transform scale-125 md:scale-150 -z-10"></div>

                    <img
                        src={assets.appointment_img}
                        alt="EV Charging Station"
                        className="w-full md:w-4/5 lg:w-3/4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>

            </div>
        </div>

    );
};

export default Banner;
