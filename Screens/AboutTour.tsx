import { View, Text,SafeAreaView,ScrollView , ImageBackground} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Choose from '../components/Choose'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Divider } from 'react-native-elements'

const AboutTour = (props:any) => {
  return (
    <SafeAreaView>
        <Header navigation={props.navigation} headerContent={"About"}/>
        <ScrollView>
                <View style={{margin:20}}>
                <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Us</Text>
                    <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10}}>
                    At Easy Trip, we are more than just a travel agency; we are your trusted partners in exploration. With over 15 years of unwavering commitment to crafting unforgettable travel experiences, we specialize in Group Tours, Medical Tours, Temple Tours, and Customized Tours, both nationally and internationally. Our passion lies in curating journeys that transform destinations into memories, ensuring every traveler embarks on a seamless and unforgettable adventure. Welcome to Easy Trip, where the world is yours to discover with confidence and ease.
                    </Text>
                    <ImageBackground source={{uri:"https://images.pexels.com/photos/7624845/pexels-photo-7624845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}>
                    <View style={{height:240 }}>

                    </View>
                    </ImageBackground>
                    <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light", marginTop:20}}>Our Mission</Text>
                    <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10}}>
                    Our mission is to inspire and enable extraordinary travel experiences. We strive to create memorable journeys that exceed expectations, fostering connections, enriching lives, and leaving a positive impact on the world. With unwavering commitment and innovation, we make the world more accessible, one adventure at a time.                    
                    </Text>
                    <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light", marginTop:20}}>Our Vision</Text>
                    <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10}}>
                    Our vision is to be the foremost global travel company, synonymous with exceptional experiences and unmatched customer satisfaction. We aspire to continuously innovate, expand our horizons, and set industry benchmarks. With sustainable practices and a dedication to excellence, we aim to shape the future of travel, connecting people to the world's wonders.                    
                    </Text>
                </View>
                <Divider orientation="vertical" inset={true} insetType='middle'/>
                <Choose/>
                <Divider orientation="vertical" inset={true} insetType='middle'/>
                <Testimonials/>
                <Divider orientation="vertical" inset={true} insetType='middle'/>
                <Contact/>
                <Footer/>
        </ScrollView>
    </SafeAreaView>


  )
}

export default AboutTour