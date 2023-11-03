import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Choose() {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Why Choose Us</Text>
      

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Expertise You Can Trust
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10}}>
      At Easy Trip, our 15+ years of experience in the travel industry guarantee you expert guidance and seamless itineraries, ensuring memorable and worry-free journeys.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Tailored Experiences
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      We understand that every traveler is unique. That's why we offer customized tour packages, so your journey perfectly suits your preferences and interests.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light", marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Diverse Offerings
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      From Group Tours to Medical Tours, Temple Tours, and International Travel, Easy Trip provides a wide array of options to cater to all your travel needs and desires.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light", marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Customer-Centric Approach
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our commitment to exceptional customer service ensures that you're well taken care of from the moment you plan your trip until you return home, leaving you with only cherished memories of your adventures with Easy Trip.
      </Text>
      
      
    </View>
  )
}