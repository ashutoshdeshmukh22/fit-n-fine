import { StatusBar, StyleSheet, View, Text } from 'react-native';

const StepCounter = () => {
  return (
    <View style={styles.screen}>
      <Text>Step Counter Screen</Text>
    </View>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
