import React from 'react';
import { FlatList } from 'react-native'
import ImageDomain from '../../domain/Image';
import ImageCondition from '../ImageCondition/ImageCondition';

export interface Props { images: ImageDomain[] }
export default function ImagesRide(props: Props) {
    return ( 
        <FlatList
            data={ props.images }
            renderItem={ ({ item, index }) => <ImageCondition size={ props.images.length } index={ index } url={ item.url } /> }
            horizontal
            keyExtractor={ item => item.id.toString() }
        />
    );
 }