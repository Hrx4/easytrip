import { View, Text, Button, ScrollView,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import TourForm from '../components/Form'
import Header from '../components/Header'
import EMIForm from '../components/EMIForm'
import EmiChoose from '../components/EmiChoose'
import Footer from '../components/Footer'
import { Divider } from 'react-native-elements'

export default function EmiHoliday({navigation  }:any) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} headerContent={"EMI on Holiday"}/>
      <ScrollView>
      <View>
        <View style={{margin:20, marginTop:15}}>
        <Text style={{fontSize:28 , color:"red" , fontWeight:"bold",fontFamily:"Poppins-Light" }}>Easy Trip EMI on Holiday</Text>
        <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , marginTop:20, fontFamily:"Poppins-Light" , textAlign:"justify"}}>
        At Easy Trip, we believe that everyone deserves the joy of a memorable holiday. That's why we offer convenient EMI options on our holiday packages, making travel dreams more accessible. Our flexible payment plans allow you to spread the cost of your vacation over time, ensuring you can explore your desired destinations without financial stress. With Easy Trip, you can embark on your dream getaway while managing your budget with ease
        </Text>
        <ImageBackground source={{uri:"https://images.pexels.com/photos/7968305/pexels-photo-7968305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}>
          <View style={{height:240  }}>

          </View>
        </ImageBackground>
        </View>
      <EmiChoose/>
      <Divider orientation="vertical" inset={true} insetType='middle'/>
      <Testimonials/>
      <Divider orientation="vertical" inset={true} insetType='middle'/>
      <EMIForm/>
      <Footer/>
      
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}