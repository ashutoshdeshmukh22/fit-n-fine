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
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FitnessItems } from '../Context';
import FitnessCards from '../components/FitnessCards';

const WorkOutList = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#FFF',
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          padding: 10,
          height: '100%',
          width: '100%',
        }}>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
              }}>
              {workout}
            </Text>
            <Text style={{ color: 'black', fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
              }}>
              {calories}
            </Text>
            <Text style={{ color: 'black', fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
              }}>
              {minutes}
            </Text>
            <Text style={{ color: 'black', fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View> */}

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.headerText}>
            Home <Text style={styles.pinkText}>Workout</Text>
          </Text>
          <Image
            style={{
              width: '100%',
              height: 200,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2017/01/12/21/14/sports-1975689__340.png',
            }}
          />
        </View>
        <ScrollView style={{ marginTop: 40 }}>
          <FitnessCards />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WorkOutList;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  pinkText: {
    color: '#FC427B',
  },
});
