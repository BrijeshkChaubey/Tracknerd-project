

import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView, View, Text, Button, TextInput, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from "axios";
import ShowVechile from "../../component/ShowVehicle";
import { styles } from "./style";

function Home() {
    const [vehiclesOne, setVehiclesOne] = useState([]);
    const [vehiclesTwo, setVehiclesTwo] = useState([]);
    const [vehiclesThree, setVehiclesThree] = useState([]);
    const [vehiclesFour, setVehiclesFour] = useState([]);
    const [registrationNo, setregisterationNo] = useState([]);
    const [search, setSearch] = useState('');
    const [token, setToken] = useState();
    const [proceed, setProceed] = useState(false);
    const [Bfilter, setBfilter] = useState([]);
    const [demo, setDemo] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [activity, setActivity] = useState(true);

    useLayoutEffect(() => {

        if (!token) {
            console.log('axios me', token);
            axios
                .get(`https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles`, {
                    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaEBhcnZlZS5jby5pbiIsInN1YiI6MTI1LCJwaG9uZSI6Ijk5MDQwNTA0MDAiLCJpYXQiOjE2NzA5NTI0Nzd9.EFMCPWlAj27r0YHzOT0uEDF6JgsxSu_HeYjn0f12PIs` },
                })
                .then((res) => {
                    setActivity(false)
                    console.log(res.data.data)
                    setVehiclesOne(res.data.data[0].vehicles);
                    setFilterData(res.data.data[0].vehicles);
                    setVehiclesTwo(res.data.data[1].vehicles);
                    setVehiclesThree(res.data.data[2].vehicles);
                    setVehiclesFour(res.data.data[3].vehicles);
                    finalArrayFnc();
                })
                .catch((err) => {
                    console.log('error', err)
                })
        }
    })


    useLayoutEffect(() => {
        setProceed(true)
    }, [Bfilter == 5])
    const finalArrayFnc = () => {
        var finalArray = []
        finalArray.push(vehiclesOne[0]);
        finalArray.push(vehiclesOne[1]);
        finalArray.push(vehiclesOne[2])
        finalArray.push(vehiclesThree[0]);
        finalArray.push(vehiclesFour[0]);
        setBfilter(finalArray);
        console.log('finalArray', finalArray[0].id);
    }





    useLayoutEffect(() => {
        if (Bfilter.length == 5) {
            setDemo(true);
        }
        else {
            setDemo(false);
        }
    }, [Bfilter])


    const filterHelper = text => {
        if (text) {
            const newData = vehiclesOne.filter(item => {
                const itemData = item.registrationNumber
                    ? item.registrationNumber.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearch(text);
        } else {
            setFilterData(vehiclesOne);
            setSearch(text);
        }
    };




    return (
        <View style={styles.mainView}>
            {activity ? <ActivityIndicator size="large" color="black" animating={activity} /> :
                <>
                    <View style={styles.textIPBar}>
                        <Image source={require('../../Assets/search.png')} style={styles.searchIcon} />
                        <TextInput
                            placeholder="search"
                            style={styles.textIp}
                            onChangeText={(text) => filterHelper(text)}
                            value={search}
                            placeholderTextColor='black' />
                    </View>
                    <ScrollView>
                        {filterData.map((item) => (
                            <View>
                                <ShowVechile
                                    vehicleNumber={1}
                                    id={item.id}
                                    fuelDataSource={item.fuelDataSource}
                                    registrationNumber={item.registrationNumber}
                                    type={item.type}
                                />
                            </View>
                        ))
                        }
                    </ScrollView>
                </>
            }


        </View>
    )
}



export default Home;
