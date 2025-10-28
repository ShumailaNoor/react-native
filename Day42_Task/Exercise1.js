import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

const ImageUploadScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const pickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need permission to access your photos!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setUploadedUrl(null); 
      console.log('Image selected');
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert('No Image', 'Please select an image first!');
      return;
    }

    setUploading(true);

    try {
      console.log('Starting upload...');

      const response = await fetch(image);
      const blob = await response.blob();

      const filename = `images/${Date.now()}.jpg`;
      const storageRef = ref(storage, filename);

      await uploadBytes(storageRef, blob);
      console.log('Upload complete!');

      const downloadURL = await getDownloadURL(storageRef);
      console.log('Download URL:', downloadURL);

      setUploadedUrl(downloadURL);
      Alert.alert('Success!', 'Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Image Upload</Text>

      <TouchableOpacity style={styles.pickButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>

      {image && (
        <View style={styles.previewContainer}>
          <Text style={styles.label}>Image Preview:</Text>
          <Image source={{ uri: image }} style={styles.previewImage} />
        </View>
      )}

      {image && (
        <TouchableOpacity
          style={[styles.uploadButton, uploading && styles.buttonDisabled]}
          onPress={uploadImage}
          disabled={uploading}
        >
          {uploading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Upload Image</Text>
          )}
        </TouchableOpacity>
      )}

      {uploading && (
        <Text style={styles.uploadingText}>Uploading...</Text>
      )}

      {uploadedUrl && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Upload Successful!</Text>
          <Text style={styles.urlLabel}>Download URL:</Text>
          <Text style={styles.urlText} numberOfLines={2}>
            {uploadedUrl}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  pickButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  previewImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  uploadingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  successContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  urlLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  urlText: {
    fontSize: 12,
    color: '#666',
  },
});

export default ImageUploadScreen;