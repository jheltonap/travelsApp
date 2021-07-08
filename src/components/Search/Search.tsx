import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { AutocompleteStylesOrigin, AutocompleteStylesDestination, SearchStyleSheet } from "./Search.StyleSheet";

export interface Props { onOriginSelected: (GooglePlaceData, GooglePlaceDetail) => void, onDestinationSelected: (GooglePlaceData, GooglePlaceDetail) => void }
export function Search(props: Props) {
    const [searchFocusedOrigin, setSearchFocusedOrigin] = useState(null);
    const [searchFocusedDestination, setSearchFocusedDestination] = useState(null);
    const refOrigin = useRef();
    const refDestination = useRef();

    return (
        <View style={{...SearchStyleSheet.container, height: searchFocusedOrigin != null || searchFocusedDestination != null ? 480 : 200 }}>
            <View style={{ marginTop: 14, marginRight: 20, flexDirection: 'row' }} >
                <View style={SearchStyleSheet.imagePointDestinationsView} >
                    <View style={SearchStyleSheet.elipseOrigin}></View>
                </View>
            </View>

            <View style={SearchStyleSheet.lineDashed} />

            <View style={{ marginRight: 20, flexDirection: 'row' }} >
                <View style={SearchStyleSheet.imagePointDestinationsView}>
                    <View style={SearchStyleSheet.elipseDestination}></View>
                </View>
            </View>

            <GooglePlacesAutocomplete
                ref={refOrigin}
                placeholder="De onde?"
                onPress={props.onOriginSelected}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "pt"
                }}
                textInputProps={{
                    onFocus: () => {
                        setSearchFocusedOrigin('auto');
                    },
                    onBlur: () => {
                        setSearchFocusedOrigin(null);
                    },
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                listViewDisplayed={searchFocusedOrigin}
                fetchDetails
                enablePoweredByContainer={false}
                renderRightButton={() => searchFocusedOrigin ?
                    <View style={{ top: 15, left: 5, }}>
                        <Icon
                            name="close"
                            color='#000'
                            size={25}
                            style={{ top: 20 }}
                            onPress={() => { refOrigin.current?.setAddressText('') }} />
                    </View> : <View></View>
                }

                styles={AutocompleteStylesOrigin}
            />

            <GooglePlacesAutocomplete
                ref={refDestination}
                placeholder="Para onde?"
                onPress={props.onDestinationSelected}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "pt"
                }}
                textInputProps={{
                    onFocus: () => {
                        setSearchFocusedDestination('auto');
                    },
                    onBlur: () => {
                        setSearchFocusedDestination(null);
                    },
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                listViewDisplayed={searchFocusedDestination}
                fetchDetails
                enablePoweredByContainer={false}
                renderRightButton={() => searchFocusedDestination ?
                    <View style={{ top: 15, left: 5, }}>
                        <Icon
                            name="close"
                            color='#000'
                            size={25}
                            style={{ top: 20 }}
                            onPress={() => { refDestination.current?.setAddressText('') }} />
                    </View> : <View></View>
                }
                styles={AutocompleteStylesDestination}
            />
        </View>
    );
}

const GOOGLE_MAPS_APIKEY = 'AIzaSyAn8_C1R0cOkceR1r-VMK5XqzVU58o9Vvs';