import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MedicalChoose() {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Why Medical Tour</Text>
      

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Medical Excellence
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      We collaborate with top-tier medical facilities and renowned specialists worldwide, ensuring you receive world-class healthcare and advanced treatments during your Medical Tour.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Personalized Care
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our dedicated team customizes your medical journey, addressing your unique healthcare needs and preferences, providing comprehensive support from diagnosis to recovery.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Seamless Travel and Recovery
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      We handle all travel arrangements, including accommodations and transportation, allowing you to focus solely on your treatment and healing process.      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Global Reach, Local Support
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Benefit from our global network of medical partners while enjoying local assistance at your destination, guaranteeing a hassle-free and comfortable experience.
      </Text>
      
      
    </View>
  )
}