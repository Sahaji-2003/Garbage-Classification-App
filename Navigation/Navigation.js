import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryLoginPage from '../components/Login/EntryLoginPage';
import Login from '../components/Login/Login'; // Import your Login component here
import SignUp from '../components/Login/SignUp'; // Import your Signup component here
import Home from '../components/Home'
const Stack = createStackNavigator();

const Navigation = () => {
  return (
   <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EntryLoginPage" component={EntryLoginPage} />
     
    </Stack.Navigator>
  );
};

export default Navigation;
