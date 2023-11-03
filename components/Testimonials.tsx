import React from 'react'
import { View, Text,Dimensions, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import img1 from '../assets/photo/1.png'
import img2 from '../assets/photo/2.png'
import img3 from '../assets/photo/3.png'
import img9 from '../assets/photo/9.png'
import img4 from '../assets/photo/4.png'


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Group Tour',
      background: img1,
      backgroundColor: "#EAFFD5",
      content : "এক কথায় অসাধারণ! খুব মজা করেছি। ধন্যবাদ আমাদের ছুটির দিন গুলো কে স্মরণীয় করার জন্য।",
      name:"Sanjana Kumari"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Temple Tour',
      background: img2,
      backgroundColor: "#D5D5FF",
      content:"অনেক আনন্দ করেছিলাম আপনাদের সাঠে সুন্দরবনে। আমার জীবনের শ্রেষ্ঠ মুহূর্ত গুলোর মধ্যে এটা একটা।",
      name:"Karan Burnwal"

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Medical Tour',
      background:img3,
      backgroundColor: "#FFFFD5",
      content:"আরো অনেক জায়গায় বেড়াতে গিয়েছি, তবে এত ভালো অনুভূতি খুব কম জায়গায় পাওয়া যায়। বহু নতুন বন্ধু বানিয়েছি এই ট্রিপে, বহু নতুন অভিজ্ঞতা নিয়ে এসেছি। অসংখ্য ধন্যবাদ জানাই ইজি ট্রিপের পুরো পক্ষ কে।",
      name:"Subir Sen"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'EMI on Holiday',
      background: img9,
      backgroundColor: "#D5EAFF",
      content:"আমার জীবনের শ্রেষ্ঠ ট্রিপ গুলো ইজি ট্রিপের সঙ্গেই ছিল। একাধিক বার আপনাদের সঙ্গে ভ্রমণে গেছি, আবার যদি সুযোগ পাই তবে আবার বেড়াতে যাবো আপনাদের সাথেই। আমার এতগুলো ট্রিপ কে এত বেশি সুন্দর করে তোলার জন্য ধন্যবাদ ইজি ট্রিপ কে।",
      name:"Arnab Chakraborty"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'EMI on Holiday',
      background: img4,
      backgroundColor: "#D5D5FF",
      content:"আমার প্রথম ট্রিপ ছিল শিমলা তে। সত্যি এ একটা অসাধারণ অভিজ্ঞতা ছিল। খাবার, থাকার ব্যবস্থা, সমস্ত সার্ভিস একদম উৎকৃষ্ট মানের ছিল।",
      name:"Souvik Bhowmik"
    },
  ];


export default function Testimonials() {
  return (
    <View style={{ width:"100%"}}>
      <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", margin:20 ,fontFamily:"Poppins-Light"}}>Testimonials</Text>

      <Carousel
      loop={true}
      layout='tinder'
      data={DATA}
      renderItem={({item}) => 
      {
        return(
          <View style={{height:450 , marginLeft:'auto' , marginRight:"auto" , marginTop:20 }}>
            <View style={{backgroundColor:item.backgroundColor, width:300 , height:400 , justifyContent:"space-evenly" , alignItems:"center"  }}>
              <ImageBackground source={item.background} style={{height:100 , width:100  }} imageStyle={{borderRadius:100}}/>
              <Text style={{fontSize:30 , color:"black", fontFamily:"Poppins-Light"}}>
                {item.name}
              </Text>
              <Text style={{fontSize:14 , margin:10 , color:"black", fontFamily:"Poppins-Light"}}>
                {item.content}
                </Text>
            
            </View>

             
          </View>
        )
      }    
    }
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width}
      
      />


            
    </View>
  )
}