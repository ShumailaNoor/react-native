import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  // Effect 1: Runs once on mount
  useEffect(() => {
    console.log('Component mounted!');
    
    // Cleanup
    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  // Effect 2: Runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  useEffect(() => {
    console.log('Component rendered!');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect Demo</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Count: {count}</Text>
        <View style={styles.buttonRow}>
          <Button 
            title="Increment" 
            onPress={() => setCount(count + 1)}
          />
          <Button 
            title="Decrement" 
            onPress={() => setCount(count - 1)}
          />
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Open Console</Text>
        <Text style={styles.infoText}>
          Check your terminal/console to see useEffect logs!
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1976d2',
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginTop: 8,
  },
});