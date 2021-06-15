import React from 'react';
import { View} from 'react-native'
import { Header, Icon, Badge } from 'react-native-elements'
import HeaderStyleSheet from './Herder.StyleSheet'

const IconNotification = (props) => {
    return (
        <View>
            <Icon
                name='bell'
                size={28}
                type='material-community'
            />

            <Badge
                status="error"
                value={props.noticationsLength}
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            />
        </View>

    );
}

const HeaderMobili = (props) => {
    let notificationLength = 3;
    return (
        <Header
            containerStyle={ HeaderStyleSheet.header }
            elevated
            leftComponent={ typeof(props.leftComponent) !== 'undefined'  ? props.leftComponent : { icon: 'menu', type: 'material-community', color: '#000', size: 30 }}
            centerComponent={{ text: props.title, style: { color: '#000', fontSize: 20 } }}
            rightComponent={ typeof(props.rightComponent) !== 'undefined'  ? props.rightComponent : <IconNotification noticationsLength={notificationLength} /> }
        />
    );
}

export default HeaderMobili;

