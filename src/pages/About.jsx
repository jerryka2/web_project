import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
            {/* ======== Title Section ======== */}
            <div className="text-center mb-8">
                <p className="text-4xl font-bold text-gray-900">
                    ABOUT <span className="text-green-500">US</span>
                </p>
            </div>

            {/* ======== Content Section ======== */}
            <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
                {/* Left: Image Section */}
                <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-lg">
                    <img src={assets.about_image} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                {/* Right: Text Section */}
                <div className="flex-1 text-left max-w-lg w-full">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Welcome to Prescripto, your trusted partner in EV charging solutions. Our platform is
                        designed to make electric vehicle charging seamless, efficient, and accessible for everyone.
                    </p>

                    <p className="mt-4 text-gray-600">
                        With a network of 100+ charging stations, we offer real-time availability tracking,
                        smart navigation, and hassle-free station booking. Whether you are commuting locally
                        or traveling long distances, our user-friendly platform ensures you never run out of charge.
                    </p>

                    <p className="mt-4 text-gray-600">
                        Join us in driving towards a greener future by adopting sustainable and innovative
                        EV solutions. With Prescripto, charging your EV is just a tap away.
                    </p>

                    {/* Call to Action */}
                    <div className="mt-6">
                        <a href="/stations" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md font-medium hover:bg-green-600 transition-transform transform hover:scale-105 w-full block text-center">
                            Find a Charging Station
                        </a>
                    </div>
                </div>
            </div>

            {/* ======== Why Choose Us Section ======== */}
            <div className="text-center mt-16">
                <p className="text-3xl font-bold text-gray-900">
                    WHY <span className="text-green-500">CHOOSE US</span>
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
                <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105 w-full">
                    <b className="text-2xl text-green-500">Efficiency</b>
                    <p className="mt-2 text-gray-600">
                        Our smart navigation and real-time tracking ensure minimal waiting time at charging stations.
                    </p>
                </div>
                <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105 w-full">
                    <b className="text-2xl text-green-500">Accessibility</b>
                    <p className="mt-2 text-gray-600">
                        With 100+ charging stations, we provide seamless EV charging across various locations.
                    </p>
                </div>
                <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition-transform transform hover:scale-105 w-full">
                    <b className="text-2xl text-green-500">Sustainability</b>
                    <p className="mt-2 text-gray-600">
                        By choosing us, you contribute to reducing carbon footprints and promoting green energy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
