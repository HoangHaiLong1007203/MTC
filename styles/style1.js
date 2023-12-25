import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:20,
        paddingRight:10,
        backgroundColor:'white'
    },
    row:{
        flexDirection:'row'
    },
    center:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    but:{
        padding:5
    },
    item:{
        padding:10,
        backgroundColor:"#fafafa"
    },
    bookcover:{
        height:width*.3,
        width:width*.2,
        resizeMode:'contain',
        borderRadius:10
    },
    bookname:{
        width:width*.5,
        fontWeight:"500"
    }
})
export default styles;