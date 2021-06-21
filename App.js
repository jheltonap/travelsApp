import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes'
import { Provider } from 'react-redux'
import store from './src/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
});
