import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-green-500 rounded-lg px-6 md:px-12 lg:px-20 py-10'>
            {/* ============= Left Section ================= */}
            <div className='md:w-1/2 flex flex-col justify-center gap-6 py-6 text-center md:text-left'>

                {/* Main Heading */}
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
                    Reserve Your Charging Spot <br />
                    <span className="text-gray-100">with <span className="text-yellow-300">Prescripto</span></span>
                </h1>

                {/* Single Group Image Styled to Look Like a Stacked Group (No Border) */}
                <div className="flex justify-center md:justify-start mt-4 md:mt-6">
                    <img
                        src={assets.group_profiles}
                        alt="Group Profiles"
                        className='w-30 h-12 md:w-30 md:h-14 '
                    />
                </div>

                {/* Description */}
                <p className='text-white text-lg md:text-xl max-w-lg mx-auto md:mx-0'>
                    Explore our vast network of EV charging stations, <br />
                    pick the perfect spot, and reserve it instantly!
                </p>

                {/* CTA Button - Green Background */}
                <a href="#our-brand"
                    className="flex items-center gap-3 bg-white text-green-400 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white w-fit mx-auto md:mx-0"
                >
                    <span className="text-lg">Book Now</span>
                    <img
                        src={assets.arrow_icon}
                        alt="Arrow Icon"
                        className="w-6 h-6 transition-all duration-300 ease-in-out hover:invert"
                    />
                </a>

            </div>

            {/* ============= Right Section (EV Station Image) ================ */}
            <div className='md:w-1/2 flex justify-center items-center mt-6 md:mt-0'>
                <div className='bg-white p-5 rounded-lg shadow-lg'>
                    <img className='w-full max-w-md md:max-w-lg rounded-lg' src={assets.header_img} alt="EV Charging Station" />
                </div>
            </div>
        </div>
    );
};

export default Header;
