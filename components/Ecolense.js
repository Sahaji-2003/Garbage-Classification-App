import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Ecolens = () => {
  const handleScan = () => {
    // Implement image scanning functionality
  };
  const ecoIcon = require('../assets/ecoicon.jpg');

  return (
    <View style={styles.container}>
    <View style={styles.userContainer}>
     <View style={styles.ecoInfo}>
      <Text style={styles.title}>EcoLens</Text>
      </View>
      <Image source={ecoIcon} style={styles.ecoIcon} />
      
      </View>
      <View style={styles.imageContainer}>
        {/* Image scanning window */}
        <Image source={require('../assets/scan.png')} style={styles.scanWindow}  />
      </View>
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
      <View style={styles.classificationContainer}>
        <Text style={styles.classificationTitle}>Classification Category:</Text>
        {/* Display classification category here */}
        <Text style={styles.classificationText}>Unknown</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: 350,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1, // Square aspect ratio
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    width: 300, // Ensure image doesn't exceed container bounds
  },
  scanWindow: {
    flex: 1,
    justifyContent: 'right', 
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'grey',
    
  },
  scanButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  classificationContainer: {
    alignItems: 'center',
  },
  classificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classificationText: {
    fontSize: 16,
  },
   userContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between', // Add space between items
  alignItems: 'center',
  marginBottom: 20,
  width: 200,
},
  ecoIcon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 5,
  },
  ecoInfo: {
    flexDirection: 'column',
    width: 150,
  },
});

export default Ecolens;