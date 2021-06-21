import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/Home/HomePage';
import TravelPage from '../pages/Travel/Travel';
import { Screens } from './routes.screens';
import IconNotification from '../components/IconNotification/IconNotification';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name={Screens.Home}
                component={HomePage}
                options={{
                    title: 'Mobili',
                    headerTitleAlign: 'center',
                    headerRightContainerStyle: { marginRight: 4 },
                    headerRight: () => <IconNotification noticationsLength={3} />
                }}
            />

            <Stack.Screen
                name={Screens.Travel}
                component={TravelPage}
                options={{
                    title: 'Viagens',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );

}

export default Routes;
