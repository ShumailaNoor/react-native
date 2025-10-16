import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import ScrollViewExample from './ScrollView';
import FlatListExample from './FlatList';
import SectionListExample from './SectionList';
import HomeScreen from './mini_project/screens/HomeScreen';
import ProductsScreen from './mini_project/screens/ProductsScreen';
import CategoriesScreen from './mini_project/screens/CategoriesScreen';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import TabNavigation from './mini_project/components/TabNavigation';


export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'products':
        return <ProductsScreen />;
      case 'categories':
        return <CategoriesScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {renderScreen()}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});