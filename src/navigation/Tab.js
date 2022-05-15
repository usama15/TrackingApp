import React, { Component } from 'react';
import {
    Button, Text, View, TouchableOpacity, Platform, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTrack from "../components/Scan/SearchTrack"
import TrackList from "../components/Track/TrackList"
import Routeskey from "./routeskey"


function Settings() {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    );
}

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // static contextType = Context;

    render() {
        const Tab = createBottomTabNavigator();
        // let data = this.context;
        // console.log("valuevaluevaluevalue",data)
        let active = { color: 'black', fontSize: 22, marginBottom: 0 }
        let inactive = { color: 'grey', fontSize: 22, marginBottom: 0 }
        return (


            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: 'black' },
                        activeTintColor: "black",
                        inactiveTintColor: "grey",
                        allowFontScaling: true,
                        showLabel: false,
                        labelStyle: { fontSize: 1, },

                    }}
                >
                    <Tab.Screen name={Routeskey.SEARCHTRACK} component={SearchTrack}
                        options={{
                            tabBarLabel: 'SearchTrack',
                            tabBarIcon: ({ focused }) => (
                                <MaterialIcons name="library-add" style={focused ? active : inactive} />
                            ),
                        }}
                    />

                    <Tab.Screen name={Routeskey.TRACKLIST} component={TrackList}
                        options={{
                            tabBarLabel: 'ScanTrack',
                            tabBarIcon: ({ focused }) => (
                                <Icon name="search" style={focused ? active : inactive} />
                                // <Text>{Context.headerStyle.backgroundColor}</Text>
                            ),
                        }}
                    />
                </Tab.Navigator>
            </View >


        );
    }
}