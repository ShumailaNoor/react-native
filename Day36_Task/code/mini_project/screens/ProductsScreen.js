import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';


const PRODUCTS = [
  { id: '1', name: 'Fresh Apples', price: 3.99, category: 'Fruits', image: 'https://picsum.photos/200/200?random=11' },
  { id: '2', name: 'Organic Bananas', price: 2.49, category: 'Fruits', image: 'https://picsum.photos/200/200?random=12' },
  { id: '3', name: 'Carrots', price: 1.99, category: 'Vegetables', image: 'https://picsum.photos/200/200?random=13' },
  { id: '4', name: 'Tomatoes', price: 3.49, category: 'Vegetables', image: 'https://picsum.photos/200/200?random=14' },
  { id: '5', name: 'Whole Milk', price: 4.99, category: 'Dairy', image: 'https://picsum.photos/200/200?random=15' },
  { id: '6', name: 'Cheddar Cheese', price: 6.99, category: 'Dairy', image: 'https://picsum.photos/200/200?random=16' },
  { id: '7', name: 'White Bread', price: 2.99, category: 'Bakery', image: 'https://picsum.photos/200/200?random=17' },
  { id: '8', name: 'Croissants', price: 5.99, category: 'Bakery', image: 'https://picsum.photos/200/200?random=18' },
  { id: '9', name: 'Orange Juice', price: 4.49, category: 'Beverages', image: 'https://picsum.photos/200/200?random=19' },
  { id: '10', name: 'Greek Yogurt', price: 3.99, category: 'Dairy', image: 'https://picsum.photos/200/200?random=20' },
];

// Product Card Component
const ProductCard = ({ item, onAddToCart }) => (
  <View style={styles.card}>
    <Image 
      source={{ uri: item.image }}
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => onAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add +</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function ProductsScreen() {
  const handleAddToCart = (item) => {
    console.log('Added to cart:', item.name);
  };

  // Header Component
  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>All Groceries</Text>
      <Text style={styles.headerSubtitle}>{PRODUCTS.length} items available</Text>
    </View>
  );

  // Empty Component
  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>🛒</Text>
      <Text style={styles.emptyTitle}>No items available!</Text>
      <Text style={styles.emptySubtitle}>Check back soon for new products</Text>
    </View>
  );

  // Render Item
  const renderItem = ({ item }) => (
    <ProductCard item={item} onAddToCart={handleAddToCart} />
  );

  return (
    <FlatList
      data={PRODUCTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={ListEmpty}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#4caf50',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
  },
  cardContent: {
    padding: 12,
  },
  category: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  addButton: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 50,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 15,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
  },
});