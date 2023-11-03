import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import SundarbanPlan from '../components/SundarbanPlan'
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

const Sundarban = (props:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
            <Header navigation={props.navigation} headerContent={"About"}/>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Sundarban Trip</Text>
              <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
              The Sundarbans, a UNESCO World Heritage Site, unveils nature's opulence in the deltaic region of Bangladesh and India. Spanning lush mangrove forests and winding waterways, it's a haven for biodiversity. Towering mangrove trees form a green canopy, their roots submerged in brackish waters, while unique wildlife like Bengal tigers, spotted deer, and crocodiles thrive in this mystical ecosystem. Come and enjoy this utterly inexplicable diverse beauty of West Bengal with us "EASYTRIP"! 
              </Text>
              <Text style={{color:"#454545" , fontSize:16}}>
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Travel Date : {'  '}
                </Text>
                23th Dec to 26th Dec {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Number of pax: {'  '}
                </Text>
                Group Tour {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Number of Room:{'  '}
                </Text>
                As per family{'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Pakage Rate: {'  '}
                </Text>
                6,500/- per head {'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Total day: {'  '}
                </Text>
                3D and 4N {'\n\n'}
              </Text>
          
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Inclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              1. Jungle trip  {'\n'}
              2. Tribal folk dance {'\n'}
              3. Government permission {'\n'}
              4. Official guide {'\n'}
              5. Baul song {'\n'}
              6. Experienced tour manager {'\n'}
              7. River travel wildlife {'\n'}
              8. Delicious food  {'\n'}
              </Text>
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
              Menu details   {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              1st Day Menu {'\n\n'}
              1. Well Come Drinks. {'\n'}
              2. Breakfast : Tea, Luchi, sobji,sweet. {'\n'}
              3. Lunch: Rice,vaja, dal,sabji, Fish( Golda, Datne Sea fish),salad, chatni, papad, Sweet {'\n'}
              4. Evening: Chicken Pakora, veg pakora, Tea {'\n'}
              5. Dinner: Fried rice, Chilli Chicken, salad {'\n\n'}
              2nd day Menu  {'\n\n'}
              1. Early Morning: Bed Tea, Biscuit {'\n'}
              2. Breakfast : Rasha Ballavai, Chana Masala, Sweet, Tea {'\n'}
              3. Lunch : Rice,vaja, veg dal, Mixed vej sabji, Fish(vetki curry, Doi Katla),salad, chatni, papad {'\n'}
              4. Evening: Freanch Fries or onion pakoda, Tea/coffee. {'\n'}
              5. Dinner: Rice, Roti, desi mutton kosha, salad. {'\n\n'}
              Day 3 Menu {'\n\n'}
              1. Early Morning: tea and biscuits {'\n'}
              2. Breakfast : Puri,sabji, sweet {'\n'}
              3. Lunch: Rice, Fish ,salad , hajmola {'\n'}
              </Text>
            </View>
          <SundarbanPlan/>
          <SliderTourForm/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sundarban