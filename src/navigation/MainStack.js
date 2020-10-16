import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieList, CategoryList} from '../components';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="MovieList" component={MovieList} />
    </Stack.Navigator>
  );
};

export default MainStack;
