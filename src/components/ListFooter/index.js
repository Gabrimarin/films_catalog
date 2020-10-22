import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {withTheme} from 'styled-components';
const ListFooter = ({loading, theme}) => {
  return (
    <View accessible accessibilityLabel={'loading more films'}>
      <ActivityIndicator
        animating={loading}
        color={theme.theme.PRIMARY_TEXT_COLOR}
        size={30}
      />
    </View>
  );
};

export default withTheme(ListFooter);
