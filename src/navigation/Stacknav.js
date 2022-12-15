import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Mapviews } from '../screens/Mapview';
import Home from '../screens/Home';
import { Searchresults } from '../screens/SearchVehiclescreen';

const Stack = createStackNavigator();

export const Stacknav = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Map" component={Mapviews} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}