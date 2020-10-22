import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {withTheme} from 'styled-components';

import {Button, Title, Image} from './styles';
const CategoryListItem = ({title, imageSrc, onPress, theme}) => {
  return (
    <Image source={{uri: imageSrc}} accessibilityIgnoresInvertColors>
      <LinearGradient
        colors={[
          theme.theme.SECONDARY_TEXT_BACKGROUND_COLOR + '00',
          // theme.SECONDARY_BACKGROUND_COLOR + 'aa',
          theme.theme.SECONDARY_TEXT_BACKGROUND_COLOR + 'ff',
        ]}>
        <Button
          onPress={onPress}
          accessibilityLabel={title}
          accessibilityHint={`tap for a list of ${title} movies`}
          accesibilityRole={'button'}>
          <Title>{title}</Title>
        </Button>
      </LinearGradient>
    </Image>
  );
};

export default withTheme(CategoryListItem);
