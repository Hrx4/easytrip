import { View, Text, Button, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import TourForm from '../components/Form'
import Header from '../components/Header'
import GroupChoose from '../components/GroupChoose'
import Footer from '../components/Footer'
import { Divider } from 'react-native-elements'

export default function GroupTour({navigation  }:any) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} headerContent={"Group Tour"}/>
      <ScrollView>
      <View>
        <View style={{margin:20, marginTop:15 }}>
        <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Easy Trip Group Tour</Text>
        <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , marginTop:20, fontFamily:"Poppins-Light" , textAlign:"justify"}}>
        Easy Trip Group Tours are designed to foster connections, create memories, and offer the joy of shared experiences. Whether you're a solo traveler looking to meet new people or a group of friends and family seeking adventure together, our meticulously planned group tours cater to all. With our expert guides, carefully curated itineraries, and a diverse range of destinations, you can immerse yourself in the world while forging new friendships along the way.        </Text>
        <ImageBackground source={{uri:"https://img.freepik.com/premium-photo/joint-trip-mountains-big-company_275234-73.jpg?w=1060"}}>
          <View style={{height:240  }}>

          </View>
        </ImageBackground>
        </View>
        <GroupChoose/>
        <Divider orientation="vertical" inset={true} insetType='middle'/>
      <Testimonials/>
      <Divider orientation="vertical" inset={true} insetType='middle'/>
      <TourForm/>
      <Footer/>      
        
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}