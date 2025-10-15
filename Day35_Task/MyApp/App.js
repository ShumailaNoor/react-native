import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Counter from './Counter';
import InputDemo from './InputDemo';
import ToggleSwitch from './ToggleSwitch';
import MoodTracker from './MiniProject';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MoodTracker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});