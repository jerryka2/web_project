import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/AppContext';

const Appointment = () => {
    const { statId } = useParams();
    const { evStations, backendUrl, token, getStationData } = useAppContext();
    const navigate = useNavigate();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [statInfo, setStatInfo] = useState(null);
    const [statSlots, setStatSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [selectedTime, setSelectedTime] = useState('');
    const [loading, setLoading] = useState(true);
    const [bookedSlots, setBookedSlots] = useState({});
    const timeSliderRef = useRef(null); // ✅ Scroll Reference

    // ✅ Fetch station data and update state
    useEffect(() => {
        if (!evStations.length) return;

        const foundStation = evStations.find(stat => stat._id === statId);
        if (!foundStation) {
            toast.error("⚠️ Station not found!");
            navigate("/");
            return;
        }

        setStatInfo(foundStation);
        setBookedSlots(foundStation.slots_booked || {});
        setLoading(false);
    }, [evStations, statId]);

    // ✅ Function to book an appointment
    const bookAppointment = async () => {
        if (!statInfo) {
            toast.error("⚠️ No station selected!");
            return;
        }
        if (!selectedTime) {
            toast.error("⚠️ Please select a time slot!");
            return;
        }

        const appointmentData = {
            stationData: {
                _id: statInfo._id,
                name: statInfo.name,
                location: {
                    line1: statInfo.address.line1,
                    line2: statInfo.address.line2
                },
                image: statInfo.image
            },
            slotData: statSlots[slotIndex]?.date.toISOString().split("T")[0].replace(/-/g, "_"),
            slotTime: selectedTime,
            amount: statInfo.pricing_per_kWh
        };

        try {
            console.log("🔵 Sending appointment request:", JSON.stringify(appointmentData, null, 2));

            const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, appointmentData, {
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
            });

            console.log("✅ Appointment booked successfully:", data);
            toast.success("✅ Appointment confirmed!");
            navigate("/my-appointments");
        } catch (error) {
            console.error("❌ API Error:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "Failed to book appointment");
        }
    };


    // ✅ Generate time slots while removing booked ones
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
                endTime.setHours(23, 59, 0, 0);

                if (i === 0) {
                    startTime.setHours(today.getHours() + 1, 0, 0, 0);
                    if (startTime.getHours() < 1) {
                        startTime.setHours(1, 0, 0, 0);
                    }
                } else {
                    startTime.setHours(1, 0, 0, 0);
                }

                let slotDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;
                let bookedTimes = bookedSlots[slotDate] || [];

                let timeSlots = [];
                while (startTime < endTime) {
                    let timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

                    if (!bookedTimes.includes(timeString)) {
                        timeSlots.push({
                            datetime: new Date(startTime),
                            time: timeString,
                        });
                    }

                    startTime.setHours(startTime.getHours() + 1);
                }

                slots.push({
                    day: daysOfWeek[currentDate.getDay()],
                    date: currentDate,
                    timeSlots: timeSlots,
                });
            }
            setStatSlots(slots);
        };

        generateSlots();
    }, [statInfo]);

    // ✅ Scroll function for Time Slot Slider
    const scrollLeft = () => {
        if (timeSliderRef.current) {
            timeSliderRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (timeSliderRef.current) {
            timeSliderRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    };

    if (loading) return <p className="text-center text-gray-500 mt-6">⏳ Loading station details...</p>;

    return statInfo && (
        <div className="max-w-5xl mx-auto px-8 py-14 bg-white rounded-2xl shadow-xl border border-gray-200">
            {/* 🔹 Station Information */}
            <div className="flex flex-col sm:flex-row gap-8 items-center bg-gray-50 p-8 rounded-lg shadow-md">
                {/* 🚀 Station Image */}
                <div className="w-full sm:max-w-80 rounded-xl overflow-hidden shadow-md flex justify-center">
                    <img
                        src={statInfo.image}
                        alt={statInfo.name}
                        className="w-full h-56 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* 🚀 Station Details */}
                <div className="flex-1">
                    <h1 className="text-4xl font-extrabold text-gray-900">{statInfo.name}</h1>
                    <p className="text-gray-600 mt-2 text-lg">{statInfo.charging_type} | {statInfo.power_capacity}</p>

                    <div className="flex items-center gap-2 mt-4">
                        <p className="text-lg font-semibold text-gray-900">
                            Pricing per kWh:
                        </p>
                        <span className="text-green-600 text-2xl font-bold">रु {statInfo.pricing_per_kWh}</span>
                    </div>
                </div>
            </div>

            {/* 🔹 Booking Slots */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center">🕒 Select a Booking Slot</h2>

                {/* 🚀 Date Selection */}
                <div className="flex justify-center flex-wrap gap-4 mt-6">
                    {statSlots.map((item, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 
                        ${index === slotIndex
                                    ? 'bg-green-500 text-white shadow-lg scale-110'
                                    : 'bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white hover:scale-105'}`}
                            onClick={() => setSlotIndex(index)}
                        >
                            {item.day} - {item.date.getDate()}
                        </button>
                    ))}
                </div>

                {/* 🚀 Scrollable Time Slot Selection */}
                <div className="relative flex items-center mt-8">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 bg-gray-300 px-4 py-2 rounded-full shadow-md hover:bg-gray-400 transition-all duration-300"
                    >
                        ◀
                    </button>
                    <div ref={timeSliderRef} className="flex overflow-x-auto gap-3 px-12 py-3 scrollbar-hide">
                        {statSlots[slotIndex]?.timeSlots.map((slot, index) => (
                            <button
                                key={index}
                                className={`px-5 py-3 rounded-lg text-lg font-medium whitespace-nowrap transition-all duration-300 
                            ${selectedTime === slot.time
                                        ? 'bg-green-600 text-white shadow-md scale-110'
                                        : 'bg-gray-300 text-gray-800 hover:bg-green-500 hover:text-white hover:scale-105'}`}
                                onClick={() => setSelectedTime(slot.time)}
                            >
                                {slot.time}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 bg-gray-300 px-4 py-2 rounded-full shadow-md hover:bg-gray-400 transition-all duration-300"
                    >
                        ▶
                    </button>
                </div>

                {/* 🚀 Confirm Appointment Button */}
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={bookAppointment}
                        className="bg-green-600 text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg 
                    hover:bg-green-700 transition-all duration-300 hover:scale-110"
                    >
                        ✅ Confirm Appointment
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Appointment;
