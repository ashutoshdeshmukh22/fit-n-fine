import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import WorkOutList from './screens/workoutlist';
import DietPlan from './screens/dietPlan';
import StepCounter from './screens/stepCounter';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WorkOutList'
          component={WorkOutList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Workout'
          component={WorkoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Fit'
          component={FitScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Rest'
          component={RestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DietPlan'
          component={DietPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='StepCounter'
          component={StepCounter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
