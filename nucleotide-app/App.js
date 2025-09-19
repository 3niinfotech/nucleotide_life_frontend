import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NucleotideScreen } from './src/screens/NucleotideScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NucleotideScreen />
    </SafeAreaView>
  );
}

