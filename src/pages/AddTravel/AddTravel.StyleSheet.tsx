import { StyleSheet } from 'react-native';

const AddTravelStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    picker: {
        width: '70%',
        alignSelf: 'center',
    },

    imagePointDestinationsView: {
        flexDirection: 'row',
    },
    iconPointDestinationsView: {
        flexDirection: 'row',
        marginTop: 60, 
    },
    imagePointDestinations: {
        height: 24,
        width: 24,
        marginRight: 10,
        top: 4
    },
    lineDashed: {
        height: 80,
        borderRadius: 1,
        width: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginLeft: 10,
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
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: '#000',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: '35%',
        right: 12,

    },
});

export { AddTravelStyleSheet, PickerSelectStyles };