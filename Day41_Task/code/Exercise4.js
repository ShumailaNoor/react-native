import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
import { app } from './firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

const db = getFirestore(app);

const UsersWithDelete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersList = [];
      querySnapshot.forEach((doc) => {
        usersList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUsers(usersList);
      console.log('✅ Fetched', usersList.length, 'users');
    } catch (error) {
      console.error('❌ Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId, userName) => {
    // Show confirmation dialog
    Alert.alert(
      'Delete User',
      `Are you sure you want to delete ${userName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setDeleting(userId);
            try {
              // Delete the document
              await deleteDoc(doc(db, 'users', userId));

              console.log('✅ User deleted successfully!');
              Alert.alert('Success', 'User deleted successfully!');

              // Refresh the list
              fetchUsers();
            } catch (error) {
              console.error('❌ Error deleting user:', error);
              Alert.alert('Error', 'Failed to delete user. Please try again.');
            } finally {
              setDeleting(null);
            }
          },
        },
      ]
    );
  };

const renderUser = ({ item }) => (
    <View style={styles.userCard}>
        <View style={styles.userInfo}>
            <Text style={styles.userName}><Ionicons name="person" size={20} /> {item.name}</Text>
            <Text style={styles.userEmail}><Ionicons name="mail" size={16} /> {item.email}</Text>
        </View>

        <TouchableOpacity
            style={[
                styles.deleteButton,
                deleting === item.id && styles.deleteButtonDisabled,
            ]}
            onPress={() => deleteUser(item.id, item.name)}
            disabled={deleting === item.id}
        >
            {deleting === item.id ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles.deleteButtonText}><Ionicons name="trash-outline" size={16} /> Delete</Text>
            )}
        </TouchableOpacity>
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
      <Text style={styles.title}>Delete Users</Text>
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
    padding: 20,
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
    textAlign: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    flex: 1,
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
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    minWidth: 80,
    alignItems: 'center',
  },
  deleteButtonDisabled: {
    backgroundColor: '#ccc',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UsersWithDelete;