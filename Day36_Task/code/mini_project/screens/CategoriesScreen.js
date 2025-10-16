import React from 'react';
import { SectionList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CATEGORIES_DATA = [
  {
    title: "Fruits",
    data: [
      { id: '1', name: 'Apples', price: '$3.99/lb' },
      { id: '2', name: 'Bananas', price: '$2.49/lb' },
      { id: '3', name: 'Oranges', price: '$4.99/lb' },
      { id: '4', name: 'Grapes', price: '$5.99/lb' },
    ]
  },
  {
    title: "Vegetables",
    data: [
      { id: '5', name: 'Carrots', price: '$1.99/lb' },
      { id: '6', name: 'Tomatoes', price: '$3.49/lb' },
      { id: '7', name: 'Spinach', price: '$2.99/bunch' },
      { id: '8', name: 'Broccoli', price: '$3.99/lb' },
    ]
  },
  {
    title: "Dairy",
    data: [
      { id: '9', name: 'Whole Milk', price: '$4.99/gal' },
      { id: '10', name: 'Cheddar Cheese', price: '$6.99/lb' },
      { id: '11', name: 'Greek Yogurt', price: '$3.99/pack' },
      { id: '12', name: 'Butter', price: '$5.49/lb' },
    ]
  },
  {
    title: "Bakery",
    data: [
      { id: '13', name: 'White Bread', price: '$2.99/loaf' },
      { id: '14', name: 'Croissants', price: '$5.99/6pk' },
      { id: '15', name: 'Bagels', price: '$4.49/6pk' },
    ]
  },
  {
    title: "Beverages",
    data: [
      { id: '16', name: 'Orange Juice', price: '$4.49/qt' },
      { id: '17', name: 'Apple Juice', price: '$3.99/qt' },
      { id: '18', name: 'Sparkling Water', price: '$5.99/12pk' },
    ]
  },
];

export default function CategoriesScreen() {
  const handleCategoryPress = (title) => {
    console.log('Category pressed:', title);
  };

  const handleItemPress = (item) => {
    console.log('Item pressed:', item.name);
  };

  // Section Header
const renderSectionHeader = ({ section: { title } }) => (
    <TouchableOpacity 
        style={styles.sectionHeader}
        onPress={() => handleCategoryPress(title)}
    >
        <Text style={styles.sectionTitle}>{title}</Text>
        <Ionicons name="chevron-forward" size={28} color="white" style={styles.sectionArrow} />
    </TouchableOpacity>
);

  // Item Renderer
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => handleItemPress(item)}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  // Footer
  const ListFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>That's all for today!</Text>
      <Text style={styles.footerSubtext}>
        {CATEGORIES_DATA.reduce((sum, section) => sum + section.data.length, 0)} items in total
      </Text>
    </View>
  );

  return (
    <SectionList
      sections={CATEGORIES_DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ListFooterComponent={ListFooter}
      contentContainerStyle={styles.container}
      stickySectionHeadersEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 100,
  },
  sectionHeader: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionArrow: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  footer: {
    marginTop: 30,
    padding: 25,
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#666',
  },
});