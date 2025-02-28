import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';

const MyProfile = () => {
    const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Update user profile both locally & in the database
    const updateUserProfileData = async () => {
        if (loading) return;
        setLoading(true);

        try {
            if (!userData?.name || !userData?.phone || !userData?.dob || !userData?.gender || !userData?.address?.line1) {
                toast.error("Please fill in all required fields!");
                setLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('userId', userData._id);
            formData.append('name', userData.name);
            formData.append('phone', userData.phone);
            formData.append('address', JSON.stringify(userData.address || {}));
            formData.append('gender', userData.gender);
            formData.append('dob', userData.dob);
            if (image) formData.append('image', image);

            console.log("📡 Sending updated profile data:", Object.fromEntries(formData.entries()));

            const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                toast.success(data.message);

                // ✅ Update local state immediately
                setUserData(prev => ({
                    ...prev,
                    name: userData.name,
                    phone: userData.phone,
                    address: userData.address,
                    gender: userData.gender,
                    dob: userData.dob,
                    image: image ? URL.createObjectURL(image) : prev.image
                }));

                await loadUserProfileData();
                setIsEdit(false);
                setImage(null);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("❌ Profile Update Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return userData && (
        <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-xl rounded-2xl border border-gray-300">
            {/* 🔹 Profile Image & Name Section */}
            <div className="text-center">
                {isEdit ? (
                    <label htmlFor="image" className="cursor-pointer flex flex-col items-center relative group">
                        <div className="relative w-36 h-36 rounded-full border-4 border-green-500 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105">
                            <img
                                src={image ? URL.createObjectURL(image) : userData?.image || assets.default_profile}
                                alt="Profile Preview"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 rounded-full">
                                <img src={assets.edit} alt="Upload Icon" className="w-10 h-10" />
                            </div>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                    </label>
                ) : (
                    <img
                        src={userData?.image || assets.default_profile}
                        alt="Profile"
                        className="w-36 h-36 object-cover rounded-full border-4 border-green-500 shadow-lg transition-all duration-300 hover:scale-105"
                    />
                )}

                {/* Name Input */}
                {isEdit ? (
                    <input
                        type="text"
                        value={userData?.name || ""}
                        onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-4 text-lg font-semibold text-center w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                    />
                ) : (
                    <p className="text-3xl font-bold mt-4 text-gray-900">{userData?.name || "No Name"}</p>
                )}
            </div>

            <hr className="my-6 border-gray-300" />

            {/* 🔹 Contact Information */}
            <div>
                <p className="text-xl font-semibold text-gray-800 mb-3">📞 Contact Information</p>
                <div className="bg-gray-100 p-5 rounded-lg shadow-md border border-gray-200">
                    <p className="text-gray-700 font-medium">📧 Email:</p>
                    <p className="text-gray-600">{userData?.email || "No Email"}</p>

                    <p className="mt-3 text-gray-700 font-medium">📞 Phone:</p>
                    {isEdit ? (
                        <input
                            type="text"
                            value={userData?.phone || ""}
                            onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 shadow-sm"
                        />
                    ) : (
                        <p className="text-gray-600">{userData?.phone || "No Phone"}</p>
                    )}
                </div>
            </div>

            {/* 🔹 Address Section */}
            <div className="mt-6">
                <p className="text-xl font-semibold text-gray-800 mb-3">📍 Address</p>
                <div className="bg-gray-100 p-5 rounded-lg shadow-md border border-gray-200">
                    {isEdit ? (
                        <div>
                            <input
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                value={userData?.address?.line1 || ""}
                                type="text"
                                placeholder="Street Address"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 mt-1 shadow-sm"
                            />
                            <input
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                value={userData?.address?.line2 || ""}
                                type="text"
                                placeholder="City, State, Zip"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 mt-1 shadow-sm"
                            />
                        </div>
                    ) : (
                        <p className="text-gray-600">{userData?.address?.line1 || "No Address"}, {userData?.address?.line2 || ""}</p>
                    )}
                </div>
            </div>

            {/* 🔹 Gender & DOB */}
            <div className="mt-6">
                <p className="text-xl font-semibold text-gray-800 mb-3">📋 Basic Information</p>
                <div className="bg-gray-100 p-5 rounded-lg shadow-md border border-gray-200">
                    <p className="text-gray-700 font-medium">⚧ Gender:</p>
                    {isEdit ? (
                        <select
                            onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            value={userData?.gender || ""}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 mt-1 shadow-sm"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="text-gray-600">{userData?.gender || "Not Specified"}</p>
                    )}
                </div>
            </div>

            {/* 🔹 Save Button */}
            <div className="mt-8 text-center">
                {isEdit ? (
                    <button onClick={updateUserProfileData} disabled={loading} className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                ) : (
                    <button onClick={() => setIsEdit(true)} className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg">
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
