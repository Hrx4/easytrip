import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import SikkimPlan from '../components/SikkimPlan'
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

const Sikkim = (props:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
            <Header navigation={props.navigation} headerContent={"About"}/>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Sikkim Trip</Text>
              <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
              Enjoy the mystical beauty of North Sikkim with Easytrip at just Rs.10,800.00. Sikkim, a jewel in the northeastern part of India, boasts breathtaking landscapes with towering Himalayan peaks, lush valleys, and pristine lakes. Its beauty lies in its diverse flora and fauna, vibrant culture, and serene monasteries. It is a visual feast for nature enthusiasts. 
              </Text>
              <Text style={{color:"#454545" , fontSize:16}}>
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Cost : {'  '}
                </Text>
                Rs. 11800.00 only {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Date of travel: {'  '}
                </Text>
                24.12.23 {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Pick up and drop point:{'  '}
                </Text>
                NJP 
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
              3. Military passes  {'\n\n'}
              4. Extra expenses of tourists  {'\n\n'}
              5. Vehicle permission  {'\n\n'}
              6. Extra meal  {'\n\n'}
              7. Entry ticket
              </Text>
            </View>
          <SikkimPlan/>
          <SliderTourForm/>
          <Text style={{margin:20, color:"grey"}}>
          *NOTE: Nathula pass, zero point, kala patthar, katao are not included.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sikkim