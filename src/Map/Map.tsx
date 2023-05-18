import React, { useEffect, useRef, useState } from 'react';
import L, { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { SidebarItem } from "../Sidebar/SidebarItem";
import Sidebar from "../Sidebar/Sidebar";

function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map>();
    const markerGroup = useRef<L.LayerGroup>(L.layerGroup());
    const [showMarkers, setShowMarkers] = useState(false);

    useEffect(() => {
        if (mapRef.current && !mapRef.current.hasChildNodes()) {
            map.current = L.map(mapRef.current, {
                zoomControl: false,
                attributionControl: false,
                crs: L.CRS.Simple,
                minZoom: 0,
                maxZoom: 5,
                zoomDelta: 0.2,
                zoomSnap: 0.2,
            });

            const bounds: LatLngBoundsLiteral = [
                [-370, -342],
                [445, 475]
            ];

            L.imageOverlay('https://gamepedia.cursecdn.com/conanexiles_gamepedia/f/fb/MiniMapFull.jpg', bounds).addTo(map.current);

            L.control.zoom({ position: 'topright' }).addTo(map.current);

            L.control.attribution({ position: 'bottomright' })
                .addAttribution('Images/Icons © <a href="https://www.funcom.com/" target="_new">Funcom</a> | Source: <a href="https://conanexiles.gamepedia.com/" target="_new">Conan Exiles Wiki</a>')
                .addTo(map.current);

            const mapCenter: LatLngTuple = [15, 63];
            const mapZoom = 1.5;
            map.current.setView(mapCenter, mapZoom);
        }
    }, []);

    useEffect(() => {
        const addPointsOfInterest = (data: any) => {
            data.forEach((poi: any) => {
                const { marker, spawns } = poi;
                const latitude = -marker[1] / 1000;
                const longitude = marker[0] / 1000;

                const customIcon = L.icon({
                    iconUrl: "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb/d/da/T_Map_Icon_Purge.png/24px-T_Map_Icon_Purge.png",
                    iconSize: [24, 24],
                });

                const markerInstance = L.marker([latitude, longitude], { icon: customIcon }).bindPopup(spawns[0].name);

                markerGroup.current.addLayer(markerInstance);
            });
        };

        const fetchAndAddMarkers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Juijang/wikidata/master/spawns.json');
                const data = await response.json();
                if (map.current) {
                    addPointsOfInterest(data);
                    if (showMarkers) {
                        markerGroup.current.addTo(map.current);
                    }
                }
            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        };

        fetchAndAddMarkers();

        return () => {
            if (map.current && markerGroup.current) {
                markerGroup.current.clearLayers();
                map.current.removeLayer(markerGroup.current);
            }
        };
    }, [showMarkers, markerGroup.current]);

    // -----------------------------------------------------------------------------------------------------------------
    // ---- MAP CONTROLS
    let controls : SidebarItem[] = [
        {
            id: 1,
            text: "Show Markers",
            icon: "<svg aria-hidden=\"true\" className=\"w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z\"></path><path d=\"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z\"></path></svg>",
            children: []
        }
    ];
    // -----------------------------------------------------------------------------------------------------------------
    return (
        <div className="bg-ol-neutralLighterAlt">
            <Sidebar items={controls} />
            <div ref={mapRef} className=" flex-1 z-10 map-container"/>
        </div>
    );
}

export default Map;
