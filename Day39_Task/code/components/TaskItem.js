import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const TaskItem = ({ task, onDelete }) => {
return (
    <View style={styles.item}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Ionicons name="checkmark-circle" size={25} color='#4CAF50' style={{ marginRight: 8 }} />
            <Text style={styles.text}>{task.text}</Text>
        </View>
        <TouchableOpacity
            onPress={() => onDelete(task.id)}
            style={styles.deleteButton}
        >
            <Ionicons name="trash" size={25} color="rgba(237, 97, 97, 1)" />
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  text: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  deleteButton: {
    padding: 8,
  },
  deleteText: {
    fontSize: 20,
  },
});

export default TaskItem;