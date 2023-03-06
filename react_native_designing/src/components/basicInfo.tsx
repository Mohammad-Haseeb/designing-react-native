import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import {
  Box,
  Text,
  Input,
  VStack,
  Flex,
  Spacer,
  View,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';

function BasicInfo({data,navigation}) {
  const [genderValue, setGender] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log('e : ', genderValue);
  console.log('data : ', data[0]);
  const formHandling = () => {
    if (genderValue && date) {
      console.log('GENER VALUE :', genderValue);
      console.log('DATE VALUE :', date);

      console.log('before dat : ', data[0]);

      data[1]({...data[0], step: 3, gender: genderValue, DOB: date});
      console.log('after dat : ', data[0]);
      navigation.navigate('Home');
    } else {
    }
    console.log('after dat : : : ', data[0]);
  };
  return (
    <VStack space={8} mt="9">
      <Box>
        <Text fontSize="lg" fontWeight={'700'} style={styles.inputHeading}>
          Gender
        </Text>
        <Flex direction="row" justifyContent="space-between">
          <TouchableOpacity
            onPress={_ => setGender('male')}
            style={[
              styles.gender,
              genderValue === 'male'
                ? styles.genderColorBlack
                : styles.genderColorWhite,
            ]}>
            <Text
              style={{
                color: genderValue === 'male' ? 'white' : 'black',
                fontWeight: 'bold',
              }}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_ => setGender('female')}
            style={[
              styles.gender,
              genderValue === 'female'
                ? styles.genderColorBlack
                : styles.genderColorWhite,
            ]}>
            <Text
              style={{
                color: genderValue === 'female' ? 'white' : 'black',
                fontWeight: 'bold',
              }}>
              Female
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_ => setGender('Other')}
            style={[
              styles.gender,
              genderValue === 'Other'
                ? styles.genderColorBlack
                : styles.genderColorWhite,
            ]}>
            <Text
              style={{
                color: genderValue === 'Other' ? 'white' : 'black',
                fontWeight: 'bold',
              }}>
              Other
            </Text>
          </TouchableOpacity>
        </Flex>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight={'700'} style={styles.inputHeading}>
          When were you born?
        </Text>
        {/* <Input
          w={{
            base: '95%',
            md: '25%',
          }}
          onChangeText={e => setEmailValue(e)}
          mt="2"
          borderColor={'black'}
          variant="rounded"
          placeholder="Email"
        /> */}
        {/* <Button title="Open"  /> */}
        <Pressable onPress={() => setOpen(true)} style={styles.birth}>
          <Flex direction="row" justifyContent="space-between">
            <Text>Birth</Text>
            <Icon
              name="chevron-down"
              size={15}
              color="black"
              // style={styles.innerSocialIcons}
            />

            {/* <View style={styles.textButton}> */}

            {/* <View>
            </View> */}
            {/* <View>
            <Icon <View style={styles.textButton}>
            <Text>Hello</Text>
            </View>
              name="chevron-down"
              size={15}
              color="black"
              // style={styles.innerSocialIcons}
            />
            </View> */}
          </Flex>
        </Pressable>
        <DatePicker
          modal
          open={open}
          mode="date"
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {/* <DatePicker modal date={date} onDateChange={setDate} /> */}
      </Box>
      <Flex direction="row" justifyContent="center">
        <TouchableOpacity onPress={formHandling} style={styles.roundButton1}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Next</Text>
        </TouchableOpacity>
      </Flex>
    </VStack>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 13,
  },
  mainSignUp: {
    flex: 2,
    // paddingHorizontal: 20,
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
    direction: 'row',
  },
  createAccount: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },
  gender: {
    // backgroundColor:"red",
    paddingVertical: 8,
    paddingHorizontal: 25,
    // borderColor:"green",
    // borderColor
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 30,
  },

  birth: {
    color: 'rgba(11, 1, 73, 0.5)',
    fontWeight: 400,
    fontSize: 12,
    marginTop: 20,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  genderColorWhite: {
    backgroundColor: 'white',
  },
  genderColorBlack: {
    backgroundColor: 'black',
  },
});

export default BasicInfo;
