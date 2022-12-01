import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeScreen2}>
      <TouchableOpacity
        style={styles.rectangleTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Onboarding1')}
      />
      <Text style={styles.getStartedText}>Get Started</Text>
      <Image
        style={styles.groupIcon}
        resizeMode='cover'
        source={require('../assets/group-10286.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleTouchableOpacity: {
    position: 'absolute',
    top: 715,
    left: 50,
    borderRadius: 99,
    backgroundColor: '#95adfd',
    width: 315,
    height: 60,
  },
  getStartedText: {
    position: 'absolute',
    top: 730,
    left: 160,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
  },
  groupIcon: {
    position: 'absolute',
    top: 351,
    left: 110,
    width: 202,
    height: 95.16,
  },
  welcomeScreen2: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default WelcomeScreen2;
