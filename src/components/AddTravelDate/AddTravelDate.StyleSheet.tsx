import { Dimensions, StyleSheet } from 'react-native';

const AddTravelDateStyleSheet = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 10,
        height: 200,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    picker: {
        width: '100%',
        alignSelf: 'center',
    },

    imagePointDestinationsView: {
        flexDirection: 'row',
        marginTop: 10,
    },

    iconPointDestinationsView: {
        flexDirection: 'row',
    },
    elipseOrigin: {
        height: 10,
        width: 10,
        backgroundColor: '#2F9E41',
        borderRadius: 10,
        marginRight: 10,
        top: 9
    },
    elipseDestination: {
        height: 10,
        width: 10,
        backgroundColor: '#2F9E41',
        marginRight: 10,
        top: 9
    },
    lineDashed: {
        marginTop: -20,
        marginBottom: -20,
        height: 55,
        borderRadius: 1,
        width: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginLeft: 4,
        borderColor: 'rgba(161,155,183,1)',
    },
});

export { AddTravelDateStyleSheet };