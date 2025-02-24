import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';

const OurBrand = () => {
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
                    <Link onClick={() => scrollTo(0, 0)}
                        key={index}
                        to={`/Station/${item.speciality}`}
                        className="flex flex-col items-center bg-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white w-40"
                    >
                        <img
                            src={item.image}
                            alt={item.speciality}
                            className="w-20 h-20 object-cover rounded-full mb-3"
                        />
                        <p className="text-gray-700 font-semibold text-lg">{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default OurBrand;
