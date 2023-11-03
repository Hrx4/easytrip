import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Footer() {

    const windowWidth = Dimensions.get('window').width;


  return (
     <View style={{height:50,marginTop:10, marginBottom:60, width:windowWidth , backgroundColor:"black",  flexDirection:"row" , justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"white"}}>©️ Copyright Easy Trip, 2023. Developed By TTS. 
      </Text>
    </View>
  )
}