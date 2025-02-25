import { createContext, useContext, useEffect, useState } from "react";
import { evStations as initialEvStations } from "../assets/assets_frontend/assets"; // Ensure it's imported correctly

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

    const value = {
        evStations,
        currencySymbol
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
