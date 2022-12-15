
import React, { useEffect } from "react";
import { View, Text, ScrollView } from 'react-native';
import axios from "axios";
import ViewVehicle from "../component/ViewVehicle";
import Fontisto from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

function Home({ route, navigation }) {
    const token = route;
    const [vehiclesOne, setVehiclesOne] = React.useState([]);
    const [vehiclesTwo, setVehiclesTwo] = React.useState([]);
    const [vehiclesThree, setVehiclesThree] = React.useState([]);
    const [vehiclesFour, setVehiclesFour] = React.useState([]);
    const [vehicleno, setVehicleno] = React.useState([]);


    useEffect(() => {
        axios
            .get(`https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles`, {
                headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaEBhcnZlZS5jby5pbiIsInN1YiI6MTI1LCJwaG9uZSI6Ijk5MDQwNTA0MDAiLCJpYXQiOjE2NzA5NTI0Nzd9.EFMCPWlAj27r0YHzOT0uEDF6JgsxSu_HeYjn0f12PIs` },
            })
            .then((res) => {
                console.log('Response==>', res)
                setVehiclesOne(res.data.data[0].vehicles);
                setVehiclesTwo(res.data.data[1].vehicles);
                setVehiclesThree(res.data.data[2].vehicles);
                setVehiclesFour(res.data.data[3].vehicles);
                var registeratopnNoarry = [res.data.data[0].vehicles[0].registrationNumber,
                res.data.data[0].vehicles[1].registrationNumber,
                res.data.data[0].vehicles[2].registrationNumber,
                res.data.data[1].vehicles[0].registrationNumber,
                res.data.data[2].vehicles[0].registrationNumber,
                res.data.data[3].vehicles[0].registrationNumber]
                setVehicleno(registeratopnNoarry)

            })
            .catch((err) => {
                console.log('error', err)
            })
    }, [])
    console.log("Vehicleeees==>", vehicleno)
    return (
        <View style={{ backgroundColor: '#91BAD6', flex: 1 }}>
            <ScrollView>
                {vehiclesOne.map((item) => (
                    <View>

                        <View>
                            <ViewVehicle
                                // lat={28.6090}
                                // long={76.9855}
                                id={item.id}
                                vehicleNumber={1}
                                fuelDataSource={item.fuelDataSource}
                                registrationNumber={item.registrationNumber}
                                type={item.type}
                            />
                        </View>
                    </View>
                ))
                }
                {vehiclesTwo.map((item) => (
                    <View>
                        <View >
                            <ViewVehicle
                                // lat={20.5937}
                                // long={78.9629}
                                id={item.id}

                                vehicleNumber={2}
                                fuelDataSource={item.fuelDataSource}
                                registrationNumber={item.registrationNumber}
                                type={item.type}
                            />
                        </View>
                    </View>
                ))
                }
                {vehiclesThree.map((item) => (
                    <View>
                        <View>
                            <ViewVehicle
                                // lat={28.6090}
                                // long={76.9855}
                                id={item.id}
                                vehicleNumber={3}
                                fuelDataSource={item.fuelDataSource}
                                registrationNumber={item.registrationNumber}
                                type={item.type}
                            />
                        </View>
                    </View>
                ))
                }
                {vehiclesFour.map((item) => (
                    <View>
                        <View>
                            <ViewVehicle
                                // lat={28.6090}
                                // long={76.9855}
                                id={item.id}
                                vehicleNumber={4}
                                fuelDataSource={item.fuelDataSource}
                                registrationNumber={item.registrationNumber}
                                type={item.type}
                            />
                        </View>
                    </View>
                ))
                }
            </ScrollView>
        </View>
    )
}

export default Home;