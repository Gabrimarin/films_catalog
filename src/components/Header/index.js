import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withTheme} from 'styled-components';
Icon.loadFont();

import {Container, Title, AuxContainer} from './styles';

const Header = ({
  title,
  onBackPress,
  onAccessibilityPress,
  theme,
  showFavourites,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <AuxContainer flex={1}>
        {onBackPress && (
          <Icon
            name="arrow-back"
            size={30 + theme.delta}
            color={theme.theme.SECONDARY_TEXT_COLOR}
            onPress={onBackPress}
            accessibilityComponentType="button"
            accessibilityLabel="go back"
            accessibilityHint="Return to previous screen"
          />
        )}
        {showFavourites && (
          <Icon
            name="star"
            size={30 + theme.delta}
            color={theme.theme.SECONDARY_TEXT_COLOR}
            onPress={() => navigation.navigate('Favourites')}
            accessibilityComponentType="button"
            accessibilityLabel="go back"
            accessibilityHint="Return to previous screen"
          />
        )}
      </AuxContainer>
      <AuxContainer flex={4}>
        <Title>{title}</Title>
      </AuxContainer>
      <AuxContainer flex={1}>
        {onAccessibilityPress && (
          <Icon
            name="accessibility"
            size={30 + theme.delta}
            color={theme.theme.SECONDARY_TEXT_COLOR}
            onPress={onAccessibilityPress}
            accessibilityComponentType="button"
            accessibilityLabel="Accessibility options"
            accessibilityHint="Open a box with accessibility options"
          />
        )}
      </AuxContainer>
    </Container>
  );
};

export default withTheme(Header);
