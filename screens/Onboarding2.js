import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.onboarding2}>
      <View style={styles.textSectionView}>
        <Text style={styles.getBurnText}>Get Burn</Text>
        <Text style={styles.letsKeepBurningToAchive}>
          Let’s keep burning, to achive yours goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </Text>
      </View>
      <TouchableOpacity
        style={styles.nextTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Onboarding3')}>
        <Image
          style={styles.icon}
          resizeMode='cover'
          source={require('../assets/next1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.previousTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Onboarding1')}>
        <Image
          style={styles.icon1}
          resizeMode='cover'
          source={require('../assets/previous.png')}
        />
      </TouchableOpacity>
      <View style={styles.frameView}>
        <Image
          style={styles.groupIcon}
          resizeMode='cover'
          source={require('../assets/group2.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  getBurnText: {
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
  letsKeepBurningToAchive: {
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
    width: 61,
    height: 61,
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
  groupIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '-9.86%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  frameView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 450,
    overflow: 'hidden',
  },
  onboarding2: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Onboarding2;
