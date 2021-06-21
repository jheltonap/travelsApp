import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { withSpring, useAnimatedStyle, useAnimatedGestureHandler, useSharedValue } from 'react-native-reanimated';
import TravelDetailsStyleSheet from './TravelDetails.StyleSheet'
import { snapPoint } from 'react-native-redash';
import { Divider, Icon } from 'react-native-elements';
import ImagesRide from '../ImagesRide/ImagesRide';
import { useSelector } from 'react-redux'
import { State } from '../../store/ducks/types';
import Travel from '../../domain/Travel';
import { TravelStatus } from '../../domain/Travel'

export default function TravelDetails() {
    const translateY = useSharedValue(100);
    const snapPointsY = [0, TravelDetailsStyleSheet.travelDetailsView.height * 0.9];
    const travel: Travel = useSelector<State, Travel>(state =>
        state.travel.selectedTravel);

    useEffect(() => {
        const snapPointY = snapPoint(TravelDetailsStyleSheet.travelDetailsView.height* 0.9, 1, snapPointsY);
        translateY.value = withSpring(snapPointY)
    }, [])


    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,
        { y: number }>
        (
            {
                onStart: (_event, ctx) => {
                    ctx.y = translateY.value;
                },
                onActive: ({ translationY }, ctx) => {
                    translateY.value = ctx.y + translationY;
                },
                onEnd: ({ translationY, velocityY }) => {
                    const snapPointY = snapPoint(translationY, velocityY, snapPointsY);
                    translateY.value = withSpring(snapPointY, { velocity: velocityY });
                },
            },
        );

    const animatedStyle = useAnimatedStyle(() => {
        return ({
            transform: [{ translateY: translateY.value }]
        });
    });

    const getBadgeType = () => {
        switch (travel.status) {
            case TravelStatus.Pending:
                return("warning");
            case TravelStatus.Approved:
                return("success");    
            default:
                return("error");
        } 
     };

     const getTextStatus = () => {
        switch (travel.status) {
            case TravelStatus.Pending:
                return("Em Aprovação");
            case TravelStatus.Approved:
                return("Aprovado");    
            default:
                return("Reprovado");
        } 
     };


    return (
        <PanGestureHandler onGestureEvent={ onGestureEvent }>
            <Animated.View style={ StyleSheet.absoluteFill }>
                <Animated.View style={ [TravelDetailsStyleSheet.card, animatedStyle] } >
                    <View style={ TravelDetailsStyleSheet.travelDetailsView }>
                        <View style={ TravelDetailsStyleSheet.cardViewTitle } >
                            <Text style={ TravelDetailsStyleSheet.cardTitle }>Viagem</Text>
                            <Text style={ TravelDetailsStyleSheet.cardTitle }>#{ travel.id }</Text>
                        </View>

                        <View style={ TravelDetailsStyleSheet.cardDetailsContentView } >
                            <Badge badgeStyle={ TravelDetailsStyleSheet.badgeStyleStatus } 
                                   status={getBadgeType()} />
                            <Text style={ TravelDetailsStyleSheet.cardDetailsContentText }>{ getTextStatus() }</Text>
                        </View>

                        <Divider style={ TravelDetailsStyleSheet.dividerStyle } orientation="horizontal" width={1} />

                        <View style={ TravelDetailsStyleSheet.cardSubTitleView } >
                            <Icon
                                name='map'
                                size={28}
                                type='material-community'
                                style={{ position: 'relative' }} />
                            <Text style={ TravelDetailsStyleSheet.cardSubTitle }>Trajeto</Text>
                        </View>

                        <View>
                            <View style={ TravelDetailsStyleSheet.imagePointDestinationsView } >
                                <Image style={ TravelDetailsStyleSheet.imagePointDestinations } source={require('../../../assets/images/markerAnchorElipse.png')} />
                                <Text style={ TravelDetailsStyleSheet.cardDetailsContentText }> { travel.arrivalCampus } </Text>
                            </View>
                            <View style={ TravelDetailsStyleSheet.lineDashed } />
                            <View style={ TravelDetailsStyleSheet.imagePointDestinationsView }>
                                <Image style={ TravelDetailsStyleSheet.imagePointDestinations } source={require('../../../assets/images/markerAnchorElipse.png')} />
                                <Text style={ TravelDetailsStyleSheet.cardDetailsContentText }> { travel.jumpingoffCampus } </Text>
                            </View>
                        </View>

                        <Divider style={ TravelDetailsStyleSheet.dividerStyle } orientation="horizontal" width={1} />

                        <View style={ TravelDetailsStyleSheet.cardSubTitleView } >
                            <Icon
                                name='calendar'
                                size={28}
                                type='material-community'
                                style={{ position: 'relative' }} />
                            <Text style={ TravelDetailsStyleSheet.cardSubTitle }>Datas</Text>
                        </View>

                        <View>
                            <Text style={ TravelDetailsStyleSheet.cardDetailsDatesTitle } >Partida</Text>
                            <Text style={ TravelDetailsStyleSheet.cardDetailsContentText }>{ travel.arrivelDate }</Text>
                            <Text style={ TravelDetailsStyleSheet.cardDetailsDatesTitle } >Retorno</Text>
                            <Text style={ TravelDetailsStyleSheet.cardDetailsContentText } >{ travel.destinationDate }</Text>
                        </View>

                        <Divider style={ TravelDetailsStyleSheet.dividerStyle } orientation="horizontal" width={1} />

                        <View style={ TravelDetailsStyleSheet.cardSubTitleView } >
                            <Icon
                                name='account'
                                size={28}
                                type='material-community'
                                style={{ position: 'relative' }} />
                            <Text style={ TravelDetailsStyleSheet.cardSubTitle }>Passageiros</Text>
                        </View>
                        <ImagesRide images={ travel.imageRides } />

                        <Divider style={ TravelDetailsStyleSheet.dividerStyle } orientation="horizontal" width={1} />

                        <View style={ TravelDetailsStyleSheet.cardSubTitleView } >
                            <Icon
                                name='account'
                                size={28}
                                type='material-community'
                                style={{ position: 'relative' }} />
                            <Text style={ TravelDetailsStyleSheet.cardSubTitle }>Motorista</Text>
                        </View>
                        <ImagesRide images={ travel.imageDriver } />
                    </View>
                </Animated.View>
            </Animated.View>
        </PanGestureHandler>
    );

};