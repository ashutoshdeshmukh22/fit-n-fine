import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Badge from './Badge';

const Headers = () => (
  <React.Fragment>
    <View style={styles.icons}>
      <View>
        <Text style={styles.headerText}>Welcome To</Text>
        <Text style={styles.headerText}>
          <Text style={styles.pinkText}>Fit-N-Fine</Text> Journey
        </Text>
      </View>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'pink',
    paddingBottom: 100,
  },
  rightBtns: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  pinkText: {
    color: '#FC427B',
  },
  badges: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});

export default Headers;
