import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Login from './Login'; // Import Login component
import Signup from './SignUp'; // Import Signup component
import { SafeAreaView, ScrollView} from 'react-native';

export default function EntryLoginPage({ navigation }) {
  

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
   navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
     <Text style={styles.heading}> Garbage Classification  </Text>
      <Image source={require('../../assets/green-apple.jpg')} style={styles.logo} />
     
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#007bff' }]} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

     
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 0,
    marginTop: 20,
    marginBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745', // Green color for Login button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    width:200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
