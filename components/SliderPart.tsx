import { View, Text,Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useRef, useState,useCallback } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useNavigation } from "@react-navigation/native";
import silk from './silk.jpg'



const DATA= [
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'EMI on Holiday',
        background: "https://images.pexels.com/photos/6487372/pexels-photo-6487372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price:"13,500 \n₹ 19,500",
        date:"10/3/24, 4/4/24 \n 12/12/23, 14/1/24",
        name:"Kashmir"

      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        title: 'Temple Tour',
        background: silk,
        price:"8,200",
        date:"24rd December 2023",
        name:"Silk Route"
  
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Medical Tour',
        background: "https://images.pexels.com/photos/2642315/pexels-photo-2642315.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"6,500",
        date:"23th Dec ",
        name:"Sundarban"
      },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Group Tour',
      background: "https://images.unsplash.com/photo-1562413181-9013f9846bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80",
      price:"11,800",
      date:"24.12.23",
      name:"Sikkim"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Temple Tour',
      background: "https://images.pexels.com/photos/7323438/pexels-photo-7323438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price:"30,500",
      date:"21 January, 2024",
      name:"Rajasthan"
    },
    
    
  ];
  interface data  {
    id: string,
    title: string,
    background: any,
    price: string,
    date: string,
    name: string
  }
  

const SliderPart = (navigate :any) => {
    const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const navigation = useNavigation();


  const renderItem = useCallback(
    ({item}) => 
      
          <TouchableOpacity onPress={(e)=> {navigation.navigate(item.name)}} style={{height:450 , marginLeft:'auto' , marginRight:"auto" , marginTop:20 }}>
            <View style={{  backgroundColor:"white",width:Dimensions.get('screen').width/1.2 , height:400  , alignItems:"center" , borderRadius:5 }}>
              <ImageBackground source={(item.background===silk)?silk:{uri:item.background}} style={{height:250, width:'100%'  }} imageStyle={{borderRadius:5}} />
              <Text style={{fontSize:30 , color:"black", fontFamily:"Poppins-Light"}}>
                {item.name}
              </Text>
              <View style={{width:"100%" , flexDirection:"row" , justifyContent:"space-evenly"}}>
                <Text style={{fontSize:14 , margin:10 , color:"black", fontFamily:"Poppins-Light"}}>
                ₹ {item.price}
                </Text>
                <Text style={{fontSize:14 , margin:10 , color:"black", fontFamily:"Poppins-Light"}}>
                {item.date}
                </Text>
              </View>
            
            </View>

             
          </TouchableOpacity>
        ,
      []   
  )

  return (
    <View style={{ width:"100%"}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", margin:20 ,fontFamily:"Poppins-Light"}}>Live Tours</Text>

      <Carousel
      ref={isCarousel}
      loop
      layout='default'
      data={DATA}
      autoplay
      autoplayInterval={5000}
      initialNumToRender={7}
      onEndReachedThreshold={0.1}
      onSnapToItem={index => setIndex(index)}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width}
      
      />
       <Pagination
        dotsLength={DATA.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'grey',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />


            
    </View>
  )
}

export default SliderPart