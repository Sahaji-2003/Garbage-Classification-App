import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView, ScrollView} from 'react-native';
import Header from './Header';
import SidebarIcon from './SidebarIcon';
import Sidebar from './Sidebar';

const Home = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if user data exists in route params
    if (route.params && route.params.user) {
      // Extract user data from route params
      const { user_name, user_password } = route.params.user;
      // Call fetchUserInfo with user data
      fetchUserInfo(user_name, user_password);
    }
  }, [route.params]);

  const fetchUserInfo = async (user_name, user_password) => {
    try {
      // Make a POST request to login endpoint with user credentials
      const response = await fetch('http://192.168.1.2:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: user_name,
          user_password: user_password,
        }),
      });

      const data = await response.json();
      console.log('User Info:', data);

      // If login successful, set the user info in state
      if (data.success) {
        setUserInfo(data); // Assuming the server returns user information
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleTryNow = () => {
    navigation.navigate('Ecolense'); // Navigate to the EcoLens screen
  };
  const handleDetails = () => {
    navigation.navigate('PostList'); // Navigate to the EcoLens screen
  };
  const userPhoto = require('../assets/man-face.jpg');

    return (
      <ScrollView>
          
            
    <View style={styles.container}>

    <View style={styles.userContainer}>
        <Image source={userPhoto} style={styles.userPhoto} />
         <View style={styles.userInfo}>
            {userInfo && (
              <>
                <Text style={styles.userName}>{userInfo.user_name}</Text>
                <Text style={styles.userPhone}>{userInfo.phone_no}</Text>
                <Text style={styles.userEmail}>{userInfo.email_user}</Text>
              </>
            )}
          </View>
        
      </View>
        
       
      
      <View style={styles.infoContainer}>
      
      <Image source={require('../assets/waste5.jpg')} style={styles.image} />
    
      </View>
       <TouchableOpacity style={styles.uploadButton} onPress={handleTryNow}>
        <Text style={styles.buttonText}>Try It Now ?</Text>
      </TouchableOpacity>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Garbage Segregation Information</Text>
        <Text style={styles.infoText}>
          Garbage segregation is the process of dividing waste into different
          categories such as organic, recyclable, and non-recyclable. Proper
          segregation helps in recycling and reducing environmental pollution.
        </Text>

               <TouchableOpacity style={styles.uploadButton} onPress={handleDetails}>
        <Text style={styles.buttonText}>Garbage Types?</Text>
      </TouchableOpacity>

        <Image source={require('../assets/waste7.jpeg')} style={styles.image} />
        <Text style={styles.infoText}>
          Organic waste includes food scraps and plant materials. Recyclable
          waste consists of items like paper, plastic, glass, and metal.
          Non-recyclable waste includes items that cannot be recycled, such as
          styrofoam and certain types of plastic.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 280,
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
    marginTop: 20
  },
  uploadButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: 300,
    // height: 200,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',

  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify', 
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginRight: 20,
    marginLeft: 20,
  },
  userInfo: {
    flexDirection: 'column',
    width: 150,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'left',
  },
  userPhone: {
    fontSize: 14,
    color: 'gray',
    alignItems: 'left',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
    alignItems: 'left',
  },
});
export default Home;