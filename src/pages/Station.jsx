import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets'; // Import brand data
import { AppContext } from '../context/AppContext';

const Station = () => {
    const { brand } = useParams(); // Get selected brand from URL
    const navigate = useNavigate();
    const { evStations } = useContext(AppContext);
    const [filterStation, setFilterStation] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(brand || ""); // ✅ Keep Track of Selected Brand

    // Function to Apply Filters Based on Selected Brand
    useEffect(() => {
        let filteredStations = evStations;

        if (selectedBrand) {
            filteredStations = evStations.filter(station =>
                station.brand.toLowerCase() === selectedBrand.toLowerCase()
            );
        }

        setFilterStation(filteredStations);
    }, [evStations, selectedBrand]); // ✅ Runs when stations or brand selection changes

    // ✅ Fix: Handle Brand Selection & Refresh for "All Brands"
    const handleBrandClick = (newBrand) => {
        if (newBrand === "all") {
            setSelectedBrand(""); // ✅ Reset Brand Selection
            navigate(`/stations`);
            window.location.reload(); // ✅ Force Refresh the Page
        } else if (selectedBrand !== newBrand.toLowerCase()) {
            setSelectedBrand(newBrand.toLowerCase()); // ✅ Update Selected Brand
            navigate(`/stations/${newBrand.toLowerCase()}`);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                ⚡ Browse {selectedBrand ? selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1) : 'All'} EV Charging Stations
            </h1>

            {/* ======== Brand Selection (Now in Row) ======== */}
            <div className="flex flex-wrap justify-center gap-4 my-6">
                {/* "All Brands" Option */}
                <button
                    onClick={() => handleBrandClick("all")}
                    className={`px-6 py-3 border rounded-lg font-medium transition 
                        ${selectedBrand === "" ? 'bg-blue-100 border-blue-500 text-blue-800' : 'border-gray-300 hover:bg-gray-100'}`}
                >
                    All Brands
                </button>

                {specialityData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleBrandClick(item.brand)}
                        className={`px-6 py-3 border rounded-lg text-gray-700 font-medium transition 
                            ${selectedBrand === item.brand.toLowerCase()
                                ? 'bg-blue-100 border-blue-500 text-blue-800'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {item.brand}
                    </button>
                ))}
            </div>

            {/* ======== EV Stations Grid ======== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {filterStation.length > 0 ? (
                    filterStation.map((item, index) => (
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
                                {/* Availability Badge */}
                                <div className="mb-2">
                                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                        🟢 Available
                                    </span>
                                </div>

                                {/* Station Name */}
                                <p className="text-lg font-semibold text-gray-900">{item.name}</p>

                                {/* Charging Type & Power */}
                                <p className="text-gray-600 text-sm mt-1">{item.charging_type} | {item.power_capacity}</p>

                                {/* Location */}
                                <p className="text-sm text-gray-500 mt-2">
                                    📍 {item.address.line1}, {item.address.line2}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-lg text-center col-span-full">
                        No charging stations available for {selectedBrand ? selectedBrand : "your selection"}.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Station;
