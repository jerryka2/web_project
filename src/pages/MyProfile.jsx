import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';


const MyProfile = () => {

    const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)

    const updateUserProfileData = async () => {

        try {

            const formData = new FormData()

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)

            } else {
                toast.error(data.message)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }

    return userData && (
        <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Profile Image & Name Section */}
            <div className="text-center">

                {
                    isEdit ? (
                        <label htmlFor="image" className="cursor-pointer flex flex-col items-center relative group">
                            <div className="relative w-32 h-32 rounded-full border-4 border-green-500 shadow-md overflow-hidden">
                                {/* Profile Image or Selected Image */}
                                <img
                                    src={image ? URL.createObjectURL(image) : userData.image}
                                    alt="Profile Preview"
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                                />

                                {/* Upload Icon (Centered on Hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 rounded-full">
                                    <img
                                        src={assets.edit}
                                        alt="Upload Icon"
                                        className="w-10 h-10"
                                    />
                                </div>
                            </div>

                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                id="image"
                                hidden
                            />
                        </label>
                    ) : (
                        <img
                            src={userData.image}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full border-4 border-green-500 shadow-md"
                        />
                    )
                }

                <div className="relative w-32 h-32 mx-auto">

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
                        onClick={updateUserProfileData}
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
