import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LayoutDemo() {
  return (
    <View style={styles.container}>

      {/* Demo 1: Horizontal with Equal Space */}
      <Text style={styles.sectionTitle}>1. Three Boxes Horizontally</Text>
      <View style={styles.horizontalContainer}>
        <View style={[styles.box, { backgroundColor: '#e74c3c' }]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#3498db' }]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#2ecc71' }]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>

      {/* Demo 2: Vertical with Space Between */}
      <Text style={styles.sectionTitle}>2. Four Boxes Vertically</Text>
      <View style={styles.verticalContainer}>
        <View style={[styles.box, { backgroundColor: '#9b59b6' }]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#f39c12' }]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#1abc9c' }]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#e67e22' }]}>
          <Text style={styles.boxText}>Box 4</Text>
        </View>
      </View>

      {/* Demo 3: 2x2 Grid */}
      <Text style={styles.sectionTitle}>3. Simple 2x2 Grid</Text>

        <View style={styles.gridContainer}>
          <View style={[styles.gridBox, { backgroundColor: '#e74c3c' }]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <View style={[styles.gridBox, { backgroundColor: '#3498db' }]}>
            <Text style={styles.boxText}>2</Text>
          </View>

          <View style={[styles.gridBox, { backgroundColor: '#2ecc71' }]}>
            <Text style={styles.boxText}>3</Text>
          </View>
          <View style={[styles.gridBox, { backgroundColor: '#f39c12' }]}>
            <Text style={styles.boxText}>4</Text>
          </View>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#666',
  },

  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  verticalContainer: {
    height: 350,
    justifyContent: 'space-between',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  gridBox: {
    width: '48%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  // Common Box Styles
  box: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});