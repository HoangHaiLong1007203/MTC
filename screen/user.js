import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from "react-native";
import styles from '../styles/style2';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

export default function User(){
    const navigation = useNavigation();
    return(
        <ImageBackground source={require('../img/user.jpg')} 
        style={{flex:1, backgroundColor:"#FAFAFA"}} >
            <TouchableOpacity style={{
            width:width,height:50,position:'absolute', top:600}}
            onPress={() => {
                navigation.navigate('ProfileScreen');
                }}></TouchableOpacity>
        </ImageBackground>
    )
}