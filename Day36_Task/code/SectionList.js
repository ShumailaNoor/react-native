import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

export default function SectionListExample() {
  const DATA = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange", "Mango", "Grapes"]
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Tomato", "Spinach", "Broccoli", "Cucumber"]
    },
    {
      title: "Grains",
      data: ["Rice", "Wheat", "Oats", "Barley", "Quinoa"]
    },
    {
      title: "Dairy",
      data: ["Milk", "Cheese", "Yogurt", "Butter"]
    }
  ];

  // Section Header
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  // Item Renderer
  const renderItem = ({ item, index, section }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  // Item Separator
  const ItemSeparator = () => <View style={styles.separator} />;

  // Footer
  const ListFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>End of List</Text>
      <Text style={styles.footerSubtext}>
        Total: {DATA.reduce((sum, section) => sum + section.data.length, 0)} items
      </Text>
    </View>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ListFooter}
      contentContainerStyle={styles.container}
      stickySectionHeadersEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
  },
  sectionHeader: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cbcbcbff',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 8,

  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#666',
  },
});
