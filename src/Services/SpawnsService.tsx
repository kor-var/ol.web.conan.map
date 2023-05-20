import BaseService from "./BaseService";
import {SpawnMarker} from "../Data/Spawns/SpawnMarker";
class SpawnsService extends BaseService<SpawnMarker> {
    private readonly firstMirror: string = "https://raw.githubusercontent.com/Juijang/wikidata/master/spawns.json";
    private readonly secondMirror: string = "/spawns.json";
    constructor() {
        super();
        this._url = this.firstMirror;
    }
    public async getSpawns() : Promise<Array<SpawnMarker>> {
        try {
            // TRY TO GET DATA USING FIRST MIRROR
            await super.getData();
            return this._data;
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