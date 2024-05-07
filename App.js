import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import SidebarIcon from './components/SidebarIcon';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import EntryLoginPage from './components/Login/EntryLoginPage';
import Navigation from './Navigation/Navigation';
import NavigationStack from './components/NavigationStack';



const Stack = createStackNavigator();

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
     <NavigationContainer>
     
            <Header />
            <SidebarIcon style={styles.container} onPress={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
           
            <NavigationStack />
           
         
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ecf0f1',
    padding: 40,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
