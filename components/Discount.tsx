import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Modal,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SelectList} from 'react-native-dropdown-select-list';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

const Discount = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      name,
      phoneNumber,
    };
    firestore()
      .collection('Discount')
      .add({
        name: name,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        console.log('Form added!');
        setName('');
        setPhoneNumber('');

        setShowModal(true);
      });
    console.log(formData);
  };

  const handleClose = ()=>{
    setShowModal(false)
  }
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 10000);    
  }, [])
  
  

  return (
    <SafeAreaView>
      <View >
        <Modal   visible={showModal} transparent={true}>
          <View style={{height:"100%" , width:"100%" , justifyContent:"center" , alignItems:"center" , backgroundColor:"rgba(1, 1, 1, 0.7)"}}>
          <View style={{ width:"95%"}}>
            <ImageBackground  source={{uri:'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={{ maxHeight:"100%" , width:"100%" ,borderRadius:10 }} resizeMode='cover'imageStyle={{borderRadius:10}} >
            <View style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <Icon name='close' size={50} onPress={handleClose} style={{ color:"white" }}/>
                <Text
                style={{
                    fontSize: 28,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins-Light',
                    textAlign:"center"
                }}>
                Get 10% Discount on your first Tour
                </Text>

                <Text style={{color: 'white', marginTop: 10 , marginLeft:10, fontWeight:"bold"}}>Name:</Text>
                <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                />
                <Text style={{color: 'white', marginLeft:10 , fontWeight:"bold"}}>Phone Number:</Text>
                <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                />
                <View style={{width:"90%" , justifyContent:"center" , alignItems:"center" , padding:20}}>
                <Button title="Submit" color={'red'} onPress={handleSubmit} />
                </View>
            </View>
            </ImageBackground>
          </View>
          </View>

          
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    margin: 20,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    width:'95%'
    , marginLeft:10,
    backgroundColor:"white"
  },
});

export default Discount;
