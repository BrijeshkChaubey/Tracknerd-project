import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Textinput = props => {
    return (
        <TextInput
            style={[styles.textinput, props.style]}
            maxLength={props.maxLength}
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            placeholderTextColor={'grey'}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            ref={props.reffocus}
        />
    );
};
export const styles = StyleSheet.create({
    textinput: {

        width: '90%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        color: 'black'
    },
});