// NavigationStack.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Ecolense from './Ecolense'
import EntryLoginPage from './Login/EntryLoginPage'
import SignUp from './Login/SignUp'
import Login from './Login/Login'


const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EntryLoginPage" component={EntryLoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Ecolense" component={Ecolense} />

    </Stack.Navigator>
  );
};

export default NavigationStack;
