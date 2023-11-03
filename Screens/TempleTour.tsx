import { View, Text, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Testimonials from '../components/Testimonials'
import TourForm from '../components/Form'
import Header from '../components/Header'
import TempleChoose from '../components/TempleChoose'
import Footer from '../components/Footer'
import { Divider } from 'react-native-elements'

export default function TempleTour({navigation  }:any) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} headerContent={"Temple Tour"}/>
      <ScrollView>
      <View>
        <View style={{margin:20, marginTop:15}}>
        <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Easy Trip Temple Tour</Text>
        <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , marginTop:20, fontFamily:"Poppins-Light" , textAlign:"justify"}}>
        Easy Trip Temple Tours offer a spiritual journey like no other. Immerse yourself in the divine ambiance of sacred places, whether you seek solace, seek blessings, or wish to explore the rich cultural heritage of temples. Our meticulously curated tours combine spirituality, history, and cultural insights, providing a transformative experience. With knowledgeable guides and seamless logistics, Easy Trip Temple Tours promise a deep connection with spirituality and a profound appreciation for the world's spiritual diversity.
        </Text>
        <ImageBackground source={{uri:"https://images.pexels.com/photos/17564787/pexels-photo-17564787/free-photo-of-people-dancing-and-playing-in-front-of-a-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}>
          <View style={{height:240  }}>

          </View>
        </ImageBackground>
        </View>
      <TempleChoose/>
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