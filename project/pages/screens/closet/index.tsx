import React from "react"
import {StatusBar, StyleSheet, Text, View} from "react-native"
import BottomTabNavigationApp from "./components/BottomTabNavigationApp";


export default function Closet(){
    return (
    <View style={styles.Container}>
        <StatusBar style="auto"/>
        <Text style={styles.text}>나의 옷장</Text>
        
    </View>
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
    color: "red"
    }
})

export default Closet;
