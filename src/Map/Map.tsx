import React, {useEffect, useRef} from 'react';
import './Map.css';
import L, {LatLngBoundsLiteral, LatLngTuple} from 'leaflet';
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

            const zoomControl = L.control.zoom({
                position: 'topright',
            });
            zoomControl.addTo(map.current);

            const zoomControlElement = document.querySelector('.leaflet-control-zoom');
            console.log(zoomControlElement);
            if (zoomControlElement) {
                /* bg-ol-neutralPrimary dark:bg-ol-white hover:bg-ol-neutralPrimaryAlt dark:hover:bg-ol-neutralLighter */
                zoomControlElement.classList.add('rounded-lg-1');
                zoomControlElement.classList.add('bg-ol-neutralPrimary');
                zoomControlElement.classList.add('dark:bg-ol-white');
                zoomControlElement.classList.add('border-2');
                zoomControlElement.classList.add('border-ol-themePrimary');
                zoomControlElement.classList.add('text-ol-themePrimary');

                const zoomInControlElement = zoomControlElement.querySelector('.leaflet-control-zoom-in');
                const zoomOutControlElement = zoomControlElement.querySelector('.leaflet-control-zoom-out');
                if(zoomInControlElement){
                    zoomInControlElement.classList.add('hover:bg-ol-neutralPrimaryAlt');
                    zoomInControlElement.classList.add('dark:hover:bg-ol-neutralLighter');
                }
                if(zoomOutControlElement){
                    zoomOutControlElement.classList.add('hover:bg-ol-neutralPrimaryAlt');
                    zoomOutControlElement.classList.add('dark:hover:bg-ol-neutralLighter');
                }
            }

            L.control.attribution({ position: 'bottomright' })
                .addAttribution('Images/Icons © <a href="https://www.funcom.com/" target="_new">Funcom</a> | Source: <a href="https://conanexiles.gamepedia.com/" target="_new">Conan Exiles Wiki</a>')
                .addTo(map.current);

            const mapCenter: LatLngTuple = [8, 8];
            const mapZoom = 1.0;
            map.current.setView(mapCenter, mapZoom);
        }
    }, []);
    // -----------------------------------------------------------------------------------------------------------------
    return (
        <div className="bg-ol-neutralPrimaryAlt dark:bg-ol-neutralLighterAlt">
            <Sidebar>
                <SidebarItemDropDown id="spawns-drop-down" text="Spawn Locations" classNameButton="rounded">
                    <MapSpawns mapInstance={getMap} markerGroupInstance={getMarkerGroup} />
                </SidebarItemDropDown>
            </Sidebar>
            <div ref={mapRef} className="flex-1 z-10 map-container"/>
        </div>
    );
}

export default Map;
