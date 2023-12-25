import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from "react-native";
import styles from '../styles/style2';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const type='Khoa Huyễn';
const namebook='Nghiệp Dư Thần Linh: Ta Có Thể Vượt Qua Không Gian';
const author='Đại Lực Bảo';
const cvt='ConverterName';
const rate=4.5;
const ratenum=10;
const chap=2;
const update=1;
const status='Đang ra';
const view=100;

const Chapter = ({ order, name, time }) => {
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={[{alignItems:'center',
    margin:5,
    marginLeft:20,marginRight:20}]} 
    onPress={() => {
        navigation.navigate('ChapContent');
        }}>
        <View style={[styles.row,{padding:5,alignSelf:'flex-start'}]} >
            <Text>{order}</Text>
            <Text style={{fontSize:16}} >   Chương {order}: </Text>
            <Text style={{fontSize:16}} >{name}</Text>
        </View>
        <Text style={{alignSelf:'flex-end'}} >{time}</Text>
    </TouchableOpacity>
    )
};

export default function ChapList() {
    const names = ['Không gian người lữ hành', 'Dị dạng ung thư'];
    const currentTime = new Date();
    const threeDaysAgo = new Date(currentTime.getTime() - 3 * 24 * 60 * 60 * 1000);
    // Định dạng thời gian
    let formattedTime = threeDaysAgo.getFullYear() + '-' 
    + ('0' + (threeDaysAgo.getMonth()+1)).slice(-2) + '-' 
    + ('0' + threeDaysAgo.getDate()).slice(-2) + ' ' 
    + ('0' + threeDaysAgo.getHours()).slice(-2) + ':' 
    + ('0' + threeDaysAgo.getMinutes()).slice(-2);

    return (
    <ScrollView style={{width:width,marginBottom:230,}} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:'#F5F5F5',height:height*.7}} >
            <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',margin:20}]} >
                <View style={[styles.row,{alignItems:'center'}]} >
                    <Text style={{fontWeight:'bold'}}>Số chương </Text>
                    <Text >({chap})</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../icon/arrange.png')}/>
                </TouchableOpacity>
            </View>
            {[...Array(chap)].map((_, i) => (
            <Chapter
                key={i}
                order={i + 1}
                name={names[i]}
                time={formattedTime}
            />
            ))}
        </View>
    </ScrollView>
    );
}
