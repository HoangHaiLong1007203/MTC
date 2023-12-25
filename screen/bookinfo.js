import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from "react-native";
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

export default function BookInfo(){
    const [selectedButton, setSelectedButton] = useState('button1');
    const [rightValue, setRightValue] = useState(0);
    const navigation = useNavigation();
    const Button = ({ title, id }) => (
    <TouchableOpacity
        style={[{width:width*.25,padding:10,alignItems:'center'},
        selectedButton === id && { borderBottomWidth: 3, borderBottomColor: 'black' },
        ]}
        onPress={() => {
        setSelectedButton(id);
        if (id === 'button4') {
            navigation.navigate('Comment');
        } else {
        setRightValue(id === 'button1' ? 0 : id === 'button2' ? width : width*2);
        }
        }}
    >
        <Text style={selectedButton === id ? {fontWeight:'bold',color:'black'} : {fontWeight:'normal',color:'#bababa'}}>
            {title}
        </Text>
    </TouchableOpacity>
    );
    //hàm cho nút thêm tủ truyện
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
    setIsPressed(!isPressed);
    };

    return(
        <ImageBackground source={require('../img/bookcover1.jpg')}
        style={{flex:1,paddingTop:50}} blurRadius={10} >
            <View style={[styles.row,{justifyContent:'space-around',margin:20}]} >
                <Image source={require('../img/bookcover1.jpg')} 
                style={styles.bookcover}/>
                <View style={{width:width*.55}} >
                    <TouchableOpacity style={styles.typetag} >
                        <Text style={{fontSize:10,color:'white'}} >{type}</Text>
                    </TouchableOpacity>
                    <Text style={styles.white} >{namebook}</Text>
                    <Text style={styles.white}>bởi {author}</Text>
                    <View style={[styles.row,{alignItems:'center'}]}>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Image source={require('../icon/star.png')} style={styles.rate}/>
                        <Text style={[styles.white,{fontSize:11}]}> {rate}  ({ratenum} đánh giá)</Text>
                    </View>
                    <View style={[styles.row,{alignItems:'center',marginTop:25}]}>
                        <TouchableOpacity style={styles.readbut1} 
                        onPress={() => {
                            navigation.navigate('ChapContent');
                            }}>
                            <Text style={{fontSize:13,color:'white'}} >Đọc truyện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePress} 
                        style={[styles.addbut,{backgroundColor:'#fff'}]}>
                            <Image style={{width:15,height:15}}
                            source={isPressed ? require('../icon/remove.png') : require('../icon/add.png')}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.white,{fontSize:11,marginLeft:5}]}>{isPressed ? 'Xóa khỏi\nTủ truyện' : 'Thêm vào\nTủ truyện'}</Text>
                    </View>
                </View>
                
            </View>
            <View style={[styles.row,{backgroundColor:'white'}]}>
                <Button title="Giới Thiệu" id="button1" />
                <Button title="Đánh Giá" id="button2" />
                <Button title="Bình Luận" id="button4" />
                <Button title="D.S chương" id="button3" />
            </View>
            <View style={[styles.row,{right: rightValue,width:width*3}]}>
                <Detail/>
                <Rating/>
                <ChapList/>
            </View>
            <View style={[styles.row,styles.abs1]} >
                <View style={{width:width*.6,paddingLeft:20}} >
                    <Text style={{fontWeight:'500'}} >{namebook}</Text>
                    <Text style={{color:'#bababa'}} >{type}</Text>
                </View>
                <TouchableOpacity style={styles.readbut2} 
                onPress={() => {
                    navigation.navigate('ChapContent');
                    }}>
                    <Text style={{fontSize:13,color:'white'}} >Đọc</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress} 
                style={[styles.addbut,{backgroundColor:'#1D5E88'}]}>
                    <Image style={{width:15,height:15}}
                    source={isPressed ? require('../icon/wremove.png') : require('../icon/wadd.png')}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}