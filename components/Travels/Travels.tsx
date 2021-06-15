import React from 'react'
import { FlatList, View, Text} from 'react-native'
import Travel from '../Travel/Travel'
import TravelsStyleSheet from './Travels.StyleSheet'

const Travels = () => {
    const travels = [
        {
            id: 1,
            travelDate: 'Hoje - qua, ago 22',
            travelDates: '20/10 - 30/10',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../assets/images/profileImage.png') },
                { id: 2, url: require('../../assets/images/profileImage.png') },
                { id: 3, url: require('../../assets/images/profileImage.png') },
                { id: 4, url: require('../../assets/images/profileImage.png') }
            ],
            coordinatesTravel: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        },
        {
            id: 2,
            travelDate: 'Hoje - qua, ago 22',
            travelDates: '20/10 - 30/10',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../assets/images/profileImage.png') },
                { id: 2, url: require('../../assets/images/profileImage.png') },
                { id: 3, url: require('../../assets/images/profileImage.png') },
                { id: 4, url: require('../../assets/images/profileImage.png') }
            ],
            coordinatesTravel: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        },
        {
            id: 3,
            travelDate: 'Hoje - qua, ago 22',
            travelDates: '20/10 - 30/10',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../assets/images/profileImage.png') },
                { id: 2, url: require('../../assets/images/profileImage.png') },
                { id: 3, url: require('../../assets/images/profileImage.png') },
                { id: 4, url: require('../../assets/images/profileImage.png') }
            ],
            coordinatesTravel: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        },
        {
            id: 4,
            travelDate: 'Hoje - qua, ago 22',
            travelDates: '20/10 - 30/10',
            jumpingoffCampusAbbr: 'REC',
            arrivalCampusAbbr: 'VIT',
            imageRides: [
                { id: 1, url: require('../../assets/images/profileImage.png') },
                { id: 2, url: require('../../assets/images/profileImage.png') },
                { id: 3, url: require('../../assets/images/profileImage.png') },
                { id: 4, url: require('../../assets/images/profileImage.png') }
            ],
            coordinatesTravel: {
                latitude: -8.05428,
                longitude: -34.8813,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        },
    ];

    return(
        <View>
            <FlatList
            style={TravelsStyleSheet.cardList}
            data={travels}
            renderItem={({item}) => <Travel travel={item} />}
            ListHeaderComponent={ <Text style={TravelsStyleSheet.cardTitle}>Viagens</Text> }
            keyExtractor={item => item.id.toString() }
             />
        </View>
    );
}

export default Travels;