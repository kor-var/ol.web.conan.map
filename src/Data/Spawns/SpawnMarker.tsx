import {ISpawnMarker} from "./ISpawnMarker";
import {Spawn} from "./Spawn";

class SpawnMarker implements ISpawnMarker<Spawn> {
    id: string;
    marker: number[];
    icon?: string;
    spawns: Spawn[];


    constructor(id: string, marker: number[], spawns: Spawn[]) {
        this.id = id;
        this.icon = "";
        this.marker = marker;
        this.spawns = spawns;
    }
}

export {SpawnMarker};
