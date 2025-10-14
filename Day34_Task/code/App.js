import LayoutDemo from "./DemoLayout";
import ProfileCard from "./ProfileCard";
import UserListScreen from "./UserScreenList";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import UserGrid from './MiniProject';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});