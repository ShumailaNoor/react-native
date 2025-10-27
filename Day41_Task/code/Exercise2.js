// UsersList.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebaseConfig';
import { Ionicons } from '@expo/vector-icons'; 

const db = getFirestore(app);

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Fetch all users from Firestore
      const querySnapshot = await getDocs(collection(db, 'users'));
      
      const usersList = [];
      querySnapshot.forEach((doc) => {
        usersList.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setUsers(usersList);
      console.log('Fetched', usersList.length, 'users');
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

const renderUser = ({ item }) => (
    <View style={styles.userCard}>
        <Text style={styles.userName}>
            <Ionicons name="person" size={16} /> {item.name}
        </Text>
        <Text style={styles.userEmail}>
            <Ionicons name="mail" size={16} /> {item.email}
        </Text>
        <Text style={styles.userId}>ID: {item.id.slice(0, 8)}...</Text>
    </View>
);

if (loading) {
    return (
        <View style={styles.centered}>
            <ActivityIndicator size="large" color="#4CAF50" />
            <Text style={styles.loadingText}>Loading users...</Text>
        </View>
    );
}

if (users.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No users found</Text>
        <Text style={styles.emptySubtext}>Add your first user!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List ({users.length})</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUser}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 20,
    color: '#999',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 8,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  userId: {
    fontSize: 11,
    color: '#999',
    fontFamily: 'monospace',
  },
});

export default UsersList;