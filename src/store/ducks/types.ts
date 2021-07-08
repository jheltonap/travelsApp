import Travel from "../../domain/Travel";
import { TravelModel } from "../../domain/TravelModel";

export interface State {
    readonly travel: TravelState
    readonly travelModels: TravelModelState
}

export interface TravelState {
    readonly data: Travel[],
    readonly selectedTravel: Travel,
}

export interface TravelModelState {
    readonly data: TravelModel[],
    originCampus?: TravelModel,
    destinationCampus?: TravelModel,
}