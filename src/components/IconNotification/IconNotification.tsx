import React from "react";
import { View } from "react-native";
import { Badge, Icon } from "react-native-elements";

export interface Props { noticationsLength: number }

export default function IconNotification(props: Props) {
    return ( 
        <View>
            <Icon
                name='bell'
                size={ 28 }
                type='material-community'
            />

            <Badge
                status="error"
                value={ props.noticationsLength }
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            />
        </View>
    );
}