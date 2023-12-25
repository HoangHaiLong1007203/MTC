import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  MainStackNavigator , HomeStackNavigator, DetailStackNavigator, NotiStackNavigator } from '../Navigation/StackNavigator';
import {Ionicons, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import Case from "./Case";
import BookCase from "../screen/bookcase";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen name='Book Case' component={BookCase} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        const iconColor = focused ? 'black' : 'gray';
                        return (
                            <MaterialIcons name='library-books' size={size} color={iconColor} />
                        );
                    },
                    
                }}
                />
                 <Tab.Screen name='Home' component={HomeStackNavigator} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        const iconColor = focused ? 'black' : 'gray';
                        return (
                            <Ionicons name='compass-outline' size={size} color={iconColor} />
                        );
                    }
                }} />
                <Tab.Screen name='Noti' component={NotiStackNavigator} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        const iconColor = focused ? 'black' : 'gray';
                        return (
                            <MaterialCommunityIcons name='bell-outline' size={size} color={iconColor} />
                        );
                    }
                }}/>
                <Tab.Screen name='Profile' component={MainStackNavigator} options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        const iconColor = focused ? 'black' : 'gray';
                        return (
                            <Ionicons name='people-circle-outline' size={size} color={iconColor} />
                        );
                    }
                }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;