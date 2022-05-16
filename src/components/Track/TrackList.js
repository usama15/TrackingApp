import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Platform, TextInput, Dimensions, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid, StyleSheet, Alert, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'
// Import the RtcEngine class and view rendering components into your project.
import Routeskey from "../../navigation/routeskey"
import Icon from 'react-native-vector-icons/Ionicons';
// import Header from '../Header/Header'
import data from "../../data.json"
import RoutesKey from '../../navigation/routeskey';

export default function App(props) {
    let newdata = data.users
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);


    useEffect(() => {
        setMasterDataSource(newdata)
        setFilteredDataSource(newdata)
        // newdata = data.users
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         setFilteredDataSource(responseJson);
        //         setMasterDataSource(responseJson);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }, []);
    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text;
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }

    };

    return (
        <SafeAreaView style={{ height: dimensions.height * 0.9 }}>
            <Header title={"Tracking List"} backButton={true} />
            {/* <View style={{
                backgroundColor: "#FFF",
                alignItems: "center", flexDirection: "row", justifyContent: "space-between"
            }}>
                <TextInput value={search} onChangeText={(text) => searchFilterFunction(text)} style={{ fontWeight: "bold", fontSize: 16 }} />

            </View> */}
            <FlatList
                data={filteredDataSource}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} onPress={() => { props.navigation.navigate(RoutesKey.TRACKSTATUS, { product: item }) }} activeOpacity={0.5} style={Style.listItem} >
                        <View style={Style.listItemImageContainer}>
                            <Image
                                source={{ uri: "https://placeimg.com/140/140/any" }}
                                style={Style.listItemImage}
                            />
                        </View>
                        <View style={Style.listItemDetail}>
                            <Text style={Style.listItemText}>{item.name}</Text>
                            <Text style={Style.listItemSubText}>#8949239</Text>
                            <Text style={Style.listItemSubText}>City :{item.city}</Text>
                            <Text style={Style.listItemSubText}>Email : {item.email}</Text>
                        </View>
                        <View style={{
                            width: "20%", alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <TouchableOpacity style={Style.listItemDetailIconButton} >
                                <Icon style={Style.icon}
                                    // onPress={() => {
                                    //     props.navigation.pop()
                                    // }}
                                    name="arrow-forward" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}


const Style = StyleSheet.create({

    topView: {
        // flex: 1,
        // flexDirection: 'row',
        height: 70,
        backgroundColor: '#fff',
        borderBottomColor: "#000",
        borderBottomWidth: 0.5,
    },
    headerAvatar: {
        width: dimensions.width,
        height: 100,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },

    profileImage: {
        marginHorizontal: 10,
        width: 30,
        height: 30,
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
    buttonCallout: {
        flex: 1,
        flexDirection: 'row',
        // position: 'absolute',
        bottom: 20,
        right: 2,
        margin: 20,
        alignSelf: "flex-end",
        // justifyContent: "space-between",
        // backgroundColor: "transparent",
        // borderWidth: 2,
        // borderRadius: 200
    },
    icon: {
        fontSize: 15
    },
    listItemImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 6,
        // borderWidth: 1,
        // borderColor: '#d3d3d3',
        marginRight: 15
    },
    listItemImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    listItemImageUser: {
        width: 20,
        height: 20,
        margin: 2,
        borderRadius: 12,
    },
    listItem: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3'
    },
    listItemDetail: {
        flex: 1
    },
    load: {
        padding: 10
    },
    listItemText: {
        flex: 1,
        // fontWeight: "bold",
        fontSize: 18,
        color: '#000'
    },
    listItemSubText: {
        flex: 1,
        fontSize: 14,
        color: '#1A2238'
    },
    listItemDetailIconButton: {

        width: 32,
        height: 32,
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
})