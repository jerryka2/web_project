import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedStation = (speciality, statInfo) => {

    const { evStations } = useAppContext();
    const [relatedStations, setRelatedStations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (evStations.lenght > 0 && speciality) {
            const relatedStations = evStations.filter(stat => stat.speciality === speciality && stat._id !== statInfo._id)

            setRelatedStations(relatedStations)
        }
    }, [evStations, speciality, statInfo])

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* 🔹 Section Title */}
            <h1 className="text-4xl font-bold text-gray-900 text-center">
                ⚡ Browse {selectedBrand ? selectedBrand.charAt(0).toUpperCase() + selectedBrand.slice(1) : 'All'} EV Charging Stations
            </h1>

            {/* 🔹 Brand Selection Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {/* "All Brands" Option */}
                <button
                    onClick={() => handleBrandClick("all")}
                    className={`px-6 py-3 border rounded-lg font-medium transition-all duration-300 
                            ${selectedBrand === "" ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300 hover:bg-gray-100'}`}
                >
                    All Brands
                </button>

                {specialityData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleBrandClick(item.brand)}
                        className={`px-6 py-3 border rounded-lg font-medium transition-all duration-300 
                            ${selectedBrand === item.brand.toLowerCase()
                                ? 'bg-green-100 border-green-500 text-green-700'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {item.brand}
                    </button>
                ))}
            </div>

            {/* 🔹 EV Stations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {filterStation.length > 0 ? (
                    filterStation.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/appointments/${item._id}`)}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            {/* 🚀 Station Image */}
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    🟢 Available
                                </span>
                            </div>

                            {/* 🚀 Station Info */}
                            <div className="mt-5 text-left">
                                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                                <p className="text-gray-600 text-sm mt-1">{item.charging_type} | {item.power_capacity}</p>

                                {/* 🚀 Location */}
                                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
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

    )
}

export default RelatedStation
