/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {CategoryList, SearchBar} from './src/components';
import MainStack from './src/navigation/MainStack';
const App = () => {
  return (
    <NavigationContainer>
      {/* <>

          {/* <MovieList />
          <SearchBar /> */}
          <MainStack />
        {/* </SafeAreaView>
      </> */}
    </NavigationContainer>
  );
};

export default App;
