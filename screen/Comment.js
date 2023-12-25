import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from "react-native";
import styles from '../styles/style2';
import Detail from './Detail';
import Rating from './Rating';
import ChapList from './ChapList';
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
            <Image source={avt} style={{width:30,height:30,borderRadius:40,marginLeft:0,marginTop:15}}/>
            <View style={{width:width*.775,margin:10,marginRight:20}} >
                <View  style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                        <Text>{name}</Text>
                        <Text style={{paddingLeft:5,paddingRight:5,backgroundColor:'#4CAF46',color:'white',borderRadius:15,marginLeft:5}} >Lv {lv}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../icon/flag.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10,marginBottom:10}}>
                    <Text>{content}</Text>
                </View>
                <View style={[styles.row,{justifyContent:'space-between',alignItems:'center'}]}>
                    <View style={[styles.row,{alignItems:'center'}]}>
                        <Text style={{fontSize:11}}>{time}</Text>
                        <Text style={{fontSize:11}}>  Chương {read}  </Text>
                    </View>
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
export default function Comment(){
    const [text, setText] = useState('');
    return(
        <View style={{backgroundColor:'#FAFAFA',flex:1}}>
            <ScrollView style={{width:width}} showsVerticalScrollIndicator={false}>
                <View style={styles.board} >
                    <View style={[styles.row,styles.outfilter]} >
                        <TouchableOpacity style={[styles.filter,{backgroundColor:'white'}]} >
                            <Text style={{color:"#1D5E88",fontWeight:'500'}}>Cũ nhất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filter} >
                            <Text style={{color:"#fff",fontWeight:'500'}}>Mới nhất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.filter,{backgroundColor:'white'}]} >
                            <Text style={{color:"#1D5E88",fontWeight:'500'}}>Nhiều thích</Text>
                        </TouchableOpacity>
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
            <View style={[styles.row,styles.abs3]}>
                <Image style={{marginLeft:20}} source={require('../icon/cmt.png')}/>
                <TextInput
                style={styles.input}
                placeholder="Thêm bình luận"
                placeholderTextColor="#888"
                value={text}
                onChangeText={setText}
                />
                <TouchableOpacity
                style={{marginRight:10}}
                onPress={() => setText('')}>
                    <Image source={require('../icon/send.png')}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}