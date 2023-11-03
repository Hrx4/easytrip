import { View, Text} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'

export default function RajasthanPlan() {

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
      Jaipur to Pushkar - Transfer and Sightseeing. Drive to Pushkar. On arrival check in at hotel . Afternoon visit old temples and ghats of Pushkar {'\n'}
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
         Day 2
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Pushkar and Ajmer to Jaisalmer - Transfer. Today drive to Jaisalmer . On arrival check in at hotel. {'\n'}
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 3
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Jaisalmer to Sam Sand Dunes - Sightseeing. Approx Distance: 100 Km
        Have your breakfast in the hotel and afterward visit to the splendid Jaisalmer Fort also known as the Sonar Kila. The fort placed 
        approximately 30 meters above the city and serves as a residence to a whole living regio
        also famous for its old and traditional havelis and during your sightseeing tour you also include the visit to Patwonki Haveli, Salimjiki Haveli and GadiSagar Lake. Evening drive to sand dunes to enjoy sunset & camel ride along with the stay at camps. {'\n'}
      </Text>

      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 4
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
        Jaisalmer to Jodhpur - Transfer and sightseeing. Drive to Jodhpur. On arrival check in at hotel . Sightseeing of Jodhpur. Jodhpur is the second largest city in Rajasthan. We will see MehrangarhFort(majestic fort). Mehrangarh Fort was built on a steep hill and is among the best in India with exquisitely latticed 
        windows in residential apartments within. We also visit the JaswantThada, a royal cenotaph built in white marble.{'\n'}
        </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 5
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Jodhpur to Udaipur - Transfer via Ranakpur. Drive to Udaipur via RanakpurjainTemple . On arrival check in at hotel. {'\n'}
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 6
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Udaipur - City Sightseeing. We start our sightseeing with the visit of Sahelion-Ki-Bari. This Garden of the Maids of Honour is well laid out with extensive lawns and shady walks. After the visit of Garden of Maids we visit a Museum of folk art. After a break we proceed to city palace, the biggest palace in India. Today we have an opportunity to visit a traditional painting school and see the famous miniature paintings done.In the evening we have a Boatride on the lake Pichola.
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 7
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Udaipur to Jaipur - Transfer. Approx Distance: 450 Km
      Drive to Jaipur. On arrival , check in at hotel. {'\n'}
      </Text>
      <View style={{height:40,width:65,backgroundColor:'pink', justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20, fontWeight:"bold" , color:"black" , fontFamily:"Poppins-Light" }}>
        Day 8
      </Text>
      </View>
      <Text style={{fontSize:16 , color:"#454545" , letterSpacing:1 , fontFamily:"Poppins-Light", textAlign:"justify" , marginTop:10, marginLeft:windowwidth/7}}>
      Jaipur - Full Day sightseeing. Today after breakfast explore the Pink City with an excursion to Amber Fort, situated just outside the city, enjoy the experience 
      of ride on elephant back to and from the top of the hill on which the fort is situated. Afternoon sightseeing tour of City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Not far away is the Central Museum. JantarMantar is the largest of the five observatories built by Sawai Jai Singh.Later afternoon is kept free to visit the famous Markets of Textiles, Gems, Carpets, and handi
      </Text>
      </View>
      
      
    </ScrollView>
  )
}