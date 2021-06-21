import React from "react";
import { ImageBackground, ImageSourcePropType, Text } from "react-native";
import ImageRide from "../ImageRide/ImageRide";
import ImageConditionStyleSheet from "./ImageCondition.StyleSheet";

export interface Props { size: number, index: number, url: ImageSourcePropType }
export default function ImageCondition(props: Props) {
    function renderImage() {
        if (props.index === (props.size - 1) && props.size > 1) {
            return <ImageBackground style={ ImageConditionStyleSheet.imagesRidePlus }>
                    <Text style={ ImageConditionStyleSheet.titleImageRidesPlus } >
                        { props.size - props.index}+
                    </Text>
                    </ImageBackground>
        }
        else if (props.index === 0) {
            return <ImageRide source={ props.url } />
        }
        else {
            return <ImageRide source={ props.url } style={ ImageConditionStyleSheet.rideImageStyle } />
        }
     }

    return (renderImage());
}