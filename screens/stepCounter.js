import {
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Pressable,
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { Pedometer } from 'expo-sensors';
import CircularProgress from 'react-native-circular-progress-indicator';

const StepCounter = () => {
  const [PedomaterAvailability, SetPedomaterAvailability] = useState('');
  const [StepCount, SetStepCount] = useState(0);

  var WindowHeight = Dimensions.get('window').height;
  var Dist = StepCount / 1300;
  var DistanceCovered = Dist.toFixed(4);
  var cal = DistanceCovered * 60;
  var caloriesBurnt = cal.toFixed(4);

  React.useEffect(() => {
    subscribe();
    console.log(StepCount);
  }, []);

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      SetStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        SetPedomaterAvailability(String(result));
      },

      (error) => {
        SetPedomaterAvailability(error);
      }
    );
  };
  // console.log(StepCount);

  return (
    <SafeAreaView style={styles.stepCounterSafeAreaView}>
      <View style={styles.headerView}>
        <Image
          style={styles.backNavsIcon}
          resizeMode='cover'
          source={require('../assets/backnavs.png')}
        />
        <Image
          style={styles.detailNavsIcon}
          resizeMode='cover'
          source={require('../assets/detailnavs.png')}
        />
        <Text style={styles.stepCounterText}>Step Counter</Text>
      </View>
      <View style={styles.statusView}>
        <View style={styles.caloriesBgView}>
          <View style={styles.rectangleView} />
        </View>
        <View style={styles.caloriesTextView}>
          <Text style={styles.caloriesText}>Calories</Text>
          <Text style={styles.kCalText}>{caloriesBurnt}</Text>
        </View>
        <Image
          style={styles.caloriesPieIcon}
          resizeMode='cover'
          source={require('../assets/caloriespie.png')}
        />
      </View>
      <View style={styles.targetView}>
        <View style={styles.sleepStatusBgView}>
          <View style={styles.rectangleView1} />
        </View>
        <View style={styles.sleepTextView}>
          <Text style={styles.sleepText}>Target</Text>
          <Text style={styles.h20mText}>4500</Text>
        </View>
        <Image
          style={styles.sleepGraphIcon}
          resizeMode='cover'
          source={require('../assets/sleepgraph1.png')}
        />
      </View>
      <Image
        style={styles.progressSectionIcon}
        resizeMode='cover'
        source={require('../assets/progresssection.png')}
      />
      <View style={styles.countercardView}>
        <View style={styles.bgView}></View>
        <Image
          style={styles.frameIcon}
          resizeMode='cover'
          source={require('../assets/frame-1.png')}
        />
        <View style={styles.workoutTextView}>
          <Text style={styles.totalStepCount}>Total Step Count</Text>
          <Text style={styles.text}>{StepCount}</Text>
        </View>
        <Pressable
          onPress={() => {
            console.log('Step Counter Start Button Clicked');
            subscribe();
          }}
          style={styles.buttonViewmorePressable}>
          <View style={styles.buttonBgView}>
            <View style={styles.rectangleView2} />
          </View>
          <View style={styles.buttonTextView}>
            <Text style={styles.startText}>Start</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.groupView}>
        <View style={styles.scheduleBgView}></View>
        <View style={styles.workoutScheduleTextView}>
          <Text style={styles.dailySleepSchedule}>
            <Text
              style={
                styles.isPedometerAvailable
              }>{`Is Pedometer available on this `}</Text>
            <Text style={styles.deviceText}>device</Text>
          </Text>
        </View>
        <View style={styles.buttonCheckView}>
          <View style={styles.buttonBgView1}>
            <View style={styles.rectangleView3} />
          </View>
          <View style={styles.buttonTextView1}>
            <Text style={styles.yesNo}>{PedomaterAvailability}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  backNavsIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  detailNavsIcon: {
    position: 'absolute',
    height: '100%',
    width: '9.98%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '90.02%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  stepCounterText: {
    position: 'absolute',
    top: 4,
    left: 130,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  headerView: {
    position: 'absolute',
    top: 40,
    left: 31,
    width: 367.69,
    height: 36.73,
  },
  rectangleView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 20,
    backgroundColor: '#FFAFC5',
    shadowColor: 'rgba(29, 22, 23, 0.07)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  caloriesBgView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  caloriesText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  kCalText: {
    position: 'absolute',
    top: '56.52%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
  caloriesTextView: {
    position: 'absolute',
    height: '27.13%',
    width: '34.83%',
    top: '16%',
    right: '51.84%',
    bottom: '56.87%',
    left: '13.33%',
  },
  caloriesPieIcon: {
    position: 'absolute',
    height: '56.72%',
    width: '56.72%',
    top: '48.59%',
    right: '21.64%',
    bottom: '-5.31%',
    left: '21.64%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  statusView: {
    position: 'absolute',
    top: 377,
    left: 218,
    width: 165,
    height: 165,
  },
  rectangleView1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 20,
    backgroundColor: '#E6C7FF',
    shadowColor: 'rgba(29, 22, 23, 0.07)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
  },
  sleepStatusBgView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  sleepText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  h20mText: {
    position: 'absolute',
    top: '56.52%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
  sleepTextView: {
    position: 'absolute',
    height: '27.13%',
    width: '25.47%',
    top: '13.33%',
    right: '64.19%',
    bottom: '59.54%',
    left: '13.33%',
  },
  sleepGraphIcon: {
    position: 'absolute',
    height: '52%',
    width: '73.33%',
    top: '46%',
    right: '13.33%',
    bottom: '2%',
    left: '13.33%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  targetView: {
    position: 'absolute',
    top: 377,
    left: 31,
    width: 165,
    height: 165,
  },
  progressSectionIcon: {
    position: 'absolute',
    top: 596,
    left: 16,
    width: 380,
    height: 320.32,
  },
  rectangleLinearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 367.5,
    height: 154,
    opacity: 0.2,
    backgroundColor: 'transparent',
  },
  bgView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 367.5,
    height: 154,
  },
  frameIcon: {
    position: 'absolute',
    top: 23.33,
    left: 236.83,
    width: 107.33,
    height: 107.33,
  },
  totalStepCount: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 143.5,
    height: 24.5,
  },
  text: {
    position: 'absolute',
    top: 30.33,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 138.83,
    height: 21,
  },
  workoutTextView: {
    position: 'absolute',
    top: 23.33,
    left: 23.33,
    width: 143.5,
    height: 51.33,
  },
  rectangleView2: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 109.67,
    height: 40.83,
  },
  buttonBgView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 109.67,
    height: 40.83,
  },
  startText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '500',
    fontFamily: 'Poppins',
    textAlign: 'center',
    width: 63,
    height: 17.5,
  },
  buttonTextView: {
    position: 'absolute',
    top: 11.67,
    left: 23.33,
    width: 63,
    height: 17.5,
  },
  buttonViewmorePressable: {
    position: 'absolute',
    top: 92.17,
    left: 23.33,
    width: 109.67,
    height: 40.83,
  },
  countercardView: {
    position: 'absolute',
    top: 196,
    left: 31,
    width: 350.5,
    height: 154,
    backgroundColor: '#BCCFFF',
    borderRadius: 20,
  },
  rectangleLinearGradient1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 16,
    opacity: 0.2,
    backgroundColor: 'transparent',
  },
  scheduleBgView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  isPedometerAvailable: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  deviceText: {
    margin: 0,
  },
  dailySleepSchedule: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  workoutScheduleTextView: {
    position: 'absolute',
    height: '63.64%',
    width: '59.45%',
    top: '19.46%',
    right: '34.2%',
    bottom: '16.91%',
    left: '6.35%',
  },
  rectangleView3: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 50,
    backgroundColor: '#92a3fd',
  },
  buttonBgView1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  yesNo: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
  },
  buttonTextView1: {
    position: 'absolute',
    height: '55.52%',
    width: '62.19%',
    top: '20.94%',
    right: '19.56%',
    bottom: '23.54%',
    left: '18.25%',
  },
  buttonCheckView: {
    position: 'absolute',
    height: '49.12%',
    width: '25.59%',
    top: '26.32%',
    right: '6.35%',
    bottom: '24.56%',
    left: '70.06%',
  },
  groupView: {
    position: 'absolute',
    height: '9.08%',
    width: '84.88%',
    top: '11.27%',
    right: '7.44%',
    bottom: '81.65%',
    left: '7.67%',
    backgroundColor: '#BCCFFF',
    borderRadius: 20,
  },
  stepCounterSafeAreaView: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
  },
});
