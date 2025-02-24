import React from 'react';
import { useNavigate } from 'react-router-dom';
import { evStations } from '../assets/assets_frontend/assets'; // Renamed for clarity

const TopStation = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center py-12 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Section Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                ⚡ Top EV Charging Stations Near You
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
                Discover the best-rated EV charging stations in your area. Check availability, browse locations, and charge your EV effortlessly with the latest technology.
            </p>

            {/* Charging Stations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-6 md:px-12">
                {evStations.slice(0, 8).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/appointments/${item._id}`)}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        {/* Station Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-44 object-cover rounded-lg"
                        />

                        {/* Station Info */}
                        <div className="mt-5 text-left">
                            {/* Availability Badge (Properly Positioned) */}
                            <div className="mb-2">
                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    🟢 Available
                                </span>
                            </div>

                            {/* Station Name */}
                            <p className="text-lg font-semibold text-gray-900">{item.name}</p>

                            {/* Charging Type & Power */}
                            <p className="text-gray-600 text-sm mt-1">{item.charging_type} | {item.power_capacity}</p>

                            {/* Location (Moved Below) */}
                            <p className="text-sm text-gray-500 mt-2">
                                📍 {item.address.line1}, {item.address.line2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <button className="mt-10 bg-green-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 hover:scale-105 transition">
                View More Stations
            </button>
        </div>
    );
};

export default TopStation;
