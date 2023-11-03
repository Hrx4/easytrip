import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

const tours = [
  {key:'1', value:'Kashmir'},
  {key:'2', value:'Rajasthan'},
  {key:'3', value:'Sundarban'},
  {key:'4', value:'Silk Route'},
  {key:'5', value:'Sikkim'},

]


const SliderTourForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectTour, setSelectTour] = useState('');
  const [showModal, setShowModal] = useState(false);


  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      name,
      phoneNumber,
      email,
      address,
      selectTour
    };

    firestore()
  .collection('SliderForm')
  .add({
    name: name,
    phoneNumber : phoneNumber,
    email : email,
    address : address,
    selectTour : selectTour
  })
  .then(() => {
    console.log('Form added!');
    setName('')
    setPhoneNumber('')
    setEmail('')
    setAddress('')
    setShowModal(true)
  });

    console.log(formData);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Tour Form</Text>

      <Text style={{color:"black", marginTop:10}}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={{color:"black"}}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      
      <Text style={{color:"black"}}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={{color:"black"}}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      
      <Text style={{color:"black"}}>Tour:</Text>
       <SelectList 
       boxStyles={{borderRadius:0 , marginBottom: 10, marginTop: 10}}
       inputStyles={{color:"black"}}
       dropdownTextStyles={{color:"black"}}
        setSelected={(val:any) => setSelectTour(val)} 
        data={tours} 
        save="value"
    />
      
    <View style={{marginTop:10}}>
    <Button  title="Submit" color={'red'}  onPress={handleSubmit} />
    </View>
    <View>
        <Modal visible={showModal} transparent={true} >
          <View
            style={{height: '100%', width: '100%',justifyContent:"center", backgroundColor: 'rgba(4, 8, 9, 0.7)', position:"absolute",alignItems:"center" ,}}>
            <View style={{backgroundColor:"#89CFF0" , width:"50%", height:"20%" , borderRadius:5 , justifyContent:"space-evenly" , alignItems:"center"}}>
            <Text style={{color: 'black', fontWeight:"bold"}}>Form Submitted :)</Text>
            <Button  title="Ok" color={'red'} onPress={()=>{setShowModal(false)}} />
            </View>

          </View>
        </Modal>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    margin:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
  },
});

export default SliderTourForm;