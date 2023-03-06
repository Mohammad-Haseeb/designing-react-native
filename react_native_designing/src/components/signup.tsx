import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import {Box, Text, Input, Flex} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SignUp({data}) {
  const [emailValue, setEmailValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  console.log('data : ', data[0]);
  const formHandling = () => {
    console.log('97e P : ', data[0]);

    console.log(emailValue);
    console.log(nameValue);
    if (emailValue && nameValue) {
      data[1]({name: nameValue, email: emailValue, step: 1});
    } else {
      if (Platform.OS == 'android') {

        ToastAndroid.show(
          "Insert correct data to move forward'",
          ToastAndroid.SHORT,
        );
      } else {
        AlertIOS.alert("Insert correct to move forward'");
      }
    }
  };
  return (
    // <VStack space={8} mt="9" mh="10">
    <Flex Spacer="20" alignItems={'center'}>
      <Box mt="10">
        <Text fontSize="lg" fontWeight={'700'} style={styles.inputHeading}>
          What is your name
        </Text>
        <Input
          w={{
            base: '95%',
            md: '25%',
          }}
          mt="2"
          onChangeText={e => setNameValue(e)}
          variant="rounded"
          placeholder="Name"
          borderColor={'black'}
        />
      </Box>
      <Box mt="10">
        <Text fontSize="lg" fontWeight={'700'} style={styles.inputHeading}>
          What is your email
        </Text>
        <Input
          w={{
            base: '95%',
            md: '25%',
          }}
          onChangeText={e => setEmailValue(e)}
          mt="2"
          borderColor={'black'}
          variant="rounded"
          placeholder="Email"
        />
      </Box>
      <TouchableOpacity onPress={formHandling} style={styles.roundButton1}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => console.log('helo')}>
        <Text style={styles.createAccount}>
          {
            <Icon
              name="google"
              size={15}
              color="black"
              // style={styles.innerSocialIcons}
            />
          }{' '}
          Sign up with Google
        </Text>
      </TouchableOpacity>
      ;
    </Flex>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 13,
  },
  mainSignUp: {
    flex: 2,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
  },
  signUpText: {
    marginTop: 140,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 36,
    color: '#0B0149',
  },

  innerStepNumbers: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 50,
    height: 12,
    margin: 2,
    borderRadius: 27,
  },
  inputHeading: {
    textAlign: 'left',
    alignContent: 'flex-start',
  },
  roundButton1: {
    width: '90%',
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#F6E701',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2,
    marginTop: 30,
  },
  createAccount: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
});

export default SignUp;
