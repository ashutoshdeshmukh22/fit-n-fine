import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding3}>
      <View style={styles.textSectionView}>
        <Text style={styles.eatWellText}>Eat Well</Text>
        <Text style={styles.letsStartAHealthyLifestyl}>
          Let's start a healthy lifestyle with us, we can determine your diet
          every day. healthy eating is fun
        </Text>
      </View>
      <TouchableOpacity
        style={styles.nextTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('RegisterPage')}>
        <Image
          style={styles.icon}
          resizeMode='cover'
          source={require('../assets/next2.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.frameIcon}
        resizeMode='cover'
        source={require('../assets/frame.png')}
      />
      <TouchableOpacity
        style={styles.previousTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Onboarding2')}>
        <Image
          style={styles.icon1}
          resizeMode='cover'
          source={require('../assets/previous.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eatWellText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  letsStartAHealthyLifestyl: {
    position: 'absolute',
    top: 51,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 315,
  },
  textSectionView: {
    position: 'absolute',
    top: 500,
    left: 50,
    width: 315,
    height: 114,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  nextTouchableOpacity: {
    position: 'absolute',
    left: 300,
    top: 750,
    width: 62,
    height: 62,
  },
  frameIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 480,
    overflow: 'hidden',
  },
  icon1: {
    width: '100%',
    height: '100%',
  },
  previousTouchableOpacity: {
    position: 'absolute',
    left: 34,
    top: 750,
    width: 61,
    height: 61,
  },
  onboarding3: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Onboarding3;
