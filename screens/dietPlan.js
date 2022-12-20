import * as React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DietPlan = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.dietPlanScreen}>
      <View style={styles.header}>
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
        <Text style={styles.dietPlan}>Diet Plan</Text>
      </View>
      <View style={styles.action}>
        <View style={styles.scheduleBg}>
          <LinearGradient
            style={styles.rectangleLinearGradient}
            locations={[0, 1]}
            colors={['#92a3fd', '#9dceff']}
          />
        </View>
        <View style={styles.workoutScheduleText}>
          <Text style={styles.dailyMealSchedule}>Daily Meal Schedule</Text>
        </View>
        <View style={styles.buttonCheck}>
          <View style={styles.buttonBg}>
            <LinearGradient
              style={styles.rectangleLinearGradient1}
              locations={[0, 1]}
              colors={['#92a3fd', '#9dceff']}
            />
          </View>
          <View style={styles.buttonText}>
            <Text style={styles.check}>Check</Text>
          </View>
        </View>
      </View>
      <View style={styles.todayMealsSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WeightLoss', {});
            console.log('WeightLoss Clicked');
          }}>
          <View style={styles.mealsCard}>
            <View style={styles.bg}>
              <View style={styles.rectangleView} />
            </View>
            <View style={styles.vector}>
              <ImageBackground
                style={styles.image1Icon}
                resizeMode='cover'
                source={require('../assets/image1.png')}
              />
            </View>
            <View style={styles.text}>
              <Text
                style={styles.weightLoss}
                onPress={() => {
                  navigation.navigate('WeightLoss', {});
                  console.log('WeightLoss Clicked');
                }}>
                Weight Loss
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WeightGain', {});
            console.log('WeightGain Clicked');
          }}>
          <View style={styles.mealsCard1}>
            <View style={styles.bg1}>
              <View style={styles.rectangleView1} />
            </View>
            <View style={styles.vector1}>
              <ImageBackground
                style={styles.image1Icon1}
                resizeMode='cover'
                source={require('../assets/image11.png')}
              />
            </View>
            <View style={styles.text1}>
              <Text
                style={styles.weightGain}
                onPress={() => {
                  navigation.navigate('WeightGain', {});
                  console.log('WeightGain Clicked');
                }}>
                Weight Gain
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.todayMeals}>
          <View style={styles.title}>
            <Text style={styles.chooseGoal}>Choose Goal</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DietPlan;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
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
  dietPlan: {
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
  header: {
    position: 'absolute',
    top: 40,
    left: 31,
    width: 350,
    height: 37,
  },
  rectangleLinearGradient: {
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
  scheduleBg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  dailyMealSchedule: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  workoutScheduleText: {
    position: 'absolute',
    height: '31.34%',
    width: '45.59%',
    top: '31.58%',
    right: '55.06%',
    bottom: '37.08%',
    left: '6.35%',
  },
  rectangleLinearGradient1: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  buttonBg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
  },
  check: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',
  },
  buttonText: {
    position: 'absolute',
    height: '54.69%',
    width: '47.83%',
    top: '17.86%',
    right: '30.11%',
    bottom: '27.45%',
    left: '22.06%',
  },
  buttonCheck: {
    position: 'absolute',
    height: '49.12%',
    width: '21.59%',
    top: '26.32%',
    right: '6.35%',
    bottom: '24.56%',
    left: '72.06%',
    display: 'none',
  },
  action: {
    position: 'absolute',
    top: 106,
    left: 31,
    width: 350,
    height: 67,
  },
  rectangleView: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: 'rgba(29, 22, 23, 0.07)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 368,
    height: 92,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 368,
    height: 92,
  },
  image1Icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 65,
    height: 65,
  },
  vector: {
    position: 'absolute',
    top: 13,
    left: 15,
    width: 65,
    height: 65,
  },
  weightLoss: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 138,
    height: 44,
  },
  text: {
    position: 'absolute',
    top: 34,
    left: 105,
    width: 138,
    height: 44,
  },
  mealsCard: {
    position: 'absolute',
    top: 48,
    left: 0,
    width: 368,
    height: 92,
  },
  rectangleView1: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: 'rgba(29, 22, 23, 0.07)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 368,
    height: 92,
  },
  bg1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 368,
    height: 92,
  },
  image1Icon1: {
    position: 'absolute',
    top: 0,
    left: 16,
    width: 53,
    height: 65,
  },
  vector1: {
    position: 'absolute',
    top: 13,
    left: 0,
    width: 53,
    height: 65,
  },
  weightGain: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 138,
    height: 44,
  },
  text1: {
    position: 'absolute',
    top: 34,
    left: 105,
    width: 138,
    height: 44,
  },
  mealsCard1: {
    position: 'absolute',
    top: 161,
    left: 4,
    width: 368,
    height: 92,
  },
  chooseGoal: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 120,
    height: 28,
  },
  title: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 28,
  },
  todayMeals: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 28,
  },
  todayMealsSection: {
    position: 'absolute',
    top: 205,
    left: 31,
    width: 372,
    height: 253,
  },
  blogs: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 149,
  },
  title1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 149,
    height: 24,
  },
  rectangleLinearGradient2: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 200,
    height: 239,
    opacity: 0.2,
    backgroundColor: 'transparent',
  },
  bg2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 239,
  },
  honeyPancake: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'center',
  },
  text2: {
    position: 'absolute',
    top: 125,
    left: 45,
    width: 110,
    height: 18,
  },
  vectorIcon: {
    position: 'absolute',
    top: 30,
    left: 42,
    width: 116,
    height: 80,
  },
  blogCard: {
    position: 'absolute',
    top: 43,
    left: 0,
    width: 200,
    height: 239,
  },
  rectangleLinearGradient3: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 200,
    height: 239,
    opacity: 0.2,
    backgroundColor: 'transparent',
  },
  bg3: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 239,
  },
  canaiBread: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    top: 125,
    left: 56,
    width: 89,
    height: 18,
  },
  rectangleLinearGradient4: {
    position: 'absolute',
    top: -10,
    left: -40,
    borderRadius: 99,
    width: 110,
    height: 38,
    display: 'none',
    backgroundColor: 'transparent',
  },
  button: {
    position: 'absolute',
    top: 191,
    left: 85,
    width: 0,
    height: 0,
  },
  vectorIcon1: {
    position: 'absolute',
    top: 30,
    left: 35,
    width: 131,
    height: 77,
  },
  blogCard1: {
    position: 'absolute',
    top: 43,
    left: 215,
    width: 200,
    height: 239,
  },
  recommendationCard: {
    position: 'absolute',
    top: 495,
    left: 34,
    width: '100%',
    height: 282,
    maxHeight: 282,
  },
  dietPlanScreen: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
  },
});
