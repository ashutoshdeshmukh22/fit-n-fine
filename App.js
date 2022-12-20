import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
import { useFonts } from 'expo-font';

import 'expo-dev-client';

export default function App() {
  // useFonts({ Poppins: require('./assets/fonts/Poppins.ttf') });
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
