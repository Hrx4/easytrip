import { View, Text, Button, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import TourForm from '../components/Form'
import Header from '../components/Header'
import MedicalChoose from '../components/MedicalChoose'
import Footer from '../components/Footer'
import { Divider } from 'react-native-elements'

export default function MedicalTour({navigation  }:any) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} headerContent={"Medical Tour"}/>
      <ScrollView>
      <View>
        <View style={{margin:20 , marginTop:15}}>
        <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light" }}>Easy Trip Medical Tour</Text>
        <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , marginTop:20, fontFamily:"Poppins-Light" , textAlign:"justify"}}>
        Easy Trip Medical Tours are your gateway to world-class healthcare combined with seamless travel experiences. We understand the importance of health and well-being, which is why we offer meticulously planned medical tours to renowned international healthcare destinations. With our expert assistance, you can access cutting-edge medical treatments and recover in comfort. Trust us to handle all travel logistics while you prioritize your health, ensuring a worry-free and healing journey like no other.
        </Text>
        <ImageBackground source={{uri:"https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}>
          <View style={{height:240  }}>

          </View>
        </ImageBackground>
        </View>
        <MedicalChoose/>
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