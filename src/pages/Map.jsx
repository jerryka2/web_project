import React, { useEffect, useState } from "react";

const Map = () => {
    const apiKey = "VOaLy39vAhVOKk3D-hQ-2QqgxhcJTt7OI2Wa6W3JHeY";
    const [map, setMap] = useState(null);
    const [zoomedIn, setZoomedIn] = useState(false);

    useEffect(() => {
        const loadScript = (url) => {
            return new Promise((resolve) => {
                if (document.querySelector(`script[src="${url}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.src = url;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        };

        const initializeMap = async () => {
            await loadScript("https://js.api.here.com/v3/3.1/mapsjs-core.js");
            await loadScript("https://js.api.here.com/v3/3.1/mapsjs-service.js");
            await loadScript("https://js.api.here.com/v3/3.1/mapsjs-ui.js");
            await loadScript("https://js.api.here.com/v3/3.1/mapsjs-mapevents.js");

            if (!map) {
                const platform = new window.H.service.Platform({ apikey: apiKey });
                const defaultLayers = platform.createDefaultLayers();
                const mapInstance = new window.H.Map(
                    document.getElementById("here-map"),
                    defaultLayers.vector.normal.map,
                    {
                        center: { lat: 27.7172, lng: 85.3240 },
                        zoom: 10,
                    }
                );

                new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(mapInstance));
                window.H.ui.UI.createDefault(mapInstance, defaultLayers);

                setMap(mapInstance);
            }
        };

        initializeMap();
    }, []);

    // 📌 Toggle Zoom
    const toggleZoom = () => {
        if (map) {
            map.setZoom(zoomedIn ? map.getZoom() - 2 : map.getZoom() + 2);
            setZoomedIn(!zoomedIn);
        }
    };

    // 📌 Find User's Location
    const findMyLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                if (map) {
                    const userLocation = { lat: latitude, lng: longitude };
                    map.setCenter(userLocation);
                    map.setZoom(14);

                    const userMarker = new window.H.map.Marker(userLocation, {
                        icon: new window.H.map.Icon(
                            "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png"
                        ),
                    });
                    map.addObject(userMarker);
                }
            },
            () => alert("Unable to access location. Enable GPS."),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };

    // 📌 Add EV Station Markers
    useEffect(() => {
        if (map) {
            const evStations = [
                { lat: 27.7172, lng: 85.3240 }, // Kathmandu
                { lat: 27.6700, lng: 85.3100 }, // Lalitpur
                { lat: 27.7050, lng: 85.2900 }, // Bhaktapur
                { lat: 28.2096, lng: 83.9856 }, // Pokhara
                { lat: 26.4499, lng: 87.2718 }, // Biratnagar
                { lat: 27.6817, lng: 83.4377 }, // Butwal
                { lat: 27.2046, lng: 84.8672 }, // Janakpur
                { lat: 28.0026, lng: 84.1373 }, // Chitwan
                { lat: 29.2747, lng: 82.1776 }, // Jumla
                { lat: 27.6930, lng: 85.3123 }, // Bhaktapur
                { lat: 28.6353, lng: 81.2304 }, // Dhangadhi
                { lat: 27.6175, lng: 85.5382 }, // Hetauda
                { lat: 27.3211, lng: 87.1789 }, // Ilam
                { lat: 28.1084, lng: 82.2931 }, // Baglung
                { lat: 29.8457, lng: 81.6021 }, // Mahendranagar
                { lat: 27.8826, lng: 82.6145 }, // Kapilvastu
                { lat: 27.4275, lng: 86.2791 }, // Okhaldhunga
                { lat: 26.8014, lng: 87.2823 }, // Dharan
                { lat: 28.6833, lng: 80.6014 }, // Tikapur
            ];


            evStations.forEach(station => {
                const marker = new window.H.map.Marker(station, {
                    icon: new window.H.map.Icon(
                        "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png"
                    ),
                });
                map.addObject(marker);
            });
        }
    }, [map]);

    return (
        <div className="flex flex-col items-center bg-white">
            {/* 📌 Styled Map Container */}
            <div className="relative w-full max-w-7xl h-[70vh] bg-white rounded-xl shadow-lg overflow-hidden">
                <div id="here-map" className="w-full h-full rounded-xl" />

                {/* 📌 Floating Buttons */}
                <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-3">
                    {/* 📌 Zoom Toggle */}
                    <button
                        onClick={toggleZoom}
                        className="w-14 h-14 bg-white border border-gray-400 rounded-full shadow-md flex items-center justify-center text-xl font-semibold 
                        hover:bg-gray-300 hover:shadow-lg hover:scale-110 transition-all"
                    >
                        {zoomedIn ? "−" : "+"}
                    </button>

                    {/* 📌 Find My Location */}
                    <button
                        onClick={findMyLocation}
                        className="w-14 h-14 bg-white text-black border border-gray-400 rounded-full shadow-md flex items-center justify-center text-lg font-bold 
                        hover:bg-gray-300 hover:shadow-lg hover:scale-110 transition-all"
                    >
                        📍
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Map;
