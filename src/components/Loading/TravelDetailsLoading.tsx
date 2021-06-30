import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { Divider, Badge } from 'react-native-elements';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export interface Props { visible: boolean }

export default function TravelLoading(props: Props) {
    const state = {
        visible: false,
        userImageVisible: false,
        postImageVisible: false
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 }}>
                <ShimmerPlaceHolder
                    shimmerStyle={{ width: '15%' }}
                    visible={state.postImageVisible}
                />
                <ShimmerPlaceHolder
                    shimmerStyle={{ width: '15%' }}
                    visible={state.postImageVisible}
                />
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center' }} >
                <ShimmerPlaceHolder
                    shimmerStyle={{ position: 'relative', top: 3, height: 16, width: 16, borderRadius: 10, marginRight: 10 }}
                    visible={state.postImageVisible}
                />

                <ShimmerPlaceHolder
                    visible={state.postImageVisible}
                />
            </View>

            <Divider style={{ marginVertical: 21 }} orientation="horizontal" width={1} />

            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginBottom: 18 }} >
                <ShimmerPlaceHolder
                    shimmerStyle={{ position: 'relative', top: 3, height: 18, width: 18, borderRadius: 10, marginRight: 10 }}
                    visible={state.postImageVisible}
                />

                <ShimmerPlaceHolder
                    visible={state.postImageVisible}
                />
            </View>

            <View>
                <View style={{ flexDirection: 'row', }} >
                    <ShimmerPlaceHolder
                        shimmerStyle={{ height: 16, width: 16, marginRight: 10, top: 4 }}
                        visible={state.postImageVisible}
                    />
                    <ShimmerPlaceHolder
                        visible={state.postImageVisible}
                    />
                </View>

                <View style={{ height: 30, borderRadius: 1, width: 1, borderStyle: 'dashed', borderWidth: 1, marginLeft: 7, borderColor: 'rgba(161,155,183,1)', }} />

                <View style={{ flexDirection: 'row', }}>
                    <ShimmerPlaceHolder
                        shimmerStyle={{ height: 16, width: 16, marginRight: 10, top: 4 }}
                        visible={state.postImageVisible}
                    />

                    <ShimmerPlaceHolder
                        visible={state.postImageVisible}
                    />
                </View>
            </View>



            <Divider style={{ marginVertical: 21 }} orientation="horizontal" width={1} />

            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginBottom: 18 }} >
                <ShimmerPlaceHolder
                    shimmerStyle={{ position: 'relative', top: 3, height: 18, width: 18, borderRadius: 10, marginRight: 10 }}
                    visible={state.postImageVisible}
                />

                <ShimmerPlaceHolder
                    visible={state.postImageVisible}
                />
            </View>

            <View>
                <ShimmerPlaceHolder
                    shimmerStyle={{ marginBottom: 5 }}
                    visible={state.postImageVisible}
                />
                <ShimmerPlaceHolder
                    shimmerStyle={{ marginBottom: 10 }}
                    visible={state.postImageVisible}
                />
                <ShimmerPlaceHolder
                    shimmerStyle={{ marginBottom: 5 }}
                    visible={state.postImageVisible}
                />
                <ShimmerPlaceHolder
                    shimmerStyle={{ marginBottom: 10 }}
                    visible={state.postImageVisible}
                />
            </View>

            <Divider style={{ marginVertical: 21 }} orientation="horizontal" width={1} />

            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginBottom: 18 }} >
                <ShimmerPlaceHolder
                    shimmerStyle={{ position: 'relative', top: 3, height: 18, width: 18, borderRadius: 10, marginRight: 10 }}
                    visible={state.postImageVisible}
                />

                <ShimmerPlaceHolder
                    visible={state.postImageVisible}
                />
            </View>

            <View style={{ width: '50%', flexDirection: 'row' }} >
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
            </View>

            <Divider style={{ marginVertical: 21 }} orientation="horizontal" width={1} />

            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'flex-start', marginBottom: 18 }} >
                <ShimmerPlaceHolder
                    shimmerStyle={{ position: 'relative', top: 3, height: 18, width: 18, borderRadius: 10, marginRight: 10 }}
                    visible={state.postImageVisible}
                />

                <ShimmerPlaceHolder
                    visible={state.postImageVisible}
                />
            </View>


            <View style={{ width: '50%', flexDirection: 'row' }} >
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
                <ShimmerPlaceHolder
                    style={styles.postUserImage}
                    visible={state.userImageVisible}
                >
                </ShimmerPlaceHolder>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 700,
        width: '90%',
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 20,
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
        width: '100%',
        height: '50%'
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