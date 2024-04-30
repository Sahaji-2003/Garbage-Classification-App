// Header.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Ionicons for the user icon

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>G Service</Text>
      <View style={styles.userProfile}>
        <Ionicons name="person-circle-outline" size={24} color="white" />
        <Text style={styles.profileText}>User Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    marginTop:40,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Header;
