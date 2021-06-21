import { StyleSheet } from 'react-native'

const TravelPinsStyleSheet = StyleSheet.create({
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

export default TravelPinsStyleSheet;