import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "Hari Saran Shrestha",
        image: assets.profile_pic,
        email: 'harisaranswap@gmail.com',
        phone: '9860000000',
        address: {
            line1: "57th Cross, Chandragiri",
            line2: "Circle, Kathmandu, Nepal"
        },
        gender: 'Male',
        dob: '2000-01-22'
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Profile Image & Name Section */}
            <div className="text-center">
                <div className="relative w-32 h-32 mx-auto">
                    <img
                        src={userData.image}
                        alt="Profile"
                        className="w-full h-full rounded-full border-4 border-green-500 shadow-md"
                    />
                </div>
                {isEdit ? (
                    <input
                        type="text"
                        value={userData.name}
                        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-4 text-lg font-semibold text-center w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                ) : (
                    <p className="text-2xl font-bold mt-4 text-gray-900">{userData.name}</p>
                )}
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Contact Information */}
            <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">📞 Contact Information</p>
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-700 font-medium">📧 Email:</p>
                    <p className="text-gray-600">{userData.email}</p>

                    <p className="mt-3 text-gray-700 font-medium">📞 Phone:</p>
                    {isEdit ? (
                        <input
                            type="text"
                            value={userData.phone}
                            onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                    ) : (
                        <p className="text-gray-600">{userData.phone}</p>
                    )}

                    <p className="mt-3 text-gray-700 font-medium">📍 Address:</p>
                    {isEdit ? (
                        <div>
                            <input
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                value={userData.address.line1}
                                type="text"
                                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400 mt-1"
                            />
                            <input
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                value={userData.address.line2}
                                type="text"
                                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400 mt-1"
                            />
                        </div>
                    ) : (
                        <p className="text-gray-600">{userData.address.line1}, {userData.address.line2}</p>
                    )}
                </div>
            </div>

            {/* Basic Information */}
            <div className="mt-6">
                <p className="text-lg font-semibold text-gray-800 mb-2">📋 Basic Information</p>
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-gray-700 font-medium">⚧ Gender:</p>
                    {isEdit ? (
                        <select
                            onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            value={userData.gender}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400 mt-1"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="text-gray-600">{userData.gender}</p>
                    )}

                    <p className="mt-3 text-gray-700 font-medium">🎂 Birthday:</p>
                    {isEdit ? (
                        <input
                            type="date"
                            onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                            value={userData.dob}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
                        />
                    ) : (
                        <p className="text-gray-600">{userData.dob}</p>
                    )}
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 text-center">
                {isEdit ? (
                    <button
                        onClick={() => setIsEdit(false)}
                        className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-transform transform hover:scale-105"
                    >
                        Save Information
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="bg-gray-700 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-transform transform hover:scale-105"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
