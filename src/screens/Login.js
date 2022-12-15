import axios from 'axios';
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { TextInputComponent } from '../component/TextinpsutComponent';
import { wp, hp } from '../component/Dimensions';
import { GetColors } from '../component/Color';
import Entypo from 'react-native-vector-icons/Entypo';




export const Login = ({ navigation }) => {


    console.log('arrived');


    const [text, settext] = useState({
        username: '',
        password: '',
    });

    const { username, password } = text;

    const handleOnChangeText = (value, fieldName) => {
        settext({ ...text, [fieldName]: value });
    };

    const onLogin = () => {
        console.log('arrive on Login');

        var emailpattern =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (emailpattern.test(text.username) === true) {
            console.log('inputs==>', text.username, text.password)
            axios
                .post('https://staging-api.tracknerd.io/v1/auth/login', {
                    username: text.username,
                    password: text.password,
                })
                .then(function (response) {
                    console.log('LOGIN response=======>', response);
                    var result = response.data;
                    const { message, userId, token } = result;

                    result = { ...result, isLogIn: true, username: text.username };
                    console.log('result=>', result);
                    navigation.navigate('Home');

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log('not valid');
            console.warn('invalid input');
        }
    };

    return (
        <ScrollView>
            <View style={Loginstyles.container}>
                {/* <Text style={Loginstyles.neostoreTxt}>Tracknerd</Text> */}
                <Image source={require('../Assets/user3.jpeg')} style={{ height: 150, width: 150, alignSelf: 'center', marginVertical: hp('3%') }} />
                <TextInputComponent
                    label="Username"
                    value={username}
                    // helperText={'yes'}
                    // img={require('../Assets/user.jpeg')}
                    onChangeText={value => {
                        handleOnChangeText(value, 'username');
                    }}

                />

                <TextInputComponent
                    label="Password"
                    value={password}

                    onChangeText={value => {
                        handleOnChangeText(value, 'password');
                    }}
                    img={require('../Assets/lock.jpg')}
                />

                <TouchableOpacity
                    onPress={() => {
                        console.log('onlogin press');
                        onLogin();
                    }}
                    style={Loginstyles.loginBtn}>
                    <Text style={Loginstyles.loginBtnTxt}>Login</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};

const Loginstyles = StyleSheet.create({
    container: {
        height: hp('100%'),

        justifyContent: 'center',
        backgroundColor: 'white',
    },
    neostoreTxt: {
        fontSize: wp('17%'),
        fontWeight: '700',
        alignSelf: 'center',
        color: 'maroon',
        marginVertical: hp('5%'),
    },
    loginBtn: {
        width: wp('60%'),
        height: hp('8%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: hp('1%'),
        backgroundColor: '#4169E1',
        marginTop: hp('7%'),
        alignSelf: 'center',
        borderRadius: wp('4%'),
    },
    loginBtnTxt: {
        fontSize: wp('6%'),
        padding: wp('1%'),
        color: 'white',
        borderRadius: hp('10%'),
        textAlign: 'center',
    },
    signupTxt: {
        fontSize: wp('5%'),
        marginVertical: wp('2%'),
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
    },
});