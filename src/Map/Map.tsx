import React, {useEffect, useRef} from 'react';
import L, {LatLngBoundsLiteral, LatLngTuple} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import Sidebar from "../Sidebar/Sidebar";
import SidebarItemDropDown from "../Sidebar/SidebarItemDropDown";
import MapSpawns from "./MapSpawns";

function Map() {
    // -----------------------------------------------------------------------------------------------------------------
    // VARIABLES
    // ---- MAP
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map | null>(null);
    const markerGroup = useRef<L.LayerGroup>(L.layerGroup());
    const getMap = () => map;
    const getMarkerGroup = () => markerGroup;
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
    return (
        <div className="bg-ol-neutralLighterAlt">
            <Sidebar>
                <SidebarItemDropDown id="spawns-drop-down" text="Spawn Locations">
                    <MapSpawns mapInstance={getMap} markerGroupInstance={getMarkerGroup} />
                </SidebarItemDropDown>
            </Sidebar>
            <div ref={mapRef} className="flex-1 z-10 map-container"/>
        </div>
    );
}

export default Map;
