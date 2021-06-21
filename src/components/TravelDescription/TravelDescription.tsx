import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import TravelDescriptionStyleSheet from './TravelDescription.Stylesheet'
import ImageDomain from '../../domain/Image'
import ImagesRide from '../ImagesRide/ImagesRide'

export interface Props { date: string, images: ImageDomain[] }
export default function TravelDescription(props: Props) {
    return ( 
        <View style={ TravelDescriptionStyleSheet.travelDescriptionView }>
            <View style={ TravelDescriptionStyleSheet.travelDescriptionDateView }>
                <Text style={ TravelDescriptionStyleSheet.travelDescriptionDateTitle }>
                    { props.date }
                </Text>
            </View>
            <Divider orientation="vertical" width={ 1 } />
            <View style={ TravelDescriptionStyleSheet.travelDescriptionRidesView } >
                <ImagesRide images={ props.images } />
            </View>
        </View>
    );
};