import Travel from "../../domain/Travel";

export interface State {
    readonly travel: TravelState
}

export interface TravelState {
    readonly data: Travel[],
    readonly selectedTravel: Travel,
}