import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import InputDisplay from './InputDisplay';
import AgeInput from './AgeInput';
import FeedbackForm from './MiniProject';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FeedbackForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});