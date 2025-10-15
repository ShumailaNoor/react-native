import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrement = () => {
    if (count > 0) {  
      setCount(prevCount => prevCount - 1);
    }
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      
      <View style={styles.CounterRow}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]}
          onPress={decrement}
        >
          <Text style={styles.buttonSign}>−</Text>
        </TouchableOpacity>

       <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]}
          onPress={increment}
        >
          <Text style={styles.buttonSign}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  countContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  countText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2196f3',
  },
  CounterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  incrementButton: {
    backgroundColor: '#4caf50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  buttonSign: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
  },
});