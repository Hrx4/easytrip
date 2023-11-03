import { View, Text,Dimensions,SafeAreaView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


const Header = ({navigation , headerContent} :any) => {
    const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView>
        <View style={{flexDirection:"row" , width:"100%" , height:70 , alignItems:"center"}} >
      <Icon name='arrowleft' size={34} style={{margin:10 , color:"red"}} onPress={()=>{navigation.goBack()}} />
      <Image style={{height:60 , width:90 , borderRadius:100 , marginLeft:windowWidth/1.7}} source={require('../assets/logo1.png')}/>

    </View>
    </SafeAreaView>
  )
}

export default Header