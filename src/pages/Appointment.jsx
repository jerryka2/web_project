import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';
import { useAppContext } from '../context/AppContext';

const Appointment = () => {
    const { statId } = useParams();
    const { evStations } = useAppContext();

    const [statInfo, setStatInfo] = useState(null);
    const [statSlots, setStatSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');


    const fetchDocInfo = async () => {
        const foundStation = evStations.find(stat => stat._id === statId);
        setStatInfo(foundStation || {});
        console.log("Fetched Station Info:", foundStation);
    };

    const getAvailableSlots = async () => {
        setStatSlots([])

        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date()
            endTime.setDate(today.getDate() + 1)
            endTime.setHours(21, 0, 0, 0)

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(today.getHours() > 10 ? currentDate.getHours() + 1 : 10)
            }

        }
    }

    useEffect(() => {
        fetchDocInfo();
    }, [evStations, statId]);

    useEffect(() => {
        getAvailableSlots();
    }, [statInfo]);

    return statInfo && (
        <div className="max-w-6xl mx-auto px-6 py-10">
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

                {/* Right: Station Details (Fixed Border) */}
                <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white shadow-md">
                    {/* ================ Station Info : Name, Speed of Charger ====================== */}
                    <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                        {statInfo.name}
                        <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
                    </p>
                    <p className="text-gray-600 mt-2">{statInfo.charging_type} | {statInfo.power_capacity}</p>

                    {/* ===================== Station Description =========================== */}
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
        </div>
    );
};

export default Appointment;
