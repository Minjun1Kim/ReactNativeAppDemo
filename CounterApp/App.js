import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
        <Counter initialValues={[5, 10, 15]} />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
