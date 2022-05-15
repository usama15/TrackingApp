import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import ScanTrack from "./ScanTrack"
import data from "../../data.json"
import { useNavigation } from '@react-navigation/native';
import RoutesKey from '../../navigation/routeskey';
export default SearchTrack = () => {
  const navigation = useNavigation()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [countryCode, setCountryCode] = useState('PK')
  const [country, setCountry] = useState(null)
  const [isBarcode, setIsBarcode] = useState(false)
  const [withCountryNameButton, setWithCountryNameButton] = useState(false)
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(false)
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }


  const onPress = () => {
    let newdata = data.users.filter(x => x.name == trackingNumber)
    if (newdata.length > 0) {
      navigation.navigate(RoutesKey.TRACKSTATUS, { product: newdata[0] })
    } else {
      alert('No data found')
    }
  };

  const handleBarcode = (e) => {
    setTrackingNumber(e?.data)
    setIsBarcode(false);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {isBarcode && <ScanTrack handleBarcode={handleBarcode} />}

        {!isBarcode && <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/map-and-navigation-1-3/128/50-512.png',
          }}
        />
        }
        <View style={styles.trackingView}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            false
          />
          <TextInput
            style={styles.textInput}
            placeholder="Track Number"
            placeholderTextColor="#fff"
            value={trackingNumber}
            onChangeText={(number) => setTrackingNumber(number)}
          ></TextInput>
          <TouchableOpacity onPress={() => { setIsBarcode(true) }}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://assets.materialup.com/uploads/cae59218-8c9d-4bce-a53c-0702d0ce144d/preview',
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Trach your Order</Text>
        </TouchableOpacity>

      </View>
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
    backgroundColor: "#1A2238",
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
    backgroundColor: "#1A2238",
    paddingTop: "10%"
  },

  textInput: {
    width: "50%",
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
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
  }

});
