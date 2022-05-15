import React, { Component, useState, useEffect } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Routeskey from '../../navigation/routeskey';
import { CommonActions } from '@react-navigation/native';
const imageWidth = Dimensions.get('window').width / 1;
export default class Splash extends Component {
    async componentDidMount() {
        const data =  new Promise(resolve =>
            setTimeout(() => resolve('result'), 3000),
          );
          data &&
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: Routeskey.TAB},
              ],
            })
          );
    
    }
    render() {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            resizeMode="cover"
            source={require('../../assets/bg.jpeg')} 
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
                <Animatable.Text animation="pulse"
                    style={{ fontSize: 30, color: "#FFF", fontWeight: "bold" }}
                    iterationCount={5} direction="alternate">Tracking App</Animatable.Text>
            </View>
        </ImageBackground>
    );
}}
const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
