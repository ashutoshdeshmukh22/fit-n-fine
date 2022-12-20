import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WeightGain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>Weight Gain Diet Plan Screen</Text>
    </View>
  );
};

export default WeightGain;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
