import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login.tsx';
import SignUpScreen from '../screens/SignUp.tsx';
const Stack = createNativeStackNavigator();

function Naviation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={LoginScreen}
        />
        <Stack.Screen options={{headerShown: false}} name="Sign up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Naviation;
