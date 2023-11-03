import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: 'white',
  },
}
);

const About = ({props}:any) => {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Us</Text>
      <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
      At Easy Trip, we are more than just a travel agency; we are your trusted partners in exploration. With over 15 years of unwavering commitment to crafting unforgettable travel experiences, we specialize in Group Tours, Medical Tours, Temple Tours, and Customized Tours, both nationally and internationally. Our passion lies in curating journeys that transform destinations into memories, ensuring every traveler embarks on a seamless and unforgettable adventure. Welcome to Easy Trip, where the world is yours to discover with confidence and ease.      </Text>
      <View style={{width:"40%" , marginTop:20 }}>
      <Pressable style={styles.button} onPress={()=>{props.navigation.navigate("AboutPage")}} >
      <Text style={styles.text}>Discover More</Text>
      <Icon name='arrowright' size={15}  style={{marginRight:10 , color:"white"}}/> 
      </Pressable>
      </View>
      
    </View>
  )
}

export default About