import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 w-full">
            {/* ======== Title Section ======== */}
            <div className="text-center mb-10">
                <p className="text-3xl font-semibold text-gray-800 tracking-wide">
                    CONTACT <span className="text-green-600 font-bold">US</span>
                </p>
            </div>

            {/* ======== Contact Information Row ======== */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left: Image Section */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={assets.contact_image}
                        alt="Contact Us"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>

                {/* Right: Contact Details Section */}
                <div className="flex-1 text-left space-y-6">
                    {/* Office Section */}
                    <div>
                        <p className="text-lg font-bold text-green-700 tracking-wide">OUR OFFICE</p>
                        <p className="text-gray-700 mt-2">456 Clean Energy Road, Kathmandu, Nepal</p>
                        <p className="text-gray-700 mt-1">Tel: +977 1-1234567</p>
                        <p className="text-gray-700 mt-1">Email: support@prescripto.com</p>
                    </div>

                    {/* Careers Section */}
                    <div>
                        <p className="text-lg font-bold text-green-700 tracking-wide">CAREERS AT PRESCRIPTO</p>
                        <p className="text-gray-700 mt-2">
                            Learn more about our teams and job openings.
                        </p>
                        {/* Careers Button */}
                        <div className="mt-4">
                            <button className="border border-green-600 text-green-700 px-5 py-2 rounded-md transition hover:bg-green-600 hover:text-white">
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
