import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native'
import KashmirPlan from '../components/KashmirPlan'
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

const Kashmir = (props:any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
            <Header navigation={props.navigation} headerContent={"About"}/>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>About Kashmir Trip</Text>
              <Text style={{fontSize:16 , color:"#454545" , fontFamily:"Poppins-Light", textAlign:"justify", letterSpacing:1 , marginTop:20}}>
              Kashmir, a paradise nestled in the northern part of the India, enchants with its mesmerizing natural beauty. So if you want to witness the earthy paradise, you need to contact Easytrip. Get a glimpse of the long chinar trees with us. The Towering Himalayan peaks adorned with pristine snow, reflecting in tranquil lakes, create a breathtaking landscape. So don't wait for death to take you to heaven when we can show you it while you're alive in cheapest price!
              </Text>
              <Text style={{color:"#454545" , fontSize:16}}>
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Package cost:  {'  '}
                </Text>
                Rs.19500.00 per head {'\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Travel dates:  {'  '}
                </Text>
                18/11/23, 12/12/23, 14/1/24{'\n\n'}


                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Package cost:  {'  '}
                </Text>
                Rs.13500.00 per head {'\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Travel dates:  {'  '}
                </Text>
                10/3/24, 4/4/24{'\n\n'}

                
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Tour type: {'  '}
                </Text>
                group tour{'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Pickup and drop location:{'  '}
                </Text>
                Jammu {'\n\n'}
                <Text style={{fontWeight:"bold",color:"black" , fontSize:18}}>
                Hotel:   {'  '}
                </Text>
                basic 3 star {'\n\n'}
                
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Total days:{'  '}
                </Text>
                6N 7D ( 1N in Jammu, 3N in Srinagar, 2N in Pahalgam) {'\n\n'}
                <Text style={{fontWeight:"bold" , fontSize:18,color:"black"}}>
                Meal plan:{'  '}
                </Text>
                Breakfast and dinner
              </Text>
          
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Inclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
              1. Accommodation with breakfast and dinner {'\n\n'}
              2. All transfers {'\n\n'}
              3. All sightseeing and transfers by non AC tempo
              </Text>
            </View>
            <View style={{ margin:20}}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>
                Exclusions  {'\n'}
              </Text>
              <Text style={{color:"#454545" , fontSize:18}}>
                1. Airfare or Railfare {'\n\n'}
                2. Any gondola tickets {'\n\n'}
                3. Pony Ride tickets in Gulmarg, Sonmarg ,Pahalgam & Doodhpatri {'\n\n'}
                4. Sikara Ride Ticket {'\n\n'}
                5. Anything which is not mentioned in Inclusions. {'\n\n'}
                6. Personal Expenses {'\n\n'}
                7. Any sports/adventure activity tickets
              </Text>
            </View>
          <KashmirPlan/>
          <SliderTourForm/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Kashmir