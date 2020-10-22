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
import MainStack from './src/navigation/MainStack';
import {Provider} from 'react-redux';
import {Persistor, Store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import ContrastThemeProvider from './src/styles/ThemeProvider';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ContrastThemeProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </ContrastThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
