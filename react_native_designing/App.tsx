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
import {NativeBaseProvider, Box, Input, Stack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
function App() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('./src/asssets/Bg.png')}
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
            <Text style={styles.createAccount}>Create Account</Text>
          </Stack>
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
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

export default App;
