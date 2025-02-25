import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { specialityData } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const Station = () => {
    const { brand } = useParams();
    const navigate = useNavigate();
    const { evStations } = useContext(AppContext);
    const [filterStation, setFilterStation] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(brand || "");

    // Apply brand filter
    useEffect(() => {
        let filteredStations = evStations;
        if (selectedBrand) {
            filteredStations = evStations.filter(station =>
                station.brand.toLowerCase() === selectedBrand.toLowerCase()
            );
        }
        setFilterStation(filteredStations);
    }, [evStations, selectedBrand]);

    // Handle brand selection
    const handleBrandClick = (newBrand) => {
        if (newBrand === "all") {
            setSelectedBrand("");
            navigate(`/stations`);
        } else {
            setSelectedBrand(newBrand.toLowerCase());
            navigate(`/stations/${newBrand.toLowerCase()}`);
        }
        setShowFilter(false); // Close filter panel after selection
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                ⚡ Browse {selectedBrand ? selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1) : 'All'} EV Charging Stations
            </h1>

            {/* ======= Mobile Filter Button (Positioned on Left) ======= */}
            <div className="md:hidden flex justify-start mt-4">
                <button
                    onClick={() => setShowFilter(true)}
                    className="bg-green-500 text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-green-600 transition"
                >
                    Filters
                </button>
            </div>

            {/* ======== Brand Selection for Desktop (Hidden on Mobile) ======== */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 my-6">
                <button
                    onClick={() => handleBrandClick("all")}
                    className={`px-6 py-3 border rounded-lg font-medium transition 
                        ${selectedBrand === "" ? 'bg-green-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
                >
                    All Brands
                </button>
                {specialityData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleBrandClick(item.brand)}
                        className={`px-6 py-3 border rounded-lg text-gray-700 font-medium transition 
                            ${selectedBrand === item.brand.toLowerCase()
                                ? 'bg-green-500 text-white'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {item.brand}
                    </button>
                ))}
            </div>

            {/* ======= Mobile Filter Panel (Slide-in from Right) ======= */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${showFilter ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className={`fixed right-0 top-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform ${showFilter ? "translate-x-0" : "translate-x-full"} duration-300`}>
                    {/* Close Button & Title */}
                    <div className="flex justify-between items-center p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold">Filter by Brand</h2>
                        <button onClick={() => setShowFilter(false)} className="text-gray-500 hover:text-gray-800 transition">
                            ✖
                        </button>
                    </div>

                    {/* Brand Selection */}
                    <div className="p-6 flex flex-col gap-4">
                        <button
                            onClick={() => handleBrandClick("all")}
                            className={`px-6 py-3 border rounded-lg font-medium transition 
                                ${selectedBrand === "" ? 'bg-green-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
                        >
                            All Brands
                        </button>
                        {specialityData.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleBrandClick(item.brand)}
                                className={`px-6 py-3 border rounded-lg text-gray-700 font-medium transition 
                                    ${selectedBrand === item.brand.toLowerCase()
                                        ? 'bg-green-500 text-white'
                                        : 'border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {item.brand}
                            </button>
                        ))}
                    </div>
                </div>
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
