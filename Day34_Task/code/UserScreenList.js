import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

export default function UserListScreen() {
  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      bio: 'Frontend Developer | React Native Enthusiast',
      imageUrl: 'https://picsum.photos/200/200?random=1',
    },
    {
      id: 2,
      name: 'Bob Smith',
      bio: 'UI/UX Designer | Creating beautiful interfaces',
      imageUrl: 'https://picsum.photos/200/200?random=2',
    },
    {
      id: 3,
      name: 'Carol Martinez',
      bio: 'Full Stack Developer | Coffee lover',
      imageUrl: 'https://picsum.photos/200/200?random=3',
    },
    {
      id: 4,
      name: 'David Lee',
      bio: 'Mobile Developer | Tech enthusiast',
      imageUrl: 'https://picsum.photos/200/200?random=4',
    },
    {
      id: 5,
      name: 'Alice Johnson',
      bio: 'Frontend Developer | React Native Enthusiast',
      imageUrl: 'https://picsum.photos/200/200?random=1',
    },
    {
      id: 6,
      name: 'Bob Smith',
      bio: 'UI/UX Designer | Creating beautiful interfaces',
      imageUrl: 'https://picsum.photos/200/200?random=2',
    },
    {
      id: 7,
      name: 'Carol Martinez',
      bio: 'Full Stack Developer | Coffee lover',
      imageUrl: 'https://picsum.photos/200/200?random=3',
    },
    {
      id: 8,
      name: 'David Lee',
      bio: 'Mobile Developer | Tech enthusiast',
      imageUrl: 'https://picsum.photos/200/200?random=4',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.grid}>
        {users.map((user) => (
          <View key={user.id} style={styles.cardWrapper}>
            <ProfileCard 
              name={user.name}
              bio={user.bio}
              imageUrl={user.imageUrl}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  grid: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  cardWrapper: {
    width: '43%',
    marginBottom: 20,
  },
});