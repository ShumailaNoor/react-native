// App.js - Complete User Manager (Ionicons Version)
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { app } from './firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

const db = getFirestore(app);

const CRUDApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE
  const addUser = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    setSaving(true);

    try {
      await addDoc(collection(db, 'users'), {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date().toISOString(),
      });

      console.log('User added successfully!');
      Alert.alert('Success', 'User added successfully!');
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user.');
    } finally {
      setSaving(false);
    }
  };

  // READ
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
      console.log('Fetched', usersList.length, 'users');
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  // UPDATE
  const openEditModal = (user) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setEditingUser(null);
    setEditName('');
    setEditEmail('');
  };

  const updateUser = async () => {
    if (!editName.trim() || !editEmail.trim()) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    if (!editEmail.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    setUpdating(true);

    try {
      const userRef = doc(db, 'users', editingUser.id);
      await updateDoc(userRef, {
        name: editName.trim(),
        email: editEmail.trim(),
        updatedAt: new Date().toISOString(),
      });

      console.log('User updated successfully!');
      Alert.alert('Success', 'User updated successfully!');
      closeEditModal();
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      Alert.alert('Error', 'Failed to update user.');
    } finally {
      setUpdating(false);
    }
  };

  // DELETE
  const deleteUser = (userId, userName) => {
    Alert.alert(
      'Delete User',
      `Are you sure you want to delete ${userName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setDeleting(userId);
            try {
              await deleteDoc(doc(db, 'users', userId));
              console.log('User deleted successfully!');
              Alert.alert('Success', 'User deleted successfully!');
              fetchUsers();
            } catch (error) {
              console.error('Error deleting user:', error);
              Alert.alert('Error', 'Failed to delete user.');
            } finally {
              setDeleting(null);
            }
          },
        },
      ]
    );
  };

  // RENDER USER CARD
  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          <Ionicons name="person-circle" size={20} color="#333" /> {item.name}
        </Text>
        <Text style={styles.userEmail}>
          <Ionicons name="mail" size={18} color="#666" /> {item.email}
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => openEditModal(item)}
          disabled={deleting === item.id}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>

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
            <Ionicons name="trash-outline" size={20} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="people-circle-outline" size={60} color="black" />
          <Text style={styles.headerTitle}>User Manager</Text>
          <Text style={styles.headerSubtitle}>Firestore CRUD App</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>
             Add New User
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
            editable={!saving}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!saving}
          />

          <TouchableOpacity
            style={[styles.addButton, saving && styles.buttonDisabled]}
            onPress={addUser}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.addButtonText}> Add User</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Users List */}
        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>
            Users List ({users.length})
          </Text>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#4CAF50" />
              <Text style={styles.loadingText}>Loading users...</Text>
            </View>
          ) : users.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="alert-circle-outline" size={40} color="#bbb" />
              <Text style={styles.emptyText}>No users yet</Text>
              <Text style={styles.emptySubtext}>Add your first user above!</Text>
            </View>
          ) : (
            <FlatList
              data={users}
              keyExtractor={(item) => item.id}
              renderItem={renderUser}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>

      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeEditModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
               Edit User
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={editName}
              onChangeText={setEditName}
              editable={!updating}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={editEmail}
              onChangeText={setEditEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!updating}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={closeEditModal}
                disabled={updating}
              >
                
                <Text style={styles.modalButtonText}> Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  styles.saveButton,
                  updating && styles.buttonDisabled,
                ]}
                onPress={updateUser}
                disabled={updating}
              >
                {updating ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    
                    <Text style={styles.modalButtonText}> Save</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5',
    width: '100%', 
  },
  header: {
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
    opacity: 0.9,
  },
  formSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  listSection: { 
    backgroundColor: '#fff', 
    padding: 20 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDisabled: { 
    backgroundColor: '#ccc' 
  },
  addButtonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  loadingContainer: { 
    padding: 40, 
    alignItems: 'center' 
  },
  loadingText: { 
    marginTop: 10, 
    color: '#666' 
  },
  emptyContainer: { 
    padding: 40, 
    alignItems: 'center' 
  },
  emptyText: { 
    fontSize: 18, 
    color: '#999', 
    marginBottom: 8 
  },
  emptySubtext: { 
    fontSize: 14, 
    color: '#bbb' 
  },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  userInfo: { 
    flex: 1 
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: { 
    fontSize: 14, 
    color: '#666' 
  },
  actionButtons: { 
    flexDirection: 'row', 
    gap: 8 
  },
  editButton: {
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonDisabled: { 
    backgroundColor: '#ccc' 
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '85%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelButton: { 
    backgroundColor: '#999' 
  },
  saveButton: { 
    backgroundColor: '#2196F3' 
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CRUDApp;
