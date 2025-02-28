import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-700 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* 🔹 Left Section - About */}
                <div className="text-center md:text-left">
                    <img src={assets.logo} alt="EV Station Logo" className="w-36 mx-auto md:mx-0 mb-4 transition-transform duration-300 hover:scale-105" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Welcome to the future of EV charging. Connect with 100+ trusted charging stations
                        for a fast, seamless, and eco-friendly experience. Join us in driving towards a greener tomorrow.
                    </p>
                </div>

                {/* 🔹 Center Section - Quick Links */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                    <ul className="text-gray-500 space-y-3">
                        <li className="hover:text-green-500 transition duration-300 cursor-pointer">Home</li>
                        <li className="hover:text-green-500 transition duration-300 cursor-pointer">Find a Station</li>
                        <li className="hover:text-green-500 transition duration-300 cursor-pointer">Pricing</li>
                        <li className="hover:text-green-500 transition duration-300 cursor-pointer">About Us</li>
                        <li className="hover:text-green-500 transition duration-300 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* 🔹 Right Section - Contact */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                    <div className="space-y-3">
                        <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-2">
                            📍 Kathmandu, Nepal
                        </p>
                        <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-2">
                            📧 <a href="mailto:support@evcharging.com" className="hover:text-green-500 transition">support@evcharging.com</a>
                        </p>
                        <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-2">
                            📞 <a href="tel:+9779800000000" className="hover:text-green-500 transition">+977-9800000000</a>
                        </p>
                    </div>
                </div>

            </div>

            {/* 🔹 Social Media Links */}
            <div className="flex justify-center gap-6 mt-8">
                <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300 text-2xl">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300 text-2xl">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300 text-2xl">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300 text-2xl">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>

            {/* 🔹 Copyright Section */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-300 pt-4">
                © 2025 Prescripto. All Rights Reserved.
            </div>
        </footer>


    );
};

export default Footer;
