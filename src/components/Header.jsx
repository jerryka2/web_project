import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
    return (
        <div className="relative bg-green-500 rounded-lg px-6 md:px-12 lg:px-20 py-12 overflow-hidden">

            {/* 🔹 Background Glow Effect */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-green-300 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-green-300 opacity-30 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-10">

                {/* ============= Left Section ================= */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">

                    {/* 🚀 Main Heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                        Reserve Your Charging Spot <br />
                        <span className="text-gray-100">with <span className="text-yellow-300">Prescripto</span></span>
                    </h1>

                    {/* 🚀 Group Profiles */}
                    <div className="flex justify-center md:justify-start mt-4">
                        <img src={assets.group_profiles} alt="Group Profiles"
                            className="w-32 h-14 md:w-36 md:h-16 transition-transform duration-300 hover:scale-105" />
                    </div>

                    {/* 🚀 Description */}
                    <p className="text-white text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Explore our vast network of EV charging stations, pick the perfect spot, and reserve it instantly!
                    </p>

                    {/* 🚀 CTA Button */}
                    <div className="flex justify-center md:justify-start">
                        <a href="#our-brand"
                            className="flex items-center gap-3 bg-white text-green-500 font-semibold px-6 py-3 rounded-lg shadow-lg 
                                  transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:scale-105 
                                  active:scale-95 focus:ring-4 focus:ring-green-300 w-fit">

                            <span className="text-lg">Book Now</span>
                            <img src={assets.arrow_icon} alt="Arrow Icon"
                                className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" />
                        </a>
                    </div>

                </div>

                {/* ============= Right Section (EV Station Image) ================ */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative bg-white p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">

                        {/* 🔹 Floating Glow Effect */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-300 opacity-30 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-300 opacity-30 rounded-full blur-3xl"></div>

                        <img className="w-full max-w-md md:max-w-lg rounded-lg"
                            src={assets.header_img} alt="EV Charging Station" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Header;
