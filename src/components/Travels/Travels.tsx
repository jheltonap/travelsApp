import React from 'react'
import { FlatList, View, Text, TouchableHighlight } from 'react-native'
import TravelComponent from '../Travel/Travel'
import TravelsStyleSheet from './Travels.StyleSheet'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../store/ducks/types'
import Travel from '../../domain/Travel'
import { Creators } from '../../store/ducks/travels'
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes/routes.screens';

export default function Travels() {
    const title: string = 'Viagens';
    const travels: Travel[] = useSelector<State, Travel[]>(state =>
        state.travel.data);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const travelClickHandler = (item: Travel) => {
        dispatch(Creators.toggleTravel(item));
        navigation.navigate(Screens.Travel);
    }

    return (
        <View>
            <FlatList
                style={TravelsStyleSheet.cardList}
                data={travels}
                renderItem=
                {
                    ({ item }) =>
                    {
                        return(
                        <TouchableHighlight onPress={() => travelClickHandler(item)} >
                            <TravelComponent travel={item} />
                        </TouchableHighlight>);
                    }
                }
                ListHeaderComponent={<Text style={TravelsStyleSheet.cardTitle}> {title} </Text>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}