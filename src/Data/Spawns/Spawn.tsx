import {ISpawn} from "./ISpawn";

class Spawn implements ISpawn {
    chance: string;
    fm: string;
    id: string;
    name: string;
    type: string;

    constructor(name: string, type: string, chance: string, id: string, fm: string) {
        this.name = name;
        this.type = type;
        this.chance = chance;
        this.id = id;
        this.fm = fm;
    }
}
export {Spawn};
