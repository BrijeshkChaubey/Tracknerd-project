import axios from 'axios';
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Alert,

} from 'react-native';
import { Textinput } from '../../component/TextinpsutComponent';
import { Loginstyles } from './style';
import { wp, hp } from '../../component/Dimensions';
import { IconCommonTouchable } from '../../component/TouchableIcon';





export const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const [icon, setIcon] = useState('eye-off');
    const [hidePassword, setHidePassword] = useState(true);

    const Validate = (email, password) => {
        console.log('password andar', password)
        if (email != '' && password != '') {
            var pass = password;
            var email = email;
            console.log('pass', pass)
            var passRegex = /^([a-z]{9}[@]{1}[0-9]{3})$/
            var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (emailRegex.test(email) && passRegex.test(pass)) {
                OnSubmit();
            } else {
                Alert.alert('Check your credentials')
            }
        } else {
            Alert.alert('Enter the fields')
        }
    }



    const onEyeIconPress = () => {


        icon !== "eye-off"
            ? (setIcon("eye-off"), setHidePassword(true))
            : (setIcon("eye"), setHidePassword(false))
    }

    const OnSubmit = () => {

        console.log('arive on login');
        {

            axios
                .post('https://staging-api.tracknerd.io/v1/auth/login', {
                    username: email,
                    password: password,
                })
                .then(function (response) {
                    console.log('responsearrrived');
                    console.log('responsearrrivedoflogin', response.data);

                    navigation.navigate('Home')
                })
                .catch(function (error) {
                    console.log('err', error);

                })
        }


    };

    return (
        <ScrollView>
            <View style={Loginstyles.container}>
                <Image source={require('../../Assets/user3.jpeg')} style={{ height: 150, width: 150, alignSelf: 'center', marginVertical: hp('3%') }} />
                <View style={Loginstyles.TextinputContainer}>
                    <View style={Loginstyles.TextContainer}>
                        <Textinput
                            placeholder='Username'
                            onChangeText={(text) => setEmail(text)}

                        />
                    </View>
                </View>


                <View style={Loginstyles.TextinputContainer}>
                    <View style={Loginstyles.TextContainer}>
                        <Textinput

                            secureTextEntry={hidePassword}
                            placeholder='Password'
                            onChangeText={(text) => setpassword(text)}


                        />

                        <IconCommonTouchable
                            name={icon}
                            type="ionicon"
                            onPress={onEyeIconPress}
                            color={'grey'}
                            size={30}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        console.log('onlogin press');
                        Validate(email, password);
                    }}
                    style={Loginstyles.loginBtn}>
                    <Text style={Loginstyles.loginBtnTxt}>Login</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    )
};





