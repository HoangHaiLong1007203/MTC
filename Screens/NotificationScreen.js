import * as React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {MaterialIcons} from '@expo/vector-icons'
const NotificationScreen =() =>{
    return (
        <View style={styles.container}>
            <View style={[styles.head]}>
                <Text style={styles.textHead}>Thông Báo </Text>
                <MaterialIcons name='playlist-add-check' size={30} color={'gray'}/>
            </View>
            <View style={styles.body}>
                <Icon name="bell" size={150} color={'gray'}/>
                <Text style={{fontSize:15, color:'gray', paddingTop:15}}>Chưa Có Thông Báo</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    head:{
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems:'center',
        height:'8%',
        justifyContent:'space-between',
        marginTop:10
    },
    textHead:{
        fontSize: 20,
    },
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'whitesmoke'

    }
});
export default NotificationScreen