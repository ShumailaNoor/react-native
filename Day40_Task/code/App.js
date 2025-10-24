// App.js
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getApps } from 'firebase/app';
import FirebaseTestApp from './MiniProject';

const App = () => {
  useEffect(() => {

    const apps = getApps();
    console.log('Firebase apps initialized:', apps.length);
    
    if (apps.length > 0) {
      console.log('Firebase connected successfully!');
      console.log('Project ID:', apps[0].options.projectId);
    } else {
      console.log('Firebase not initialized');
    }
  }, []);

  return (
    <View style={styles.container}>
      <FirebaseTestApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;