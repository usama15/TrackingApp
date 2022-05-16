import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import ScanTrack from "./ScanTrack"
import data from "../../data.json"
import { useNavigation } from '@react-navigation/native';
import RoutesKey from '../../navigation/routeskey';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default SearchTrack = () => {
  const navigation = useNavigation()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isBarcode, setIsBarcode] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [name, setName] = useState('')
  const [work, setWork] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const onPress = async () => {
    const jsonValue = await AsyncStorage.getItem('submitData')
    let dataSet = data.users.concat(JSON.parse(jsonValue))
    let newdata = dataSet.filter(x => x.name == trackingNumber)
    if (newdata.length > 0) {
      navigation.navigate(RoutesKey.TRACKSTATUS, { product: newdata[0] })
    } else {
      alert('Data Not Found')
    }
  };

  const enterProduct = () => {
    setIsShow(true)
  };
  let obj = {
    name: name,
    email: email,
    work: work,
    email: email,
    dob: dob,
    address: address,
    city: city,
  }
  const submit = async () => {
    await AsyncStorage.setItem('submitData', JSON.stringify(obj))
    setIsShow(false)
  };

  const handleBarcode = (e) => {
    setTrackingNumber(e?.data)
    setIsBarcode(false);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {isBarcode && <ScanTrack handleBarcode={handleBarcode} />}

        {!isBarcode &&
          <TouchableOpacity onPress={() => { setIsBarcode(true) }}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://advocateprinting.net/wp-content/uploads/2020/08/AMP.png',
              }}
            />
          </TouchableOpacity>
        }
        <View style={styles.trackingView}>

          <TextInput
            style={styles.textInput}
            placeholder="Scan Number"
            placeholderTextColor="#fff"
            value={trackingNumber}
            onChangeText={(number) => setTrackingNumber(number)}
          />
          {isBarcode &&
            <Icon style={styles.icon}
              onPress={() => { setIsBarcode(false) }}
              name="closecircle" />
          }
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={enterProduct}
        >
          <Text>Enter Product</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isShow} animationType="slide"
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Work"
            placeholderTextColor="black"
            value={work}
            onChangeText={(value) => setWork(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Email Address"
            placeholderTextColor="black"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Date of birth"
            placeholderTextColor="black"
            value={dob}
            onChangeText={(value) => setDob(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter Address"
            placeholderTextColor="black"
            value={address}
            onChangeText={(value) => setAddress(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Enter City"
            placeholderTextColor="black"
            value={city}
            onChangeText={(value) => setCity(value)}
          />
        </View>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => submit()}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}



const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: dimensions.height,
    // justifyContent: 'center',
    backgroundColor: "#1c2e4a",
    alignItems: 'center',
    paddingTop: "40%"
  },
  logo: {
    width: 200,
    height: 200,
  },
  tinyLogo: {
    width: 30,
    height: 25,
    marginLeft: 5
  },
  trackingView: {
    // flex: 1,
    alignItems: 'flex-end',
    flexDirection: "row",
    backgroundColor: "#1c2e4a",
    paddingTop: "10%"
  },
  modalView: {
    alignSelf: 'center',
    flexDirection: "row",
    paddingTop: "10%"
  },
  icon: { color: '#fff', fontSize: 30 },
  textInput: {
    width: "50%",
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 0,
    marginBottom: 0
  },
  modalTextInput: {
    width: "50%",
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 0,
    marginBottom: 0
  },

  button: {
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 50,
    marginLeft: 2
  },
  modalButton: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 50,
    // marginLeft: 2
  }

});
