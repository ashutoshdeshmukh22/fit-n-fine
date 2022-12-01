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

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.onboarding1}>
      <View style={styles.textSectionView}>
        <Text style={styles.trackYourGoal}>Track Your Goal</Text>
        <Text style={styles.dontWorryIfYouHaveTroubl}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </Text>
      </View>
      <TouchableOpacity
        style={styles.nextTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Onboarding2')}>
        <Image
          style={styles.icon}
          resizeMode='cover'
          source={require('../assets/next.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.groupIcon}
        resizeMode='cover'
        source={require('../assets/group-10289.png')}
      />
      <TouchableOpacity
        style={styles.previousTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('WelcomeScreen2')}>
        <Image
          style={styles.icon1}
          resizeMode='cover'
          source={require('../assets/previous.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  trackYourGoal: {
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
  dontWorryIfYouHaveTroubl: {
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
  groupIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 480,
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
    height: 62,
  },
  onboarding1: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Onboarding1;
