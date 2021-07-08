import { Dimensions, StyleSheet } from 'react-native';

const AddTravelDestinationStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: 150,
        width: '100%',
        position: 'absolute',
        bottom: Dimensions.get('window').height - 205,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
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

const PickerSelectStyles = StyleSheet.create({
    inputIOS: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingVertical: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: '#000',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: '22%',
        right: 6
    },
});

export { AddTravelDestinationStyleSheet, PickerSelectStyles };