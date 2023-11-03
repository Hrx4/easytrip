import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function GroupChoose() {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold",fontFamily:"Poppins-Light"}}>Why Group Tour</Text>
      

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Expertly Crafted Itineraries
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our Group Tours are meticulously planned by travel experts to ensure a perfect blend of sightseeing, cultural experiences, and leisure, making the most of your time.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Safety and Comfort First
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Your well-being is our priority. We maintain high safety standards and provide comfortable accommodations, so you can relax and enjoy every moment.      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Diverse Destinations
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Easy Trip Group Tours span the globe, offering a wide range of destinations, from exotic locales to iconic landmarks, catering to various interests and preferences.
      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Camaraderie and Connection
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Join like-minded travelers and build lasting friendships while sharing unforgettable experiences, making our Group Tours a unique and enriching adventure.
      </Text>
      
      
    </View>
  )
}