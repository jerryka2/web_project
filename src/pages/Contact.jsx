import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
            {/* 🔹 Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 tracking-wide">
                    CONTACT <span className="text-green-600">US</span>
                </h2>
                <p className="text-gray-600 text-lg mt-2">
                    We’re here to help! Get in touch with us for any inquiries or support.
                </p>
            </div>

            {/* 🔹 Contact Information Row */}
            <div className="flex flex-col lg:flex-row items-center gap-14">
                {/* 🚀 Left: Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={assets.contact_image}
                        alt="Contact Us"
                        className="w-full max-w-sm rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* 🚀 Right: Contact Details Section */}
                <div className="flex-1 text-left space-y-8">
                    {/* 📍 Office Section */}
                    <div>
                        <h3 className="text-xl font-bold text-green-700 tracking-wide">OUR OFFICE</h3>
                        <p className="text-gray-700 mt-2">456 Clean Energy Road, Kathmandu, Nepal</p>
                        <p className="text-gray-700 mt-1">📞 +977 1-1234567</p>
                        <p className="text-gray-700 mt-1">📧 support@prescripto.com</p>
                    </div>

                    {/* 🚀 Careers Section */}
                    <div>
                        <h3 className="text-xl font-bold text-green-700 tracking-wide">CAREERS AT PRESCRIPTO</h3>
                        <p className="text-gray-700 mt-2">
                            Learn more about our teams and job openings. Join us in revolutionizing EV charging solutions.
                        </p>
                        {/* Careers Button */}
                        <div className="mt-5">
                            <button className="border border-green-600 text-green-700 px-6 py-3 rounded-md font-medium 
                            transition-all duration-300 hover:bg-green-600 hover:text-white hover:scale-105">
                                Explore Jobs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
