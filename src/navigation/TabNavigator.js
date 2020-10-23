import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favourites, GenreMovies, Genres, MovieView, SearchPage} from '../pages';
import {withTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const GenreStack = createStackNavigator();

function GenreStackScreen() {
  return (
    <GenreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GenreStack.Screen name="GenresList" component={Genres} />
      <GenreStack.Screen name="GenreMovies" component={GenreMovies} />
      <GenreStack.Screen name="MovieView" component={MovieView} />
    </GenreStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
      <SearchStack.Screen name="MovieView" component={MovieView} />
    </SearchStack.Navigator>
  );
}

const FavouriteStack = createStackNavigator();

function FavouriteStackScreen() {
  return (
    <FavouriteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FavouriteStack.Screen name="Favourites" component={Favourites} />
      <FavouriteStack.Screen name="MovieView" component={MovieView} />
    </FavouriteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator({theme}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: theme.theme.SECONDARY_BACKGROUND_COLOR,
        inactiveBackgroundColor: theme.theme.PRIMARY_BACKGROUND_COLOR,
        activeTintColor: theme.theme.SECONDARY_TEXT_COLOR,
        inactiveTintColor: theme.theme.PRIMARY_TEXT_COLOR,
      }}>
      <Tab.Screen
        name="GenresTab"
        component={GenreStackScreen}
        options={{
          title: 'Genres',
          tabBarIcon: ({focused, color, size}) => (
            <Icon color={color} size={size} name="list" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStackScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <Icon color={color} size={size} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteTab"
        component={FavouriteStackScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: ({focused, color, size}) => (
            <Icon color={color} size={size} name="star" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default withTheme(TabNavigator);
