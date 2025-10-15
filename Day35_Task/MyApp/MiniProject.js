import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  const moods = [
    { id: 1, emoji: '🤗', name: 'Happy', color: '#4caf50', },
    { id: 2, emoji: '🙂', name: 'Neutral', color: '#ff9800',  },
    { id: 3, emoji: '😔', name: 'Sad', color: '#2196f3',  },
    { id: 4, emoji: '😡', name: 'Angry', color: '#f44336',  },
  ];
  
  const selectMood = (mood) => {
    setSelectedMood(mood);
    setLastUpdated(new Date());
  };
  
  const resetMood = () => {
    setSelectedMood(null);
    setLastUpdated(null);
  };
  
  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mood Tracker</Text>
        <Text style={styles.headerSubtitle}>How are you feeling today?</Text>
      </View>
      
      <ScrollView>
      {/* Grid of Mood Buttons*/}  
      <View style={styles.moodButtonGrid}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={`${mood.id}-${selectedMood?.id === mood.id}`}
            style={[
              styles.moodButton,
              { backgroundColor: mood.color },
              selectedMood?.id === mood.id && styles.selectedMood
            ]}
            onPress={() => selectMood(mood)}
          >
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            <Text style={styles.moodName}>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Selected Mood Display */}
      {selectedMood && (
        <View style={[styles.resultCard, { borderColor: selectedMood.color }]}>
          <Text style={styles.resultEmoji}>{selectedMood.emoji}</Text>
          <Text style={styles.resultTitle}>
            You're feeling {selectedMood.name}
          </Text>
          
          {/* Timestamp */}
          {lastUpdated && (
            <Text style={styles.timestamp}>
              Last updated: {formatTime(lastUpdated)}
            </Text>
          )}
        </View>
      )}
      
      {selectedMood && (
        <TouchableOpacity 
          style={styles.resetButton}
          onPress={resetMood}
        >
          <Text style={styles.resetButtonText}>Reset Selection</Text>
        </TouchableOpacity>
      )}
      
      {/* Empty State */}
      {!selectedMood && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            Select a mood above to get started
          </Text>
        </View>
      )}

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#666',
  },
  moodButtonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moodButton: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMood: {
    borderWidth: 4,
    borderColor: '#fff',
    transform: [{ scale: 0.95 }],
  },
  moodEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  moodName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 3,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  resultEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
  },
  resetButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#777',
  },
});
