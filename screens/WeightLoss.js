import {
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const WeightLoss = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.weightLoss1}>
      <View style={styles.header}>
        <Text style={styles.weightLoss}>Weight Loss</Text>
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
          <Text style={styles.dailyMealSchedule}>
            Daily Meal Schedule for weight loss
          </Text>
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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.mealsSection}>
          <View style={styles.breakfastSection}>
            <View style={styles.breakfast1}>
              <Text style={styles.breakfast}>Breakfast</Text>
            </View>
            <View style={styles.breakfastCard}>
              <Image
                style={styles.bgIcon}
                resizeMode='cover'
                source={require('../assets/bg.png')}
              />
              <View style={styles.text}>
                <Text style={styles.honeyPancake}>Honey Pancake</Text>
                <Text style={styles.am}>07:00am</Text>
              </View>
            </View>
            <View style={styles.breakfastCard1}>
              <Image
                style={styles.bgIcon1}
                resizeMode='cover'
                source={require('../assets/bg1.png')}
              />
              <View style={styles.text1}>
                <Text style={styles.coffee}>Coffee</Text>
                <Text style={styles.am1}>07:30am</Text>
              </View>
            </View>
          </View>
          <View style={styles.lunchSection}>
            <View style={styles.lunch1}>
              <Text style={styles.lunch}>Lunch</Text>
            </View>
            <View style={styles.text2}>
              <Text style={styles.chickenSteak}>Chicken Steak</Text>
              <Text style={styles.pm}>01:00pm</Text>
            </View>
            <View style={styles.lunchCard}>
              <Image
                style={styles.bgIcon2}
                resizeMode='cover'
                source={require('../assets/bg2.png')}
              />
            </View>
            <View style={styles.lunchCard1}>
              <Image
                style={styles.bgIcon3}
                resizeMode='cover'
                source={require('../assets/bg3.png')}
              />
              <View style={styles.text3}>
                <Text style={styles.milk}>Milk</Text>
                <Text style={styles.pm1}>01:20pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.snacksSection}>
            <View style={styles.snacks1}>
              <Text style={styles.snacks}>Dinner</Text>
            </View>
            <View style={styles.snackCard}>
              <Image
                style={styles.bgIcon4}
                resizeMode='cover'
                source={require('../assets/bg4.png')}
              />
              <View style={styles.text4}>
                <Text style={styles.orange}>Orange</Text>
                <Text style={styles.pm2}>04:30pm</Text>
              </View>
              <View style={styles.iconArrow4}></View>
            </View>
            <View style={styles.snackCard1}>
              <Image
                style={styles.bgIcon5}
                resizeMode='cover'
                source={require('../assets/bg5.png')}
              />
              <View style={styles.text5}>
                <Text style={styles.applePie}>Apple Pie</Text>
                <Text style={styles.pm3}>04:40pm</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeightLoss;

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
  weightLoss: {
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
    width: '80.12%',
    top: '31.58%',
    right: '26.53%',
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
    top: 104,
    left: 31,
    width: 350,
    height: 67,
  },
  breakfast: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 91,
    height: 24,
  },
  breakfast1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 91,
    height: 24,
  },
  bgIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  honeyPancake: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 127,
    height: 21,
  },
  am: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 61,
    height: 18,
  },
  text: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 127,
    height: 42,
  },
  iconArrow: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 28,
    height: 24,
  },
  breakfastCard: {
    position: 'absolute',
    top: 39,
    left: 0,
    width: 364,
    height: 60,
  },
  bgIcon1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  coffee: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 54,
    height: 21,
  },
  am1: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 60,
    height: 18,
  },
  text1: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 60,
    height: 42,
  },
  iconArrow1: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 28,
    height: 24,
  },
  breakfastCard1: {
    position: 'absolute',
    top: 109,
    left: 0,
    width: 364,
    height: 60,
  },
  breakfastSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 364,
    height: 169,
  },
  lunch: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 57,
    height: 24,
  },
  lunch1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 57,
    height: 24,
  },
  chickenSteak: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 117,
    height: 21,
  },
  pm: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 58,
    height: 18,
  },
  text2: {
    position: 'absolute',
    top: 48,
    left: 81,
    width: 117,
    height: 42,
  },
  bgIcon2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  iconArrow2: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  lunchCard: {
    position: 'absolute',
    top: 39,
    left: 0,
    width: 364,
    height: 60,
  },
  bgIcon3: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  milk: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 32,
    height: 21,
  },
  pm1: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 57,
    height: 18,
  },
  text3: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 57,
    height: 42,
  },
  iconArrow3: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  lunchCard1: {
    position: 'absolute',
    top: 109,
    left: 0,
    width: 364,
    height: 60,
  },
  lunchSection: {
    position: 'absolute',
    top: 189,
    left: 0,
    width: 364,
    height: 169,
  },
  snacks: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 68,
    height: 24,
  },
  snacks1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 68,
    height: 24,
  },
  bgIcon4: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  orange: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 62,
    height: 21,
  },
  pm2: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 61,
    height: 18,
  },
  text4: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 62,
    height: 42,
  },
  iconlyLightArrowRightCir: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 28,
    height: 24,
  },
  iconArrow4: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  snackCard: {
    position: 'absolute',
    top: 39,
    left: 0,
    width: 364,
    height: 60,
  },
  bgIcon5: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  applePie: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 76,
    height: 21,
  },
  pm3: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 62,
    height: 18,
  },
  text5: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 76,
    height: 42,
  },
  iconArrow5: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  snackCard1: {
    position: 'absolute',
    top: 109,
    left: 0,
    width: 364,
    height: 60,
  },
  snacksSection: {
    position: 'absolute',
    top: 378,
    left: 0,
    width: 364,
    height: 169,
  },
  dinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 62,
    height: 24,
  },
  dinner1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 62,
    height: 24,
  },
  bgIcon6: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  salad: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 47,
    height: 21,
  },
  pm4: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 57,
    height: 18,
  },
  text6: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 57,
    height: 42,
  },
  iconArrow6: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  dinnerCard: {
    position: 'absolute',
    top: 39,
    left: 0,
    width: 364,
    height: 60,
  },
  bgIcon7: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 69,
    height: 60,
  },
  oatmeal: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
    width: 73,
    height: 21,
  },
  pm5: {
    position: 'absolute',
    top: 24,
    left: 0,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#7b6f72',
    textAlign: 'left',
    width: 58,
    height: 18,
  },
  text7: {
    position: 'absolute',
    top: 9,
    left: 81,
    width: 73,
    height: 42,
  },
  iconlyLightArrowRightCir1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 28,
    height: 24,
  },
  iconArrow7: {
    position: 'absolute',
    top: 18,
    left: 336,
    width: 22,
    height: 24,
  },
  dinnerCard1: {
    position: 'absolute',
    top: 109,
    left: 0,
    width: 364,
    height: 60,
  },
  dinnerSection: {
    position: 'absolute',
    top: 567,
    left: 0,
    width: 364,
    height: 169,
  },
  mealsSection: {
    position: 'absolute',
    top: 196,
    left: 33,
    width: 350,
    height: 736,
  },
  weightLoss1: {
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
