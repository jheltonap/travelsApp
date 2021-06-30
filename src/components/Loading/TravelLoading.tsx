import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { Divider } from 'react-native-elements';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export interface Props { visible: boolean }

export default function TravelLoading(props: Props) {
    const state = {
        visible: false,
        userImageVisible: false,
        postImageVisible: false
    };

    const renderRows = (numberRow) => {
        let shimmerRows = [];
        for (let index = 0; index < numberRow; index++) {
            shimmerRows.push(
                <View style={styles.post} key={`loading-${index}`}>
                    <View style={styles.postInfo}>
                        <ShimmerPlaceHolder
                            style={styles.postImage}
                            visible={state.postImageVisible}
                        >
                            <Image
                                style={styles.postImage}
                                source={{ uri: 'https://unsplash.it/1200/1200' }}
                            />
                        </ShimmerPlaceHolder>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.userInfo}>
                            <ShimmerPlaceHolder
                                style={styles.shimmerComponent}
                                visible={state.visible}
                            >
                                <Text style={styles.username}>Usuário {index}</Text>
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                style={styles.shimmerComponent}
                                visible={state.visible}
                            >
                                <Text style={styles.posted}>Postado há {index} minutos</Text>
                            </ShimmerPlaceHolder>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%', justifyContent: 'center' }}>
                                    <ShimmerPlaceHolder
                                        style={styles.shimmerDate}
                                        visible={state.userImageVisible}
                                    >
                                        <Text style={styles.username}>Usuário {index}</Text>

                                    </ShimmerPlaceHolder>
                                </View>
                                <Divider orientation="vertical" width={1} />
                                <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'center' }} >
                                    <ShimmerPlaceHolder
                                        style={styles.postUserImage}
                                        visible={state.userImageVisible}
                                    >
                                        <Image
                                            style={styles.postUserImage}
                                            source={{ uri: 'https://unsplash.it/1200/1200' }}
                                        />
                                    </ShimmerPlaceHolder>
                                    <ShimmerPlaceHolder
                                        style={styles.postUserImage}
                                        visible={state.userImageVisible}
                                    >
                                        <Image
                                            style={styles.postUserImage}
                                            source={{ uri: 'https://unsplash.it/1200/1200' }}
                                        />
                                    </ShimmerPlaceHolder>
                                    <ShimmerPlaceHolder
                                        style={styles.postUserImage}
                                        visible={state.userImageVisible}
                                    >
                                        <Image
                                            style={styles.postUserImage}
                                            source={{ uri: 'https://unsplash.it/1200/1200' }}
                                        />
                                    </ShimmerPlaceHolder>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
        return <ScrollView style={styles.content}>{shimmerRows}</ScrollView>;
    }
    return (
        <View style={styles.container}>
            {
                renderRows(3)
            }
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9ccd1'
    },
    searchBar: {
        height: 54,
        backgroundColor: '#3b5998'
    },
    content: {
        flex: 1,
        padding: 10
    },
    menuBar: {
        height: 54,
        backgroundColor: '#edeef1'
    },
    post: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    shimmerComponent: {
        alignSelf: 'stretch',
        width: '100%',
        marginBottom: 10
    },
    shimmerDate: {
        alignSelf: 'center',
        width: '50%'
    },
    userInfoContainer: {
        flexDirection: 'row'
    },
    postUserImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: -30,
    },
    userInfo: {
        flex: 1,
        width: '100%',
        marginLeft: 10,
        justifyContent: 'center'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    posted: {
        fontSize: 12,
        color: '#BBB',
        marginTop: 5
    },
    postInfo: {
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        marginTop: 10,
        paddingVertical: 10
    },
    postImage: {
        marginTop: 10,
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height * 0.2
    },
    postOptions: {
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});