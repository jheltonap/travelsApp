import React from 'react';
import { Card } from 'react-native-elements';
import { View } from 'react-native';
import TravelStyleSheet from './Travel.StyleSheet';
import MapView, { Marker } from 'react-native-maps';
import Travel from '../../domain/Travel';
import TravelDescription from '../TravelDescription/TravelDescription';
import TravelPins from '../TravelPins/TravelPins';
import MapViewDirections from 'react-native-maps-directions';

export interface Props { travel: Travel }
export default function TravelComponent(props: Props) {
    let mapView: MapView | null = null;

    return (
        <Card containerStyle={TravelStyleSheet.card}>
            <Card.Title>
                {props.travel.travelDate}
            </Card.Title>
            <Card.Divider />
            <View>
                <MapView
                    liteMode
                    loadingEnabled
                    showsUserLocation
                    style={TravelStyleSheet.map}
                    initialRegion={props.travel.coordinatesRegionTravel}
                    ref={el => mapView = el}
                >
                    <Marker
                        key={1}
                        coordinate={props.travel.coordinatesOrigin}
                        anchor={{ x:0, y:0 }}
                        image={require('../../../assets/images/markerAnchorElipse.png')}
                    />

                    <Marker
                        key={2}
                        coordinate={props.travel.coordinatesDestination}
                        anchor={{ x:0, y:0 }}
                        image={require('../../../assets/images/markerAnchor.png')}
                    />

                    <MapViewDirections
                        origin={props.travel.coordinatesOrigin}
                        destination={props.travel.coordinatesDestination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="#2F9E41"
                        onReady={result => mapView?.fitToCoordinates(result.coordinates)}
                    />
                </MapView>
                <View style={TravelStyleSheet.darkedImage}></View>

                <TravelPins
                    jumpingoffCampus={props.travel.jumpingoffCampusAbbr}
                    arrivalCampus={props.travel.arrivalCampusAbbr} />

                <TravelDescription
                    date={props.travel.travelDatesAbbr}
                    images={props.travel.imageRides} />
            </View>
        </Card>
    );
};

const GOOGLE_MAPS_APIKEY = '';