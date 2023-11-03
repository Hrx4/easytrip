import { View, Text} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'

export default function SikkimPlan() {

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
      <View style={{backgroundColor:"red" , height:"89.5%", width:1,position:"absolute",marginLeft:18,bottom:0}}/>

      <Text style={{fontSize:16 ,  color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      NJP to Gangtok. Driver will meet you on NJP and will drive you to Gangtok. Spend time on My Marg that evening by your own. We will rest that night there in hotel.       
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
         Day 2
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Gangtok to Lachen. After having breakfast you will be checking out from the hotel and will be drove to Lachen by our driver. On the way you will get the chance to see : 
     {'\n'}a) Seven sister falls
     {'\n'}b) Naga falls
     {'\n'}c) Thangu Valley
     {'\n'}After that we will go to Lachen hotel to stay the night there. 
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 3
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Lachen to Lachung. You will be taken to Gurudongmar Lake that morning after breakfast. After enjoying the whole day there, we will return to Lachen hotel and stay over night at Lachen. {'\n'}
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 4
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Lachung to Gangtok. After breakfast we will go to Gangtok via Yumthang valley, and stay the beautiful night at Gangtok. {'\n'}
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 5
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Alas! It's time to say goodbye to North Sikkim! You will return to Siliguri/ NJP/ Bagdogra airport.       
      {'\n'}
      </Text>
      </View>
      
      
    </ScrollView>
  )
}