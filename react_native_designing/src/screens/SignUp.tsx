/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Flex, Text} from 'native-base';
import SignUp from './../components/signup';
import UserName from './../components/userName';
import {Dimensions} from 'react-native';
import BasicInfo from './../components/basicInfo';

function SignUpScreen({navigation}) {
  const data = useState({step: 0});

  console.log('data n : ', data[0]);
  return (
    <ImageBackground
      source={require('./../asssets/Group31.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainRegistrationSection}>
            <Text style={styles.heading}>Sign up</Text>
            <Flex direction="row" justifyContent={'center'}>
              <View
                style={[styles.innerStepNumbers, styles.innerStepNumberBlack]}
              />
              <View
                style={[
                  styles.innerStepNumbers,
                  data[0]?.step >= 1
                    ? styles.innerStepNumberBlack
                    : styles.innerStepNumberGray,
                ]}
              />
              <View
                style={[
                  styles.innerStepNumbers,
                  data[0]?.step >= 2
                    ? styles.innerStepNumberBlack
                    : styles.innerStepNumberGray,
                ]}
              />
            </Flex>
            {data[0]?.step == 0 && <SignUp data={data} />}
            {data[0]?.step == 1 && <UserName data={data} />}
            {data[0]?.step == 2 && <BasicInfo data={data} navigation={navigation} />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  mainRegistrationSection: {
    backgroundColor: 'white',
    flex: 1,
    //  marginHorizontal: Dimensions.get('window').height-60,
    height: Dimensions.get('window').height - 10,
    width: Dimensions.get('window').width - 40,
    borderRadius: 25,
  },
  heading: {
    marginTop: 120,
    paddingVertical: 40,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 36,
    color: '#0B0149',
  },
  innerStepNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 50,
    height: 12,
    margin: 2,
    borderRadius: 27,
  },
  innerStepNumberBlack: {
    backgroundColor: 'black',
  },
  innerStepNumberGray: {
    backgroundColor: 'rgba(11, 1, 73, 0.25)',
  },
});

export default SignUpScreen;

// container: {
//   flex: 1,
// },
// mainSignUp: {
//   flex: 2,
//   height: Dimensions.get('window').height,
//   paddingHorizontal: 20,
//   borderRadius: 30,
//   backgroundColor: '#FFFFFF',
//   // alignItems: 'center',
// },
// signUpText: {
//   marginTop: 140,
//   marginBottom: 20,
//   textAlign: 'center',
//   fontWeight: 900,
//   fontSize: 36,
//   color: '#0B0149',
// },

// innerStepNumbers: {
//   backgroundColor: 'black',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   width: 50,
//   height: 12,
//   margin: 2,
//   borderRadius: 27,
// },
// inputHeading: {
//   textAlign: 'left',
//   alignContent: 'flex-start',
// },
// roundButton1: {
//   width: '90%',
//   // height: 100,
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: 10,
//   borderRadius: 40,
//   backgroundColor: '#F6E701',
//   shadowColor: 'rgba(0,0,0, .4)', // IOS
//   shadowOpacity: 1, // IOS
//   shadowRadius: 1, //IOS
//   elevation: 2,
// },
// createAccount: {
//   color: 'black',
//   textAlign: 'center',
//   paddingTop: 10,
//   paddingBottom: 30,
// },
