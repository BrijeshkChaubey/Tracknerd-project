import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './style';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export const Mapviews = (props) => {
    console.log('idhar', props.route.params.long)
    let long = props.route.params.long
    let lat = props.route.params.lat
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 1.04,
                    longitudeDelta: 1.05,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: lat,
                        longitude: long,
                    }}
                    image={require('../../Assets/car5.png')}
                />
            </MapView>
        </View>
    )
};