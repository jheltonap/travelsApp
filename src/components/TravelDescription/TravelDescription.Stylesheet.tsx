import { StyleSheet } from 'react-native'

const TravelDescriptionStyleSheet = StyleSheet.create({
    travelDescriptionRidesView: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    travelDescriptionDateTitle: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    travelDescriptionDateView: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    travelDescriptionView: { 
        flexDirection: 'row', 
        marginTop: 20, 
        marginRight: 7 
    },
});

export default TravelDescriptionStyleSheet;