import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookCase from '../screen/bookcase';
import BookInfo from '../screen/bookinfo';
import Comment from '../screen/Comment';
import ChapContent from '../screen/chapcontent';
import BottomTabNavigator from './TabNavigator';
const chap=2;

const Stack = createStackNavigator();

export default function Case() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabNavigator} 
        options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
        <Stack.Screen name="BookInfo" component={BookInfo} 
        options={{ 
          // headerShown: true, // Hiện thanh tiêu đề
          headerTransparent: true, // Màu nền trong suốt
          headerTitle: '', // Không hiển thị tên tiêu đề
          headerTintColor: 'white', // Màu của mũi tên "Back" và tiêu đề (nếu có)
        }}/>
        <Stack.Screen name="Comment" component={Comment} 
        options={{ 
          headerTitle: '#2 - 3 bình luận', // Tiêu đề của bạn
          headerTitleAlign: 'center', // Căn giữa tiêu đề
          headerTitleStyle: { fontSize: 17}, // Cỡ chữ của tiêu đề
        }}/>
        <Stack.Screen name="ChapContent" component={ChapContent}
         options={{ 
          // headerShown: true, // Hiện thanh tiêu đề
          // headerTransparent: true, // Màu nền trong suốt
          headerTitle: 'Chương 1: Không gian người lữ hành', // Không hiển thị tên tiêu đề
          headerTitleStyle: { fontSize: 13}, // Cỡ chữ của tiêu đề
          headerStatusBarHeight:10,
          //headerTintColor: 'white', // Màu của mũi tên "Back" và tiêu đề (nếu có)
        }}/>
      </Stack.Navigator>
    // </NavigationContainer>
  );
}