/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Persistor, Store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import ContrastThemeProvider from './src/styles/ThemeProvider';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ContrastThemeProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ContrastThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
