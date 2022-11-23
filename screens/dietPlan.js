import { StatusBar, StyleSheet, View, Text } from 'react-native';

const DietPlan = () => {
  return (
    <View style={styles.screen}>
      <Text>Diet Plan Screen</Text>
    </View>
  );
};

export default DietPlan;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
