import React, { useState } from "react";
import { TextInput, View, StyleSheet } from 'react-native'

export const Searchresults = (props) => {
    const [search, setSearch] = useState("")

    const { data } = props.route.params
    const Filtervehicle = () => {
        let newarr = data.filter((value) => {
            return value == search
        })
    }
    const onchangeSearch = (text) => {
        setSearch(text);
        Filtervehicle()
    }
    return (
        <View>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(text) => onchangeSearch(text)} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
})