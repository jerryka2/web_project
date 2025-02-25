import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* <!-- Left Section --> */}
                <div>
                    <img src={assets.logo} alt="EV Station Logo" className="w-32 mb-4" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Welcome to the future of EV charging.
                        Our platform connects you to 100+ trusted charging stations,
                        offering a fast, seamless, and eco-friendly experience.
                        Join us in driving towards a greener tomorrow.
                    </p>
                </div>

                {/* <!-- Center Section (Quick Links) with Increased Gap --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-gray-400 space-y-4"> {/* Increased gap here */}
                        <li className="hover:text-green-400 transition cursor-pointer">Home</li>
                        <li className="hover:text-green-400 transition cursor-pointer">Find a Station</li>
                        <li className="hover:text-green-400 transition cursor-pointer">Pricing</li>
                        <li className="hover:text-green-400 transition cursor-pointer">About Us</li>
                        <li className="hover:text-green-400 transition cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* <!-- Right Section (Contact) --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <div className="space-y-4"> {/* Increased gap here */}
                        <p className="text-gray-400 text-sm">📍 Kathmandu, Nepal</p>
                        <p className="text-gray-400 text-sm">📧 support@evcharging.com</p>
                        <p className="text-gray-400 text-sm">📞 +977-9800000000</p>
                    </div>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
                © 2025 Prescripto. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
