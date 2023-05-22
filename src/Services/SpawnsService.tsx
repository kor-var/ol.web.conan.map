import BaseService from "./BaseService";
import {SpawnMarker} from "../Data/Spawns/SpawnMarker";
class SpawnsService extends BaseService<SpawnMarker> {
    private readonly firstMirror: string = "https://raw.githubusercontent.com/kor-var/conan-exiles-wikidata/master/spawns.json";
    private readonly secondMirror: string = "/spawns.json";
    private spawnData: Array<SpawnMarker> = [];
    constructor() {
        super();
        this._url = this.firstMirror;
    }
    public async getSpawns() : Promise<Array<SpawnMarker>> {
        try {
            // TRY TO GET DATA USING FIRST MIRROR
            this.spawnData = await super.getData();
            return this.spawnData.map(data => ({
                ...data,
                id: data.id.replaceAll(/[^a-zA-Z0-9]/g, ''),
                spawns: data.spawns.filter(spawn => spawn.type !== undefined).map(spawn => ({
                    ...spawn,
                    id: spawn.id.replaceAll(/[^a-zA-Z0-9]/g, ''),
                    type: spawn.type?.replaceAll(" ", "")
                }))
            }));
        }
        catch (error) {
            // IF THERE IS AN ERROR USING FIRST MIRROR, TRY SECOND MIRROR
            if(this._url !== this.secondMirror)
            {
                this._url = this.secondMirror;
                return this.getSpawns();
            }
            else{
                throw error;
            }
        }
    }
}


export default SpawnsService;