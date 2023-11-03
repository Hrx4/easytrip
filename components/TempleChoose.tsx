import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function TempleChoose() {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Why Temple Tour</Text>
      

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Spiritual Excellence
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our Temple Tours are designed for spiritual seekers, offering profound experiences at revered shrines and sacred sites, allowing you to deepen your spiritual connection      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Expert Guides
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our knowledgeable guides provide historical context, cultural insights, and religious significance, enriching your temple tour with informative and meaningful narratives.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Customized Pilgrimages
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Tailored to your preferences, our Temple Tours cater to diverse religious traditions, ensuring a personalized and spiritually fulfilling journey.      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Logistical Ease
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      From transportation to accommodations, we handle all the details, allowing you to focus on your spiritual journey with peace of mind and comfort.
      </Text>
      
      
    </View>
  )
}