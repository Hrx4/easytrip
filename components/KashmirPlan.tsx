import { View, Text} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'

export default function KashmirPlan() {

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
      <View style={{backgroundColor:"red" , height:"95.5%", width:1,position:"absolute",marginLeft:18,bottom:0}}/>

      <Text style={{fontSize:16 ,  color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        On arrival at Jammu Railway station our representative will pick you up and transfer to Jammu
        hotel. After your long train journey , this evening is free for your leisure time. overnight stay at
        Jammu hotel.
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
         Day 2
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Jammu to Srinagar Transfer & Srinagar Local Sightseeing with Dal lake point (260 km /
        Approx 09 Hours Drive- One Way) {'\n'}
        On this day in early morning you will proceed for the beautiful city Srinagar enroute Srinagar local
        sightseeing- visit the world-famous Mughal Gardens - Nishat Bagh (The garden of pleasure), Shalimar
        Bagh (Abode of love), and Chashme Shahi Garden, and also pay visit to the Shankaracharya Temple. And then we will drop you to the famous Dal Lake ghat for Sikara ride. Overnightstay at your Srinagar hotel.
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 3
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Excursion to Gulmarg(52 km / Approx 1hr. 30 Minute Hours Drive- One Way)
        After breakfast at your hotel you will be proceed for Apharwat Peak- the famous Gulmarg.{'\n'}You can
        go to ice point via the most famous Gondola or Pony** Tickets & pony charges will be on your
        own**. After your sightseeing we will return to Srinagar by Evening. Overnight stay at your Srinagar
        hotel.
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 4
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Excursion to Sonmarg(90 Kms / Approx 03 Hours Drive- One Way)
        After breakfast at your hotel you embark on a full day excursion to the picturesque ‘meadow of gold’
        Sonamarg.{'\n'}Sonamarg islaststop of Kashmir district.From here starts the territory of ladakh.
        Situated at an altitude of 2743m above sea level.
        The Sindh River makes it popular.
        You can opt for a pony ride to one of the Thajiwas glaciers. Return to the Hotel in Srinagar in the evening and overnightstay at Srinagar Houseboat.
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 5
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Srinagar to Pahalgam (93 Kms / Approx 02 Hours & 30 Minute Drive- One Way)
        After Breakfast you will be transferred to Pahalgham the ‘valley of shepherds’ which is situated at
        the confluence of the streams flowing from river Lidder and Sheeshnag Lake. En route visit the Awantipura ruins, an 1100 year old temple dedicated to Lord Vishnu. We will rest the night in Pahalgam.      {'\n'}
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 6
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Pahalgam Sightseeing. The morning u will proceed for Aru valley, and chandanwari by car (at your own cost). Aru is a village, 11 kms upstream the Lidder River. This village is the starting point for treks to the Kolahoi glacier. Hajan and Beetab valley on the way to chandanwari. Overnight stay at Hotel in Pahalgam.      {'\n'}
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 7
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Pahalgam to Jammu(240 Kms / Approx 06 Hours & 30 Minute Drive- One Way)
        After breakfast you will be transferred to Srinagar Airport for your onwards journey with Everlasting
        Memories.
      </Text>
      </View>
      
      
    </ScrollView>
  )
}