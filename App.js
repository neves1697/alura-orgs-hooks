import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/Telas/Home';


export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
});