import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
            {/* 🔹 Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900">
                    ABOUT <span className="text-green-500">US</span>
                </h2>
            </div>

            {/* 🔹 Content Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                {/* Left: Image Section */}
                <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-lg">
                    <img
                        src={assets.about_image}
                        alt="About Us"
                        className="w-full h-auto rounded-xl shadow-xl transition-transform transform hover:scale-105 duration-300"
                    />
                </div>

                {/* Right: Text Section */}
                <div className="flex-1 text-left max-w-lg w-full">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Welcome to <span className="font-semibold text-green-500">Prescripto</span>, your trusted partner in EV charging solutions. Our platform is
                        designed to make electric vehicle charging seamless, efficient, and accessible for everyone.
                    </p>

                    <p className="mt-4 text-gray-600">
                        With a network of **100+ charging stations**, we offer **real-time availability tracking, smart navigation, and hassle-free booking.** Whether commuting or traveling long distances, our platform ensures you **never run out of charge.**
                    </p>

                    <p className="mt-4 text-gray-600">
                        Join us in **driving towards a greener future** with **sustainable and innovative EV solutions**. With **Prescripto, charging your EV is just a tap away.**
                    </p>

                    {/* 🚀 Call to Action */}
                    <div className="mt-6">
                        <a href="/stations" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-medium block text-center
                            transition-all duration-300 hover:bg-green-600 hover:scale-105">
                            Find a Charging Station
                        </a>
                    </div>
                </div>
            </div>

            {/* 🔹 Why Choose Us Section */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    WHY <span className="text-green-500">CHOOSE US</span>
                </h2>
            </div>

            {/* 🔹 Feature Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full">
                {[
                    { title: "Efficiency", text: "Smart navigation & real-time tracking ensure minimal waiting time at charging stations." },
                    { title: "Accessibility", text: "With 100+ charging stations, we provide seamless EV charging across various locations." },
                    { title: "Sustainability", text: "Choosing us reduces carbon footprints & promotes green energy." }
                ].map((feature, index) => (
                    <div key={index} className="p-8 border border-gray-300 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <h3 className="text-2xl text-green-500 font-semibold">{feature.title}</h3>
                        <p className="mt-3 text-gray-600">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default About;
