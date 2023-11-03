import { View, Text, SafeAreaView, ViewBase, TextInput, Image, Button, Touchable, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin'
import auth from "@react-native-firebase/auth";
import Icon from 'react-native-vector-icons/Entypo';


const LoginPage = ({navigation}:any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  // const loginFunc = (navigation:any)=>{
  //   if(email==='Username' && password==='Password')
  //   navigation.navigate('Home')
  // else
  // ToastAndroid.show('Invalid Credentials ;(', ToastAndroid.SHORT);

  // console.log('====================================');
  // console.log(navigation);
  // console.log('====================================');
  // }

  const handleSubmitPress = (navigation) => {
    if (!email || !password) {
      ToastAndroid.show('Invalid Credentials ;(', ToastAndroid.SHORT);
      return;
    }
   
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) navigation.replace("Home");
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email")
          ToastAndroid.show('Invalid Email' , ToastAndroid.SHORT);
        else if (error.code === "auth/user-not-found")
          ToastAndroid.show("No User Found" , ToastAndroid.SHORT);
        else {
          ToastAndroid.show(
            "Please check your email id or password" , ToastAndroid.SHORT
          );
        }
      });
  };

  const googleSignIn = async () => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '757352384919-cceqhk4mn3musp78use2uvonf7uocckg.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });
    
    try {
      console.log('====================================');
      console.log('theree');
      console.log('====================================');
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      
       await GoogleSignin.signIn();
      // navigation.navigate('Home')
      console.log('====================================');
      console.log('ki');
      console.log('====================================');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('====================================');
        console.log('error1');
        console.log('====================================');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('====================================');
        console.log('error2');
        console.log('====================================');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('====================================');
        console.log('error3');
        console.log('====================================');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    console.log('====================================');
    console.log('hi');
    console.log('====================================');
  };

  const resetPassword = ()=>{
    if(!email) {
      Alert.alert('Enter a valid Email')
      return
    }
    auth().sendPasswordResetEmail(email).then(()=>{
      Alert.alert('Reset password link sent to the email')
    }).catch(
      (error)=>{
        Alert.alert(error)
      }
    )
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      if(user)
      navigation.navigate('Home')
    });

    return subscriber;
  }, []);
  

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{margin:50, justifyContent: 'center',alignItems:"center"}}>
      <Image style={{height:150 , width:120 , borderRadius:100 }} source={require('../assets/logo1.png')}/>

      </View>
      <View style={{margin:20}}>
        <TextInput style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          color:"black",
          marginBottom: 12,
        }}
        value={email}
        placeholderTextColor={'grey'}
        onChangeText={setEmail}
        placeholder='Email'>

        </TextInput>
        <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
            <TextInput style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 8,
              color:"black",
              marginBottom: 12,
              width:'90%'
            }}
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor={'grey'}
            secureTextEntry={showPassword}>
            </TextInput>
            {
              (!showPassword)?
              <Icon onPress={()=>setShowPassword(!showPassword)} name='eye' color={'grey'} size={20}/>:
              <Icon  onPress={()=>setShowPassword(!showPassword)}  name='eye-with-line' color={'grey'} size={20}/>

            }
          </View>
        <Button title="Sign in" color={'blue'} onPress={()=>handleSubmitPress(navigation)}  />
        <TouchableOpacity onPress={()=>resetPassword()}>
        <Text style={{color:"grey" , marginTop:20  , textAlign:"center"}}>
          Forgot Password ?
        </Text>
        </TouchableOpacity>

      </View>
      <View style={{margin:20}}>
        <Button title='Donot Have An Account? Create One' color={'red'} onPress={()=>{navigation.navigate('Create')}}/>
        {/* <TouchableOpacity onPress={()=>{}}>
        <Text style={{color:"grey" , marginTop:20  , textAlign:"center"}} >
          Donot Have An Account? Create One
        </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  )
}

export default LoginPage