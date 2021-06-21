import React from 'react';
import { View } from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Travels from '../../components/Travels/Travels';
import HomePageStyleSheet from './HomePage.StyleSheet'

export default function HomePage() {
    return (
        <View style={ HomePageStyleSheet.container }>
            <Travels />
            <FloatingButton />
        </View>
    );
}

