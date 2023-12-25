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

const Average =({text,bd}) =>{
    let c;
    if (bd === 1) {
        c = '#E0E0E0';
    } else {
        c = 'transparent';
    }
    return(
        <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',
        borderRadius:40,margin:5,padding:10,backgroundColor:c,
        marginLeft:20,marginRight:20}]} >
            <Text>{text}</Text>
            <View style={[styles.row,{alignItems:'center'}]}>
                <Image source={require('../icon/star.png')} style={styles.rate}/>
                <Image source={require('../icon/star.png')} style={styles.rate}/>
                <Image source={require('../icon/star.png')} style={styles.rate}/>
                <Image source={require('../icon/star.png')} style={styles.rate}/>
                <Image source={require('../icon/star.png')} style={styles.rate}/>
            </View>
        </View>
    )
}

const Rate =({avt,name,lv,read,content,time,like,cmt}) =>{
    const [count, setCount] = useState(like);
    const [liked, setLiked] = useState(false);
    const onPress = () => {
        if (liked) {
            // Nếu nút đã được nhấn, đặt lại giá trị của count và liked
            setCount(like);
            setLiked(false);
        } else {
            // Nếu nút chưa được nhấn, tăng count lên 1 và đặt liked thành true
            setCount(count + 1);
            setLiked(true);
        }
    };
    return(
        <View style={[styles.row,{justifyContent:'space-between',marginBottom:20}]} >
            <Image source={avt} style={{width:70,height:70,borderRadius:40,marginLeft:20,marginTop:10}}/>
            <View style={{width:width*.7,margin:10,marginRight:20}} >
                <View  style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                        <Text style={{fontSize:17}}>{name}</Text>
                        <Text style={{padding:5,backgroundColor:'#4CAF46',color:'white',borderRadius:15,marginLeft:5}} >LV {lv}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../icon/flag.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={[styles.row,{alignItems:'center'}]}>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/line.png')} style={[styles.rate,{marginLeft:20}]}/>
                        <Text style={{fontWeight:'300'}}>  Đã đọc: {read}c  </Text>
                    </View>
                </View>
                <View style={{marginTop:20,marginBottom:20}}>
                    <Text>{content}</Text>
                </View>
                <View style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                    <Text>{time}</Text>
                    <View style={styles.row} >
                        <TouchableOpacity  onPress={onPress}  style={[styles.row,{alignItems:'flex-end'}]} >
                            <Image style={{width:25,height:25}} source={liked ? require('../icon/liked.png') : require('../icon/like.png')} />
                            <Text> {count}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={[styles.row,{alignItems:'flex-end',marginLeft:10}]} >
                            <Image style={{width:25,height:25}}  source={require(`../icon/cmt.png`)} />
                            <Text> {cmt}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default function Rating(){
    return(
    <View>
        <ScrollView style={{width:width,marginBottom:230,}} showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor:'#F5F5F5'}} >
                <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',margin:20}]} >
                    <View style={[styles.row,{alignItems:'center'}]} >
                        <Text style={{fontWeight:'bold'}}>Đánh giá</Text>
                        <Text style={{fontSize:11}}>  ({ratenum})</Text>
                    </View>
                    <View style={[styles.row,{backgroundColor:'#1D5E88',borderWidth:2,
                    borderColor:'#1D5E88',borderRadius:15,overflow:"hidden"}]} >
                        <TouchableOpacity style={{width:70,alignItems:'center',
                        backgroundColor:'white',padding:5}} >
                            <Text style={{color:"#1D5E88",fontWeight:'500'}}>Mới</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:70,alignItems:'center',
                        padding:5}} >
                            <Text style={{color:"#fff",fontWeight:'500'}}>Thích</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Average text='Thống kê' bd={1}/>
                    <Average text='Bối cảnh thế giới' />
                    <Average text='Tính cách nhân vật chính' />
                    <Average text='Nội dung cốt truyện' />
                </View>
                <View style={{marginBottom:70}} >
                    <Rate avt={require('../img/avt1.jpg')} name='Ngọc Băng' lv={3} read={2} 
                    content ='Cực hay.' 
                    time='2 Tuần trước' like={10} cmt={3} />
                    <Rate avt={require('../img/avt2.jpg')} name='life of now' lv={2} read={2} 
                    content ='666 hay' 
                    time='2 Ngày trước' like={6} cmt={5} />
                    <Rate avt={require('../img/avt3.jpg')} name='thư lão' lv={3} read={1} 
                    content ='hayyyyyyyyyyyy' 
                    time='1 Tháng trước' like={1} cmt={1} />
                </View>
                
            </View>
        </ScrollView>
        <View style={[{position:'absolute',
        backgroundColor:'#1E5D85',elevation:5,alignItems:'center',
        margin:30,marginTop:height*.45,marginLeft:width*.8,
        borderRadius:100}]} >
            <TouchableOpacity style={{backgroundColor:'#1E5D85',
            width:60,height:60,borderRadius:30,padding:5,
            alignItems:'center',justifyContent:'center'}} >
                <Image source={require('../icon/pencil.png')}/>
            </TouchableOpacity>
        </View>
    </View>
    )
}