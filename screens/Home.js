import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.homeSafeAreaView}>
      <View style={styles.headerView}>
        <View style={styles.titleHomeView}>
          <Text style={styles.welcomeBackText}>Welcome Back,</Text>
          <Text style={styles.ashutoshDeshmukhText}>Ashutosh Deshmukh</Text>
        </View>
        <Image
          style={styles.notificationIcon}
          resizeMode='cover'
          source={require('../assets/notification.png')}
        />
      </View>
      <View style={styles.activityStatusView}>
        <Text style={styles.activitiesText}>Activities</Text>
      </View>
      <View style={styles.component1View}>
        <View style={styles.onboardDescriptionView}>
          <Text style={styles.youAreAllSetNowLetsRea}>
            You are all set now, let’s reach your goals together with us
          </Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode='cover'
          source={require('../assets/group.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WorkOutList');
            console.log('WorkOuts Clicked');
          }}
          style={styles.statusView}>
          <View style={styles.heartRateBgView}>
            <View style={styles.rectangleView} />
          </View>
          <View style={styles.heartRateTextView}>
            <Text style={styles.heartRateText}>Workouts</Text>
            <Text style={styles.bPMText}>78 BPM</Text>
          </View>
          <Image
            style={styles.heartRateGraphIcon}
            resizeMode='cover'
            source={require('../assets/heartrategraph.png')}
          />
          <View style={styles.heartRateModalView}>
            <View style={styles.heartRateModalBgView}>
              <Image
                style={styles.polygonIcon}
                resizeMode='cover'
                source={require('../assets/polygon-1.png')}
              />
              <View style={styles.rectangleView1} />
            </View>
            <View style={styles.heartRateTextView1}>
              <Text style={styles.minsAgoText}>3mins ago</Text>
            </View>
            <Image
              style={styles.heartRateModalDotIcon}
              resizeMode='cover'
              source={require('../assets/heartratemodaldot.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.ChatBot}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatBot');
            console.log('ChatBot Clicked');
          }}
          style={styles.statusView}>
          <View style={styles.heartRateTextView}>
            <Text style={styles.heartRateText}>Chat</Text>
          </View>
          <View style={styles.onboardDescriptionView}>
            <Text style={styles.youAreAllSetNowLetsRea}>
              You Can Ask Anything
            </Text>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode='cover'
            source={require('../assets/chatbot.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StepCounter', {});
          console.log('StepCounter Clicked');
        }}
        style={styles.groupView}>
        <View style={styles.statusView1}>
          <View style={styles.sleepStatusBgView}>
            <View style={styles.rectangleView2} />
          </View>
          <View style={styles.sleepTextView}>
            <Text style={styles.sleepText}>Step Counter</Text>
            <Text style={styles.h20mText}>
              <Text style={styles.text}>8</Text>
              <Text style={styles.hText}>h</Text>
              <Text style={styles.text1}> 20</Text>
              <Text style={styles.mText}>m</Text>
            </Text>
          </View>
          <Image
            style={styles.sleepGraphIcon}
            resizeMode='cover'
            source={require('../assets/sleepgraph.png')}
          />
        </View>
        <Image
          style={styles.runner2Icon}
          resizeMode='cover'
          source={require('../assets/runner-2.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DietPlan', {});
          console.log('DietPlan Clicked');
        }}
        style={styles.groupView1}>
        <View style={styles.statusView2}>
          <View style={styles.caloriesBgView}>
            <View style={styles.rectangleView3} />
          </View>
          <View style={styles.caloriesTextView}>
            <Text style={styles.caloriesText}>Diet Plan</Text>
            <Text style={styles.kCalText}>760 kCal</Text>
          </View>
          <View style={styles.caloriesPieView}>
            <Image
              style={styles.caloriesPieEllipseIcon}
              resizeMode='cover'
              source={require('../assets/caloriespieellipse.png')}
            />
            <View style={styles.caloriesPieTextView}>
              <Image
                style={styles.ellipseIcon}
                resizeMode='cover'
                source={require('../assets/ellipse-112.png')}
              />
              <Text style={styles.kCalLeftText}>230kCal left</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode='cover'
          source={require('../assets/vector.png')}
        />
      </TouchableOpacity>
      <View style={styles.bannerView}>
        <View style={styles.bgView}>
          <View style={styles.rectangleView4} />
        </View>
        <View style={styles.groupView2}>
          <View style={styles.textView}>
            <Text style={styles.todayTargetText}>Today Target</Text>
          </View>
          <Image
            style={styles.buttonIcon}
            resizeMode='cover'
            source={require('../assets/button.png')}
          />
        </View>
        <View style={styles.target1}>
          <View style={styles.bgView1}>
            <View style={styles.rectangleView5} />
          </View>
          <View style={styles.targetContentView}>
            <View style={styles.textView1}>
              <Text style={styles.lText}>8L</Text>
              <Text style={styles.waterIntakeText}>Water Intake</Text>
            </View>
            <Image
              style={styles.vectorIcon1}
              resizeMode='cover'
              source={require('../assets/vector1.png')}
            />
            <Image
              style={styles.glass1Icon}
              resizeMode='cover'
              source={require('../assets/glass-1.png')}
            />
          </View>
        </View>
        <View style={styles.target2}>
          <View style={styles.bgView2}>
            <View style={styles.rectangleView6} />
          </View>
          <View style={styles.targetContentView1}>
            <View style={styles.textView2}>
              <Text style={styles.text2}>2400</Text>
              <Text style={styles.footStepsText}>Foot Steps</Text>
            </View>
            <Image
              style={styles.vectorIcon2}
              resizeMode='cover'
              source={require('../assets/vector2.png')}
            />
            <Image
              style={styles.footprint1Icon}
              resizeMode='cover'
              source={require('../assets/footprint-1.png')}
            />
            <Image
              style={styles.boots1Icon}
              resizeMode='cover'
              source={require('../assets/boots-1.png')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeBackText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#ada4a5',
    textAlign: 'left',
    width: 95.65,
    height: 18.71,
  },
  ashutoshDeshmukhText: {
    position: 'absolute',
    top: 23.91,
    left: 0,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 223.54,
    height: 31.19,
  },
  titleHomeView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 223.54,
    height: 55.1,
  },
  notificationIcon: {
    position: 'absolute',
    top: -17,
    left: 263,
    width: 115,
    height: 121.59,
  },
  headerView: {
    position: 'absolute',
    top: 50,
    left: 32,
    width: 364.59,
    height: 55.1,
  },
  activitiesText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  activityStatusView: {
    position: 'absolute',
    top: 320,
    left: 32,
    width: 76,
    height: 24,
  },
  youAreAllSetNowLetsRea: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    left: '0%',
    fontSize: 11,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#303030',
    textAlign: 'left',
  },
  onboardDescriptionView: {
    position: 'absolute',
    height: '36%',
    width: '50.16%',
    top: '36%',
    right: '43.49%',
    bottom: '28%',
    left: '6.35%',
  },
  groupIcon: {
    position: 'absolute',
    height: '71.96%',
    width: '31.29%',
    top: '12%',
    right: '10.93%',
    bottom: '16.04%',
    left: '57.78%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
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
    shadowColor: 'rgba(149, 173, 254, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    opacity: 0.2,
  },
  heartRateBgView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  heartRateText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  bPMText: {
    position: 'absolute',
    top: '127.78%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'left',
    display: 'none',
  },
  heartRateTextView: {
    position: 'absolute',
    height: '12%',
    width: '21.27%',
    top: '13.33%',
    right: '72.38%',
    bottom: '74.67%',
    left: '6.35%',
  },
  heartRateGraphIcon: {
    position: 'absolute',
    height: '41%',
    width: '100%',
    top: '40%',
    right: '0%',
    bottom: '19%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
  },
  polygonIcon: {
    position: 'absolute',
    height: '33.33%',
    width: '13.7%',
    top: '100%',
    right: '28.77%',
    bottom: '-33.33%',
    left: '57.53%',
    borderRadius: 1,
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  rectangleView1: {
    position: 'absolute',
    height: '83.33%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '16.67%',
    left: '0%',
    borderRadius: 50,
    shadowColor: 'rgba(197, 139, 242, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  heartRateModalBgView: {
    position: 'absolute',
    height: '75%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '25%',
    left: '0%',
  },
  minsAgoText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 10,
    lineHeight: 15,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
  },
  heartRateTextView1: {
    position: 'absolute',
    height: '37.5%',
    width: '72.6%',
    top: '12.5%',
    right: '13.7%',
    bottom: '50%',
    left: '13.7%',
  },
  heartRateModalDotIcon: {
    position: 'absolute',
    height: '12.5%',
    width: '6.85%',
    top: '87.5%',
    right: '46.58%',
    bottom: '0%',
    left: '46.58%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  heartRateModalView: {
    position: 'absolute',
    height: '26.67%',
    width: '23.17%',
    top: '22.67%',
    right: '26.35%',
    bottom: '50.67%',
    left: '50.48%',
    display: 'none',
  },
  statusView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  component1View: {
    position: 'absolute',
    top: 370,
    left: 30,
    borderRadius: 20,
    backgroundColor: '#e8eeff',
    width: 350,
    height: 150,
  },
  ChatBot: {
    position: 'absolute',
    top: 730,
    left: 30,
    borderRadius: 20,
    backgroundColor: '#f5baba',
    width: 350,
    height: 150,
  },
  rectangleView2: {
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
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
  },
  hText: {
    fontSize: 10,
  },
  text1: {
    fontSize: 14,
  },
  mText: {
    fontSize: 10,
  },
  h20mText: {
    position: 'absolute',
    top: '127.78%',
    left: '0%',
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'left',
    display: 'none',
  },
  sleepTextView: {
    position: 'absolute',
    height: '12%',
    width: '62%',
    top: '13.33%',
    right: '24.67%',
    bottom: '74.67%',
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
    display: 'none',
  },
  statusView1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 165,
    height: 165,
  },
  runner2Icon: {
    position: 'absolute',
    height: '50.67%',
    width: '42.09%',
    top: '40%',
    right: '29.25%',
    bottom: '9.33%',
    left: '28.67%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupView: {
    position: 'absolute',
    top: 548,
    left: 31,
    width: 172,
    height: 172,
  },
  rectangleView3: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 20,
    backgroundColor: '#FFD48A',
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
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  kCalText: {
    position: 'absolute',
    top: '127.78%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'left',
    display: 'none',
  },
  caloriesTextView: {
    position: 'absolute',
    height: '12%',
    width: '41.33%',
    top: '16%',
    right: '45.33%',
    bottom: '72%',
    left: '13.33%',
  },
  caloriesPieEllipseIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  ellipseIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  kCalLeftText: {
    position: 'absolute',
    width: '75%',
    top: '25%',
    left: '12.5%',
    fontSize: 8,
    lineHeight: 12,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'center',
  },
  caloriesPieTextView: {
    position: 'absolute',
    height: '72.73%',
    width: '72.73%',
    top: '13.64%',
    right: '13.64%',
    bottom: '13.64%',
    left: '13.64%',
  },
  caloriesPieView: {
    position: 'absolute',
    height: '44%',
    width: '44%',
    top: '49.33%',
    right: '28%',
    bottom: '6.67%',
    left: '28%',
    display: 'none',
  },
  statusView2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 165,
    height: 165,
  },
  vectorIcon: {
    position: 'absolute',
    height: '45.18%',
    width: '45.33%',
    top: '41.33%',
    right: '27.33%',
    bottom: '13.49%',
    left: '27.33%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  groupView1: {
    position: 'absolute',
    top: 548,
    left: 215,
    width: 172.49,
    height: 172.49,
  },
  rectangleView4: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 22,
    opacity: 0.2,
  },
  bgView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    display: 'none',
  },
  todayTargetText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  textView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  buttonIcon: {
    position: 'absolute',
    height: '114.29%',
    width: '25.26%',
    top: '95.24%',
    right: '-210.53%',
    bottom: '-109.52%',
    left: '285.26%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
  },
  groupView2: {
    position: 'absolute',
    height: '15.11%',
    width: '30.16%',
    top: '15.83%',
    right: '63.49%',
    bottom: '69.06%',
    left: '6.35%',
  },
  rectangleView5: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  bgView1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  lText: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
  waterIntakeText: {
    position: 'absolute',
    top: '51.22%',
    left: '0%',
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
  },
  textView1: {
    position: 'absolute',
    height: '100%',
    width: '70%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '30%',
  },
  vectorIcon1: {
    position: 'absolute',
    height: '78.05%',
    width: '29.09%',
    top: '180.49%',
    right: '48.18%',
    bottom: '-158.54%',
    left: '22.73%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
  },
  glass1Icon: {
    position: 'absolute',
    height: '82.93%',
    width: '22.73%',
    top: '9.76%',
    right: '77.27%',
    bottom: '7.32%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  targetContentView: {
    position: 'absolute',
    height: '68.33%',
    width: '84.62%',
    top: '16.67%',
    right: '8.46%',
    bottom: '15%',
    left: '6.92%',
  },
  target1: {
    position: 'absolute',
    height: '43.17%',
    width: '41.27%',
    top: '42.45%',
    right: '52.38%',
    bottom: '14.39%',
    left: '6.35%',
  },
  rectangleView6: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  bgView2: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  text2: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    textAlign: 'left',
  },
  footStepsText: {
    position: 'absolute',
    top: '51.22%',
    left: '0%',
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
  },
  textView2: {
    position: 'absolute',
    height: '100%',
    width: '64.95%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '35.05%',
  },
  vectorIcon2: {
    position: 'absolute',
    height: '78.05%',
    width: '32.99%',
    top: '180.49%',
    right: '-108.25%',
    bottom: '-158.54%',
    left: '175.26%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
  },
  footprint1Icon: {
    position: 'absolute',
    height: '68.29%',
    width: '28.87%',
    top: '185.37%',
    right: '-105.15%',
    bottom: '-153.66%',
    left: '176.29%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
  },
  boots1Icon: {
    position: 'absolute',
    height: '63.41%',
    width: '26.8%',
    top: '19.51%',
    right: '73.2%',
    bottom: '17.07%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  targetContentView1: {
    position: 'absolute',
    height: '68.33%',
    width: '74.62%',
    top: '16.67%',
    right: '19.23%',
    bottom: '15%',
    left: '6.15%',
  },
  target2: {
    position: 'absolute',
    height: '43.17%',
    width: '41.27%',
    top: '42.45%',
    right: '6.35%',
    bottom: '14.39%',
    left: '52.38%',
  },
  bannerView: {
    position: 'absolute',
    top: 130,
    left: 31,
    borderRadius: 20,
    backgroundColor: '#b2c1ff',
    width: 350,
    height: 163,
  },
  homeSafeAreaView: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default Home;
