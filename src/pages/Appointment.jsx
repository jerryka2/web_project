import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';
import { useAppContext } from '../context/AppContext';

const Appointment = () => {
    const { statId } = useParams();
    const { evStations } = useAppContext();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const navigate = useNavigate();

    const [statInfo, setStatInfo] = useState(null);
    const [statSlots, setStatSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null);
    const [relatedStations, setRelatedStations] = useState([]);

    useEffect(() => {
        const foundStation = evStations.find(stat => stat._id === statId);
        if (foundStation) {
            setStatInfo(foundStation);

            // Set Related Stations (filtering out current station)
            setRelatedStations(evStations.filter(stat => stat.brand === foundStation.brand && stat._id !== statId));
        }
    }, [evStations, statId]);

    useEffect(() => {
        if (!statInfo) return;

        const generateSlots = () => {
            let today = new Date();
            let slots = [];

            for (let i = 0; i < 7; i++) {
                let currentDate = new Date(today);
                currentDate.setDate(today.getDate() + i);

                let startTime = new Date(currentDate);
                let endTime = new Date(currentDate);
                endTime.setHours(21, 0, 0, 0); // Until 9 PM

                if (i === 0) {
                    startTime.setHours(today.getHours() + 1, 0, 0, 0);
                    if (startTime.getHours() < 10) {
                        startTime.setHours(10, 0, 0, 0);
                    }
                } else {
                    startTime.setHours(10, 0, 0, 0); // Future days start from 10 AM
                }

                let timeSlots = [];
                while (startTime < endTime) {
                    timeSlots.push({
                        datetime: new Date(startTime),
                        time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    });
                    startTime.setHours(startTime.getHours() + 1);
                }

                slots.push({
                    day: daysOfWeek[currentDate.getDay()],
                    date: currentDate.getDate(),
                    timeSlots: timeSlots,
                });
            }
            setStatSlots(slots);
        };

        generateSlots();
    }, [statInfo]);

    return statInfo && (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* 🚀 Station Info Section */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">

                {/* Left: Centered Station Image */}
                <div className="w-full sm:max-w-72 rounded-lg overflow-hidden shadow-md flex justify-center">
                    <img
                        src={statInfo.image}
                        alt={statInfo.name}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right: Station Details */}
                <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white shadow-md">
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                        {statInfo.name}
                        <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
                    </p>
                    <p className="text-gray-600 mt-2">{statInfo.charging_type} | {statInfo.power_capacity}</p>

                    {/* About Section */}
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                            About <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
                        </p>
                        <p className="text-gray-600 mt-2">{statInfo.about}</p>
                    </div>

                    {/* 🚀 Pricing Section (Now in Nepali Currency) */}
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-900">
                            Pricing per kWh:
                            <span className="text-green-600 font-bold"> रु {statInfo.pricing_per_kWh}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/*  ========================== Booking Slots ==================== */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800 text-center">🕒 Booking Slots</h2>

                {/* Styled Date Selection Section */}
                <div className="flex justify-center mt-6 space-x-4">
                    {statSlots.length > 0 && statSlots.map((item, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer px-4 py-2 rounded-lg border text-center transition ${index === slotIndex
                                    ? 'bg-green-500 text-white border-green-600'
                                    : 'bg-white text-gray-700 border-gray-300'
                                } hover:bg-green-600 hover:text-white`}
                            onClick={() => setSlotIndex(index)}
                        >
                            <p className="font-semibold">{item.day}</p>
                            <p className="text-lg font-bold">{item.date}</p>
                        </div>
                    ))}
                </div>

                {/* 🚀 Scrollable Time Slots */}
                <div className="mt-6 overflow-x-auto whitespace-nowrap no-scrollbar">
                    <div className="flex space-x-4 px-2 py-2">
                        {statSlots.length > 0 && statSlots[slotIndex]?.timeSlots.map((slot, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-md font-medium transition ${selectedTime === slot.time
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-white'
                                    }`}
                                onClick={() => setSelectedTime(slot.time)}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 🚀 Styled "Book Your Appointment" Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        className="bg-green-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition 
                        hover:bg-green-600 hover:scale-105"
                    >
                        Book Your Appointment
                    </button>
                </div>
            </div>

            {/* 🚀 Related Charging Stations Section */}
            {relatedStations.length > 0 && (
                <div className="mt-14">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">🔌 Related EV Charging Stations</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                        {relatedStations.map((station, index) => (
                            <div key={index} onClick={() => navigate(`/appointments/${station._id}`)} className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300">
                                <img src={station.image} alt={station.name} className="w-full h-44 object-cover rounded-lg" />
                                <p className="text-lg font-semibold text-gray-900 mt-3">{station.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appointment;
