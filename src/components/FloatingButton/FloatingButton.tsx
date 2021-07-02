import React from 'react';
import { FAB } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes/routes.screens';

export default function FloatingButton() {
    const navigation = useNavigation();

    return (
        <FAB placement='right'
             color='#2F9E41'
             size='large'
             icon={{ name: "plus", type: "material-community", color: "#fff" }}
             onPress={() => navigation.navigate(Screens.AddTravel)} />
    );
}