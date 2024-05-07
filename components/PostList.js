// components/PostList.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/sahaji-2003/apiapp/garbage')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.heading}>Garbage Types</Text>
        {posts.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.type}>{item.type}</Text>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.divider} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Recycling Info:</Text>
              <Text style={styles.infoText}>{item.recycling_info}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Reusing Info:</Text>
              <Text style={styles.infoText}>{item.reusing_info}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Harmful Effects:</Text>
              <Text style={styles.infoText}>{item.harmful_effects}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Examples:</Text>
              <Text style={styles.infoText}>{item.examples.join(', ')}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    padding: 24,
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'darkgreen',
    textTransform: 'uppercase', // Convert text to uppercase
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 24,
    padding: 16,
    borderRadius: 10,
    elevation: 5,
  },
  type: {
    fontSize: 20, // Increase font size
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'darkblue', // Change color
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%', // Make image full width
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  description: {
    marginBottom: 16,
    textAlign: 'justify',
    lineHeight: 20, // Increase line height
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 8,
    color: 'darkgray', // Change color
  },
  infoText: {
    flex: 1,
    textAlign: 'justify',
    color: 'black', // Change color
  },
});

export default PostList;
