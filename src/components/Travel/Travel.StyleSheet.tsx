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
        width: '106.5%',
        height: 280, 
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },

    map: {
        left: -17,
        width: '106.5%',
        height: 280,    
    },
});

export default TravelStyleSheet;