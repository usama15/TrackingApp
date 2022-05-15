import React, { useState, useEffect, useRef, useCallback, useContext } from 'react'
import { Platform, TextInput, Dimensions, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid, StyleSheet, Alert, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default function App(props) {

  useEffect(() => {
    console.log(props.source, "asdasrouterouteroute");
  }, []);



  return (
    <View style={styles.topView}>
      <View style={styles.headerAvatar}>
        {/* {props.backButton &&
          <View style={{ width: 35 }}>
            <Icon style={styles.icon}
              onPress={() => {
                props.navigation.pop()
              }}
              name="arrow-back" />
          </View>
        } */}
        <View style={{ width: "60%" }}>
          <Text style={styles.nameText}>{props.title}</Text>


        </View>
      </View>
    </View>
  );
}

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}


const styles = StyleSheet.create({

  topView: {
    // flex: 1,
    // flexDirection: 'row',
    height: 70,
    backgroundColor: '#1B2237',
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
  },
  headerAvatar: {
    width: dimensions.width,
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 20,
  },

  profileImage: {
    marginHorizontal: 2,
    width: 18,
    height: 18,
    borderRadius: 100,
  },
  headerText: {
    fontSize: 30,
    color: '#000',
    marginLeft: 10,
    fontWeight: "bold",
  },
  iconText: {
    color: "green", fontWeight: "bold", fontSize: 20
  },
  icon: {
    color: '#FF6A3D',
    marginRight: 15,
    fontSize: 25,
  },
  nameText: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold"
  },
})