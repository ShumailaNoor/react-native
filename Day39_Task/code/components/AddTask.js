import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAdd = () => {
    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={taskText}
        onChangeText={setTaskText}
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleAdd}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  button: {
    backgroundColor: Platform.select({
      ios: '#007AFF',
      android: '#4CAF50',
    }),
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
});

export default AddTask;