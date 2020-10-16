import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// import { Container } from './styles';

const ScreenContainer = ({children}) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{padding: 10}}>{children}</SafeAreaView>
    </>
  );
};

export default ScreenContainer;