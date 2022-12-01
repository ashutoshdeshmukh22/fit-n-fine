import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';

import Headers from '../components/Headers';
import Workouts from '../components/Workouts';
import Challenges from '../components/Challenges';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: 'Full Body Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url: 'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg',
  },
  {
    id: 2,
    name: 'Begineer Abs Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/best-ways-to-get-abs-1296x728-feature.jpg',
  },
  {
    id: 3,
    name: 'Begineer Arm Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url: 'https://www.themanual.com/wp-content/uploads/sites/9/2021/02/best-arm-workouts-for-men-2021.jpg?p=1',
  },
  {
    id: 4,
    name: 'Begineer Chest Challenge',
    days: 30,
    workouts: 35,
    level: 'EASY',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4syGQNEZT9Q0BXKxHq7YhQ5r49rdYRL1-Q&usqp=CAU',
  },
];

const HomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Headers />
      <ScrollView>
        {/* Workout Card */}
        <View>
          <Pressable
            onPress={() => navigation.navigate('WorkOutList')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
              marginTop: 20,
            }}>
            <Image
              style={{
                width: '95%',
                height: 140,
                borderRadius: 7,
                opacity: 0.5,
                backgroundColor: '#000000',
              }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VMUM69IwjvvH614g_yizbw37YoN7SBRdGw&usqp=CAU',
              }}
            />
            <Text
              onPress={() => navigation.navigate('WorkOutList')}
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                left: 20,
                top: 20,
              }}>
              Home Workout
            </Text>
            <MaterialCommunityIcons
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 15,
                left: 20,
              }}
              name='lightning-bolt'
              size={24}
              color='black'
            />
          </Pressable>
        </View>
        {/* Diet Card */}
        <View>
          <Pressable
            onPress={() => navigation.navigate('DietPlan', {})}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Image
              style={{
                width: '95%',
                height: 140,
                borderRadius: 7,
                opacity: 0.5,
                backgroundColor: '#000000',
              }}
              source={{
                uri: 'https://static.toiimg.com/photo/msid-70769358/70769358.jpg',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                left: 20,
                top: 20,
              }}>
              Diet Plan
            </Text>
            <MaterialCommunityIcons
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 15,
                left: 20,
              }}
              name='lightning-bolt'
              size={24}
              color='black'
            />
          </Pressable>
        </View>
        {/* Step Counter */}
        <View>
          <Pressable
            onPress={() => navigation.navigate('StepCounter', {})}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Image
              style={{
                width: '95%',
                height: 140,
                borderRadius: 7,
                opacity: 0.5,
                backgroundColor: '#000000',
              }}
              source={{
                uri: 'https://www.reviewgeek.com/p/uploads/2022/01/b145fc95.png?width=400',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                left: 20,
                top: 20,
              }}>
              Step Counter
            </Text>
            <MaterialCommunityIcons
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 15,
                left: 20,
              }}
              name='lightning-bolt'
              size={24}
              color='black'
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
