import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputDemo() {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type Something</Text>
      
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text here..."
        placeholderTextColor="#999"
      />
      
      <View style={styles.outputContainer}>
        <Text style={styles.label}>You typed:</Text>
        <Text style={styles.outputText}>
          {text || '(nothing yet)'}
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#2196f3',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  outputContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  outputText: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
  },
});