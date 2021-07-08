import { Dimensions, Platform, StyleSheet } from 'react-native';

const SearchStyleSheet = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 480,
        width: '100%',
        position: 'absolute',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 5,

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
        marginBottom: -20,
        height: 70,
        borderRadius: 1,
        width: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        marginLeft: 4,
        borderColor: 'rgba(161,155,183,1)',
    },
});

const AutocompleteStylesOrigin = StyleSheet.create({
    container: {
        position: "absolute",
        top: Platform.select({ ios: 60, android: 20 }),
        left: 10,
        width: "100%"
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: "transparent",
        height: 54,
        marginHorizontal: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    textInput: {
        height: 54,
        margin: 0,
        borderRadius: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: "#DDD",
        fontSize: 18
    },
    listView: {
        //borderWidth: 0.5,
        //borderColor: "#DDD",
        //backgroundColor: "#FFF",
        //marginHorizontal: 20,
        //elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        marginTop: 85,
    },
    description: {
        fontSize: 12,
        width: 0,
        flexGrow: 1,
    },
    row: {
        padding: 20,
        height: 58,
    }
});


const AutocompleteStylesDestination = StyleSheet.create({
    container: {
        position: "absolute",
        top: Platform.select({ ios: 60, android: 90 }),
        left: 10,
        width: "100%"
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: "transparent",
        height: 54,
        marginHorizontal: 20,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    textInput: {
        height: 54,
        margin: 0,
        borderRadius: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: "#DDD",
        fontSize: 18
    },
    listView: {
        //borderWidth: 0.5,
        //borderColor: "#DDD",
        //backgroundColor: "#FFF",
        //marginHorizontal: 20,
        //elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
        marginTop: 35,
    },
    description: {
        fontSize: 12,
        width: 0,
        flexGrow: 1,
    },
    row: {
        padding: 20,
        height: 58,
    }
});


export { SearchStyleSheet, AutocompleteStylesOrigin, AutocompleteStylesDestination  };