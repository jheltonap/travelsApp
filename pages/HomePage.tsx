import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import HeaderMobili from '../components/Header/Header';
import Travels from '../components/Travels/Travels';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <HeaderMobili title='Mobili' />
            <Travels />
            <FloatingButton />
        </View>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
