/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {Box, Input, Stack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

function LoginScreen({navigation}) {
  const buttonClickedHandler = async () => {
    console.log('You have been clicked a button!');
    // do something
    //    const data=await database().ref('/').child('users').push({
    //       name: 'Ada Lovelace',
    //       age: 31,
    //     });
    //     console.log("Data : ",data)
  };

  return (
    <ImageBackground
      source={require('./../asssets/Bg.png')}
      resizeMode="cover"
      style={styles.image}>
      <Box style={styles.mainScreen}>
        <Stack space={5} style={styles.mainLogin}>
          <Input
            w={{
              base: '95%',
              md: '25%',
            }}
            variant="rounded"
            placeholder="Email"
          />
          <Input
            w={{
              base: '95%',
              md: '25%',
            }}
            variant="rounded"
            placeholder="Password"
          />

          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          <View style={styles.socialLoginSection}>
            <Icon
              name="facebook"
              size={30}
              color="blue"
              style={styles.innerSocialIcons}
            />
            <Icon
              name="instagram-square"
              size={30}
              color="red"
              style={styles.innerSocialIcons}
            />
            <Icon
              name="twitter"
              size={30}
              color="#1DA1F2"
              style={styles.innerSocialIcons}
            />
          </View>
          <TouchableOpacity onPress={_ => navigation.navigate('Sign up')}>
            <Text style={styles.createAccount}>Create Account</Text>
          </TouchableOpacity>
        </Stack>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  mainScreen: {
    flex: 1,
    // backgroundColor: '#F6E701',
    justifyContent: 'flex-end',
  },
  mainLogin: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: 80,

    paddingBottom: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  roundButton1: {
    width: '90%',
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#F6E701',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2,
  },
  socialLoginSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerSocialIcons: {
    padding: 5,
  },
  createAccount: {
    color: 'black',
  },
});

export default LoginScreen;
