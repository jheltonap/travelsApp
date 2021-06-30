import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import TravelLoading from '../../components/Loading/TravelLoading';
import Travels from '../../components/Travels/Travels';
import HomePageStyleSheet from './HomePage.StyleSheet'

export default function HomePage() {
    const [state, setState] = useState(true);

    useEffect(() => {
        setTimeout(() => { setState(false) }, 1000)
    }, [])

    return (
        <View style={HomePageStyleSheet.container}>
            <TravelLoading visible={state} />

            { !state &&
                <Travels />
            }

            <FloatingButton />
        </View>
    );
}