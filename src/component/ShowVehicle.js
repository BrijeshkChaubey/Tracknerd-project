import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { FirebaseConfig } from "../firebas/Database";
import Entypo from 'react-native-vector-icons/Entypo'
import { proportionedPixel } from "./Stylescoponent";



function ShowVechile(props) {
    let long = props.long
    let lat = props.lat
    const navigation = useNavigation();
    console.log('Viewscreen', props);

    const locationView = (id, vehicleReg) => {
        const database = getDatabase(FirebaseConfig);
        const starCountRef = ref(database, `${id}-${vehicleReg}/location`);
        onValue(starCountRef, snapshot => {
            const data = snapshot.val();
            console.log('datata', data);
            if (data && data.latitude && data.longitude) {
                navigation.navigate('Map', {
                    lat: data.latitude,
                    long: data.longitude
                })
                console.log('location', data)
            } else {
                console.log('No location data');
            }
        });
    };
    const GetMap = (id, number) => {
        locationView(id, number)
    }

    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Text1}> {props.registrationNumber} </Text>

                <Text style={styles.Text2}>{props.type} </Text>

                <Text style={styles.Text3}> {props.fuelDataSource}  </Text>

            </View>
            <View >
                <TouchableOpacity onPress={() => GetMap(props.id, props.registrationNumber)}>
                    <Entypo name={"location-pin"} size={45} color={'#e73895'} />

                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        // shadowColor: 'grey',
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 2,
        // shadowRadius: 4,
        // elevation: 10,
        borderColor: 'black',
        paddingVertical: proportionedPixel(7),
        paddingHorizontal: proportionedPixel(12),
        marginHorizontal: 10,
        marginVertical: 12,
        backgroundColor: 'white',

        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    Text1: {
        fontSize: proportionedPixel(10),
        color: 'grey',
        fontWeight: 'bold'
    },
    Text2: {
        fontSize: proportionedPixel(7),
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: proportionedPixel(3),
    },
    Text3: {
        fontSize: proportionedPixel(7),
        color: 'grey',
        fontWeight: 'bold'
    }

})

export default ShowVechile;