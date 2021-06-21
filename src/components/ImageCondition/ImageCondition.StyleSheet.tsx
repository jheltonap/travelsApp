import { StyleSheet } from 'react-native'

const ImageConditionStyleSheet = StyleSheet.create({
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
});

export default ImageConditionStyleSheet;