import { View, Text} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'

export default function SilkPlan() {

    const windowwidth = Dimensions.get('window').width

  return (
    <ScrollView >
        <View style={{ margin:20}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Tour Plan  {'\n'}</Text>

      <View style={{  display:"flex",gap:10,height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 1
      </Text>
      </View  >
      <View style={{backgroundColor:"red" , height:"89%", width:1,position:"absolute",marginLeft:18,bottom:0}}/>

      <Text style={{fontSize:16 ,  color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        NJP to Icchegaon. Our driver will drive you to Icchegaon from the pick up point. We will stay the night there.
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
         Day 2
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        ICCHEGAON TO PADAMCHEN. On day 2 morning after breakfast at the homestay you will be taken to Padamchen via Aritar Lake, Ganesh temple, Mankhim view point, Q khola falls, Hanging bridge, Nimachen, Zuluk forest sanctuary. We will be resting the night there. 
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 3
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        PADAMCHEN TO ZULUK. On day 3 morning after having breakfast at Zuluk homestay, you will get the opportunity to visit Zuluk Shiv Mandir, Thambhi view point, zig zag road, eagle bunker, Nathang Valley, Old baba mandir, Kupup lake. We will stay overnight at Zuluk homestay.
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 4
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        ZULUK TO RISIKHOLA. After breakfast you will be transferred to Risikhola & overnight stay.
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 5
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        RISHIKHOLA TO NJP. After breakfast at your homestay, you will be return to NJP/ Siliguri/ Bagdogra Airport as per your choice. 
      </Text>
      </View>
      
      
    </ScrollView>
  )
}