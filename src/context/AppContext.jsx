import axios from 'axios';
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [evStations, setEvStations] = useState([]);

    // Simulating API Fetching (Replace with actual API later if needed)
    useEffect(() => {
        setTimeout(() => {
            setEvStations(initialEvStations);
        }, 1000); // Simulated delay
    }, []);


    const currencySymbol = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    // const [evStations,setEvStations] = useState([])

    const value = {
        evStations,
        currencySymbol
    }

    const getStationData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/station/list')
            if (data.success) {
                setEvStations(data.evStations)

            }

        } catch (error) {

        }
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook for easier context usage
export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
