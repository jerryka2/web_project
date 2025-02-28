import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import styles

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [evStations, setEvStations] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(localStorage.getItem('token') || "");
    const [userData, setUserData] = useState(null);

    // ✅ Fetch Stations from Backend
    const getStationData = async () => {
        try {
            console.log("📡 Fetching station data...");
            const { data } = await axios.get(`${backendUrl}/api/station/list`); // ✅ Correct API path
            if (data.success) {
                setEvStations(data.stations);
                console.log("✅ Stations Loaded:", data.stations);
            } else {
                console.error("❌ API Response Error:", data.message);
            }
        } catch (error) {
            console.error("🚨 Error fetching stations:", error.response?.data?.message || error.message);
        }
    };


    // ✅ Fetch user profile data
    const loadUserProfileData = async () => {
        try {
            console.log("🔵 Fetching user profile...");
            console.log("🔵 Using Token:", token);

            if (!token) {
                console.error("❌ No token found, skipping user fetch.");
                return;
            }

            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log("✅ User profile fetched:", data);

            if (data.success) {
                setUserData(data.user); // ✅ Corrected setUserData()
            } else {
                console.error("❌ User profile fetch failed:", data.message);
                toast.error("⚠️ Failed to load user profile!");
                setUserData(null);
            }
        } catch (error) {
            console.error("❌ Error fetching user profile:", error.response?.data?.message || error.message);
            toast.error("⚠️ User profile not found. Please log in again.");
            setUserData(null); // ✅ Reset user data correctly
            localStorage.removeItem("token"); // ✅ Remove token if expired
            setToken(""); // ✅ Reset token state
        }
    };

    // ✅ Load token from localStorage
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    // ✅ Load user profile after token is set
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            loadUserProfileData();
        } else {
            setUserData(null);
        }
    }, [token]);

    useEffect(() => {
        getStationData();
    }, []);


    // ✅ Provide context values
    const value = {
        evStations,
        getStationData,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook for easier context usage
export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
