import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-b from-green-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                {/* ========================= Left Side ======================= */}
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Seamless EV Charging at Your Fingertips
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find and book your charging slot with ease!
                        Access 100+ trusted stations in your city for a
                        fast, convenient, and eco-friendly charging experience.
                    </p>

                    {/* CTA Button */}
                    <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
                        Get Started
                    </button>
                </div>

                {/* ========================== Right Side ===================== */}
                <div className="flex justify-center">
                    <img src={assets.appointment_img} alt="EV Charging Station" className="w-full md:w-4/5 lg:w-3/4 rounded-lg shadow-md" />
                </div>

            </div>
        </div>
    );
};

export default Banner;
