import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard({ name, bio, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image}
      />
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.bio} numberOfLines={2}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({  
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});