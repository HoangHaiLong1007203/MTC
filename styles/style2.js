import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    rate:{
        width:20,
        height:20
    },
    row:{
        flexDirection:'row'
    },
    white:{
        color:'white'
    },
    bookcover:{
        width:width*.25,height:width*.25*1.5,resizeMode:'contain',borderRadius:10
    },
    typetag:{
        backgroundColor:'#1E5D85',width:75,borderRadius:15,alignItems:'center'
    },
    addbut:{
        padding:5,borderRadius:30,alignItems:'center',marginLeft:5
    },
    readbut1:{
        backgroundColor:'#1E5D85',width:85,borderRadius:15,padding:5,alignItems:'center'
    },
    readbut2:{
        backgroundColor:'#000',width:60,borderRadius:50,padding:5,alignItems:'center'
    },
    abs1:{
        position:'absolute',padding:5,
            backgroundColor:'white',elevation:5,alignItems:'center',
            alignSelf:'center', margin:30,marginTop:height*.9,
            borderRadius:100,width:width*.9,justifyContent:'space-around'
    },
    moretit:{
        margin:10,marginLeft:0,justifyContent:'space-between',alignItems:'center'
    },
    bookcover2:{
        width:width*.3,height:width*.3*1.5,resizeMode:'contain',borderRadius:10
    },
    sameauthor:{
        width:width*.5,padding:10,justifyContent:'space-between'
    },
    samecvt:{
        padding:10,height:height*.325,justifyContent:'space-between'
    },
    bookcover3:{
        width:width*.25,height:width*.25*1.5,resizeMode:'contain',borderRadius:10
    },
    ranktag:{
        backgroundColor:'#FFC000',width:30,height:30,
                borderRadius:20,justifyContent:'center',alignItems:'center'
    },
    avt:{
        width:70,height:70,borderRadius:40,marginLeft:10
    },
    jobtag:{
        backgroundColor:'#7ab8f9',width:60,
                    borderTopLeftRadius: 5,borderBottomLeftRadius: 5,
                    borderTopRightRadius: 20,borderBottomRightRadius: 20,
                    justifyContent:'center',alignItems:'center',
                    margin:10,padding:3
    },
    input: {
        height: 40,
        width:width*.7,
        borderColor: 'gray',
        borderWidth: 0
    },
    abs3:{
        position:'absolute',marginTop:height*.9,alignItems:'center',justifyContent:'space-between',width:width,height:60,elevation:5,backgroundColor:'white'
    },
    filter:{
        width:width*.25,alignItems:'center',
                        padding:5
    },
    outfilter:{
        backgroundColor:'#1D5E88',borderWidth:2,marginBottom:20,
                    borderColor:'#1D5E88',borderRadius:15,overflow:"hidden",width:width*.75
    },
    board:{
        color:"#1D5E88",fontWeight:'500',justifyContent:'space-between',
                alignItems:'center',margin:20
    },

})
export default styles;
