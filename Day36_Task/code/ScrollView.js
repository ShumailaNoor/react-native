import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function ScrollViewExample() {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>ScrollView Example</Text>
      
      {/* Generate 20 text items */}
      {[...Array(20)].map((_, index) => (
        <View key={index}>
          <Text style={styles.item}>Item {index + 1}</Text>
          
          {/* Add colored box every 5 items */}
          {(index + 1) % 5 === 0 && (
            <View style={[styles.colorBox, { 
              backgroundColor: `hsl(${index * 18}, 70%, 60%)` 
            }]}>
              <Text style={styles.boxText}>Colored Box after Item {index + 1}</Text>
            </View>
          )}
        </View>
      ))}
      
      {/* Horizontal scrolling section */}
      <Text style={styles.sectionTitle}>Horizontal Gallery</Text>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <View key={num} style={styles.horizontalItem}>
            <Image 
              source={{ uri: `https://picsum.photos/200/200?random=${num}` }}
              style={styles.image}
            />
            <Text style={styles.imageLabel}>Image {num}</Text>
          </View>
        ))}
      </ScrollView>
      
      <Text style={styles.footer}>End of Scroll</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    fontSize: 18,
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  colorBox: {
    padding: 30,
    marginBottom: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#333',
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  horizontalItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  imageLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
    fontStyle: 'italic',
  },
});