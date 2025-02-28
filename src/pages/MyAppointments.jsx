import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext);
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // ✅ Format Slot Data
    const slotDataFormat = (slotData) => {
        if (!slotData) return "Invalid Date";
        const dataArray = slotData.split('_');
        return dataArray[0] + " " + months[Number(dataArray[1]) - 1] + " " + dataArray[2];
    };

    // ✅ Fetch Appointments
    const getUserAppointments = async () => {
        if (!token) {
            console.error("❌ No token found, skipping API call.");
            return;
        }

        try {
            console.log("🔵 Fetching appointments...");
            const { data } = await axios.get(`${backendUrl}/api/user/list-appointment`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                setAppointments(data.appointments.reverse());
                console.log("✅ Appointments received:", data.appointments);
            } else {
                toast.error("⚠️ No appointments found.");
            }
        } catch (error) {
            console.error("❌ API Error:", error.response?.data?.message || error.message);
            toast.error("⚠️ Error fetching appointments. Please try again.");
        }
    };

    // ✅ Open Modal
    const openCancelModal = (appointment) => {
        setSelectedAppointment(appointment);
        setShowModal(true);
    };

    // ✅ Close Modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedAppointment(null);
    };

    // ✅ Cancel Appointment API Call
    const cancelAppointment = async () => {
        if (!selectedAppointment) return;

        try {
            console.log("🔴 Cancelling appointment:", selectedAppointment._id);

            const { data } = await axios.delete(`${backendUrl}/api/user/cancel-appointment/${selectedAppointment._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                toast.success("✅ Appointment canceled successfully!");

                // ✅ Update the UI without removing the appointment
                setAppointments(prev =>
                    prev.map(app =>
                        app._id === selectedAppointment._id ? { ...app, isCancelled: true } : app
                    )
                );
                closeModal();
            } else {
                toast.error("⚠️ Failed to cancel appointment");
            }
        } catch (error) {
            console.error("❌ API Error:", error.response?.data?.message || error.message);
            toast.error("❌ Error canceling appointment");
        }
    };

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Title Section */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">My Appointments</h1>

            <div className="flex flex-col gap-4">
                {appointments.length > 0 ? (
                    appointments.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                            {/* Left: Station Image */}
                            <div className="w-full sm:w-40 flex justify-center">
                                <img
                                    src={item.stationData?.image || "https://via.placeholder.com/150"}
                                    alt={item.stationData?.name || "Station"}
                                    className="w-full h-32 object-cover rounded-lg shadow-sm"
                                />
                            </div>

                            {/* Middle: Station Details */}
                            <div className="flex-1">
                                <p className="text-xl font-semibold text-gray-900">{item.stationData?.name || "Unknown Station"}</p>

                                <p className="mt-2 text-gray-700 font-medium">📍 Address:</p>
                                <p className="text-gray-600">{item.stationData?.location?.line1 || "No address available"}</p>
                                <p className="text-gray-600">{item.stationData?.location?.line2 || ""}</p>

                                <p className="mt-2 text-gray-700 font-medium">
                                    📅 Date & Time: <span className="font-semibold text-green-600">
                                        {slotDataFormat(item.slotData)} | {item.slotTime}
                                    </span>
                                </p>

                                <p className="mt-2 text-gray-700 font-medium">
                                    💲 Amount: <span className="font-semibold text-green-600">${item.amount}</span>
                                </p>
                            </div>

                            {/* Right: Status Display */}
                            <div className="flex flex-col gap-2 sm:justify-center">
                                {/* Only show "Pay Here" if appointment is NOT cancelled */}
                                {!item.isCancelled && (
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
                                        Pay Here
                                    </button>
                                )}

                                {/* Show "Cancelled Appointment" if cancelled */}
                                {item.isCancelled ? (
                                    <span className="text-red-500 font-semibold">🚫 Cancelled Appointment</span>
                                ) : (
                                    <button
                                        onClick={() => openCancelModal(item)}
                                        className="border border-red-500 text-red-500 px-4 py-2 rounded-md font-medium hover:bg-red-500 hover:text-white transition"
                                    >
                                        Cancel Appointment
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No appointments found.</p>
                )}
            </div>

            {/* Modal for Cancel Confirmation */}
            {showModal && selectedAppointment && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Cancel Appointment</h2>
                        <p className="text-gray-700">
                            Are you sure you want to cancel your appointment at <span className="font-semibold">{selectedAppointment.stationData?.name}</span>?
                        </p>

                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                            >
                                No, Keep It
                            </button>
                            <button
                                onClick={cancelAppointment}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                            >
                                Yes, Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyAppointments;
