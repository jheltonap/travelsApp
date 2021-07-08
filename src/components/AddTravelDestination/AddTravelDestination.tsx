import React from 'react';
import { View } from 'react-native';
import { AddTravelDestinationStyleSheet, PickerSelectStyles } from './AddTravelDestination.StyleSheet';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/ducks/types';
import { TravelModel } from '../../domain/TravelModel';
import { Creators } from '../../store/ducks/travelsModel';

export interface Picker<T> { label: string, value: T }
export interface Props { setAddedOrigin: (boolean) => void, setAddedDestination: (boolean) => void }
export default function AddTravelDestination(props: Props) {
    const travels: Picker<TravelModel>[] = useSelector<State, Picker<TravelModel>[]>(state =>
        state.travelModels.data.map((campus) => {
            const picker: Picker<TravelModel> = { label: campus.campusName, value: campus };
            return picker;
        })
    );

    const dispatch = useDispatch();

    const setCampusOrigin = (item: TravelModel) => {
        dispatch(Creators.toggleOriginTravel(item));
    }

    
    const setCampusDestination = (item: TravelModel) => {
        dispatch(Creators.toggleDestinationTravel(item));
    }

    return (
        <View style={AddTravelDestinationStyleSheet.container}>
            <View>
                <View style={{ marginTop: 0, marginRight: 20, flexDirection: 'row' }} >
                    <View style={ AddTravelDestinationStyleSheet.imagePointDestinationsView } >
                        <View style={ AddTravelDestinationStyleSheet.elipseOrigin }></View>
                    </View>

                    <View style={ AddTravelDestinationStyleSheet.picker }>
                        <RNPickerSelect
                            placeholder={{ label: 'Campus de Partida' }}
                            useNativeAndroidPickerStyle={ false }
                            style={ PickerSelectStyles }
                            onValueChange=
                            {
                                (value) => {
                                    setCampusOrigin(value);
                                    props.setAddedOrigin(true);
                                }
                            }
                            items={ travels }
                            Icon={() => {
                                    return <Icon
                                        size={30}
                                        color='#2F9E41'
                                        name='chevron-down'
                                        type='material-community'
                                    />
                                }
                            }
                        />
                    </View>
                </View>

                <View style={ AddTravelDestinationStyleSheet.lineDashed } />

                <View style={{ marginRight: 20, flexDirection: 'row' }} >
                    <View style={ AddTravelDestinationStyleSheet.imagePointDestinationsView }>
                        <View style={ AddTravelDestinationStyleSheet.elipseDestination }></View>
                    </View>

                    <View style={ AddTravelDestinationStyleSheet.picker }>
                        <RNPickerSelect
                            placeholder={{ label: 'Campus de Destino' }}
                            useNativeAndroidPickerStyle={ false }
                            style={ PickerSelectStyles }
                            onValueChange={
                                (value) => {
                                    setCampusDestination(value);
                                    props.setAddedDestination(true);
                                }
                            }
                            items={ travels }
                            Icon={() => {
                                    return <Icon
                                        size={30}
                                        color='#2F9E41'
                                        name='chevron-down'
                                        type='material-community'
                                    />
                                }
                            }

                        />
                    </View>
                </View>
            </View>
        </View>
    );
}