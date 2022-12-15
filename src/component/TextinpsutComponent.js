import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { wp, hp } from './Dimensions';
import { Avatar, Button, Card, TextInput, FAB, HelperText } from 'react-native-paper';

export function TextInputComponent({ label, value, onChangeText, helperText, }) {
    var emailpattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var fNamePattern = /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/;
    const hasErrors = () => {
        if ((value.length && label === 'Username') || label === 'Email') {
            {
                return !emailpattern.test(value);
            }
        }
        if (value.length && label && label === 'Phone Number') {
            return !value.length;
        }
        if ((value.length && label === 'First Name') || label === 'Last Name') {
            return !fNamePattern.test(value);
        }
    };


    return (
        <View
            style={{
                alignItems: 'center',
            }}>

            <TextInput
                label={label}
                value={value}
                mode='outlined'
                onChangeText={onChangeText}
                outlineColor='grey'
                activeUnderlineColor="green"
                style={TextInputStyl.textIput}>
            </TextInput>
            {helperText === 'yes' ? (
                <HelperText
                    type="error"
                    visible={hasErrors()}
                    style={TextInputStyl.helperText}>
                    Invalid {label}
                </HelperText>
            ) : (
                []
            )}</View>
    );
}
const TextInputStyl = StyleSheet.create({
    container: {
        width: '100%',
    },
    textIput: {

        width: wp('80%'),
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'lightgray',
        marginVertical: hp('1.7%'),
        color: 'gray',
        paddingVertical: hp('1%'),
    },
    helperText: {
        marginLeft: wp('4%'),
        top: 0,
    },
});
