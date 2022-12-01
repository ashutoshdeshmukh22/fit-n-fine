import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

const SuccessRegistration = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.successRegistrationSafeAreaView}>
      <View style={styles.titleSectionView}>
        <View style={styles.onboardDescriptionView}>
          <Text style={styles.youAreAllSetNowLetsRea}>
            You are all set now, let’s reach your goals together with us
          </Text>
        </View>
        <View style={styles.onboardTitleView}>
          <Text style={styles.welcomeAshutoshText}>Welcome, Ashutosh</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonLinearGradient}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go To Home</Text>
      </TouchableOpacity>
      <Image
        style={styles.groupIcon}
        resizeMode='cover'
        source={require('../assets/group1.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  youAreAllSetNowLetsRea: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'center',
    width: 214,
  },
  onboardDescriptionView: {
    position: 'absolute',
    top: 35,
    left: 0,
    width: 214,
    height: 36,
  },
  welcomeAshutoshText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'center',
  },
  onboardTitleView: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 206,
    height: 30,
  },
  titleSectionView: {
    position: 'absolute',
    top: 500,
    left: 100,
    width: 214,
    height: 71,
  },
  buttonText: {
    position: 'relative',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
  },
  touchableOpacity: {
    borderRadius: 99,
    shadowColor: 'rgba(149, 173, 254, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 129,
    paddingVertical: 18,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  buttonLinearGradient: {
    borderRadius: 99,
    position: 'absolute',
    left: 40,
    top: 712,
    width: 329,
    backgroundColor: '#95ADFD',
    shadowColor: 'rgba(149, 173, 254, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    flexDirection: 'row',
    paddingHorizontal: 100,
    paddingVertical: 18,
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  groupIcon: {
    position: 'absolute',
    height: '37.44%',
    width: '74.01%',
    top: '12.56%',
    right: '12.92%',
    bottom: '50%',
    left: '13.07%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  successRegistrationSafeAreaView: {
    position: 'relative',
    borderRadius: 30,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default SuccessRegistration;
