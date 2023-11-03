import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import SilkPlan from '../components/SilkPlan'
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

const SilkRoute = (props:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
            <Header navigation={props.navigation} headerContent={"About"}/>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Silk Route Trip</Text>
              <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
              The Silk Route tour offers a captivating journey through ancient trade routes, revealing a tapestry of diverse cultures, stunning landscapes, and historic landmarks. This expedition showcases the timeless allure of ancient civilizations, architectural marvels, and the rich heritage of India, making it a mesmerizing experience for travelers. So make this historical trip memorable. 
              </Text>
              <Text style={{color:"#454545" , fontSize:16}}>
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Pacakage cost :  {'  '}
                </Text>
                Rs. 8,200 per head{'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Travel dates : {'  '}
                </Text>
                4rd December 2023 {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Pick up and drop point:{'  '}
                </Text>
                NJP {'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Tour type:{'  '}
                </Text>
                Group tour{'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Total days :{'  '}
                </Text>
                4 Nights, 5 days. 1N at Icchegaon, 1N at Padamchen, 1N at Zuluk, 1N at Rishikhola 
              </Text>
          
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Inclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              1. Accommodation with breakfast, lunch, dinner(except 1st day breakfast and last day dinner) 
             {'\n\n'} 2. Private vehicles for all tours and transfers
             {'\n\n'} 3. All sightseeing (except tickets if required)
              </Text>
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Exclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              1. AIR/Rail tickets   {'\n\n'}
              2. Parking cost  {'\n\n'}
              3. Bonfire  {'\n\n'}
              4. Extra expenses of tourists  {'\n\n'}
              5. Extra meal  {'\n\n'}
              </Text>
            </View>
          <SilkPlan/>
          <SliderTourForm/>

          <Text style={{margin:20, color:"grey"}}>
            *Any cost arising due to natural calamities like, landslides, cyclone, bad weather, road blockage,political disturbances, etc has to be borne by the client, which are directly payable onthe spot.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SilkRoute