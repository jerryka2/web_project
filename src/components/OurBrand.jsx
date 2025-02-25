import React from 'react';
import { useNavigate } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';

const OurBrand = () => {
    const navigate = useNavigate();

    const handleFilterClick = (brand) => {
        navigate(`/stations/${brand.toLowerCase()}`); // ✅ Ensures lowercase path
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="our-brand" className="text-center py-12 bg-gray-100">
            {/* Section Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Find Our Brands
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
                Trusted by top EV brands worldwide, we ensure a smooth and efficient charging experience.
                Explore our network of partners and charge with confidence.
            </p>

            {/* Brand Cards Section */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {specialityData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterClick(item.brand)}
                        className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50 w-40"
                        aria-label={`Filter by ${item.brand}`}
                    >
                        <img
                            src={item.image}
                            alt={item.brand}
                            className="w-20 h-20 object-cover rounded-full mb-3"
                        />
                        <p className="text-gray-700 font-semibold text-lg">{item.brand}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default OurBrand;
