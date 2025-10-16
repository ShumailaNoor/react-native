import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

// Product Card Component
const ProductCard = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
    <Text style={styles.productDescription}>{item.description}</Text>
    <TouchableOpacity style={styles.buyButton}>
      <Text style={styles.buyButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

export default function FlatListExample() {
  const [isGrid, setIsGrid] = useState(false);

  const products = [
    { id: '1', name: 'Wireless Headphones', price: '79.99', description: 'High-quality sound with noise cancellation' },
    { id: '2', name: 'Smart Watch', price: '199.99', description: 'Track your fitness and stay connected healthy' },
    { id: '3', name: 'Laptop Stand', price: '49.99', description: 'Ergonomic design for better posture' },
    { id: '4', name: 'USB-C Hub', price: '39.99', description: 'Multiple ports for all your devices' },
    { id: '5', name: 'Wireless Mouse', price: '29.99', description: 'Smooth scrolling and precision' },
    { id: '6', name: 'Mechanical Keyboard', price: '129.99', description: 'Tactile feedback for better typing' },
  ];

  const renderItem = ({ item }) => <ProductCard item={item} />;

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.headerTitle}>Our Products</Text>
            <Text style={styles.headerSubtitle}>{products.length} items available</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'white', marginBottom: 5 }}>
              {isGrid ? 'Grid' : 'List'}
            </Text>
            <Switch
              value={isGrid}
              onValueChange={() => setIsGrid(!isGrid)}
              trackColor={{ false: '#aaa', true: '#4caf50' }}
              thumbColor="white"
            />
          </View>
        </View>
      </View>

      {/* FlatList */}
      <FlatList
        key={isGrid ? 'grid' : 'list'} 
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        numColumns={isGrid ? 2 : 1}
        columnWrapperStyle={isGrid ? styles.row : null}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No products available</Text>
            <Text style={styles.emptySubtitle}>Check back later!</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    padding: 20,
    backgroundColor: '#2196f3',
    borderRadius: 12,
    marginBottom: 10,
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
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  buyButton: {
    backgroundColor: '#2196f3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
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
  row: {
    justifyContent: 'space-between',
  },
});
