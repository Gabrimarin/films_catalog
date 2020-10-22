import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {withTheme} from 'styled-components';

const LoadingComponent = ({theme}) => {
  return (
    <View
      accessible
      accessibilityLabel="loading page"
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size={60} color={theme.theme.PRIMARY_TEXT_COLOR} />
    </View>
  );
};

export default withTheme(LoadingComponent);
