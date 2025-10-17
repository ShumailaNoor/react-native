import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

export default function AgeInput() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("#333");

  const handleCheck = () => {
    if (age.trim() === "") {
      setMessage("Please enter your age!");
      setMessageColor("#f44336");
      return;
    }
    
    const numericAge = Number(age);
    
    if (isNaN(numericAge) || numericAge <= 0) {
      setMessage("Please enter a valid number!");
      setMessageColor("#f44336");
      return;
    }
    
    if (numericAge < 13) {
      setMessage("You are a child.");
      setMessageColor("#f7bb60ff");
    } else if (numericAge < 18) {
      setMessage("You are a teenager.");
      setMessageColor("#fe910bff");
    } else if (numericAge < 60) {
      setMessage("You are an adult!");
      setMessageColor("#4caf50");
    } else {
      setMessage("You are a senior!");
      setMessageColor("#2196f3");
    }
  };

  const handleClear = () => {
    setAge("");
    setMessage("");
  };

  return (
    <View style={styles.container}>
        {message ? (
        <Text style={[styles.result, { color: messageColor }]}>
          {message}
        </Text>
      ) : null}

      <Text style={styles.title}>Age Checker</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric" 
        value={age}
        onChangeText={setAge}
      />
        <Button title="Check Age" onPress={handleCheck} color="#2196f3" />
        <View style= {{height: 15}}></View>
        <Button title="Clear" onPress={handleClear} color="#757575" />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 50,
    color: '#333',
  },
  input: { 
    borderWidth: 2, 
    borderColor: '#2196f3',
    padding: 15, 
    marginBottom: 20, 
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    marginBottom: 10
  },
  result: { 
    marginTop: 20, 
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#d8dadcff',
    padding: 10,
    borderRadius: 10,
  },
});