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

const Info =({num,detail}) =>{
    return(
        <View style={{alignItems:'center',margin:15}} >
            <Text style={{fontSize:25,fontWeight:'bold'}}>{num}</Text>
            <Text style={{color:'#bababa'}}>{detail}</Text>
        </View>
    )
}
const More =({name}) =>{
    return(
        <View style={[styles.row,styles.moretit]} >
            <Text style={{fontSize:20}}>{name}</Text>
            <TouchableOpacity>
                <Image source={require('../icon/right.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
        </View>
    )
}
const Items =({img,name,detail,rating}) =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={[styles.row,{paddingRight:20,width:width*.8}]} 
        onPress={() => {
            navigation.push('BookInfo');
            }}>
            <Image source={img} 
            style={styles.bookcover2}/>
            <View style={styles.sameauthor} >
                <View>
                    <Text style={{fontWeight:'500'}} >{name}</Text>
                    <Text style={{fontWeight:'300'}}>{detail}</Text>
                </View>
                <View style={[styles.row,{alignItems:'center'}]}>
                    <Image source={require('../icon/star.png')} style={styles.rate}/>
                    <Image source={require('../icon/star.png')} style={styles.rate}/>
                    <Image source={require('../icon/star.png')} style={styles.rate}/>
                    <Image source={require('../icon/star.png')} style={styles.rate}/>
                    <Image source={require('../icon/star.png')} style={styles.rate}/>
                    <Text style={{fontWeight:'bold'}}> {rating}  </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const Items2 =({img,name,type}) =>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.samecvt}
        onPress={() => {
            navigation.push('BookInfo');
            }}>
            <View style={{width:width*.25}}>
                <Image source={img} 
                style={styles.bookcover3}/>
                <Text >{name}</Text>
            </View>
            <Text >{type}</Text>
        </TouchableOpacity>
    )
}
const Items3 =({rank,avt,name,tag,value}) =>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={[styles.row,{justifyContent:'space-between',alignItems:'center',margin:10}]} 
        onPress={() => {
            navigation.push('BookInfo');
            }}>
            <View style={[styles.row,{alignItems:'center'}]} >
                <View style={styles.ranktag}>
                    <Text style={{color:'white',fontWeight:"bold"}} >{rank}</Text>
                </View>
                <Image source={avt} style={styles.avt} />
                <View>
                    <Text style={{fontWeight:"bold",marginLeft:10}} >{name}</Text>
                    <View style={styles.jobtag}>
                        <Text style={{color:'white'}}>{tag}</Text>
                    </View>
                </View>
            </View>
            <Text>{value}</Text>
        </TouchableOpacity>
    )
}
export default function Detail(){
    return(
        <ScrollView style={{width:width,marginBottom:230}} showsVerticalScrollIndicator={false}>
            <View style={[styles.row,{backgroundColor:'#F5F5F5',justifyContent:'space-around'}]}>
                <Info num={update} detail='Chương/Tuần'/>
                <Info num={chap} detail='Chương - Đang ra'/>
                <Info num={view} detail='Lượt đọc'/>
            </View>
            <View style={{backgroundColor:'white',padding:20}} >
                <Text>
                Trang Hồng tự do xuyên toa ở không giống không gian, 
                chứng kiến rất nhiều không phải bình thường kỳ diệu cố sự.
                {'\n\n'}
                Bị mọi người mang theo 'Thần linh' tên gọi.
                {'\n\n'}
                Nhưng Trang Hồng biểu thị: "Ta là người, không phải thần."
                {'\n\n'}
                ...
                {'\n\n'}
                Ngàn vạn năm sau, hắn đi tới không gian phần cuối, 
                nhìn xuống mảnh này mỹ lệ vô tận vũ trụ, 
                cảm nhận được một loại khó có thể dùng lời diễn tả được vui sướng.
                {'\n\n'}
                Đó là vượt qua mang đến vui sướng.
                {'\n\n'}
                Hắn vượt qua tiền tài, danh vọng, quyền lực, 
                vượt qua không gian, thời gian, tia sáng, 
                đến một mảnh thần thánh hải dương.
                {'\n\n'}
                Đó là trí tuệ."
                </Text>
            </View>
            <View style={{backgroundColor:'#F5F5F5',padding:10,paddingLeft:20}} >
                <Text style={{fontSize:20}}>Thể loại</Text>
                <View style={[styles.row,{margin:10}]} >
                    <TouchableOpacity style={{backgroundColor:'#EFF8FF',width:75,alignItems:'center'}} >
                        <Text style={{fontSize:10,color:'#1E5D85',textTransform:'uppercase'}} >{type}</Text>
                    </TouchableOpacity>
                </View>
                <More name='Cùng tác giả'/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Items img={require('../img/bookcover1.jpg')} 
                    name={namebook}
                    detail='Trang Hồng tự do xuyên toa ở không giống không gian,...'
                    rating={rate}/>
                    <Items img={require('../img/bookcover5.jpg')} 
                    name='Nhật Ký Thành Thần Của Ta'
                    detail='Một hồi bất ngờ để Tô Hạo thu được vô hạn chuyển...'
                    rating={4.8}/>
                </ScrollView >
                <More name={'Cùng đăng bởi '+cvt}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Items2 img={require('../img/bookcover1.jpg')}
                    name='Nghiệp Dư Thần Linh: Ta...'
                    type={type}/>
                    <Items2 img={require('../img/bookcover2.jpg')}
                    name='Ta Chính Là Thần!'
                    type='Huyền huyễn'/>
                    <Items2 img={require('../img/bookcover3.jpg')}
                    name='Ta Chế Tạo Khoa Học Ma...'
                    type={type}/>
                    <Items2 img={require('../img/bookcover4.jpg')}
                    name='Trở Thành Quái Đàm Liền Tín...'
                    type='Huyền huyễn'/>
                    <Items2 img={require('../img/bookcover5.jpg')}
                    name='Nhật Ký Thành Thần Của Ta'
                    type={type}/>
                </ScrollView>
                <More name='Hâm mộ'/>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Items3 rank={1} avt={require('../img/avt1.jpg')} 
                    name='Ngọc Băng' tag='Đệ tử' value={29+'.000'} />
                    <Items3 rank={2} avt={require('../img/avt2.jpg')} 
                    name='life of now' tag='Học đồ' value={13+'.000'} />
                    <Items3 rank={3} avt={require('../img/avt3.jpg')} 
                    name='thư lão' tag='Học đồ' value={12+'.000'} />
                </ScrollView>
                <View style={{alignItems:'center',margin:30,marginBottom:100}}>
                    <TouchableOpacity style={styles.row} >
                        <Image source={require('../icon/flag.png')}/>
                        <Text style={{color:'#7d7d7d'}} >Báo lỗi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}