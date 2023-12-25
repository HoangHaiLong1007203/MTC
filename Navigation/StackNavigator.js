import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../Screens/ProfileScreen";
import LoginScreen from "../Screens/LoginScreen";
import DetailScreen from "../Screens/DetailScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import HomeScreen from "../Screens/HomeScreen";
import User from "../screen/user";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="User" component={User} options={{headerTitle:"Hồ Sơ",headerBackVisible: false}}/>
    </Stack.Navigator>
  );
}
const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }
  const NotiStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Notification" component={NotificationScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  }

  const DetailStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }

export { MainStackNavigator , HomeStackNavigator, DetailStackNavigator, NotiStackNavigator};
