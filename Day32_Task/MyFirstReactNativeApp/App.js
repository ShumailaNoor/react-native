import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    backgroundColor: '#7a2466ff', 
  },
  text: {
    fontSize: 28,               
    fontWeight: 'bold',         
    color: '#000',          
    textAlign: 'center',        
  },
});