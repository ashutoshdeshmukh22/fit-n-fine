import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useContext } from 'react';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';

import Headers from '../components/Headers';
import Workouts from '../components/Workouts';
import Challenges from '../components/Challenges';

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
  return (
    <View style={styles.screen}>
      <Headers />
      <Challenges data={data} />
      <Workouts />
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
