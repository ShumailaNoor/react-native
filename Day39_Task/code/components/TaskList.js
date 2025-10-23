import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks yet!</Text>
        <Text style={styles.emptySubText}>Add one to get started.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem task={item} onDelete={onDeleteTask} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#999',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 16,
    color: '#bbb',
  },
});

export default TaskList;