import React from 'react';
import { FAB } from 'react-native-elements';

export default function FloatingButton() {
    return (
        <FAB placement='right'
             color='#2F9E41'
             size='large'
             icon={{ name: "plus", type: "material-community", color: "#fff" }} />
    );
}