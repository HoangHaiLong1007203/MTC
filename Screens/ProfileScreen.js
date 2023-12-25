import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const ProfileScreen =({navigation}) =>{ 

    return (
        <View style={styles.container}>
           <View style={styles.head}>
            <Text style={styles.txtbar}>Hồ Sơ</Text>
           </View>
           <View style={styles.touch1}>
            <TouchableOpacity style={styles.touch11}>
                <Text>Cài đặt</Text>
                <MaterialIcons name='navigate-next' size={30} color={'black'}/>
            </TouchableOpacity>
           </View>
           <View style={styles.touch2}>
            <TouchableOpacity style={styles.touch21}>
                <Text>Câu hỏi thường gặp</Text>
                <MaterialIcons name='navigate-next' size={30} color={'black'}/>
            </TouchableOpacity>
           </View>
           <View style={styles.touch3}>
            <TouchableOpacity style={styles.touch31} onPress={() => navigation.navigate('LoginScreen')} >
                <Text>Đăng nhập</Text>
                <MaterialIcons name='navigate-next' size={30} color={'black'} />
            </TouchableOpacity>
           </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    head:{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft:10,
        alignItems:'center',
        height:'8%',
        justifyContent:'space-between',
        marginTop:10
    },
    txtbar:{
        fontSize: 20,
        color:'black',
    },
    touch11:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        alignItems:'center'
    },
    touch1:{
        borderTopWidth: 1,
        borderTopColor:'gray',
        marginTop:10,
        height:'5%',
        justifyContent:'center'
    },
    touch2:{
        borderTopWidth: 1,
        borderTopColor:'gray',
        marginTop:10,
        height:'5%',
        justifyContent:'center'
    },
    touch21:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        alignItems:'center'
    },
    touch3:{
        borderTopWidth: 1,
        borderTopColor:'gray',
        marginTop:10,
        height:'5%',
        justifyContent:'center'
    },
    touch31:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        alignItems:'center'
    },

});
export default ProfileScreen