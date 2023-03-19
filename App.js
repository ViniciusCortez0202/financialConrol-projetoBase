import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentCard from './src/components/SpentCard';

export default function App() {
  return (
    <View style={styles.container}>
      <SpentCard spentName={"Aluguel"} spentValue={300}/>
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
