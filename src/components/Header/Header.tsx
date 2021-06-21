import React from 'react';
import { Header } from 'react-native-elements'
import HeaderStyleSheet from './Herder.StyleSheet'
import IconNotification from '../IconNotification/IconNotification'

export interface Props { title: string, notificationLength: number, leftComponent?: React.ReactElement<{}>, rightComponent?: React.ReactElement<{}>  }

export default function HeaderMobili(props: Props) {

    return (
        <Header
            containerStyle={ HeaderStyleSheet.header }
            elevated
            leftComponent={ typeof(props.leftComponent) !== 'undefined'  ? props.leftComponent : { icon: 'menu', type: 'material-community', color: '#000', size: 30 }}
            centerComponent={{ text: props.title, style: { color: '#000', fontSize: 20 } }}
            rightComponent={ typeof(props.rightComponent) !== 'undefined'  ? props.rightComponent : <IconNotification noticationsLength={ props.notificationLength } /> }
        />
    );
}
