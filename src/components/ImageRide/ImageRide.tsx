import React from "react";
import { Image, ImageSourcePropType, StyleProp, View, ViewStyle } from "react-native";
import ImageRideStyleSheet from "./ImageRide.StyleSheet";

export interface Props { style: StyleProp<ViewStyle>, source: ImageSourcePropType }
export default function ImageRide(props: Props) {
    return ( 
        <View
            style={typeof props.style !== 'undefined' ? props.style : ImageRideStyleSheet.rideImageView}>
            <Image source={ props.source }
                style={ ImageRideStyleSheet.rideImage } />
        </View>
    );
}
