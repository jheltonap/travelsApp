import { StyleSheet } from 'react-native'

const TravelStyleSheet = StyleSheet.create({
    card: {
        borderRadius: 20,
    },
    imageGoogleMaps: {
        width: '110%',
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft: -16,
    },
    darkedImage: {
        left: -17,
        width: '110%',
        height: 200, 
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    map: {
        left: -17,
        width: '110%',
        height: 200,    
    },

    // TravelDescription
    travelDescriptionRidesView: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'flex-end' 
    },
    travelDescriptionDateTitle: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    travelDescriptionDateView: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
    },
    travelDescriptionView: { 
        flexDirection: 'row', 
        marginTop: 20, 
        marginRight: 7 
    },

    // ImageCondition
    rideImageStyle: { 
        width: 60, 
        height: 60,
        aspectRatio: 1 * 1.4, 
        marginLeft: -40 
    },
    imagesRidePlus: {
        width: 40,
        height: 40, 
        borderRadius: 100, 
        backgroundColor: '#2F9E41', 
        borderWidth: 0, 
        marginLeft: -30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titleImageRidesPlus: { 
        color: '#fff' 
    },

    // PinMapMobili
    pinMapMobiliView: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    pinMapMobiliDescription: {
        marginLeft: -4
    },

    // ImageRide
    rideImageView: {
        width: 60,
        height: 60,
        aspectRatio: 1 * 1.4,
    },
    rideImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },

    // TravelPins
    travelPinsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20
    },
    lineDashed: {
        height: 1,
        marginTop: 8,
        marginLeft: -7,
        borderRadius: 1,
        width: '87%',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgba(161,155,183,1)',
    }
});

export default TravelStyleSheet;