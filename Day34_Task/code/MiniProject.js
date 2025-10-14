import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function UserCard({ name, bio, imageUrl }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardBio}>{bio}</Text>
      </View>
    </View>
  );
}

export default function UserGrid() {
  const users = [
    {
      id: 1,
      name: 'Emma Wilson',
      bio: 'Senior React Native Developer',
      imageUrl: 'https://picsum.photos/200/200?random=6',
    },
    {
      id: 2,
      name: 'James Brown',
      bio: 'Mobile App Designer',
      imageUrl: 'https://picsum.photos/200/200?random=20',
    },
    {
      id: 3,
      name: 'Sophia Davis',
      bio: 'Full Stack Engineer',
      imageUrl: 'https://picsum.photos/200/200?random=24',
    },
    {
      id: 4,
      name: 'Oliver Taylor',
      bio: 'UI/UX Specialist',
      imageUrl: 'https://picsum.photos/200/200?random=25',
    },
    {
      id: 5,
      name: 'Isabella Garcia',
      bio: 'Frontend Developer',
      imageUrl: 'https://picsum.photos/200/200?random=9',
    },
    {
      id: 6,
      name: 'Lucas Martinez',
      bio: 'Tech Lead',
      imageUrl: 'https://picsum.photos/200/200?random=15',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profiles</Text>
        <Text style={styles.headerSubtitle}>
          {users.length} team members
        </Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              bio={user.bio}
              imageUrl={user.imageUrl}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#2196f3',
    padding: 20,
    paddingTop: 50, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  scrollContent: {
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  cardBio: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});