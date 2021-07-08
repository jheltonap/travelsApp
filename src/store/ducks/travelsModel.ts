import { createActions, createReducer } from 'reduxsauce'
import { TravelModelState } from "./types";
import { Reducer } from "@reduxjs/toolkit";

const INITIAL_STATE_TRAVEL_MODELS: TravelModelState =
{
    data: [
        {
            id: 1,
            campusName: 'IFPE Campus Recife',
            campusAbbr: 'REC',
            coordinate: {
                latitude: -8.04050,
                longitude: -34.8713,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
        },
        {
            id: 2,
            campusName: 'IFPE Campus Vitória',
            campusAbbr: 'REC',
            coordinate: {
                latitude: -8.00937,
                longitude: -34.8553,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
        },
        {
            id: 3,
            campusName: 'IFPE Campus Carpina',
            campusAbbr: 'CAR',
            coordinate: {
                latitude: -8.00937,
                longitude: -34.8553,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
        },
    ],
};

export const { Types, Creators } = createActions({
    toggleOriginTravel: ['campus'],
    toggleDestinationTravel: ['campus'],
    getTravel: ['campus'],
});

const toggleOrigin: Reducer<TravelModelState> = (state = INITIAL_STATE_TRAVEL_MODELS, action) => ({
    ...state,
    originCampus: action.campus
});

const toggleDestination: Reducer<TravelModelState> = (state = INITIAL_STATE_TRAVEL_MODELS, action) => ({
    ...state,
    destinationCampus: action.campus
});

const getTravel: Reducer<TravelModelState> = (state = INITIAL_STATE_TRAVEL_MODELS, action) =>
    state;


export default createReducer(INITIAL_STATE_TRAVEL_MODELS, {
    [Types.TOGGLE_ORIGIN_TRAVEL]: toggleOrigin,
    [Types.TOGGLE_DESTINATION_TRAVEL]: toggleDestination,
    [Types.GET_TRAVEL]: getTravel,
});