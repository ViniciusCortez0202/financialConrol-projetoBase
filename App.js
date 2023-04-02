import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentCard from './src/components/SpentCard';
import SpentInput from './src/components/SpentInput';
import { object, string, number, decimal, InferType } from 'yup';
import AddSpentButton from './src/components/AddSpentButton';
import SpentPage from './src/pages/SpentPage';
import Dashboard from './src/components/Dashboard';


export default function App() {
  return (
    // <View style={styles.container}>
    <Dashboard/>
  //  </View>
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
