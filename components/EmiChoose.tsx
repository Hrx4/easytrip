import { View, Text, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function EmiChoose() {
  return (
    <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Why EMI on Holiday</Text>
      

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Financial Flexibility
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Choose Easy Trip for EMI on holidays to enjoy the flexibility of paying for your dream vacation over time, making it affordable for all budgets.      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> No Compromise on Quality
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Our EMI options don't mean compromising on the quality of your trip. You'll still experience top-notch accommodations and services.
       </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Plan Ahead
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      With EMI, you can plan your holidays well in advance, securing the best deals and availability for your preferred travel dates.      </Text>

      <Text style={{fontSize:22, fontWeight:"600" , color:"black" , fontFamily:"Poppins-Light" , marginTop:20}}>
        <Icon name='circle' size={15}  style={{marginRight:10 , color:"black"}}/> Peace of Mind
      </Text>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify"}}>
      Travel stress-free knowing your vacation payments are spread out, allowing you to focus on making lasting memories, not worrying about finances.      </Text>
      
      
    </View>
  )
}