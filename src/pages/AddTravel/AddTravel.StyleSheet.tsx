import { StyleSheet } from 'react-native';

const TravelStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column-reverse'
    },
    map: {
        height: '100%',
        width: '100%',
    },
    locationBox: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      elevation: 1,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 3,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    locationText: {
        fontSize: 12,
        color: '#333',
        marginTop: 14,
        marginHorizontal: 10,
        textAlign: 'center',
        width: 120,
    },
    locationTimeBox: {
        backgroundColor: '#2F9E41',
        padding: 10,
        textAlign: 'center',
    },
    locationTimeText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    locationTimeTextSmall: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    }
});

export default TravelStyleSheet;