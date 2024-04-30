import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [user_name, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  
  

  const handleSignUp = async () => {
    console.log('Sending data:', { firstName, lastName, email, phone, user_name, user_password });
    try {
      
      // Send POST request to server to save user details
      await axios.post('http://192.168.1.5:5000/api/data', {
        
        user_name: user_name,
        first_name: firstName,
        last_name: lastName,
        email_user: email,
        phone_no: phone,
        user_role: 'user',
        user_password: user_password,
      });
     
      navigation.navigate('EntryLoginPage');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={user_name}
        onChangeText={setUsername}
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        value={user_password}
        onChangeText={setPassword}
        secureTextEntry
      />
     
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EntryLoginPage')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    position: 'relative',
    paddingHorizontal: 50,
    width:'100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default SignUp;
