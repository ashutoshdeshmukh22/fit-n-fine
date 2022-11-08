import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import WorkOutItem from './WorkOutItem';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    url: 'https://www.kingofthegym.com/wp-content/uploads/2012/11/benefits-of-deadlifting.jpg',
    title: 'Dead lifts',
    time: '00:30',
    times: '10 x',
  },
];

const Workouts = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Workouts</Text>
        <View style={styles.workoutsRight}>
          <Text
            onPress={() => navigation.navigate('WorkOutList')}
            style={{
              color: '#FC427B',
              fontWeight: 'bold',
              fontSize: 15,
              marginRight: 10,
            }}>
            See all
          </Text>
        </View>
      </View>
      <React.Fragment>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return <FitnessCards />;
          }}
        />
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentWorkout: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  workoutsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Workouts;
