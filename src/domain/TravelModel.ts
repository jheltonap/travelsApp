import Coordinates from "./Coordinates";

export interface TravelModel {
    readonly id: number,
    readonly campusName: string,
    readonly campusAbbr: string,
    readonly coordinate: Coordinates;
}