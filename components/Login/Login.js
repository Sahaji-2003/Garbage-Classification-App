import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [user_name, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Send POST request to server to authenticate user
      const response = await axios.post('http://192.168.1.2:5000/api/login', {
        user_name,
        user_password
      });

      // If authentication successful, navigate to home page
      if (response.data.success) {
        navigation.navigate('Home', { user: response.data });
      } else {
        // If authentication failed, display error message
        setError('Invalid username or password');
      }
    } catch (error) {
      // If an error occurs during login, display error message
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user_name}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={user_password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
