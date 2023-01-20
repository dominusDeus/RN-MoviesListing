import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {HomeScreen} from '../src/screens/home/HomeScreen';
import {DetailsScreen} from '../src/screens/details/DetailsScreen';
import {Movie} from '../model/movieDB';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {flex: 1},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
