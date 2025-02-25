import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
    const { evStations } = useContext(AppContext);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Title Section */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                My Appointments
            </h1>

            <div className="flex flex-col gap-4">
                {evStations.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row items-center gap-6">

                        {/* Left: Station Image */}
                        <div className="w-full sm:w-40 flex justify-center">
                            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg shadow-sm" />
                        </div>

                        {/* Middle: Station Details */}
                        <div className="flex-1">
                            <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                            <p className="text-gray-600">{item.brand}</p>

                            <p className="mt-2 text-gray-700 font-medium">📍 Address:</p>
                            <p className="text-gray-600">{item.address.line1}</p>
                            <p className="text-gray-600">{item.address.line2}</p>

                            <p className="mt-2 text-gray-700 font-medium">
                                📅 Date & Time: <span className="font-semibold text-green-600">25, July, 2024 | 8:30 PM</span>
                            </p>
                        </div>

                        <div></div>

                        {/* Right: Payment & Action Buttons */}
                        <div className="flex flex-col gap-2 sm:justify-center">
                            {index === 2 ? (
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium cursor-not-allowed">
                                    Paid
                                </button>
                            ) : index === 1 ? (
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
                                    Pay Here
                                </button>
                            ) : null}

                            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                                Cancel Appointment
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
