import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';


const tourbudgetdata = [
  {key:'1', value:'5000 - 10000'},
  {key:'2', value:'10000- 15000'},
  {key:'3', value:'15000 - 20000'},
  {key:'4', value:'Above 20000'},
]

const tourdaysdata = [
  {key:'5', value:'2 Days'},
  {key:'6', value:'3 Days'},
  {key:'7', value:'4 Days'},
  {key:'8', value:'5-10 Days'},
  {key:'9', value:'Above 10 Days'},

]
const downpaymentdata = [
    {key:'10', value:'30 % of tour budget'},
    {key:'11', value:'40 % of tour budget'},
    {key:'12', value:'50 % of tour budget'},
    {key:'13', value:'Above 50 % of tour budget'},
  ]
  
  const monthofemidata = [
    {key:'14', value:'4 months'},
    {key:'15', value:'6 months'},
  
  ]
const EMIForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [tourBudget, setTourBudget] = useState('');
  const [tourDays, setTourDays] = useState('');
  const [monthOfTour, setMonthOfTour] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthOfEmi, setMonthOfEmi] = useState('');
  const [otherMessage, setOtherMessage] = useState('');
  const [showModal, setShowModal] = useState(false);



  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      name,
      phoneNumber,
      email,
      address,
      destination,
      tourBudget,
      tourDays,
      monthOfTour,
      monthOfEmi,
      downPayment,
      otherMessage,
    };
    firestore()
  .collection('EmiForm')
  .add({
    name: name,
    phoneNumber : phoneNumber,
    email : email,
    address : address,
    destination : destination,
    tourBudget: tourBudget,
    tourDays : tourDays,
    monthOfTour : monthOfTour,
    monthOfEmi : monthOfEmi,
    downPayment : downPayment,
    otherMessage : otherMessage,
  })
  .then(() => {
    console.log('Form added!');
    setName('')
    setPhoneNumber('')
    setEmail('')
    setAddress('')
    setDestination('')
    setMonthOfTour('')
    setOtherMessage('')
    setShowModal(true)
  });
    console.log(formData);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
              <Text style={{fontSize:28 , color:"red" , fontWeight:"bold", fontFamily:"Poppins-Light"}}>Apply Now</Text>

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
      <Text style={{color:"black"}}>Destination:</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
      />
      <Text style={{color:"black"}}>Tour Budget:</Text>
       <SelectList 
       boxStyles={{borderRadius:0 , marginBottom: 10, marginTop: 10}}
       inputStyles={{color:"black"}}
       dropdownTextStyles={{color:"black"}}
        setSelected={(val:any) => setTourBudget(val)} 
        data={tourbudgetdata} 
        save="value"
    />
      <Text style={{color:"black"}}>Tour Days:</Text>
       <SelectList 
       boxStyles={{borderRadius:0 , marginBottom: 10, marginTop: 10}}
       inputStyles={{color:"black"}}
       dropdownTextStyles={{color:"black"}}
        setSelected={(val:any) => setTourDays(val)} 
        data={tourdaysdata} 
        save="value"
    />
      <Text style={{color:"black"}}>Month of Tour:</Text>
      <TextInput
        style={styles.input}
        value={monthOfTour}
        onChangeText={setMonthOfTour}
      />
      <Text style={{color:"black"}}>Down Payment</Text>
       <SelectList 
       boxStyles={{borderRadius:0 , marginBottom: 10, marginTop: 10}}
       inputStyles={{color:"black"}}
       dropdownTextStyles={{color:"black"}}
        setSelected={(val:any) => setDownPayment(val)} 
        data={downpaymentdata} 
        save="value"
    />
      <Text style={{color:"black"}}>Month Of EMI:</Text>
       <SelectList 
       boxStyles={{borderRadius:0 , marginBottom: 10, marginTop: 10}}
       inputStyles={{color:"black"}}
       dropdownTextStyles={{color:"black"}}
        setSelected={(val:any) => setMonthOfEmi(val)} 
        data={monthofemidata} 
        save="value"
    />
      <Text style={{color:"black"}}>Other Message:</Text>
      <TextInput
        style={styles.input}
        value={otherMessage}
        onChangeText={setOtherMessage}
        multiline
      />
      <Button title="Submit" color={'red'} onPress={handleSubmit} />
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

export default EMIForm;