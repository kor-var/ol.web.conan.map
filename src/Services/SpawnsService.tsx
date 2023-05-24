import BaseService from "./BaseService";
import {SpawnMarker} from "../Data/Spawns/SpawnMarker";
import {IconsSpawns} from "../Data/Icons/IconsDictionary";
import {Spawn} from "../Data/Spawns/Spawn";
class SpawnsService extends BaseService<SpawnMarker> {
    private readonly firstMirror: string = "https://raw.githubusercontent.com/kor-var/conan-exiles-wikidata/master/spawns.json";
    private readonly secondMirror: string = "/spawns.json";
    private spawnData: Array<SpawnMarker> = [];
    private icons: IconsSpawns = new IconsSpawns()
    constructor() {
        super();
        this._url = this.firstMirror;
    }

    public getIcon(spawn: Spawn) : string {
        const icon1: string = `${spawn.name.replaceAll(/[^a-zA-Z0-9]/g, "")}`;
        const icon2: string = `${spawn.id.replaceAll(/[^a-zA-Z0-9]/g, "")}`;
        const icon3: string = `${spawn.type.replaceAll(/[^a-zA-Z0-9]/g, "")}`;

        let similarKey = Object.keys(this.icons).find((key) =>
            icon1.toLowerCase().includes(key.toLowerCase())
        );
        if (similarKey === undefined) {
            similarKey = Object.keys(this.icons).find((key) =>
                icon2.toLowerCase().includes(key.toLowerCase())
            );
            if (similarKey === undefined) {
                similarKey = Object.keys(this.icons).find((key) =>
                    icon3.toLowerCase().includes(key.toLowerCase())
                );
                if (similarKey === undefined) {
                    return this.icons["focus"];
                } else {
                    return this.icons[`${similarKey}`];
                }
            } else {
                return this.icons[`${similarKey}`];
            }
        } else {
            return this.icons[`${similarKey}`];
        }
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
                    type: spawn.type?.replaceAll(/[^a-zA-Z0-9]/g, ""),
                    icon: this.getIcon(spawn)
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