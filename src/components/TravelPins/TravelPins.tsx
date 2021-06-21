import React from "react";
import { View } from "react-native";
import PinMapMobili from "../PinMapMobili/PinMapMobili";
import TravelPinsStyleSheet from "./TravelPins.StyleSheet";

export interface Props { jumpingoffCampus:string, arrivalCampus: string }
export default function TravelPins(props: Props) {

    return ( 
        <View style={ TravelPinsStyleSheet.travelPinsView }>
            <PinMapMobili PlaceDescription={ props.jumpingoffCampus } />
            <View style={ TravelPinsStyleSheet.lineDashed } />
            <PinMapMobili PlaceDescription={ props.arrivalCampus } />
        </View>
    );
}