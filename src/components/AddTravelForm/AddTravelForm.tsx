import React, { useState } from 'react';
import { View } from 'react-native';
import { AddTravelDestinationStyleSheet } from './AddTravelForm.StyleSheet';
import AddTravelDestination from '../AddTravelDestination/AddTravelDestination';
import AddTravelDate from '../AddTravelDate/AddTravelDate';
import { Search } from '../Search/Search';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

export interface Picker<T> { label: string, value: T }
export interface Props { setAddedOrigin: (GooglePlaceData, GooglePlaceDetail) => void, setAddedDestination: (GooglePlaceData, GooglePlaceDetail) => void }
export default function AddTravelForm(props: Props) {
    const [isDestinationSelected, setIsDestinationSelected] = useState(false);


    function setAddedDestination(data: GooglePlaceData, details: GooglePlaceDetail | null) {
        setIsDestinationSelected(true);
        props.setAddedDestination(data, details);
    }

    return (
        <View>
            {
                isDestinationSelected ? <AddTravelDestination setAddedDestination={props.setAddedDestination} setAddedOrigin={props.setAddedOrigin} /> : <Search onOriginSelected={props.setAddedOrigin} onDestinationSelected={props.setAddedDestination} />
            }
        </View>
    );
}