import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

export default function InputDisplay() {
  const [name, setName] = useState("");
  
  const [displayName, setDisplayName] = useState("");

  const handlePress = () => {
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    setDisplayName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      
      <Button title="Show Name" onPress={handlePress} />
      
      {displayName ? (
        <Text style={styles.result}>Hello, {displayName}!</Text>
      ) : null}
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
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: "#2196f3",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  result: { 
    marginTop: 30, 
    fontSize: 22, 
    color: "#4caf50",
    fontWeight: 'bold',
    textAlign: 'center',
  },
});