import * as React from 'react-native';
import { useState } from 'react';
import {Text, TextInput, Image, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, Feather, Entypo} from '@expo/vector-icons';


const LoginScreen = ({navigation}) => {
    const [email, setemail] = useState('');

  // A state variable to store the password input
  const [password, setPassword] = useState('');

  // A function to handle the login action
  const handleLogin = () => {
    // Check if the email and password are correct
    if (email === 'email@gmail.com' && password === 'pass') {
      // Navigate to the profile component
      navigation.navigate('User');
    } else {
      // Show an alert message
      Alert.alert('Error', 'Đăng nhập thất bại');
    }
  };
    return (
        <View style={[styles.container,{marginTop:10}]}>
            <View style={styles.header}>
                <MaterialIcons name="close" size={30} onPress={() => navigation.navigate('ProfileScreen')}/>
                <Feather name='globe' size={30}/>
            </View>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
            </View>
            <View style={styles.info}>
                <View style={styles.writeinfo}>
                    <Icon name='envelope' size={30} color={'gray'} />
                    <TextInput placeholder='Email' value={email} keyboardType="email-address"
                    onChangeText={setemail} style={{ height: 35, width: '90%', marginLeft: 20 }} />
                </View>
                <View style={styles.writeinfo}>
                    <Icon name='lock' size={35} color={'gray'} />
                    <TextInput placeholder='Password' secureTextEntry={true} value={password}
                    onChangeText={setPassword} style={{ height: 35, width: '90%', marginLeft: 20 }} />
                </View>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.loBtn} onPress={handleLogin}>
                    <Text style={{ color: 'white', fontSize: 14 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                <TouchableOpacity style={styles.accBtn}>
                    <Entypo name='facebook-with-circle' size={25} color={'darkblue'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.accBtn}>
                    <Icon name='google' size={25} color={'red'} style={{}} />
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.sigBtn}>
                    <Text>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgetp}>
                <TouchableOpacity>
                    <Text style={{fontSize:12}}>Gửi lại email kích hoạt</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize:12}}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>Khi bạn nhấn đăng nhập mặc nhiên được coi là đồng ý với</Text>
            </View>
            <View style={styles.polici}>
            <TouchableOpacity>
                    <Text style={{color:'blue', fontWeight:"bold"}}>Chính sách bảo mật</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal:5}}>cùng</Text>
                <TouchableOpacity>
                    <Text style={{color:'blue', fontWeight:"bold"}}>Điều khoản và điều kiện</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
      flexDirection:'row',  
      alignItems:'center',
      padding:10,
      justifyContent:'space-between'
    },
    logo:{
        alignItems:'center',
        justifyContent:'center'
    },
    info:{
        //alignItems: 'center'
    },
    writeinfo:{
        flexDirection:'row',
        marginHorizontal: 20,
        padding:20,
        justifyContent:'center',
        paddingBottom:0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    btn:{
        backgroundColor:'white',
        //justifyContent:'center',
        height:'50',
        alignItems:'center'
    },
    loBtn:{
        width:'96%',
        height:30,
        borderRadius:20,
        backgroundColor:'darkblue',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20,
    },
    accBtn:{
        height: 30,
        width: '46%',
        borderRadius:20,
        backgroundColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 8,
    },
    sigBtn:{
        width:'96%',
        height:30,
        borderRadius:20,
        backgroundColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
    },
    forgetp:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:20,
        paddingBottom:20,
    },
    polici:{
        flexDirection:'row',
        justifyContent:'center'
    }

});
export default LoginScreen