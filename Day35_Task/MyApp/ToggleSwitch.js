import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ToggleSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={[
      styles.container,
      { backgroundColor: isEnabled ? '#4caf50' : '#f44336' }
    ]}>
      <View style={styles.card}>
        <Text style={styles.title}>Toggle Switch Demo</Text>
        
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            {isEnabled ? 'ON' : 'OFF'}
          </Text>
        </View>
        
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#2196f3' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    transition: 'background-color 0.3s',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    minWidth: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    marginVertical: 20,
  },
});