import React from 'react';
import { Card, Divider } from 'react-native-elements'
import { View, ImageBackground, Text, Image, FlatList } from 'react-native'
import TravelStyleSheet from './Travel.StyleSheet'
import MapView from 'react-native-maps';

const PinMapMobili = (props) => {
    return (
        <View style={TravelStyleSheet.pinMapMobiliView} >
            <Image source={require('../../assets/images/googleMapPin.png')}></Image>
            <Text style={TravelStyleSheet.pinMapMobiliDescription}>
                {props.PlaceDescription}
            </Text>
        </View>
    );
}

const TravelPins = (props) => {
    return (
        <View style={TravelStyleSheet.travelPinsView}>
            <PinMapMobili PlaceDescription={props.jumpingoffCampus} />
            <View style={TravelStyleSheet.lineDashed} />
            <PinMapMobili PlaceDescription={props.arrivalCampus} />
        </View>
    );
}

const ImageRide = (props) => {
    return (
        <View
            style={typeof props.style !== 'undefined' ? props.style : TravelStyleSheet.rideImageView}>
            <Image source={props.source}
                style={TravelStyleSheet.rideImage} />
        </View>
    );
}

const ImageCondition = (props) => {
    if (props.index === (props.size - 1)) {
        return <ImageBackground style={TravelStyleSheet.imagesRidePlus}>
            <Text style={TravelStyleSheet.titleImageRidesPlus} >
                {props.size - props.index}+
                    </Text>
        </ImageBackground>
    }
    else if (props.index === 0) {
        return <ImageRide source={props.url} />
    }
    else {
        return <ImageRide source={props.url} style={TravelStyleSheet.rideImageStyle} />
    }
}

const ImagesRide = (props) => {
    return (
        <FlatList
            data={props.images}
            renderItem={({ item, index }) => <ImageCondition size={props.images.length} index={index} url={item.url} />}
            horizontal
            keyExtractor={item => item.id.toString()}
        />
    );
}

const TravelDescription = (props) => {
    return (
        <View style={TravelStyleSheet.travelDescriptionView}>
            <View style={TravelStyleSheet.travelDescriptionDateView}>
                <Text style={TravelStyleSheet.travelDescriptionDateTitle}>
                    {props.date}
                </Text>
            </View>
            <Divider orientation="vertical" width={1} />
            <View style={TravelStyleSheet.travelDescriptionRidesView} >
                <ImagesRide images={props.images} />
            </View>
        </View>
    );
};

const Travel = (props) => {
    console.log(props.travel);
    return (
        <Card containerStyle={TravelStyleSheet.card}>
            <Card.Title>
                {props.travel.travelDate}
            </Card.Title>

            <Card.Divider />

            <View>
                <MapView
                    liteMode
                    style={ TravelStyleSheet.map }
                    initialRegion={ props.travel.coordinatesTravel }
                    customMapStyle={ mapStyle } />
                <View style={ TravelStyleSheet.darkedImage }></View>

                <TravelPins
                    jumpingoffCampus={props.travel.jumpingoffCampusAbbr}
                    arrivalCampus={props.travel.arrivalCampusAbbr} />

                <TravelDescription
                    date={props.travel.travelDates}
                    images={props.travel.imageRides} />
            </View>
        </Card>
    );
};


export default Travel;

const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
]