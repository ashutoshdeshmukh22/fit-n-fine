import * as React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.registerPage1}>
      <View style={styles.titleSectionView}>
        <Text style={styles.heyThereText}>Hey there,</Text>
        <Text style={styles.signUpHere}>Sign Up Here</Text>
      </View>
      <View style={styles.loginSocialMediaView}>
        <TouchableOpacity
          style={styles.groupTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate('SuccessRegistration')}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.googleLogoPngSuiteEverythiIcon}
            resizeMode='cover'
            source={require('../assets/googlelogopngsuiteeverythingyouneedknowaboutgooglenewest0-2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.groupTouchableOpacity1}
          activeOpacity={0.2}
          onPress={() => {}}>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.facebook1Icon}
            resizeMode='cover'
            source={require('../assets/facebook-1.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode='cover'
        source={require('../assets/group-10286.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heyThereText: {
    position: 'absolute',
    top: 0,
    left: 24,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  signUpHere: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  titleSectionView: {
    position: 'absolute',
    top: 88,
    left: 140,
    width: 130,
    height: 54,
  },
  rectangleView: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 14,
    borderStyle: 'solid',
    borderColor: '#dddada',
    borderWidth: 0.8,
    width: 50,
    height: 50,
  },
  googleLogoPngSuiteEverythiIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
  },
  groupTouchableOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  rectangleView1: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 14,
    borderStyle: 'solid',
    borderColor: '#dddada',
    borderWidth: 0.8,
    width: 50,
    height: 50,
  },
  facebook1Icon: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  groupTouchableOpacity1: {
    position: 'absolute',
    top: 0,
    left: 80,
    width: 50,
    height: 50,
  },
  loginSocialMediaView: {
    position: 'absolute',
    top: 500,
    left: 140,
    width: 130,
    height: 50,
  },
  groupIcon: {
    position: 'absolute',
    top: 350,
    left: 110,
    width: 202,
    height: 95.16,
  },
  registerPage1: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default RegisterPage;
