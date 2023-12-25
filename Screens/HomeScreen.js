import * as React from 'react';
import { StyleSheet, View, Text, 
    ScrollView, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import{FontAwesome, Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import Carousel from '../Component/Carousel';

const { width, height } = Dimensions.get('window');
const type='Đô thị';
const num='50K'

const More =({name}) =>{
    return(
        <View >
            <TouchableOpacity style={styles.moretit}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'dimgray' }}>{name}</Text>
                <MaterialIcons name='navigate-next' size={20} />
            </TouchableOpacity>
        </View>
    )
}
const MoreSpe =({name}) =>{
    return(
        <View >
            <TouchableOpacity style={styles.moretit}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>{name}</Text>
                <MaterialIcons name='navigate-next' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}
const Items1 = ({ img, name, type, num }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ padding: 5, height: 100, width:250, flexDirection:'row'}}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <View style={{height:90}}>
                <Image source={img}
                    style={{ height:90, width:65,resizeMode: 'contain', borderRadius: 10 }} />
            </View>
            <View style={{padding:5}}>
            <Text style={{fontWeight:'bold', fontSize:12}}>{name}</Text>
            <Text style={{marginBottom:45, fontSize:12}}>{type}</Text>
            <Text style={{fontWeight:'bold', fontSize:11}}>{num} Lượt đọc</Text>
            </View>
        </TouchableOpacity>
    )
}
const Items2 = ({ img }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ padding:3, height: 70,width:50, justifyContent: 'space-between' }}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <View style={{height:60}}>
                <Image source={img}
                    style={{width: 45, height:60, resizeMode: 'contain',borderRadius:5, padding:5}} />
            </View>
        </TouchableOpacity>
    )
}
const Items3 = ({ img, name, type }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ padding:10,height: 230, justifyContent:'space-around' }}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <View style={{ width: width * .27 }}>
                <Image source={img}
                    style={{ width: width * .27, height: 150, resizeMode: 'contain', borderRadius: 10 }} />
                <Text style={{fontSize:12 }}>{name}</Text>
            </View>
            <Text style={{fontSize:12, paddingTop:60 }}>{type}</Text>
        </TouchableOpacity>
    )
}
const Items4 = ({ img, name }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{padding:5,height: 200, justifyContent: 'space-between' }}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <View style={{ width: width * .25, alignItems:'center' }}>
                <Image source={img}
                    style={{ width: width * .25, height: 150, resizeMode: 'contain', borderRadius: 10 }} />
                <Text style={{ flexDirection:'row-reverse', fontSize:12, color:'white', paddingTop:5}} >{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
const Items5 = ({ img, name, type }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ padding: 5, height: 100, width:250, flexDirection:'row'}}
        onPress={() => {
            navigation.navigate('BookInfo');
            }}>
            <View style={{ height:90}}>
                <Image source={img}
                    style={{ width: 65, height:90, resizeMode: 'contain', borderRadius: 10 }} />
            </View>
            <View style={{ padding: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 12}}>{name}</Text>
                <Text style={{ marginBottom: 40, fontSize: 12 }}>{type}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Ionicons name='star-sharp' size={15} color={'gold'} />
                    <Ionicons name='star-sharp' size={15} color={'gold'} />
                    <Ionicons name='star-sharp' size={15} color={'gold'} />
                    <Ionicons name='star-sharp' size={15} color={'gold'} />
                    <Ionicons name='star-sharp' size={15} color={'gold'} />
                    <Text style={{ marginLeft: 10, fontSize:11 }}>4.9</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.searchBar} >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/venus_307691.png')} style={{ marginLeft: 10, marginRight: 7, width: 30, height: 30 }} />
                    <Image source={require('../assets/mars_307692.png')} style={{ width: 30, height: 30 }} />
                    <Text style={styles.searchBarText}>Tất cả</Text>
                    <FontAwesome name='caret-down' size={15} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <Icon name="search" size={25} color="gray" />
                <Ionicons name='filter-sharp' size={30} color='gray' style={{ marginHorizontal: 10 }} />
            </View>
            <ScrollView>
                <View>
                    <SafeAreaView>
                        <Carousel/>
                    </SafeAreaView>
                </View>
                <More name="Mới nhất"/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:10}}>
                    <Items2 img={require('../assets/1.jpg')}/>
                    <Items2 img={require('../assets/10.jpg')} />
                    <Items2 img={require('../assets/2.webp')} />
                    <Items2 img={require('../assets/3.jpg')} />
                    <Items2 img={require('../assets/4.webp')} />
                    <Items2 img={require('../assets/5.jpg')} />
                    <Items2 img={require('../assets/6.webp')} />
                    <Items2 img={require('../assets/7.jpg')} />
                    <Items2 img={require('../assets/8.webp')} />
                    <Items2 img={require('../assets/9.jpg')} />
                    <Items2 img={require('../assets/11.webp')}/>
                </ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent:'space-between'}}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('BookInfo');
                        }}>
                        <View style={{marginLeft:10}}>
                            <Text style={styles.tieubieu}>Huyền huyễn</Text>
                            <Text style={{ fontSize: 16, marginBottom: 20 }}>Kiếm Đạo Cuồng Thần</Text>
                            <Text style={{flexDirection:'row-reverse', fontSize: 14, color:'gray', marginBottom: 20}}>[truyền thống huyền huyễn]</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                <Ionicons name='star-sharp' size={20} color={'gold'} />
                                <Ionicons name='star-sharp' size={20} color={'gold'} />
                                <Ionicons name='star-sharp' size={20} color={'gold'} />
                                <Ionicons name='star-sharp' size={20} color={'gold'} />
                                <Ionicons name='star-sharp' size={20} color={'gold'} />
                                <Text style={{ marginLeft: 10 }}>4.9</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: 'black', width: 80, height: 30, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                navigation.navigate('BookInfo');
                                }}>
                                <Text style={{ color: 'white' }}>Đọc</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <AntDesign name='pluscircle' size={20} color={'darkblue'} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('BookInfo');
                        }}>
                        <Image source={require('../assets/11.webp')} style={{ height: 200, width: 150, marginRight:10 }} resizeMode='contain' borderRadius={10}/>
                    </TouchableOpacity>
                </View>
                <More name={'Đề cử'} />
                <View style={{ flexDirection: 'row' }}>
                    <Items3 img={require('../assets/1.jpg')}
                        name={'Bá Võ'}
                        type={type} />
                    <Items3 img={require('../assets/3.jpg')}
                        name={'Bất Diệt Chiến Thần'}
                        type={type} />
                    <Items3 img={require('../assets/5.jpg')}
                        name={'Túc Mệnh Chi Hoàn'}
                        type={type} />
                </View>
                <View style={{ flexDirection: 'row', marginBottom:20 }}>
                    <Items3 img={require('../assets/7.jpg')}
                        name={'Thời Đại Quang Vinh'}
                        type={type} />
                    <Items3 img={require('../assets/9.jpg')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={type} />
                    <Items3 img={require('../assets/10.jpg')}
                        name={'Thiên Long Bát Bộ'}
                        type={type} />
                </View>
                <View style={{backgroundColor:'gainsboro'}}>
                    <More name={'Thịnh hành'} />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row', marginBottom:20, marginLeft:10}}>
                    <View style={{ flexDirection: 'column'}}>
                        <Items1 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}
                        num={679}/>
                        <Items1 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}
                        num={'98K'}/>
                        <Items1 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}
                        num={'14K'}/>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Items1 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}
                        num={679}/>
                        <Items1 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}
                        num={'98K'}/>
                        <Items1 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}
                        num={'14K'}/>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Items1 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}
                        num={679}/>
                        <Items1 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}
                        num={'98K'}/>
                        <Items1 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}
                        num={'14K'}/>
                    </View>
                    </ScrollView>
                </View>
                <View style={{backgroundColor:'black'}}>
                    <MoreSpe name={'Mới đăng'}/>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10, marginLeft:10}}>
                    <Items4 img={require('../assets/1.jpg')}
                    name={'Huyền Giám Tiên Tộc'}/>
                    <Items4 img={require('../assets/10.jpg')} 
                    name={'Tuyệt Thế Thần Hoàng'}/>
                    <Items4 img={require('../assets/2.webp')}
                    name={'Vạn Biến Hồn Đế'} />
                    <Items4 img={require('../assets/3.jpg')} 
                    name={'Hoàng Tuyền Ngục Chủ'}/>
                    <Items4 img={require('../assets/4.webp')} 
                    name={'Pokemon'}/>
                    <Items4 img={require('../assets/5.jpg')} 
                    name={'Huyền Thoại Bóng Đá'}/>
                    <Items4 img={require('../assets/6.webp')} 
                    name={'Thiên Long Bát Bộ'}/>
                    <Items4 img={require('../assets/7.jpg')}
                    name={'Ỷ Thiên Đồ Long Ký'} />
                    </ScrollView>
                </View>
                <More name={'Mới hoàn thành'}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
                <View style={{ flexDirection: 'column'}}>
                        <Items5 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}/>
                        <Items5 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}/>
                        <Items5 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}/>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Items5 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}/>
                        <Items5 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}/>
                        <Items5 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}/>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Items5 img={require('../assets/11.webp')}
                        name={'Đông Ly Trần Kiếp Diệt'}
                        type={'Huyền Huyễn'}/>
                        <Items5 img={require('../assets/2.webp')}
                        name={'Ngôi Sao Hi Vọng'}
                        type={'Cạnh Kỹ'}/>
                        <Items5 img={require('../assets/6.webp')}
                        name={'Tâm Can Bảo Bối'}
                        type={'Cổ Đại Ngôn Tình'}/>
                    </View>
                    </ScrollView>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar:{
        marginTop:30,
        flexDirection: 'row',
        height:50,
        backgroundColor:'',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    searchBarText:{
        color:'black',
        marginHorizontal:10,
        fontSize:20
    },
    moretit:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginTop: 10,
        margin:10,
        // marginLeft:0,
    },
    tieubieu:{
        fontSize: 14,
        color:'gray',
        marginBottom: 20,
        flexDirection:'row-reverse'
    },
   Scroll:{
    
   }
});
export default HomeScreen