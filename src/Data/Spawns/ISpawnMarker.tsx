export interface ISpawnMarker<T> {
    id: string;
    marker: number[];
    spawns: T[];
}