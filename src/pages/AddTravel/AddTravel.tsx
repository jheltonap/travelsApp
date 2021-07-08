import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import TravelStyleSheet from './AddTravel.StyleSheet';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getPixelSize } from '../../utils';
import { TravelModel } from '../../domain/TravelModel';
import store from '../../store';
import AddTravelForm from '../../components/AddTravelForm/AddTravelForm';
import { Search } from '../../components/Search/Search';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import Coordinates from './../../domain/Coordinates';

export default function TravelPage() {
    let mapView: MapView;
    let [alreadyAddedOrigin, setAlreadyAddedOrigin] = useState(false);
    let [alreadyAddedDestination, setAlreadyAddedDestination] = useState(false);
    let [duration, setDuration] = useState(0);

    let [originTravel, setOriginTravel] = useState<TravelModel>();
    let [destinationTravel, setDestinationTravel] = useState<TravelModel>();

    function fitToMarkerDestination(data: GooglePlaceData, details: GooglePlaceDetail | null) {
        const coordinatesDestination: Coordinates = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0,
            longitudeDelta: 0
        }

        destinationTravel = {
            id: 1,
            campusName: details.name,
            campusAbbr: details.name,
            coordinate: coordinatesDestination
        }

        setDestinationTravel(destinationTravel);
        setAlreadyAddedDestination(true);
    }

    useEffect(() => {
        if(alreadyAddedOrigin)
            mapView.fitToCoordinates([{ latitude: originTravel.coordinate.latitude, longitude: originTravel.coordinate.longitude }])
    }, [ alreadyAddedOrigin ]);    

    function fitToMarkerOrigin(data: GooglePlaceData, details: GooglePlaceDetail | null) {
        const coordinatesOrigin: Coordinates = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0,
            longitudeDelta: 0
        }

        originTravel = {
            id: 1,
            campusName: details.name,
            campusAbbr: details.name,
            coordinate: coordinatesOrigin
        }

        setOriginTravel(originTravel);
        setAlreadyAddedOrigin(true);
    }

    function renderLocationTime() {
        return (
            <View style={ TravelStyleSheet.locationBox }>
                <View style={ TravelStyleSheet.locationTimeBox }>
                    <Text style={ TravelStyleSheet.locationTimeText }>{duration}</Text>
                    <Text style={ TravelStyleSheet.locationTimeTextSmall }>MIN</Text>
                </View>
                <Text style={ TravelStyleSheet.locationText }>{ originTravel.campusName }</Text>
            </View>
        );
    }

    function renderDirections() {
        return (
            <MapViewDirections
                origin={ originTravel.coordinate }
                destination={ destinationTravel.coordinate }
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="#2F9E41"
                onReady={result => {
                    setDuration(Math.floor(result.duration));

                    mapView?.fitToCoordinates(result.coordinates, {
                        edgePadding:
                        {
                            top: getPixelSize(160),
                            right: getPixelSize(180),
                            bottom: getPixelSize(20),
                            left: getPixelSize(20)
                        },
                        animated: true,
                    })
                }
                }
            />
        );
    }

    return (
        <View style={TravelStyleSheet.container}>
            <MapView
                loadingEnabled
                showsUserLocation
                style={TravelStyleSheet.map}
                ref={el => mapView = el}
            >
                {
                    alreadyAddedOrigin && <Marker
                        key={'origin'}
                        identifier={'origin'}
                        coordinate={originTravel.coordinate}
                        anchor={{ x: 0, y: 1 }}
                        image={require('../../../assets/images/markerAnchorElipse.png')}
                    >
                        {
                            alreadyAddedDestination && renderLocationTime()

                        }
                    </Marker>
                }
                
                {
                    alreadyAddedDestination && <Marker
                        key={'destination'}
                        identifier={'destination'}
                        coordinate={destinationTravel.coordinate}
                        anchor={{ x: 0, y: 0 }}
                        image={require('../../../assets/images/markerAnchor.png')}
                    />
                }

                {
                    alreadyAddedOrigin && alreadyAddedDestination && renderDirections()
                }

            </MapView>

            <AddTravelForm setAddedOrigin={fitToMarkerOrigin} setAddedDestination={fitToMarkerDestination} />
        </View >
    );
}

const GOOGLE_MAPS_APIKEY = 'AIzaSyAn8_C1R0cOkceR1r-VMK5XqzVU58o9Vvs';