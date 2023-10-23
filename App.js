import { StyleSheet, Text, SafeAreaView } from 'react-native';
import TempType from './TempType';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Temperature Converter</Text>
        <TempType />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  }
});
