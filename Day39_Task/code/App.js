import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Study React Native' },
  ]);

  useEffect(() => {
    console.log('Welcome to TaskTrackr!');
    console.log(`Running on ${Platform.OS}`);
  }, []);

  const addTask = (taskText) => {
    if (!taskText.trim()) {
      Alert.alert('Error', 'Please enter a task!');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      text: taskText,
    };

    setTasks([...tasks, newTask]);

    // Platform-specific feedback
    if (Platform.OS === 'android') {
      ToastAndroid.show('Task Added!', ToastAndroid.SHORT);
    } else {
      Alert.alert('Success', 'Task Added!');
    }
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    
    if (Platform.OS === 'ios') {
      // iOS: Use ActionSheet
      const ActionSheetIOS = require('react-native').ActionSheetIOS;
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Delete Task'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          title: `Delete "${taskToDelete.text}"?`,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            performDelete(id);
          }
        }
      );
    } else {
      // Android: Use Alert
      Alert.alert(
        'Confirm Delete',
        `Delete "${taskToDelete.text}"?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Delete', 
            style: 'destructive',
            onPress: () => performDelete(id)
          }
        ]
      );
    }
  };

  const performDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    
    if (Platform.OS === 'android') {
      ToastAndroid.show('Task Deleted!', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task Tracker" />
      <View style={styles.content}>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default App;