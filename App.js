import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/Telas/Home';


export default function App() {
  return (
    <SafeAreaView style={{marginTop: StatusBar.currentHeight || 0 }}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}