import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { AddTravelStyleSheet, PickerSelectStyles } from './AddTravel.StyleSheet';
import RNPickerSelect from 'react-native-picker-select';
import { Divider, FAB, Icon } from 'react-native-elements';
import TravelDetailsStyleSheet from '../../components/TravelDetails/TravelDetails.StyleSheet';

export default function TravelPage() {
    const [selectedLanguage, setSelectedLanguage] = useState('java');

    return (
        <View style={AddTravelStyleSheet.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 40, marginHorizontal: 20 }} >
                    <View style={AddTravelStyleSheet.imagePointDestinationsView} >
                        <Image style={AddTravelStyleSheet.imagePointDestinations} source={require('../../../assets/images/markerAnchorElipse.png')} />
                    </View>
                    <View style={AddTravelStyleSheet.lineDashed} />
                    <View style={AddTravelStyleSheet.imagePointDestinationsView}>
                        <Image style={AddTravelStyleSheet.imagePointDestinations} source={require('../../../assets/images/markerAnchorElipse.png')} />
                    </View>
                </View>
                <View style={AddTravelStyleSheet.picker}>
                    <RNPickerSelect
                        placeholder={{ label: 'Campus de Partida' }}
                        useNativeAndroidPickerStyle={false}
                        style={PickerSelectStyles}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Recife', value: 'football' },
                            { label: 'Vitoria', value: 'baseball' },
                            { label: 'Carpina', value: 'hockey' },
                        ]}
                        Icon={() => {
                            return <Icon
                                size={40}
                                color='#2F9E41'
                                name='chevron-down'
                                type='material-community'
                            />
                        }
                        }
                    />

                    <RNPickerSelect
                        placeholder={{ label: 'Campus de Destino' }}
                        useNativeAndroidPickerStyle={false}
                        style={PickerSelectStyles}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Recife', value: 'football' },
                            { label: 'Vitoria', value: 'baseball' },
                            { label: 'Carpina', value: 'hockey' },
                        ]}
                        Icon={() => {
                            return <Icon
                                size={40}
                                color='#2F9E41'
                                name='chevron-down'
                                type='material-community'
                            />
                        }
                        }

                    />

                </View>

                <View style={{ marginTop: 35, marginHorizontal: 20 }} >
                    <View style={AddTravelStyleSheet.imagePointDestinationsView} >
                        <Icon
                            size={40}
                            color='#2F9E41'
                            name='close'
                            type='material-community'
                        />                    
                    </View>
                    <View style={AddTravelStyleSheet.iconPointDestinationsView}>
                        <Icon
                            size={40}
                            color='#2F9E41'
                            name='close'
                            type='material-community'
                        />                    
                    </View>
                </View>

            </View>

            <Divider style={TravelDetailsStyleSheet.dividerStyle} orientation="horizontal" width={1} />
            
            <FAB
             color='#2F9E41'
             size='large'
             title='Próximo'
             titleStyle={{ fontSize: 24, fontWeight: 'bold' }}
             buttonStyle={{ width: '100%', height: 70 }}
             containerStyle={{ width: '90%', marginTop: '100%' }}
             />
        </View>
    );
}