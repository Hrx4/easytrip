import { View, Text} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'

export default function SundarbanPlan() {

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
      <View style={{backgroundColor:"red" , height:"92.7%", width:1,position:"absolute",marginLeft:18,bottom:0}}/>

      <Text style={{fontSize:16 ,  color:"#454545" , letterSpacing:1 ,fontFamily:"Poppins-Light" , textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Departure from Durgapur to
Sundarban at 6 pm. At 6 pm we will Departure from Durgapur for sundarban. On the way we will eat dinner at saktigarh.      
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
         Day 2
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Arrival at sundarban.
        In the early morning we will take rest at caning then after Reaching hotel, which is located just opposite the Sundarban Tiger reserve surrounded by villege, forests, breeze of the river the place where you can enjoy a Peaceful weekend. In the evening we will have a short introduction via boat to Sundarban Bird jungle. After the " sunset" we will be back to hotel at 6 pm. We will enjoy Local flok dance followed by complimentary snacks. Nightstay at hotel.      
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 3
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Sundarban Local Sightseeing. The morning we will start sundarban delta safari through a boat. We will explore Jungle safari guided by our Govt tourist guide at sajnekhali Tiger Reserve.
      We will start our thrilling boat safari through various rivers, islands & small creeks covering Pirkhali, Banbibi Vrani, Sundarkhali, Khonakhali, and many more places. We will also see the exotic animals. Visit So-Banki Tiger Reserve Area & watch Tower. the 896 meter canopy walk at D-Banki gives you an opportunity to view wildlife from a neeted enclosure. A visit to panchamukhani (5 River junction). After the thirilling sundarban national park safari we will reach at Pakhiraloy. And we will have our dinner at hotel.       
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 4
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      last day at Sundarban. In the morning having breakfast we go to the local village walk for a couple of hours, back to hotel then go to visit Hamilton Bungalow & Rabindranath Tagore Bungalow. After lunch we will transfer by boat to reach to the bus & head back to Durgapur. Dinner will be provided on the way.      
      </Text>
      
      </View>
      
      
    </ScrollView>
  )
}