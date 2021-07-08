import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux'
import { State } from '../../store/ducks/types';
import Travel from '../../domain/Travel';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import TravelStyleSheet from './Travel.StyleSheet';
import TravelDetails from '../../components/TravelDetails/TravelDetails';
import { getPixelSize } from '../../utils';

export default function TravelPage() {
    const travelSelected: Travel = useSelector<State, Travel>(state =>
        state.travel.selectedTravel);

    let mapView: MapView | null = null;

    return (
        <View style={TravelStyleSheet.container}>
            <MapView
                loadingEnabled
                showsUserLocation
                style={TravelStyleSheet.map}
                initialRegion={travelSelected.coordinatesRegionTravel}
                ref={el => mapView = el}
            >
                <Marker
                    key={1}
                    coordinate={travelSelected.coordinatesOrigin}
                    anchor={{ x: 0, y: 0 }}
                    image={require('../../../assets/images/markerAnchorElipse.png')}
                />

                <Marker
                    key={2}
                    coordinate={travelSelected.coordinatesDestination}
                    anchor={{ x: 0, y: 0 }}
                    image={require('../../../assets/images/markerAnchor.png')}
                />

                <MapViewDirections
                    origin={travelSelected.coordinatesOrigin}
                    destination={travelSelected.coordinatesDestination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="#2F9E41"
                    onReady={result => mapView?.fitToCoordinates(result.coordinates, {
                        edgePadding: 
                        { 
                            top: getPixelSize(20), 
                            right: getPixelSize(20), 
                            bottom: getPixelSize(120), 
                            left: getPixelSize(20) 
                        },
                        animated: true,
                    })}
                />
            </MapView>
            <TravelDetails />    
        </View>
    );
}

const GOOGLE_MAPS_APIKEY = 'AIzaSyAn8_C1R0cOkceR1r-VMK5XqzVU58o9Vvs';