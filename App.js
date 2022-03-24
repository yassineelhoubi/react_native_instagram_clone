import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingedInStack from './navigation';
import { HomeScreen, NewPostScreen } from './screens';

export default function App() {
  return (
    // <HomeScreen />
    // <NewPostScreen />
    <SingedInStack />
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
