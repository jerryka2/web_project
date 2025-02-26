import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [evStations, setEvStations] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ Ensure this is set in .env

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

    // ✅ Auto-fetch station data on mount
    useEffect(() => {
        getStationData();
    }, []);

    // ✅ Provide context values
    const value = {
        evStations,
        getStationData, // ✅ Added so other components can call it
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
