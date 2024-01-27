import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/screens/home';
import Save from '../pages/screens/save';
import Tips from '../pages/screens/tips';
import Closet from '../pages/screens/closet';
import Symbols from '../pages/screens/symbols';


const Tab = createBottomTabNavigator();

function BottomTabNavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        height:60
                    }
                })}
            >
                <Tab.Screen
                    name="Save"
                    component={Save}
                    options={{
                        headerShown: false,
                        title: '검색결과 저장',
                        tabBarIcon: ({color, size}) => (
                            <Image source={require('../assets/Save.png')}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Washing_symbol"
                    component={Symbols}
                    options={{
                        headerShown: false,
                    title: '세탁기호',
                    tabBarIcon: ({color, size}) => (
                        <Image source={require('../assets/Washing_symbol.png')}/>
                    )
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerBackground(props) {
                            <image source={require('../assets/Header.png')}/>
                        },
                        headerTitle: () => (
                            <View>
                                <Text>세탁코치</Text>
                            </View>
                        ),
                    title: '홈',
                    tabBarIcon: ({color, size}) => (
                        <Image source={require('../assets/Home.png')}/>
                    )
                    }}
                />

                <Tab.Screen
                    name="Tips"
                    component={Tips}
                    options={{
                        headerShown: false,
                    title: '세탁꿀팁',
                    tabBarIcon: ({color, size}) => (
                        <Image source={require('../assets/Tips.png')}/>
                    )
                    }}
                />
                <Tab.Screen
                    name="Closet"
                    component={Closet}
                    options={{
                        headerShown: false,
                    title: '나의옷장',
                    tabBarIcon: ({color, size}) => (
                        <Image source={require('../assets/Closet.png')}/>
                    )
                    }}
                />

        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default BottomTabNavigationApp;