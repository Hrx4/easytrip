import { View, Text, SafeAreaView, ViewBase, TextInput, Image, Button, Touchable, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import Icon from 'react-native-vector-icons/Entypo';



const CreateLogin = ({navigation}:any) => {
    const [email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const [phone, setPhone] = useState('')

    // const loginFunc = (navigation:any)=>{
    //   if(email==='email' && password==='Password')
    //   navigation.navigate('Home')
    // else
    // ToastAndroid.show('Invalid Credentials ;(', ToastAndroid.SHORT);
  
    // console.log('====================================');
    // console.log(navigation);
    // console.log('====================================');
  
    // }
    const validateEmail = (email:any) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const handleSubmit = (navigation) => {
      // validateEmail()
      if(!Name && !phone && !password && !confirmpassword) ToastAndroid.show('Please Fill All Fields', ToastAndroid.SHORT);
      else if(!validateEmail(email))  ToastAndroid.show('Validate Email', ToastAndroid.SHORT);
      else if(password!==confirmpassword) ToastAndroid.show('Check Your Password', ToastAndroid.SHORT);
      else
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        console.log(
          "Registration Successful. Please Login to proceed"
        );
        ToastAndroid.show('New user Created :)', ToastAndroid.SHORT);
        console.log(user)
        if (user) {
          await auth().currentUser?.updateProfile({
              displayName: Name,
              photoURL:phone
            })            
            .then(() =>navigation.navigate('Login'))
            .catch((error) => {
              console.error(error);
            });
            
        }
        console.log(user)

        
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          console.log(
            "That email address is already in use!"
          );
        } else {
          ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
        }
      });
    };

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

   
  
    return (
      <SafeAreaView style={{flex:1}} >
        <ScrollView>
        <View style={{margin:50, justifyContent: 'center',alignItems:"center"}}>
        <Image style={{height:120 , width:120 , borderRadius:100 }} source={require('../assets/logo1.png')}/>
        <Text style={{color:"black" , fontSize:35 , fontWeight:"bold"}}>
            Create Account
        </Text>
        </View>
        <View style={{margin:20}}>
        <TextInput style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            marginBottom: 12,
            
            color:"black",
          }}
          value={Name}
          onChangeText={setName}
          
          placeholderTextColor={'grey'}
          placeholder='Name'
          >
  
          </TextInput>
          <TextInput style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            color:"black",
            marginBottom: 12,
          }}
          value={email}
          onChangeText={setEmail}
          
          
          placeholderTextColor={'grey'}
          keyboardType='email-address'
          placeholder='Email'>
  
          </TextInput>
          <TextInput style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            color:"black",
            marginBottom: 12,
          }}
          value={phone}
          onChangeText={setPhone}
          
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          placeholder='phone number'>
  
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
            
            placeholderTextColor={'grey'}
            placeholder='Password'
            secureTextEntry={showPassword}>
            </TextInput>
            {
              (!showPassword)?
              <Icon onPress={()=>setShowPassword(!showPassword)} name='eye' color={'grey'} size={20}/>:
              <Icon  onPress={()=>setShowPassword(!showPassword)}  name='eye-with-line' color={'grey'} size={20}/>

            }
          </View>
          <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
            <TextInput style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 8,
                        color:"black",
                        marginBottom: 12,
                        width:'90%'
                      }}
                      value={confirmpassword}
                      
                      placeholderTextColor={'grey'}
                      onChangeText={setConfirmPassword}
                      placeholder='Confirm Password'
                      secureTextEntry={showConfirmPassword}>
              
            </TextInput>
            {
              (!showConfirmPassword)?
              <Icon onPress={()=>setShowConfirmPassword(!showConfirmPassword)} name='eye' color={'grey'} size={20}/>:
              <Icon  onPress={()=>setShowConfirmPassword(!showConfirmPassword)}  name='eye-with-line' color={'grey'} size={20}/>

            }
          </View>
          <Button title="Sign Up" color={'blue'} onPress={()=>handleSubmit(navigation)}  />
          
  
        </View>
        </ScrollView>
        
      </SafeAreaView>
    )
}

export default CreateLogin