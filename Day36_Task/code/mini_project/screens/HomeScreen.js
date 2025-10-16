import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


export default function HomeScreen() {
  const featuredItems = [
    { id: 1, name: 'Fresh Apples', price: '$3.99', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Organic Milk', price: '$4.99', image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Whole Wheat Bread', price: '$2.99', image: 'https://picsum.photos/200/200?random=3' },
    { id: 4, name: 'Fresh Eggs', price: '$5.99', image: 'https://picsum.photos/200/200?random=4' },
  ];

return (
    <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
    >
        {/* Banner */}
        <View style={styles.banner}>
            <Image 
                source={{ uri: 'https://picsum.photos/400/200?random=10' }}
                style={styles.bannerImage}
            />
            <View style={styles.bannerOverlay}>
                <Text style={styles.bannerTitle}>🛒 Fresh Groceries</Text>
                <Text style={styles.bannerSubtitle}>Delivered to Your Door</Text>
            </View>
        </View>

        <View style={styles.promoContainer}>
            <Text style={styles.promoTitle}>🎉 Special Offers Today!</Text>
            <Text style={styles.promoText}>
                Get up to 50% off on selected items. Fresh produce, dairy, and more!
            </Text>
        </View>

        {/* Featured Items Section */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Items</Text>
            
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
            >
                {featuredItems.map((item) => (
                    <View key={item.id} style={styles.featuredItem}>
                        <Image 
                            source={{ uri: item.image }}
                            style={styles.featuredImage}
                        />
                        <View style={styles.featuredInfo}>
                            <Text style={styles.featuredName}>{item.name}</Text>
                            <Text style={styles.featuredPrice}>{item.price}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>

        {/* Categories Preview */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <View style={styles.categoryGrid}>
                {['Fruits', 'Vegetables', 'Dairy', 'Bakery'].map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryCard}>
                        <Text style={styles.categoryEmoji}>
                            {['🍎', '🥕', '🥛', '🍞'][index]}
                        </Text>
                        <Text style={styles.categoryName}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <TouchableOpacity style={styles.ctaButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.ctaButtonText}>View All Items</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
            </View>
        </TouchableOpacity>

        <View style={styles.spacer} />
    </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    height: 200,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 18,
    color: 'white',
  },
  promoContainer: {
    backgroundColor: '#fff3cd',
    padding: 20,
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 8,
  },
  promoText: {
    fontSize: 16,
    color: '#856404',
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  horizontalScroll: {
    marginHorizontal: -15,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  featuredItem: {
    width: 160,
    marginRight: 15,
    marginBottom:5,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 120,
  },
  featuredInfo: {
    padding: 12,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  featuredPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  ctaButton: {
    backgroundColor: '#2196f3',
    padding: 18,
    margin: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  spacer: {
    height: 20,
  },
});