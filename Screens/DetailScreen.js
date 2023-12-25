import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaterialCommunityIcons} from '@expo/vector-icons'
const DetailScreen =() =>{
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{ fontSize: 20, marginHorizontal: 10, }}>Tủ Truyện</Text>
                <Icon name='gear' size={30} color={'gray'} />
            </View>
            <View style={styles.middle}>
                <TouchableOpacity>
                    <Text style={{marginLeft:10}}>Lịch sử</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{marginRight:50, marginLeft:20}}>Đánh dấu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <MaterialCommunityIcons name='folder-outline' size={200} color={'gray'}/>
                <Text style={styles.textIN}>Tất cả những truyện bạn đọc sẽ nằm ở đây</Text>
                <Text style={styles.textIN}>Bắt đầu khám phá</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head:{
        flexDirection:'row',
        height: '8%',
        backgroundColor:'white',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        justifyContent:'space-between'
    },
    textIN:{
        fontSize:15,
        color:'black',
        marginHorizontal:10,
    },
    middle:{
        fontSize:18,
        flexDirection:'row',
        backgroundColor:'white'
    },
    body:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'whitesmoke'
    }
});
export default DetailScreen