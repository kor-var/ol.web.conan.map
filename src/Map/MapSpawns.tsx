import React, {useEffect, useState, useMemo} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CheckIcon} from '@heroicons/react/24/outline';
import SpawnsService from "../Services/SpawnsService";
import {SpawnMarker} from "../Data/Spawns/SpawnMarker";
import {IShowSpawnsDictionary, ShowSpawnsDictionary} from "../Data/Spawns/ShowSpawnsDictionary";
import SidebarItem from "../Sidebar/SidebarItem";
import SidebarItemDropDown from "../Sidebar/SidebarItemDropDown";

interface MapSpawnProps {
    mapInstance: () => React.MutableRefObject<L.Map | null>;
    markerGroupInstance: () => React.MutableRefObject<L.LayerGroup<any>>;
}

const MapSpawns: React.FC<MapSpawnProps> = ({mapInstance, markerGroupInstance}) => {
    // -----------------------------------------------------------------------------------------------------------------
    // VARIABLES
    // ---- MAP
    const map = mapInstance();
    const markerGroup = markerGroupInstance();
    // ---- SPAWNS
    const [showSpawns, setShowSpawnsDictionary] = useState<IShowSpawnsDictionary>(new ShowSpawnsDictionary());
    const [spawns, setSpawns] = useState<Array<SpawnMarker>>(new Array<SpawnMarker>());
    const spawnsService = useMemo(() => new SpawnsService(), []);
    const setShowSpawns = (keyToUpdate: string) => {
        setShowSpawnsDictionary((showSpawns) => {
            const updatedShowSpawns: ShowSpawnsDictionary = {...showSpawns};
            Object.keys(showSpawns).forEach((key) => {
                // Check if the key includes the specified text
                if (key.includes(keyToUpdate)) {
                    // Toggle the value of the matching key
                    updatedShowSpawns[key] = !showSpawns[key];
                }
            });
            return updatedShowSpawns;
        });
    };
    const isKeyEnabled = (text: string): boolean => {
        const similarKey = Object.keys(showSpawns).find((key) =>
            key.toLowerCase().includes(text.toLowerCase())
        );
        return similarKey ? showSpawns[similarKey] : false;
    };
    // -----------------------------------------------------------------------------------------------------------------
    // ---- MARKERS
    // -------- SPAWNS
    useEffect(() => {
        const mapLocal = map.current;
        const markerGroupLocal = markerGroup.current;
        const addMobSpawns = (spawns: Array<SpawnMarker>) => {
            spawns.forEach((spawn) => {
                const customIcon = L.icon({
                    iconUrl: "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb/d/da/T_Map_Icon_Purge.png/24px-T_Map_Icon_Purge.png",
                    iconSize: [24, 24],
                });
                const markerInstance = L.marker([(-spawn.marker[1] / 1000), (spawn.marker[0] / 1000)], {icon: customIcon}).bindPopup(spawn.id);
                markerGroup.current.addLayer(markerInstance);
            });
            return () => {
            };
        };
        const fetchSpawns = async () => {
            try {
                const spawnData = await spawnsService.getSpawns();
                const filteredSpawns = spawnData.map(data => ({
                    ...data,
                    spawns: data.spawns.filter(spawn => spawn.type !== undefined)
                }));
                setSpawns(filteredSpawns);

            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        };

        // any spawns to show?
        if (Object.values(showSpawns).some((value: boolean) => value)) {
            if (spawns.length <= 0) {
                fetchSpawns().then(() => {
                });
            }
            // add spawns to map where showSpawns is true
            addMobSpawns(spawns.filter((spawn) => spawn.spawns.some((spawn) => showSpawns[`${spawn.type.concat(spawn.id).replace(/[^a-zA-Z0-9]/g, '')}`])));
            if (map.current) {
                markerGroup.current.addTo(map.current);
            }
        } else {
            markerGroupLocal.clearLayers();
            if (map.current) {
                map.current.removeLayer(markerGroupLocal);
            }
        }

        return () => {
            if (mapLocal && markerGroupLocal) {
                markerGroupLocal.clearLayers();
                if (mapLocal) {
                    mapLocal.removeLayer(markerGroupLocal);
                }
            }
        };
    }, [spawnsService, showSpawns, spawns, markerGroup, map]);
    // -----------------------------------------------------------------------------------------------------------------
    return (
        <>
            {/* DIALOG NPCs */}
            <SidebarItemDropDown text="Dialog NPC" id="dialognpcs-spawns-dropdown">
                <SidebarItem text="Arcosthe Wanderer" action={() => setShowSpawns("DialogNPCDialogueArcostheWanderer")}
                             state={isKeyEnabled("DialogNPCDialogueArcostheWanderer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Blacksmith Ghost" action={() => setShowSpawns("DialogNPCDialogueBlacksmithGhost")}
                             state={isKeyEnabled("DialogNPCDialogueBlacksmithGhost")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Braga" action={() => setShowSpawns("DialogNPCDialogueBraga")}
                             state={isKeyEnabled("DialogNPCDialogueBraga")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Child of Jhebbal Sag" action={() => setShowSpawns("DialogNPCDialogueChildofJhebbalSag")}
                             state={isKeyEnabled("DialogNPCDialogueChildofJhebbalSag")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Conan" action={() => setShowSpawns("DialogNPCDialogueConan")}
                             state={isKeyEnabled("DialogNPCDialogueConan")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Gilzan the Treasure Hunter" action={() => setShowSpawns("DialogNPCDialogueGilzantheTreasureHunter")}
                             state={isKeyEnabled("DialogNPCDialogueGilzantheTreasureHunter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Jamila the Pirate Queen" action={() => setShowSpawns("DialogNPCDialogueJamilathePirateQueen")}
                             state={isKeyEnabled("DialogNPCDialogueJamilathePirateQueen")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Mekkamoses" action={() => setShowSpawns("DialogNPCDialogueMekkamoses")}
                             state={isKeyEnabled("DialogNPCDialogueMekkamoses")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Mountaineer" action={() => setShowSpawns("DialogNPCDialogueMountaineer")}
                             state={isKeyEnabled("DialogNPCDialogueMountaineer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Muriela the Artisan" action={() => setShowSpawns("DialogNPCDialogueMurielatheArtisan")}
                             state={isKeyEnabled("DialogNPCDialogueMurielatheArtisan")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Nunu the Cannibal" action={() => setShowSpawns("DialogNPCDialogueNunutheCannibal")}
                             state={isKeyEnabled("DialogNPCDialogueNunutheCannibal")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Outcast" action={() => setShowSpawns("DialogNPCDialogueOutcast")}
                             state={isKeyEnabled("DialogNPCDialogueOutcast")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Petruso the Sandstorm Maniac" action={() => setShowSpawns("DialogNPCDialoguePetrusotheSandstormManiac")}
                             state={isKeyEnabled("DialogNPCDialoguePetrusotheSandstormManiac")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Razma" action={() => setShowSpawns("DialogNPCDialogueRazma")}
                             state={isKeyEnabled("DialogNPCDialogueRazma")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="The Archivist" action={() => setShowSpawns("DialogNPCDialogueTheArchivist")}
                             state={isKeyEnabled("DialogNPCDialogueTheArchivist")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Warmaker Klael" action={() => setShowSpawns("DialogNPCDialogueWarmakerKlael")}
                             state={isKeyEnabled("DialogNPCDialogueWarmakerKlael")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Yakira" action={() => setShowSpawns("DialogNPCDialogueYakira")}
                             state={isKeyEnabled("DialogNPCDialogueYakira")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Votaries of Skelos Sorcerer Master Darfari" action={() => setShowSpawns("DialogNPCVotariesOfSkelosSorcererMasterDarfari")}
                             state={isKeyEnabled("DialogNPCVotariesOfSkelosSorcererMasterDarfari")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* ARTISANS */}
            <SidebarItemDropDown text="Artisans" id="artisans-spawns-dropdown">
                <SidebarItem text="Alchemists" action={() => setShowSpawns("Alchemist")}
                             state={isKeyEnabled("Alchemist")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Armorer" action={() => setShowSpawns("Armorer")}
                             state={isKeyEnabled("Armorer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Blacksmiths" action={() => setShowSpawns("Blacksmith")}
                             state={isKeyEnabled("Blacksmith")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Carpenters" action={() => setShowSpawns("Carpenter")}
                             state={isKeyEnabled("Carpenter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Cooks" action={() => setShowSpawns("Cook")}
                             state={isKeyEnabled("Cook")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Performer" action={() => setShowSpawns("Performer")}
                             state={isKeyEnabled("Performer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Priest" action={() => setShowSpawns("Priest")}
                             state={isKeyEnabled("Priest")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Smelter" action={() => setShowSpawns("Smelter")}
                             state={isKeyEnabled("Smelter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Tanner" action={() => setShowSpawns("Tanner")}
                             state={isKeyEnabled("Tanner")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Taskmaster" action={() => setShowSpawns("Taskmaster")}
                             state={isKeyEnabled("Taskmaster")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* FIGHTERS */}
            <SidebarItemDropDown text="Fighters" id="fighters-spawns-dropdown">
                <SidebarItem text="Archers" action={() => setShowSpawns("Archer")}
                             state={isKeyEnabled("Archer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="BlackHand" action={() => setShowSpawns("FighterBlackHand")}
                             state={isKeyEnabled("FighterBlackHand")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Bodyguard Undina" action={() => setShowSpawns("FighterCaptainsBodyguardUndina")}
                             state={isKeyEnabled("FighterCaptainsBodyguardUndina")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Darfari" action={() => setShowSpawns("FighterDarfari")}
                             state={isKeyEnabled("FighterDarfari")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dogs Nbatu" action={() => setShowSpawns("FighterDogsNbatu")}
                             state={isKeyEnabled("FighterDogsNbatu")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Dagon" action={() => setShowSpawns("FighterDungeonDagon")}
                             state={isKeyEnabled("FighterDungeonDagon")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Sag Dogs" action={() => setShowSpawns("FighterDungeonSagDogs")}
                             state={isKeyEnabled("FighterDungeonSagDogs")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Exile Cimmerian" action={() => setShowSpawns("FighterExileFighter4Cimmerian")}
                             state={isKeyEnabled("FighterExileFighter4Cimmerian")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Exile Nordheimer" action={() => setShowSpawns("FighterExileFighter4Nordheimer")}
                             state={isKeyEnabled("FighterExileFighter4Nordheimer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Forgotten Tribe Berserker" action={() => setShowSpawns("FighterForgottenTribeBerserker")}
                             state={isKeyEnabled("FighterForgottenTribeBerserker")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Forgotten Tribe Cimmerian" action={() => setShowSpawns("FighterForgottenTribeFighter4Cimmerian")}
                             state={isKeyEnabled("FighterForgottenTribeFighter4Cimmerian")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Heirsof the North Nordheimer" action={() => setShowSpawns("FighterHeirsoftheNorthFighter4Nordheimer")}
                             state={isKeyEnabled("FighterHeirsoftheNorthFighter4Nordheimer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Heirs of the North Lian" action={() => setShowSpawns("FighterHeirsoftheNorthLian")}
                             state={isKeyEnabled("FighterHeirsoftheNorthLian")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Lemurian" action={() => setShowSpawns("FighterLemurianFighter")}
                             state={isKeyEnabled("FighterLemurianFighter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Relic Hunter Treasureseeker" action={() => setShowSpawns("FighterRelicHunterTreasureseeker")}
                             state={isKeyEnabled("FighterRelicHunterTreasureseeker")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Relic Hunter Robber Boss" action={() => setShowSpawns("FighterRelichunterRobberBoss")}
                             state={isKeyEnabled("FighterRelichunterRobberBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Teimos" action={() => setShowSpawns("FighterTeimos")}
                             state={isKeyEnabled("FighterTeimos")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Votaries" action={() => setShowSpawns("FighterVotaries")}
                             state={isKeyEnabled("FighterVotariesAssin")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* MERCHANTS */}
            <SidebarItemDropDown text="Merchants" id="merchants-spawns-dropdown">
                <SidebarItem text="Bearer" action={() => setShowSpawns("Bearer")}
                             state={isKeyEnabled("Bearer")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Merchant" action={() => setShowSpawns("MerchantNPCMerchant")}
                             state={isKeyEnabled("MerchantNPCMerchant")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Shamalla" action={() => setShowSpawns("MerchantNPCShamalla")}
                             state={isKeyEnabled("MerchantNPCShamalla")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Weeba" action={() => setShowSpawns("MerchantNPCWeeba")}
                             state={isKeyEnabled("MerchantNPCWeeba")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Zeina" action={() => setShowSpawns("MerchantNPCZeina")}
                             state={isKeyEnabled("MerchantNPCZeina")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* WILDLIFE */}
            <SidebarItemDropDown text="Wildlife" id="wildlife-spawns-dropdown">
                <SidebarItem text="Jaguar" action={() => setShowSpawns("CritterWildlifeJaguar")}
                             state={isKeyEnabled("CritterWildlifeJaguar")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Kappa" action={() => setShowSpawns("CritterWildlifeKappa")}
                             state={isKeyEnabled("CritterWildlifeKappaGreen")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Tiger" action={() => setShowSpawns("CritterWildlifeTiger")}
                             state={isKeyEnabled("CritterWildlifeTiger")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Wolf" action={() => setShowSpawns("CritterWildlifeWolf")}
                             state={isKeyEnabled("CritterWildlifeWolf")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Crocodile" action={() => setShowSpawns("CritterWildlifeReptileCrocodile")}
                             state={isKeyEnabled("CritterWildlifeReptileCrocodile")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Lion" action={() => setShowSpawns("CritterWildlifeLion")}
                             state={isKeyEnabled("CritterWildlifeLion")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Boar" action={() => setShowSpawns("CritterWildlifeWildBoar")}
                             state={isKeyEnabled("CritterWildlifeWildBoarPiglet")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Hooved Gazelle" action={() => setShowSpawns("CritterWildlifeHoovedGazelle")}
                             state={isKeyEnabled("CritterWildlifeHoovedGazelle")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Hyena Striped" action={() => setShowSpawns("CritterWildlifeHyenaStriped")}
                             state={isKeyEnabled("CritterWildlifeHyenaStriped")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Hyena Spotted" action={() => setShowSpawns("CritterWildlifeHyenaSpotted")}
                             state={isKeyEnabled("CritterWildlifeHyenaSpotted")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Sabretooth" action={() => setShowSpawns("CritterWildlifeSabretooth")}
                             state={isKeyEnabled("CritterWildlifeSabretooth")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Rhino" action={() => setShowSpawns("CritterWildlifeRhino")}
                             state={isKeyEnabled("CritterWildlifeRhino")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* MINI BOSSES */}
            <SidebarItemDropDown text="Mini Bosses" id="minibosses-spawns-dropdown">
                <SidebarItem text="BlackHand" action={() => setShowSpawns("MiniBossBlackHandFighter")}
                             state={isKeyEnabled("MiniBossBlackHandFighter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Archivist Ghost" action={() => setShowSpawns("MiniBossBossArchivistGhost")}
                             state={isKeyEnabled("MiniBossBossArchivistGhost")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Arena Champion" action={() => setShowSpawns("MiniBossBossArenaChampion")}
                             state={isKeyEnabled("MiniBossBossArenaChampion")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Bat Demon White" action={() => setShowSpawns("MiniBossBossBatDemonWhite")}
                             state={isKeyEnabled("MiniBossBossBatDemonWhite")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Crocodile Giant Tomb" action={() => setShowSpawns("MiniBossBossCrocodileGiantTomb")}
                             state={isKeyEnabled("MiniBossBossCrocodileGiantTomb")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Priest King Ghost" action={() => setShowSpawns("MiniBossBossPriestKingGhost")}
                             state={isKeyEnabled("MiniBossBossPriestKingGhost")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Warmaker Ghost" action={() => setShowSpawns("MiniBossBossWarmakerGhost")}
                             state={isKeyEnabled("MiniBossBossWarmakerGhost")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Dagon" action={() => setShowSpawns("MiniBossDungeonDagon")}
                             state={isKeyEnabled("MiniBossDungeonDagon")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Emissary" action={() => setShowSpawns("MiniBossEmissary")}
                             state={isKeyEnabled("MiniBossEmissary")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Exile Fighter" action={() => setShowSpawns("MiniBossExileFighter")}
                             state={isKeyEnabled("MiniBossExileFighter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Heirsof the North Chieftain" action={() => setShowSpawns("MiniBossHeirsoftheNorthChieftain")}
                             state={isKeyEnabled("MiniBossHeirsoftheNorthChieftain")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Man On The Wall" action={() => setShowSpawns("MiniBossManOnTheWall")}
                             state={isKeyEnabled("MiniBossManOnTheWall")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Relic Hunter Treasureseeker" action={() => setShowSpawns("MiniBossRelicHunterTreasureseekerBoss")}
                             state={isKeyEnabled("MiniBossRelicHunterTreasureseekerBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Sobek" action={() => setShowSpawns("MiniBossSobekBoss")}
                             state={isKeyEnabled("MiniBossSobekBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Nordheimer Bear" action={() => setShowSpawns("MiniBossWildlifeBearNordheimerBoss")}
                             state={isKeyEnabled("MiniBossWildlifeBearNordheimerBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Children of Jhil" action={() => setShowSpawns("MiniBossWildlifeChildrenofJhilminiboss")}
                             state={isKeyEnabled("MiniBossWildlifeChildrenofJhilminiboss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Green Dragon Hatchling" action={() => setShowSpawns("MiniBossWildlifeDragonGreenHatchling")}
                             state={isKeyEnabled("MiniBossWildlifeDragonGreenHatchling")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Red Dragon Hatchling" action={() => setShowSpawns("MiniBossWildlifeDragonRedHatchling")}
                             state={isKeyEnabled("MiniBossWildlifeDragonRedHatchling")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="White Dragon Hatchling" action={() => setShowSpawns("MiniBossWildlifeDragonWhiteHatchling")}
                             state={isKeyEnabled("MiniBossWildlifeDragonWhiteHatchling")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Hooved Elk King" action={() => setShowSpawns("MiniBossWildlifeHoovedElkKing")}
                             state={isKeyEnabled("MiniBossWildlifeHoovedElkKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Imp King" action={() => setShowSpawns("MiniBossWildlifeImpKing")}
                             state={isKeyEnabled("MiniBossWildlifeImpKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Kappa King" action={() => setShowSpawns("MiniBossWildlifeKappaKing")}
                             state={isKeyEnabled("MiniBossWildlifeKappaKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Lion" action={() => setShowSpawns("MiniBossWildlifeLion")}
                             state={isKeyEnabled("MiniBossWildlifeLion")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Locust Queen Swamp Tomb" action={() => setShowSpawns("MiniBossWildlifeLocustQueenSwampTomb")}
                             state={isKeyEnabled("MiniBossWildlifeLocustQueenSwampTomb")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Brown Bear" action={() => setShowSpawns("MiniBossWildlifeMinibossBearBrown")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossBearBrown")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Grey Ape" action={() => setShowSpawns("MiniBossWildlifeMinibossGreyApe")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossGreyApe")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Alpha Hyena" action={() => setShowSpawns("MiniBossWildlifeMinibossHyenaAlpha")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossHyenaAlpha")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Jaguar" action={() => setShowSpawns("MiniBossWildlifeMinibossJaguar")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossJaguar")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Grey Jungle Bird" action={() => setShowSpawns("MiniBossWildlifeMinibossJungleBirdGrey")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossJungleBirdGrey")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Red Kappa" action={() => setShowSpawns("MiniBossWildlifeMinibossKappaRed")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossKappaRed")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Neon Yellow Locust" action={() => setShowSpawns("MiniBossWildlifeMinibossLocustYellowNeon")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossLocustYellowNeon")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Crocodile" action={() => setShowSpawns("MiniBossWildlifeMinibossReptileCrocodile")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossReptileCrocodile")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Rocknose" action={() => setShowSpawns("MiniBossWildlifeMinibossRocknose")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossRocknose")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Sabretooth" action={() => setShowSpawns("MiniBossWildlifeMinibossSabretooth")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossSabretooth")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Tiger" action={() => setShowSpawns("MiniBossWildlifeMinibossTiger")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossTiger")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Wolf" action={() => setShowSpawns("MiniBossWildlifeMinibossWolf")}
                             state={isKeyEnabled("MiniBossWildlifeMinibossWolf")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 -mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Reptile Beast" action={() => setShowSpawns("MiniBossWildlifeReptileBeastBoss")}
                             state={isKeyEnabled("MiniBossWildlifeReptileBeastBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Black Rhino" action={() => setShowSpawns("MiniBossWildlifeRhinoBlack")}
                             state={isKeyEnabled("MiniBossWildlifeRhinoBlack")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Rocknose King" action={() => setShowSpawns("MiniBossWildlifeRocknoseKing")}
                             state={isKeyEnabled("MiniBossWildlifeRocknoseKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Ice Rocknose King" action={() => setShowSpawns("MiniBossWildlifeRocknoseKingIce")}
                             state={isKeyEnabled("MiniBossWildlifeRocknoseKingIce")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Molten Rocknose King" action={() => setShowSpawns("MiniBossWildlifeRocknoseKingMolten")}
                             state={isKeyEnabled("MiniBossWildlifeRocknoseKingMolten")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Serpentmen Hive" action={() => setShowSpawns("MiniBossWildlifeSerpentmenBossHive")}
                             state={isKeyEnabled("MiniBossWildlifeSerpentmenBossHive")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Serpentmen Slaver" action={() => setShowSpawns("MiniBossWildlifeSerpentmenBossSlaver")}
                             state={isKeyEnabled("MiniBossWildlifeSerpentmenBossSlaver")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Serpentmen Smelter" action={() => setShowSpawns("MiniBossWildlifeSerpentmenBossSmelter")}
                             state={isKeyEnabled("MiniBossWildlifeSerpentmenBossSmelter")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Serpentment Brute" action={() => setShowSpawns("MiniBossWildlifeSerpentmentBrute")}
                             state={isKeyEnabled("MiniBossWildlifeSerpentmentBrute")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Wight" action={() => setShowSpawns("MiniBossWildlifeWightMiniBoss")}
                             state={isKeyEnabled("MiniBossWildlifeWightMiniBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Wild Boar" action={() => setShowSpawns("MiniBossWildlifeWildBoarBoss")}
                             state={isKeyEnabled("MiniBossWildlifeWildBoarBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dire Wolf" action={() => setShowSpawns("MiniBossWildlifeWolfDire")}
                             state={isKeyEnabled("MiniBossWildlifeWolfDire")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Witch Queen Statue" action={() => setShowSpawns("MiniBossWitchQueenStatue")}
                             state={isKeyEnabled("MiniBossWitchQueenStatue")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
            {/* WORLD BOSSES */}
            <SidebarItemDropDown text="World Bosses" id="worldbosses-spawns-dropdown">
                <SidebarItem text="Abandoned City Flame Guardian" action={() => setShowSpawns("WorldBossAbandonedCityBossFlameGuardian")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossFlameGuardian")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City The Brute" action={() => setShowSpawns("WorldBossAbandonedCityBossTheBrute")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossTheBrute")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City Boss Commander" action={() => setShowSpawns("WorldBossAbandonedCityBossTheCommander")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossTheCommander")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City The Grave Walker" action={() => setShowSpawns("WorldBossAbandonedCityBossTheGraveWalker")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossTheGraveWalker")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City The Red Mother" action={() => setShowSpawns("WorldBossAbandonedCityBossTheRedMother")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossTheRedMother")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City The Watcher" action={() => setShowSpawns("WorldBossAbandonedCityBossTheWatcher")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossTheWatcher")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Abandoned City Winged Death" action={() => setShowSpawns("WorldBossAbandonedCityBossWingedDeath")}
                             state={isKeyEnabled("WorldBossAbandonedCityBossWingedDeath")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="BlackHand Cook Hyborian Gord" action={() => setShowSpawns("WorldBossBlackHandCook4HyborianGord")}
                             state={isKeyEnabled("WorldBossBlackHandCook4HyborianGord")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Giant Crocodile" action={() => setShowSpawns("WorldBossBossCrocodileGiant")}
                             state={isKeyEnabled("WorldBossBossCrocodileGiant")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Gate Guardian" action={() => setShowSpawns("WorldBossBossGateGuardian")}
                             state={isKeyEnabled("WorldBossBossGateGuardian")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Hanumanpriest" action={() => setShowSpawns("WorldBossBossHanumanpriest")}
                             state={isKeyEnabled("WorldBossBossHanumanpriest")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="King Beneath" action={() => setShowSpawns("WorldBossBossKingBeneath")}
                             state={isKeyEnabled("WorldBossBossKingBeneath")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Soul Captor" action={() => setShowSpawns("WorldBossBossSoulCaptor")}
                             state={isKeyEnabled("WorldBossBossSoulCaptor")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Spider Giant" action={() => setShowSpawns("WorldBossBossSpiderGiant")}
                             state={isKeyEnabled("WorldBossBossSpiderGiant")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Giant Skull Spider" action={() => setShowSpawns("WorldBossBossSpiderGiantSkull")}
                             state={isKeyEnabled("WorldBossBossSpiderGiantSkull")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="The Kinscourge" action={() => setShowSpawns("WorldBossBossTheKinscourge")}
                             state={isKeyEnabled("WorldBossBossTheKinscourge")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Undead Dragon" action={() => setShowSpawns("WorldBossBossUndeadDragon")}
                             state={isKeyEnabled("WorldBossBossUndeadDragon")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Undead Dragon Warmaker" action={() => setShowSpawns("WorldBossBossUndeadDragonWarmaker")}
                             state={isKeyEnabled("WorldBossBossUndeadDragonWarmaker")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Warmaker Champion" action={() => setShowSpawns("WorldBossBossWarmakerChampion")}
                             state={isKeyEnabled("WorldBossBossWarmakerChampion")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Dagon Deep One" action={() => setShowSpawns("WorldBossDungeonDagonWildlifeDeepOneHumanendboss")}
                             state={isKeyEnabled("WorldBossDungeonDagonWildlifeDeepOneHumanendboss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Sag Bull" action={() => setShowSpawns("WorldBossDungeonSagBossBull")}
                             state={isKeyEnabled("WorldBossDungeonSagBossBull")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Sag Werewolf" action={() => setShowSpawns("WorldBossDungeonSagWerewolfBoss")}
                             state={isKeyEnabled("WorldBossDungeonSagWerewolfBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Sag Gorilla" action={() => setShowSpawns("WorldBossDungeonSagWildlifeGorillaBoss")}
                             state={isKeyEnabled("WorldBossDungeonSagWildlifeGorillaBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dungeon Sag Panther" action={() => setShowSpawns("WorldBossDungeonSagWildlifePantherBoss")}
                             state={isKeyEnabled("WorldBossDungeonSagWildlifePantherBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Dunkas" action={() => setShowSpawns("WorldBossDunkas")}
                             state={isKeyEnabled("WorldBossDunkas")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Ladagara Daughter Of Ymir" action={() => setShowSpawns("WorldBossLadagaraDaughterOfYmir")}
                             state={isKeyEnabled("WorldBossLadagaraDaughterOfYmir")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Children of Jhil Feast" action={() => setShowSpawns("WorldBossWildlifeChildrenofJhilfeastsonflesh")}
                             state={isKeyEnabled("WorldBossWildlifeChildrenofJhilfeastsonflesh")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Children of Jhil Fiend" action={() => setShowSpawns("WorldBossWildlifeChildrenofJhilfiend")}
                             state={isKeyEnabled("WorldBossWildlifeChildrenofJhilfiend")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Children of Jhil Nestmother" action={() => setShowSpawns("WorldBossWildlifeChildrenofJhilnestmother")}
                             state={isKeyEnabled("WorldBossWildlifeChildrenofJhilnestmother")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Children of Jhil Shrouded" action={() => setShowSpawns("WorldBossWildlifeChildrenofJhilshrouded")}
                             state={isKeyEnabled("WorldBossWildlifeChildrenofJhilshrouded")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Demon Spider" action={() => setShowSpawns("WorldBossWildlifeDemonSpider")}
                             state={isKeyEnabled("WorldBossWildlifeDemonSpider")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Green Dragon" action={() => setShowSpawns("WorldBossWildlifeDragonGreen")}
                             state={isKeyEnabled("WorldBossWildlifeDragonGreen")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Red Dragon" action={() => setShowSpawns("WorldBossWildlifeDragonRed")}
                             state={isKeyEnabled("WorldBossWildlifeDragonRed")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="White Dragon" action={() => setShowSpawns("WorldBossWildlifeDragonWhite")}
                             state={isKeyEnabled("WorldBossWildlifeDragonWhite")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Alpha Elephant" action={() => setShowSpawns("WorldBossWildlifeElephantAlpha")}
                             state={isKeyEnabled("WorldBossWildlifeElephantAlpha")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Frost Giant" action={() => setShowSpawns("WorldBossWildlifeFrostGiantBoss")}
                             state={isKeyEnabled("WorldBossWildlifeFrostGiantBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Desert Locust Queen" action={() => setShowSpawns("WorldBossWildlifeLocustQueenDesert")}
                             state={isKeyEnabled("WorldBossWildlifeLocustQueenDesert")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Swamp Locust Queen" action={() => setShowSpawns("WorldBossWildlifeLocustQueenSwamp")}
                             state={isKeyEnabled("WorldBossWildlifeLocustQueenSwamp")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Tortured Mummy" action={() => setShowSpawns("WorldBossWildlifeMummyTorturedBoss")}
                             state={isKeyEnabled("WorldBossWildlifeMummyTorturedBoss")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Rhino King" action={() => setShowSpawns("WorldBossWildlifeRhinoKing")}
                             state={isKeyEnabled("WorldBossWildlifeRhinoKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Scorpion King" action={() => setShowSpawns("WorldBossWildlifeScorpionKing")}
                             state={isKeyEnabled("WorldBossWildlifeScorpionKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Scorpion Queen" action={() => setShowSpawns("WorldBossWildlifeScorpionQueen")}
                             state={isKeyEnabled("WorldBossWildlifeScorpionQueen")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Serpentmen Priest" action={() => setShowSpawns("WorldBossWildlifeSerpentmenBossPriest")}
                             state={isKeyEnabled("WorldBossWildlifeSerpentmenBossPriest")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Sewer Abomination" action={() => setShowSpawns("WorldBossWildlifeSewerAbomination")}
                             state={isKeyEnabled("WorldBossWildlifeSewerAbomination")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Giant Snake" action={() => setShowSpawns("WorldBossWildlifeSnakeGiant")}
                             state={isKeyEnabled("WorldBossWildlifeSnakeGiant")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Swamp King" action={() => setShowSpawns("WorldBossWildlifeSwampKing")}
                             state={isKeyEnabled("WorldBossWildlifeSwampKing")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="White Tiger" action={() => setShowSpawns("WorldBossWildlifeTigerWhite")}
                             state={isKeyEnabled("WorldBossWildlifeTigerWhite")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Undead Lizardman The Executioner" action={() => setShowSpawns("WorldBossWildlifeUndeadLizardManTheExecutioner")}
                             state={isKeyEnabled("WorldBossWildlifeUndeadLizardManTheExecutioner")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Black Yeti" action={() => setShowSpawns("WorldBossWildlifeYetiBlack")}
                             state={isKeyEnabled("WorldBossWildlifeYetiBlack")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
                <SidebarItem text="Witch Queen" action={() => setShowSpawns("WorldBossWitchQueen")}
                             state={isKeyEnabled("WorldBossWitchQueen")} classNameText="text-sm overflow-clip">
                    <CheckIcon className="h-4 w-4 mr-2 text-lg text-green-400"/>
                </SidebarItem>
            </SidebarItemDropDown>
        </>
    );
};

export default MapSpawns;