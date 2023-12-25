import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import styles from "../styles/style1";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const Items =({img,name,read,chap,noti}) =>{
    const navigation = useNavigation();
    let c;
    if (noti === 1) {
        c = require('../icon/notifications_active_FILL1_wght400_GRAD0_opsz24.png');
    } else {
        c = require('../icon/notifications_off_FILL1_wght400_GRAD0_opsz24.png');
    }
    return(
        <TouchableOpacity style={[styles.row,styles.item]}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}
        >
            <Image source={img} style={styles.bookcover}/>
            <View style={{paddingLeft:10}}>
                <Text style={styles.bookname}>{name}</Text>
                <Text>Đã đọc {read}/{chap}</Text>
            </View>
            <View style={[styles.row,{left:20}]}>
                <TouchableOpacity><Image source={c}/></TouchableOpacity>
                <TouchableOpacity><Image source={require('../icon/more_vert_FILL1_wght400_GRAD0_opsz24.png')}/></TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const Items2 =({img,name}) =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={[styles.row,styles.item]}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <Image source={img} style={styles.bookcover}/>
            <View style={{paddingLeft:10}}>
                <Text style={styles.bookname}>{name}</Text>
            </View>
            <View style={[styles.row,{left:44}]}>
                <TouchableOpacity><Image source={require('../icon/more_vert_FILL1_wght400_GRAD0_opsz24.png')}/></TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default function BookCase(){
    // Khởi tạo biến trạng thái cho thuộc tính right và borderBottom, fontWeight
    const [right, setRight] = useState(0);
    const [borderBottomWidth1, setBorderBottomWidth1] = useState(3);
    const [borderBottomColor1, setBorderBottomColor1] = useState('black');
    const [fontWeight1, setfontWeight1] = useState('bold');
    const [borderBottomWidth2, setBorderBottomWidth2] = useState(0);
    const [borderBottomColor2, setBorderBottomColor2] = useState('transparent');
    const [fontWeight2, setfontWeight2] = useState('normal');

    // Hàm xử lý sự kiện nhấn vào Button Lịch sử
    const onPressButton1 = () => {
        // Thay đổi giá trị của biến trạng thái
        setRight(0);//về trang lịch sử
        //đổi trạng thái nút Đánh dấu
        setBorderBottomWidth2(0);
        setBorderBottomColor2('transparent');
        setfontWeight2('normal')
        //đổi trạng thái nút Lịch sử
        setBorderBottomWidth1(3);
        setBorderBottomColor1('black');
        setfontWeight1('bold')
        };
  // Hàm xử lý sự kiện nhấn vào Button Đánh dấu
    const onPressButton2 = () => {
    // Thay đổi giá trị của biến trạng thái
    setRight(width);//sang trang Đánh dấu
    //đổi trạng thái nút Lịch sử
    setBorderBottomWidth1(0);
    setBorderBottomColor1('transparent');
    setfontWeight1('normal')
    //đổi trạng thái nút Đánh dấu
    setBorderBottomWidth2(3);
    setBorderBottomColor2('black');
    setfontWeight2('bold')
    };
    return(
        <View style={styles.container}>
            <View style={[styles.row, styles.center,{height:50,marginTop:20}]}>
                <Text>Tủ Truyện</Text>
                <TouchableOpacity >
                    <Image source={require('../icon/setting.png')} 
                    style={{width:30,height:30}}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.row,{height:30}]}>
                <TouchableOpacity style={[styles.but,
                    {borderBottomWidth:borderBottomWidth1,borderBottomColor:borderBottomColor1}]} 
                    onPress={onPressButton1}>
                        <Text style={{fontWeight:fontWeight1}}>Lịch sử</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.but,
                    {borderBottomWidth:borderBottomWidth2,borderBottomColor:borderBottomColor2}]} 
                    onPress={onPressButton2}>
                        <Text style={{fontWeight:fontWeight2}}>Đánh dấu</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.row,{width:2*width,right:right,marginBottom:width*.3}]}>
                <ScrollView style={{width:width}}>
                    <Items img={require('../img/bookcover1.jpg')} 
                    name='Nghiệp Dư Thần Linh: Ta Có Thể Vượt Qua Không Gian' 
                    read={1} chap={2} noti={1}/>
                    <Items img={require('../img/bookcover2.jpg')} 
                    name='Ta Chính Là Thần!' 
                    read={1} chap={2} />
                    
                </ScrollView>
                <ScrollView style={{width:width}}>
                    <Items2 img={require('../img/bookcover3.jpg')} 
                    name='Ta Chế Tạo Khoa Học Ma Pháp' />
                    <Items2 img={require('../img/bookcover4.jpg')} 
                    name='Trở Thành Quái Đàm Liền Tính Thành Công' />
                </ScrollView>
            </View>
        </View>
    )
}