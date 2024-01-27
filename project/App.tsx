/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react"
import {StatusBar, StyleSheet, Text, View, Button} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabNavigationApp from "./components/BottomTabNavigationApp";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Closet from "./screens/Closet";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigation} from './pages/navigation';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <BottomTabNavigationApp></BottomTabNavigationApp>
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
  }
})

export default App;
