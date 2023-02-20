import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import WorkOutList from './screens/workoutlist';
import DietPlan from './screens/dietPlan';
import ChatBot from './screens/ChatBot';
import WeightGain from './screens/WeightGain';
import WeightLoss from './screens/WeightLoss';
import StepCounter from './screens/stepCounter';
import WelcomeScreen2 from './screens/WelcomeScreen2';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import RegisterPage from './screens/RegisterPage';
import SuccessRegistration from './screens/SuccessRegistration';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='WelcomeScreen2'
          component={WelcomeScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Onboarding1'
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Onboarding2'
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Onboarding3'
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='RegisterPage'
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SuccessRegistration'
          component={SuccessRegistration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
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
          name='WeightLoss'
          component={WeightLoss}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WeightGain'
          component={WeightGain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='StepCounter'
          component={StepCounter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ChatBot'
          component={ChatBot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
