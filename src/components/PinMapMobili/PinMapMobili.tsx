import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import PinMapMobiliStyleSheet from "./PinMapMobili.StyleSheet";

export interface Props { PlaceDescription: string }
export default function PinMapMobili(props: Props) {
    const imageSource: ImageSourcePropType = require('../../../assets/images/googleMapPin.png');
    
    return ( 
        <View style={ PinMapMobiliStyleSheet.pinMapMobiliView } >
            <Image source={ imageSource }></Image>
            <Text style={ PinMapMobiliStyleSheet.pinMapMobiliDescription }>
                { props.PlaceDescription }
            </Text>
        </View>
    );
}
