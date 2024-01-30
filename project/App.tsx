/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react"
import {StatusBar, StyleSheet, Text, View, Button, Image, Modal} from "react-native"
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigationApp from "./components/BottomTabNavigationApp";
import Cus_Modal from "./components/Modal";
const Stack = createStackNavigator();

export default function App(){
  return (
    <>
      <Image source={require('./assets/Header.png')}/>
      <BottomTabNavigationApp></BottomTabNavigationApp>
    </>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
  view:{
    width:50,
  }
})

export default App;
