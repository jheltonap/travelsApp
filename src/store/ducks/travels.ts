import { createActions, createReducer } from 'reduxsauce'
import { TravelState } from "./types";
import { Reducer } from "@reduxjs/toolkit";
import { TravelStatus } from '../../domain/Travel'

export const { Types, Creators } = createActions({
    addTravel: ['travel'],
    toggleTravel: ['travel'],
});

const INITIAL_STATE: TravelState = {
    data: [
        {
            id: 1,
            status: TravelStatus.Pending,
            arrivelDate: '20/10/2020   08:00',
            destinationDate: '20/10/2020   22:00',
            travelDate: 'Hoje - qua, nov 20',
            travelDatesAbbr: '20/10 - 30/10',
            jumpingoffCampus: 'Recife',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampus: 'Vitória',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
                { id: 2, url: require('../../../assets/images/profileImage.png') },
                { id: 3, url: require('../../../assets/images/profileImage.png') },
                { id: 4, url: require('../../../assets/images/profileImage.png') }
            ],
            imageDriver: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
            ],
            coordinatesRegionTravel: {
                latitude: -8.04050,
                longitude: -34.8713,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            coordinatesOrigin: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            coordinatesDestination: {
                latitude: -8.00937,
                longitude: -34.8553,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        },
        {
            id: 2,
            status: TravelStatus.Rejected,
            arrivelDate: '30/11/2020   08:00',
            destinationDate: '31/11/2020   22:00',
            travelDate: 'qua, nov 22',
            travelDatesAbbr: '30/11 - 31/11',
            jumpingoffCampus: 'Recife',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampus: 'Vitória',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
            ],
            imageDriver: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
            ],
            coordinatesRegionTravel: {
                latitude: -8.04050,
                longitude: -34.8713,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            coordinatesOrigin: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            coordinatesDestination: {
                latitude: -8.00937,
                longitude: -34.8553,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        },
        {
            id: 3,
            status: TravelStatus.Approved,
            arrivelDate: '01/12/2020   08:00',
            destinationDate: '04/12/2020   22:00',
            travelDate: 'qua, dez 21',
            travelDatesAbbr: '01/12 - 04/12',
            jumpingoffCampus: 'Recife',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampus: 'Vitória',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
                { id: 2, url: require('../../../assets/images/profileImage.png') },
                { id: 3, url: require('../../../assets/images/profileImage.png') },
            ],
            imageDriver: [
                { id: 1, url: require('../../../assets/images/profileImage.png') },
            ],
            coordinatesRegionTravel: {
                latitude: -8.04050,
                longitude: -34.8713,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            coordinatesOrigin: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            coordinatesDestination: {
                latitude: -8.00937,
                longitude: -34.8553,
                latitudeDelta: 0,
                longitudeDelta: 0
            }
        },
    ],
    selectedTravel: {
        id: 1,
        status: TravelStatus.Pending,
        arrivelDate: '20/10/2020   08:00',
        destinationDate: '20/10/2020   22:00',
        travelDate: 'Hoje - qua, ago 22',
        travelDatesAbbr: '20/10 - 30/10',
        jumpingoffCampus: 'Recife',
        jumpingoffCampusAbbr: 'REC',
        arrivalCampus: 'Vitória',
        arrivalCampusAbbr: 'VIT',
        imageRides: [
            { id: 1, url: require('../../../assets/images/profileImage.png') },
            { id: 2, url: require('../../../assets/images/profileImage.png') },
            { id: 3, url: require('../../../assets/images/profileImage.png') },
            { id: 4, url: require('../../../assets/images/profileImage.png') }
        ],
        imageDriver: [
            { id: 1, url: require('../../../assets/images/profileImage.png') },
        ],
        coordinatesRegionTravel: {
            latitude: -8.04050,
            longitude: -34.8713,
            latitudeDelta: 0,
            longitudeDelta: 0,
        },
        coordinatesOrigin: {
            latitude: -8.05428,
            longitude: -34.8813,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
        coordinatesDestination: {
            latitude: -8.00937,
            longitude: -34.8553,
            latitudeDelta: 0,
            longitudeDelta: 0
        }
    }
};

const add: Reducer<TravelState> = (state = INITIAL_STATE, action) => ({
    ...state,
    data: [...state.data, action.travel]
});

const toggle: Reducer<TravelState> = (state = INITIAL_STATE, action) => ({
    ...state,
    selectedTravel: action.travel
});

export default createReducer(INITIAL_STATE, {
    [Types.ADD_TRAVEL]: add,
    [Types.TOGGLE_TRAVEL]: toggle,
});