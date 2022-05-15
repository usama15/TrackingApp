import React, { Component } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Routeskey from './routeskey';

//components list
import SearchTrack from "../components/Scan/SearchTrack";
import ScanTrack from "../components/Scan/ScanTrack";
import TrackList from "../components/Track/TrackList";
import TrackStatus from "../components/Track/TrackDetail";
import Tab from "../navigation/Tab";
import Splash from '../components/Splash/Splash';

const Stack = createStackNavigator();

export default class Routes extends Component {

  render() {
    return (
      <Stack.Navigator
        {...this.props}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // ...TransitionPresets.SlideFromRightIOS, // this work the same as cardStyleInterpolator
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={Routeskey.SPLASH}
          component={Splash}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.SEARCHTRACK}
          component={SearchTrack}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />

        <Stack.Screen
          name={Routeskey.SCANTRACK}
          component={ScanTrack}
          options={{ headerShown: false, gesturesEnabled: false, }}
        />
        <Stack.Screen
          name={Routeskey.TRACKLIST}
          component={TrackList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routeskey.TRACKSTATUS}
          component={TrackStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routeskey.TAB}
          component={Tab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}



