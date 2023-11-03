import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  Iconi  from 'react-native-vector-icons/Fontisto';
import  Iconk  from 'react-native-vector-icons/FontAwesome5';

export default function Contact() {
  return (
    <View>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", margin:20 , fontFamily:"Poppins-Light"}}>Contact Us</Text>
      <View style={{marginLeft:20  , flexDirection:"row" , gap:10}}>
      <Icon name='mobile1' size={18}  style={{ color:"red"}}/>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light"}}>
        +91 9233300333 / 9732005459{"\n"}
      </Text>
      </View>
      <View style={{marginLeft:20  , flexDirection:"row" , gap:10}}>
      <Iconi name='email' size={18}  style={{ color:"red" ,marginRight:10}}/>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light"}}>
        easytripdurgapur@gmail.com{"\n"}
       
      </Text>
      </View>
      <View style={{marginLeft:20  , flexDirection:"row" , gap:10}}>
      <Iconk name='address-book' size={18}  style={{ color:"red" ,paddingRight:10}}/>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light"}}>
        Office 1 - 4/6 Bengal Ambuja,{"\n"} City Centre, Durgapur, India, {"\n"}West Bengal {"\n"}
      </Text>
      </View>
      <View style={{marginLeft:20 , flexDirection:"row" , gap:10}}>
      <Iconk name='address-book' size={18}  style={{ color:"red" ,paddingRight:10}}/>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light"}}>
        Office 2: NewTon Sector Market ,{"\n"} B-Zone , Durgapur ,{"\n"} West Bengal, 713205 {"\n"} 
      </Text>
      </View>
      <MapView
        style={{height:400 , width:"80%" , marginRight:'auto' , marginLeft:'auto' , marginTop:10}}
        initialRegion={{
        latitude: 23.5391949,
        longitude: 87.3020877,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        />

    </View>
  )
}