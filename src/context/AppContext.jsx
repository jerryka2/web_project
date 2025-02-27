import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [evStations, setEvStations] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)

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


    const loadUserProfileData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    // ✅ Auto-fetch station data on mount
    useEffect(() => {
        getStationData();
    }, []);

    useEffect(() => {

        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }

    }, [token])

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
