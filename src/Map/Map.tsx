import React, { useEffect, useRef, useState, useMemo } from 'react';
import L, { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { CheckIcon } from '@heroicons/react/24/outline';
import SpawnsService from "../Services/SpawnsService";
import { SpawnMarker } from "../Data/Spawns/SpawnMarker";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import SidebarItemDropDown from "../Sidebar/SidebarItemDropDown";

interface showSpawnsDictionary { [key: string]: boolean; }

function Map() {
    // -----------------------------------------------------------------------------------------------------------------
    // VARIABLES
    // ---- MAP
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<L.Map>();
    const markerGroup = useRef<L.LayerGroup>(L.layerGroup());
    // ---- SERVICE
    // -------- SPAWNS
    const [showSpawns, setShowSpawnsDictionary] = useState<showSpawnsDictionary>({
        "Wildlife_Jaguar": true,
        "Wildlife_Jaguar_Cub": true,
    })
    const [spawns, setSpawns] = useState<Array<SpawnMarker>>(new Array<SpawnMarker>());
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
    // -------- SPAWNS
    useEffect(() => {
        const markerGroupLocal = markerGroup.current;

        const addMobSpawns = (spawns: Array<SpawnMarker>) => {
            spawns.forEach((spawn) => {
                if(showSpawns[spawn.id]){
                    const customIcon = L.icon({
                        iconUrl: "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb/d/da/T_Map_Icon_Purge.png/24px-T_Map_Icon_Purge.png",
                        iconSize: [24, 24],
                    });
                    const markerInstance = L.marker([(-spawn.marker[1] / 1000), (spawn.marker[0] / 1000)], { icon: customIcon }).bindPopup(spawn.id);
                    markerGroup.current.addLayer(markerInstance);
                }
            });
            return () => {};
        };

        const fetchSpawns = async () => {
            try {
                const spawnData = await spawnsService.getSpawns();
                setSpawns(spawnData);

                spawnData.map((spawn) => {
                    if(!showSpawns.hasOwnProperty(spawn.id)){
                        showSpawns[spawn.id] = false;
                    }
                    return void(0);
                });
                console.log(showSpawns);

            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        };

        // any spawns to show?
        if(Object.values(showSpawns).some((value: boolean) => value)){
            // any spawns loaded?
            if (spawns.length <= 0) {
                fetchSpawns().then(() => addMobSpawns(spawns.filter((spawn) => Object.keys(showSpawns).includes(spawn.id))));
            }
            else {
                // add spawns to map where showSpawns is true
                addMobSpawns(spawns.filter((spawn) => showSpawns[spawn.id]));
            }
            if (map.current) {
                markerGroup.current.addTo(map.current);
            }
        }
        else {
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
    }, [spawnsService, showSpawns, spawns]);

    // -----------------------------------------------------------------------------------------------------------------
    // TODO => CHANGE Spawns.id used for showSpawns to Spawns.Spawns.Type => there are the actual Categories And then use these Categories to load the correct spawns
    // TODO => setShowSpawnsDictionary needs to look for given key and set value accordingly in existing dictionary or add new key with value

    return (
        <div className="bg-ol-neutralLighterAlt">
            <Sidebar>
                <SidebarItemDropDown text="Mob Spawns" id="mob-spawns-dropdown">
                    <SidebarItem text="Wildlife Jaguar" action={() => setShowSpawnsDictionary({ "Wildlife_Jaguar" : !showSpawns["Wildlife_Jaguar"]})} state={showSpawns["Wildlife_Jaguar"]} classNameText="text-sm">
                        <CheckIcon className="h-4 w-4 mr-2"/>
                    </SidebarItem>
                    <SidebarItem text="Wildlife Jaguar Cub" action={() => setShowSpawnsDictionary({ "Wildlife_Jaguar_Cub" : !showSpawns["Wildlife_Jaguar_Cub"]})} state={showSpawns["Wildlife_Jaguar_Cub"]} classNameText="text-sm">
                        <CheckIcon className="h-4 w-4 mr-2"/>
                    </SidebarItem>
                </SidebarItemDropDown>
            </Sidebar>
            <div ref={mapRef} className="flex-1 z-10 map-container" />
        </div>
    );
}

export default Map;
