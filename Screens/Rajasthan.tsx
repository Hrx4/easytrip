import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import RajasthanPlan from '../components/RajasthanPlan'
import SliderTourForm from '../components/SliderTourForm'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
}
);

const Rajasthan = (props:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
            <Header navigation={props.navigation} headerContent={"About"}/>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Rajasthan Trip</Text>
              <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
              Rajasthan, a land of contrasting landscapes, mesmerizes with its diverse natural beauty. Desert like the Thar spread out all over, the Aravalli Range offers a stunning backdrop, adorned with rugged hills and lush greenery. Don't delay in visiting this warm golden beauty, with mone other than Easytrip. A unique charm, harmonizing the arid beauty of the desert with the vibrant colors of its traditions. We will make your golden memories beautiful at cheapest cost. Hurry up!
              </Text>
              <Text style={{color:"#454545" , fontSize:16}}>
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Date of Travel :  {'  '}
                </Text>
                21 January, 2024 {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Number of Pax : {'  '}
                </Text>
                15 Adults{'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Number of room :{'  '}
                </Text>
                07doule + 01 extra mattress {'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Hotel Category :   {'  '}
                </Text>
                basic 3 star {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Meal :  {'  '}
                </Text>
                MAPI{'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Vehicle :{'  '}
                </Text>
                1 (Ac 18 Seater Coach) {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Destination :{'  '}
                </Text>
                Rajashtan(08N / 09D) {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Pick up & drop :{'  '}
                </Text>
                Jaipur {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Package Cost :{'  '}
                </Text>
                INR 30,500/- Per adults on double sharing basis {'\n\n'}

              </Text>
          
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Inclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              Accommodation {'\n'}
              • Meal Plan as specified in Hotels Column{'\n'}
              • Surface Transportation by air-conditioned Vehicle with {'\n'}
              experienced chauffeur as per the itinerary{'\n'}
              • Sightseeing as per the itinerary ( However you have the flexibility 
              to explore more ){'\n'}
              • All interstate taxes, permits, parking, road tax, toll taxes and fuel 
              charges etc are included{'\n'}
              • All government applicable taxes and service charges
              </Text>
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Exclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              • Monument Entrance Fees {'\n'}
              • Air/Train Fares {'\n'}
              • English speaking guide during sightseeing {'\n'}
              • Personal assistance by our representative & Offices during arrival 
              and departure {'\n'}
              • Anything which is not mentioned in the inclusions {'\n'}
              </Text>
            </View>
          <RajasthanPlan/>
          <SliderTourForm/>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Rajasthan