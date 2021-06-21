import { StyleSheet } from 'react-native'

const ImageRideStyleSheet = StyleSheet.create({
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
});

export default ImageRideStyleSheet;