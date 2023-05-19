import React, { useEffect, useRef, useState, useMemo } from 'react';
import L, { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import SpawnsService from "../Services/SpawnsService";
import { SpawnMarker } from "../Data/Spawns/SpawnMarker";
import SidebarItem from "../Sidebar/SidebarItem";
import Sidebar from "../Sidebar/Sidebar";

function Map() {
    // -----------------------------------------------------------------------------------------------------------------
    // VARIABLES
    // ---- MAP
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map>();
    const markerGroup = useRef<L.LayerGroup>(L.layerGroup());
    const [showMarkers, setShowMarkers] = useState(false);

    // ---- SERVICE
    const spawnsService = useMemo(() => new SpawnsService(), []);

    // -----------------------------------------------------------------------------------------------------------------
    // ---- INITIALIZE MAP
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

    // -----------------------------------------------------------------------------------------------------------------
    // ---- MARKERS
    useEffect(() => {
        const markerGroupLocal = markerGroup.current;
        const addMobSpawns = (data: SpawnMarker[]) => {
            data.forEach((spawn: SpawnMarker) => {
                const customIcon = L.icon({
                    iconUrl: "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb/d/da/T_Map_Icon_Purge.png/24px-T_Map_Icon_Purge.png",
                    iconSize: [24, 24],
                });
                const markerInstance = L.marker([(-spawn.marker[1] / 1000), (spawn.marker[0] / 1000)], { icon: customIcon }).bindPopup(spawn.id);
                markerGroup.current.addLayer(markerInstance);
            })
        };

        const fetchAndAddSpawns = async () => {
            try {
                const data = await spawnsService.getSpawns();
                if (map.current) {
                    addMobSpawns(data);
                    if (showMarkers) {
                        markerGroup.current.addTo(map.current);
                    }
                }
            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        };

        if (showMarkers) {
            fetchAndAddSpawns();
        } else {
            markerGroupLocal.clearLayers();
            if (map.current) {
                map.current.removeLayer(markerGroupLocal);
            }
        }

        return () => {
            if (map.current && markerGroupLocal) {
                markerGroupLocal.clearLayers();
                map.current.removeLayer(markerGroupLocal);
            }
        };
    }, [showMarkers, spawnsService]);

    // -----------------------------------------------------------------------------------------------------------------
    return (
        <div className="bg-ol-neutralLighterAlt">
            <Sidebar>
                <SidebarItem text="Mob Spawns" action={() => setShowMarkers(!showMarkers)} state={showMarkers}>
                    {/* ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </SidebarItem>
            </Sidebar>
            <div ref={mapRef} className="flex-1 z-10 map-container" />
        </div>
    );
}

export default Map;
