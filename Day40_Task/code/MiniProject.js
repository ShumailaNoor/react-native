import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function FirebaseTestApp() {
  const [message, setMessage] = useState('');

  const saveMessage = async () => {
    if (!message.trim()) return Alert.alert('Please enter a message');
    try {
      await addDoc(collection(db, 'messages'), { text: message });
      Alert.alert('Data Added!');
      setMessage('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Test App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Message"
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button} onPress={saveMessage}>
        <Text style={styles.buttonText}>Save to Firebase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20 ,
    fontWeight: 'bold'
  },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  button: { 
    backgroundColor: '#4CAF50', 
    padding: 12, 
    borderRadius: 8 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
});
