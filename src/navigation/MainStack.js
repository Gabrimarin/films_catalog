import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Favourites, MovieView, Genres, GenreMovies} from '../pages';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Genres" component={Genres} />
        <Stack.Screen name="GenreMovies" component={GenreMovies} />
        <Stack.Screen name="MovieView" component={MovieView} />
        <Stack.Screen name="Favourites" component={Favourites} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
