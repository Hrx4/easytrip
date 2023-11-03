import React, { useEffect, useState } from 'react';
import {
    Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/MaterialIcons';
import About from '../components/About';
import Choose from '../components/Choose';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer1 from '../components/Footer1';
import SliderPart from '../components/SliderPart';
import auth from "@react-native-firebase/auth";
import Discount from '../components/Discount';



const windowheight = Dimensions.get('window').height 
const windowwidth = Dimensions.get('window').width 
const left = new Animated.Value(-windowwidth);



const handlePress = () => {
  Animated.timing(left, {
    toValue: 0 ,
    useNativeDriver: false,
  }).start();
};
const handleClose = () => {
  Animated.timing(left, {
    toValue: -windowwidth ,
    useNativeDriver: false,
  }).start();
};



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Group Tour',
    background: "https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Group"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Temple Tour',
    background: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Temple"

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medical Tour',
    background: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Medical"

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'EMI on Holiday',
    background: "https://images.pexels.com/photos/1352325/pexels-photo-1352325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route:"Emi"

  },
];

type ItemProps = {title: string , background: string , props:any , route:string , id:string};

const Item = ({title , background,props , route,id}: ItemProps) => (
    <ImageBackground  source={{uri:background}} style={{ flex:1, marginVertical: 8 ,marginHorizontal: 16 , height:"auto"  }} resizeMode='cover'imageStyle={{borderRadius:10}} key={id} >
      <TouchableOpacity style={{
        height:150,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}
      onPress={()=>{props.navigation.navigate(route)}}
      >
        
        <Text style={styles.title} >{title}</Text>
      </TouchableOpacity>
    </ImageBackground>

);



const Home = ( props:any   )=> {
  // const Drawer = createDrawerNavigator();


    const [loggedInUser, setLoggedInUser] = useState('null');

    const logout = () => {
      Alert.alert(
        "Logout",
        "Are you sure? You want to logout?",
        [
          {
            text: "Cancel",
            onPress: () => {
              return null;
            },
          },
          {
            text: "Confirm",
            onPress: () => {
              auth()
                .signOut()
                .then(() => {props.navigation.navigate("Login")
              handleClose}
                )
                .catch((error) => {
                  console.log(error);
                  if (error.code === "auth/no-current-user")
                    props.navigation.navigate("Auth");
                  else ToastAndroid.show(error, ToastAndroid.SHORT);
                });
            },
          },
        ],
        { cancelable: false }
      );
    };
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged((user) => {
        console.log("user", JSON.stringify(user));
        if(user)setLoggedInUser(user);
      });
  
      return subscriber;
    }, []);


    useEffect(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);
  
  

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
      <Animated.View style={{height: windowheight,
        backgroundColor: "white",
        left:left,
        zIndex:100,
        top:0,
        width:windowwidth
        }} >

        <Icon name='close' size={50} onPress={handleClose} style={{marginLeft:windowwidth/1.2 , color:"black"}}/>
        <View style={{height:windowheight/1.3 , justifyContent:"center" , gap:20}} >
        <View style={{width:"100%" }} >
            <Text style={{textAlign:"center" , fontSize:30,color:"blue" , fontFamily:"Poppins-Light", fontWeight:"bold" , }}>
              Welcome , {loggedInUser.displayName}
            </Text>
          </View>
          <Divider inset={true} insetType="middle" />
          <TouchableOpacity style={{width:"100%" }} onPress={(e)=> {props.navigation.navigate('Group') }}>
            <Text style={{textAlign:"center" , fontSize:25,color:"black" , fontFamily:"Poppins-Light"}}>
              Group Tour
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"100%" }} onPress={(e)=> {props.navigation.navigate('Temple') }}>
            <Text style={{textAlign:"center" , fontSize:25,color:"black" , fontFamily:"Poppins-Light"}}>
              Temple Tour
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"100%" }} onPress={(e)=> {props.navigation.navigate('Medical') }}>
            <Text style={{textAlign:"center" , fontSize:25,color:"black" , fontFamily:"Poppins-Light"}}>
              Medical Tour
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"100%" }} onPress={(e)=> {props.navigation.navigate('Emi') }}>
            <Text style={{textAlign:"center" , fontSize:25,color:"black" , fontFamily:"Poppins-Light"}}>
              Emi on Holiday
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:"100%", justifyContent:"center" , alignItems:"center" }} onPress={()=> logout()}>
            <Text style={{textAlign:"center" , fontSize:20,color:"white" , fontFamily:"Poppins-Light", fontWeight:"bold", backgroundColor:"red", padding:5, borderRadius:5}}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

    </Animated.View>
    </View>      
   
        <View style={{ height:"12%" , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
          <Image style={{height:110 , width:90 , borderRadius:100 , marginLeft:5}} source={require('../assets/logo1.png')}/>
          <Icon name='menu' size={50} style={{marginRight:5 , color:"black"}} onPress={handlePress} />
        </View>

      
        <ScrollView>
          {
            DATA.map((item) => (
              <Item title={item.title} background={item.background} key={item.id} props={props} route={item.route} id={item.id}/>
            ))
          }
          <Divider orientation="vertical" inset={true} insetType='middle'color='black' width={5} style={{ marginTop:10}}/>
          <About props = {props}/>
          <Divider orientation="vertical" inset={true} insetType='middle'/>
          <SliderPart/>
          <Divider orientation="vertical" inset={true} insetType='middle'/>
          <Choose/>
          <Divider orientation="vertical" inset={true} insetType='middle'/>
          <Testimonials/>
          <Divider orientation="vertical" inset={true} insetType='middle'/>
          <Contact/>
          {/* <Test/> */}
          <Footer1/>
          <Discount/>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  container1: {
    flex: 1,
    top:0,
    // alignItems: 'center',
    position:'absolute',

  },
  title: {
    color:"white",
    opacity:1,
    fontSize: 32
    , fontFamily:"Poppins-Light"

  },
});


export default Home;
